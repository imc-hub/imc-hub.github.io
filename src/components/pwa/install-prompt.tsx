"use client";

import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;
    const isSafari =
      isIOS &&
      /Safari/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua) &&
      !/EdgiOS/.test(ua);
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;

    if (isIOS && isSafari && !isStandalone) {
      setIsIOS(true);
      const dismissed = sessionStorage.getItem("imc-pwa-ios-dismissed");
      if (!dismissed) {
        const timer = setTimeout(() => setShowIOSGuide(true), 3000);
        return () => clearTimeout(timer);
      }
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      const dismissed = sessionStorage.getItem("imc-pwa-dismissed");
      if (!dismissed) {
        setShowBanner(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setShowBanner(false);
      setDeferredPrompt(null);
      sessionStorage.setItem("imc-pwa-installed", "true");
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      sessionStorage.setItem("imc-pwa-installed", "true");
    }
    setShowBanner(false);
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    setShowBanner(false);
    sessionStorage.setItem("imc-pwa-dismissed", "true");
  }, []);

  const handleIOSDismiss = useCallback(() => {
    setShowIOSGuide(false);
    sessionStorage.setItem("imc-pwa-ios-dismissed", "true");
  }, []);

  // Android / Chrome install banner
  if (showBanner && deferredPrompt) {
    return (
      <div
        role="dialog"
        aria-label="Install IMC App"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(11, 29, 58, 0.98)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
          <img
            src="/icons/icon-192.png"
            alt=""
            width={48}
            height={48}
            className="hidden shrink-0 rounded-xl sm:block"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Install IMC App
            </p>
            <p className="truncate text-xs text-white/60">
              Get the full experience — works offline, loads faster
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={handleDismiss}
              className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss install prompt"
            >
              Not now
            </button>
            <button
              onClick={handleInstall}
              className="rounded-lg bg-[#0b1d3a] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#132a4a]"
              aria-label="Install IMC app"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    );
  }

  // iOS Safari guide
  if (showIOSGuide && isIOS) {
    return (
      <div
        role="dialog"
        aria-label="Add to Home Screen"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(11, 29, 58, 0.98)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <img
              src="/icons/icon-192.png"
              alt=""
              width={48}
              height={48}
              className="shrink-0 rounded-xl"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">
                Add IMC to Home Screen
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/60">
                Tap the{" "}
                <span className="inline-flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white">
                  Share
                </span>{" "}
                button, then{" "}
                <span className="font-medium text-white/80">
                  &quot;Add to Home Screen&quot;
                </span>
              </p>
            </div>
            <button
              onClick={handleIOSDismiss}
              className="shrink-0 rounded-lg p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
