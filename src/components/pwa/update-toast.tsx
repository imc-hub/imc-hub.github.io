"use client";

import { useState, useEffect, useCallback } from "react";

export default function UpdateToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let newWorker: ServiceWorker | null = null;

    // Listen for the SW update flow
    const onUpdate = () => {
      // A new SW is waiting — show the update prompt
      setShow(true);
    };

    // Check for updates periodically
    const checkForUpdates = async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg) {
          // update() forces the browser to check for a new SW
          reg.addEventListener("updatefound", () => {
            newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker &&
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  onUpdate();
                }
              });
            }
          });
          await reg.update();
        }
      } catch {
        // Silently fail — update checking is best-effort
      }
    };

    // Check on load, then every 5 minutes
    const timer = setInterval(checkForUpdates, 5 * 60 * 1000);
    // Initial check after a short delay
    const initialTimeout = setTimeout(checkForUpdates, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleRefresh = useCallback(() => {
    // Tell the waiting SW to skip waiting, then reload
    navigator.serviceWorker.ready.then((reg) => {
      if (reg.waiting) {
        reg.waiting.addEventListener("statechange", (e: Event) => {
          if ((e.target as ServiceWorker).state === "activated") {
            window.location.reload();
          }
        });
        reg.waiting.postMessage({ type: "SKIP_WAITING" });
      } else {
        window.location.reload();
      }
    });
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-16 left-4 right-4 z-[9998] sm:left-auto sm:right-4 sm:w-80">
      <div className="rounded-xl border border-border/60 bg-card p-4 shadow-lg">
        <p className="text-sm font-semibold text-foreground">
          Update Available
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          A new version of IMC is available. Refresh to get the latest
          features and content.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="rounded-lg bg-imc-teal px-3 py-1.5 text-xs font-semibold text-white hover:bg-imc-teal-dark"
          >
            Refresh Now
          </button>
          <button
            onClick={() => setShow(false)}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
