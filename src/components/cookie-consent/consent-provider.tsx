"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
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
  closeBanner: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentState | null>(() =>
    getConsentState(),
  );

  const isBannerVisible = useMemo(() => consent === null, [consent]);

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

  const closeBanner = useCallback(() => {
    setConsent(getDefaultConsent());
    setConsentState(getDefaultConsent());
  }, []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        isBannerVisible,
        acceptAll,
        rejectAll,
        updateConsent,
        closeBanner,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}
