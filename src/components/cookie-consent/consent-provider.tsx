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
  hasConsentRecord,
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
  const [consent, setConsentStateInternal] =
    useState<CookieConsentState | null>(() => getConsentState());
  const [isBannerVisible, setIsBannerVisible] = useState(
    () => !hasConsentRecord(),
  );

  const acceptAll = useCallback(() => {
    const state = acceptAllConsent();
    setConsentState(state);
    setConsentStateInternal(state);
    setIsBannerVisible(false);
  }, []);

  const rejectAll = useCallback(() => {
    const state = rejectAllConsent();
    setConsentState(state);
    setConsentStateInternal(state);
    setIsBannerVisible(false);
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
      setConsentStateInternal(next);
    },
    [],
  );

  const closeBanner = useCallback(() => {
    setIsBannerVisible(false);
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
