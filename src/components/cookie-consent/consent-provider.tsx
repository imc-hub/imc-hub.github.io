"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  getConsentState,
  setConsentState,
  acceptAllConsent,
  rejectAllConsent,
  getDefaultConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent";

interface ConsentContextValue {
  consent: CookieConsentState | null;
  isBannerVisible: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (
    partial: Partial<
      Omit<CookieConsentState, "necessary" | "timestamp" | "version">
    >,
  ) => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
}

// Module-level: read localStorage once on the client, before any component renders.
// On the server (SSR/static export build), typeof window is undefined, so consent stays null.
// On the client, this runs immediately when the module loads.
const initialConsent = typeof window !== "undefined" ? getConsentState() : null;

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentState | null>(
    initialConsent,
  );

  const acceptAll = useCallback(() => {
    const state = acceptAllConsent();
    setConsentState(state);
    setConsent(state);
  }, []);

  const rejectAll = useCallback(() => {
    const state = rejectAllConsent();
    setConsentState(state);
    setConsent(state);
  }, []);

  const updateConsent = useCallback(
    (
      partial: Partial<
        Omit<CookieConsentState, "necessary" | "timestamp" | "version">
      >,
    ) => {
      const current = getConsentState() ?? getDefaultConsent();
      const next: CookieConsentState = {
        ...current,
        ...partial,
        necessary: true,
        timestamp: new Date().toISOString(),
        version: current.version,
      };
      setConsentState(next);
      setConsent(next);
    },
    [],
  );

  // Banner visible only when no consent record exists
  const isBannerVisible = consent === null;

  return (
    <ConsentContext.Provider
      value={{
        consent,
        isBannerVisible,
        acceptAll,
        rejectAll,
        updateConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}
