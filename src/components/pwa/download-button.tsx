"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Download,
  X,
  ChevronDown,
  Smartphone,
  Monitor,
  Apple,
} from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type Platform = "android" | "ios" | "windows" | "macos" | "linux";

interface PlatformInfo {
  id: Platform;
  label: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
}

const platforms: PlatformInfo[] = [
  {
    id: "android",
    label: "Android",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Chrome, Edge, or Samsung Internet",
    steps: [
      "Open this site in Chrome, Edge, or Samsung Internet",
      'Tap the menu (⋮) and select "Install app" or "Add to Home screen"',
      'Tap "Install" to confirm',
    ],
  },
  {
    id: "ios",
    label: "iOS",
    icon: <Apple className="h-5 w-5" />,
    description: "Safari required",
    steps: [
      "Open this site in Safari",
      "Tap the Share button (square with arrow)",
      'Scroll down and tap "Add to Home Screen"',
      'Tap "Add" to confirm',
    ],
  },
  {
    id: "windows",
    label: "Windows",
    icon: <Monitor className="h-5 w-5" />,
    description: "Chrome, Edge, or Brave",
    steps: [
      "Open this site in Chrome, Edge, or Brave",
      "Click the install icon (⊕) in the address bar",
      'Or click menu (⋮) → "Install IMC"',
      'Click "Install" in the dialog',
    ],
  },
  {
    id: "macos",
    label: "macOS",
    icon: <Monitor className="h-5 w-5" />,
    description: "Chrome, Edge, or Safari",
    steps: [
      "Open this site in Chrome or Edge",
      "Click the install icon (⊕) in the address bar",
      'Or click menu (⋮) → "Install IMC"',
      'Click "Install" — the app opens in its own window',
    ],
  },
  {
    id: "linux",
    label: "Linux",
    icon: <Monitor className="h-5 w-5" />,
    description: "Chrome, Edge, or Brave",
    steps: [
      "Open this site in Chrome, Edge, or Brave",
      "Click the install icon (⊕) in the address bar",
      'Or click menu (⋮) → "Install IMC"',
      'Click "Install" — the app appears in your app launcher',
    ],
  },
];

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (
    /iPad|iPhone|iPod/.test(ua) &&
    !(window as unknown as { MSStream?: unknown }).MSStream
  )
    return "ios";
  if (/Android/.test(ua)) return "android";
  if (/Win/.test(ua)) return "windows";
  if (/Mac/.test(ua)) return "macos";
  if (/Linux/.test(ua)) return "linux";
  return "windows";
}

// ── Module-level deferred prompt ──
// Captured once at page load, before any component mounts.
// This ensures the prompt is available even if the modal opens later.
let capturedPrompt: BeforeInstallPromptEvent | null = null;
let promptCaptured = false;

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    capturedPrompt = e as BeforeInstallPromptEvent;
    promptCaptured = true;
  });
}

function Modal({ onClose }: { onClose: () => void }) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(() =>
    detectPlatform(),
  );
  const [nativePrompt, setNativePrompt] =
    useState<BeforeInstallPromptEvent | null>(() => capturedPrompt);
  const [installState, setInstallState] = useState<
    "idle" | "installing" | "installed"
  >("idle");
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the prompt wasn't captured at module level, listen for it
    // (e.g. if the event fires after module load but before modal opens)
    if (promptCaptured) return;

    const handler = (e: Event) => {
      e.preventDefault();
      capturedPrompt = e as BeforeInstallPromptEvent;
      setNativePrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      setInstallState("installed");
      setNativePrompt(null);
      capturedPrompt = null;
    };
    window.addEventListener("appinstalled", handler);
    return () => window.removeEventListener("appinstalled", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleNativeInstall = useCallback(async () => {
    const prompt = nativePrompt ?? capturedPrompt;
    if (!prompt) return;
    setInstallState("installing");
    await prompt.prompt();
    await prompt.userChoice;
    setNativePrompt(null);
    capturedPrompt = null;
  }, [nativePrompt]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) onClose();
    },
    [onClose],
  );

  const selectedInfo = platforms.find((p) => p.id === selectedPlatform);
  const hasNativePrompt = !!(nativePrompt ?? capturedPrompt);
  // Only show native install on non-iOS platforms (iOS doesn't fire beforeinstallprompt)
  const showNativeButton =
    hasNativePrompt &&
    selectedPlatform !== "ios" &&
    installState !== "installed";

  return createPortal(
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-label="Install IMC App"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] bg-dark-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">
              Install IMC App
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Works offline · Loads faster · Home screen access
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Platform tabs */}
        <div className="border-b border-white/[0.06] px-6 pt-4">
          <div
            className="flex gap-1 overflow-x-auto pb-0"
            role="tablist"
            aria-label="Select platform"
          >
            {platforms.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={selectedPlatform === p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-t-lg px-3 py-2 text-xs font-medium transition-colors ${
                  selectedPlatform === p.id
                    ? "border-b-2 border-imc-teal bg-white/[0.04] text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.icon}
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {selectedInfo && (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-imc-teal/10 text-imc-teal">
                  {selectedInfo.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {selectedInfo.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {selectedInfo.description}
                  </p>
                </div>
              </div>

              {showNativeButton && (
                <button
                  type="button"
                  onClick={handleNativeInstall}
                  disabled={installState === "installing"}
                  className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-imc-teal px-4 py-3 text-sm font-semibold text-[#0b1d3a] transition-colors hover:bg-imc-teal-dark disabled:opacity-60"
                >
                  <Download className="h-4 w-4" />
                  {installState === "installing"
                    ? "Installing…"
                    : `Install on ${selectedInfo.label}`}
                </button>
              )}

              {installState === "installed" && (
                <div className="mb-4 rounded-lg bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-400">
                  ✓ Installed successfully! Check your home screen or app
                  launcher.
                </div>
              )}

              <ol className="space-y-3">
                {selectedInfo.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[10px] font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-6 py-4">
          <p className="text-center text-[11px] text-muted-foreground/60">
            The IMC app is a Progressive Web App (PWA). No app store required.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function DownloadButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group/download inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
        aria-label="Download IMC app for any platform"
      >
        <Download className="h-4 w-4 text-imc-teal transition-transform duration-200 group-hover/download:-translate-y-0.5" />
        Download App
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}
