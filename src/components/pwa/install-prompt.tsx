"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function InstallBanner({
  deferredPrompt,
  onInstall,
  onDismiss,
}: {
  deferredPrompt: BeforeInstallPromptEvent;
  onInstall: () => void;
  onDismiss: () => void;
}) {
  // Use a ref + inline styles to avoid any CSS framework issues on iOS
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force the banner to not affect document flow
    if (bannerRef.current) {
      const parent = bannerRef.current.parentElement;
      if (parent) {
        // Ensure no extra space is added
        parent.style.minHeight = "0";
        parent.style.height = "0";
        parent.style.overflow = "visible";
        parent.style.padding = "0";
        parent.style.margin = "0";
      }
    }
  }, []);

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Install IMC App"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        lineHeight: 0,
        fontSize: 0,
      }}
    >
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "#0b1d3a",
          lineHeight: "normal",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "12px 16px",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Install IMC App
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: "12px",
                color: "rgba(255,255,255,0.6)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Works offline, loads faster
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <button
              onClick={onDismiss}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.6)",
                fontSize: "12px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              Not now
            </button>
            <button
              onClick={onInstall}
              style={{
                backgroundColor: "#00b4d8",
                border: "none",
                color: "#0b1d3a",
                fontSize: "12px",
                fontWeight: 600,
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;

    // Chrome on iOS (CriOS) doesn't support beforeinstallprompt
    // Only listen on non-iOS or Android Chrome
    if (isIOS) {
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

  if (showBanner && deferredPrompt) {
    return (
      <InstallBanner
        deferredPrompt={deferredPrompt}
        onInstall={handleInstall}
        onDismiss={handleDismiss}
      />
    );
  }

  // Render an empty span that takes zero space — never null to avoid React reconciliation issues
  return <span style={{ display: "none" }} />;
}
