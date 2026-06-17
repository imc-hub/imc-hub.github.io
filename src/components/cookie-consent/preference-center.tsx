"use client";

import { useState, useEffect } from "react";
import { useConsent } from "./consent-provider";
import { CategoryToggle } from "./category-toggle";
import { getConsentState, getDefaultConsent } from "@/lib/cookie-consent";

const categories = [
  {
    id: "necessary" as const,
    label: "Strictly Necessary",
    description:
      "Essential for the website to function properly. These cookies enable core features such as page navigation, session management, and security. The site cannot operate without them.",
    disabled: true,
  },
  {
    id: "functional" as const,
    label: "Functional",
    description:
      "Enable enhanced functionality and personalization, such as language preferences, region settings, and remembering your choices for a more convenient experience.",
    disabled: false,
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    description:
      "Help us understand how visitors interact with our website by collecting anonymized usage data. This information allows us to improve the site and your experience.",
    disabled: false,
  },
  {
    id: "performance" as const,
    label: "Performance",
    description:
      "Collect information about how you use our site — which pages you visit most, error messages received — so we can improve performance and reliability.",
    disabled: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description:
      "Used to deliver relevant advertisements and measure their effectiveness across websites. These cookies may track visitors across different sites.",
    disabled: false,
  },
];

function readStoredState() {
  const stored = getConsentState() ?? getDefaultConsent();
  return {
    functional: stored.functional,
    analytics: stored.analytics,
    performance: stored.performance,
    marketing: stored.marketing,
  };
}

export function PreferenceCenter() {
  const { updateConsent, acceptAll, rejectAll } = useConsent();
  const [localState, setLocalState] = useState(readStoredState);
  const [saved, setSaved] = useState(false);

  // Auto-hide saved message
  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 3000);
    return () => clearTimeout(timer);
  }, [saved]);

  const handleToggle = (id: keyof typeof localState) => (checked: boolean) => {
    setLocalState((prev) => ({ ...prev, [id]: checked }));
    setSaved(false);
  };

  const handleSave = () => {
    updateConsent(localState);
    setSaved(true);
  };

  const handleAcceptAll = () => {
    acceptAll();
    setLocalState({
      functional: true,
      analytics: true,
      performance: true,
      marketing: true,
    });
    setSaved(true);
  };

  const handleRejectAll = () => {
    rejectAll();
    setLocalState({
      functional: false,
      analytics: false,
      performance: false,
      marketing: false,
    });
    setSaved(false);
  };

  return (
    <div className="mt-12">
      <div className="rounded-xl border border-white/[0.06] bg-card/80 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              Cookie Preference Center
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your cookie consent preferences. Changes take effect
              immediately.
            </p>
          </div>
          {saved && (
            <span className="shrink-0 rounded-full bg-imc-teal/10 px-3 py-1 text-xs font-medium text-imc-teal">
              Preferences saved ✓
            </span>
          )}
        </div>

        <div className="mt-6 divide-y divide-white/[0.04]">
          {categories.map((cat) => (
            <CategoryToggle
              key={cat.id}
              label={cat.label}
              description={cat.description}
              checked={
                cat.disabled
                  ? true
                  : localState[cat.id as keyof typeof localState]
              }
              disabled={cat.disabled}
              onChange={handleToggle(cat.id as keyof typeof localState)}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleRejectAll}
            className="w-full rounded-lg border border-border/60 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50 sm:w-auto"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full rounded-lg border border-imc-teal/30 bg-transparent px-5 py-2.5 text-sm font-medium text-imc-teal transition-colors hover:bg-imc-teal/10 sm:w-auto"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-full rounded-lg bg-imc-teal px-5 py-2.5 text-sm font-semibold text-[#0b1d3a] transition-colors hover:bg-imc-teal-dark sm:w-auto"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
