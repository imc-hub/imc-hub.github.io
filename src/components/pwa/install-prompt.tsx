"use client";

import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only handle beforeinstallprompt on non-iOS browsers
    // iOS Chrome/Firefox/Edge don't support this event
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;

    if (isIOS) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (!sessionStorage.getItem("imc-pwa-dismissed")) {
        setVisible(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setVisible(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setVisible(false);
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("imc-pwa-dismissed", "true");
  }, []);

  if (!visible || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0b1d3a] border-t border-white/10">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">Install IMC App</p>
          <p className="text-xs text-white/60">Works offline, loads faster</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={handleDismiss}
            className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 hover:bg-white/10 hover:text-white"
          >
            Not now
          </button>
          <button
            onClick={handleInstall}
            className="rounded-lg bg-imc-teal px-4 py-2 text-xs font-semibold text-[#0b1d3a] hover:bg-imc-teal-dark"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
