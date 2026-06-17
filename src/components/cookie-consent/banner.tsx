"use client";

import { useRef, useEffect } from "react";
import { useConsent } from "./consent-provider";

export function CookieBanner() {
  const { isBannerVisible, acceptAll, rejectAll, closeBanner } = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isBannerVisible && acceptRef.current) {
      acceptRef.current.focus();
    }
  }, [isBannerVisible]);

  if (!isBannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9997] border-t border-white/10 bg-[#0b1d3a]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-white/80">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.{" "}
          <a
            href="/cookies"
            className="text-imc-teal underline underline-offset-2 hover:text-imc-teal-dark"
          >
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => {
              rejectAll();
              closeBanner();
            }}
            className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 hover:bg-white/10 hover:text-white"
          >
            Reject All
          </button>
          <a
            href="/cookies#preference-center"
            className="rounded-lg px-3 py-2 text-xs font-medium text-imc-teal hover:text-imc-teal-dark"
          >
            Customize
          </a>
          <button
            ref={acceptRef}
            type="button"
            onClick={() => {
              acceptAll();
              closeBanner();
            }}
            className="rounded-lg bg-imc-teal px-4 py-2 text-xs font-semibold text-[#0b1d3a] hover:bg-imc-teal-dark"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
