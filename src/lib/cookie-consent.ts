export interface CookieConsentState {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
}

const STORAGE_KEY = "imc-cookie-consent";
const SCHEMA_VERSION = 1;

function isValidConsentState(value: unknown): value is CookieConsentState {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return (
    obj.necessary === true &&
    typeof obj.functional === "boolean" &&
    typeof obj.analytics === "boolean" &&
    typeof obj.performance === "boolean" &&
    typeof obj.marketing === "boolean" &&
    typeof obj.timestamp === "string" &&
    obj.version === SCHEMA_VERSION
  );
}

export function getConsentState(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return isValidConsentState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function setConsentState(state: CookieConsentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing, quota exceeded, etc.)
  }
}

export function hasConsentRecord(): boolean {
  return getConsentState() !== null;
}

function buildConsentState(
  overrides: Partial<
    Omit<CookieConsentState, "necessary" | "timestamp" | "version">
  > = {},
): CookieConsentState {
  return {
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    marketing: false,
    timestamp: new Date().toISOString(),
    version: SCHEMA_VERSION,
    ...overrides,
  };
}

export function getDefaultConsent(): CookieConsentState {
  return buildConsentState();
}

export function acceptAllConsent(): CookieConsentState {
  return buildConsentState({
    functional: true,
    analytics: true,
    performance: true,
    marketing: true,
  });
}

export function rejectAllConsent(): CookieConsentState {
  return buildConsentState();
}
