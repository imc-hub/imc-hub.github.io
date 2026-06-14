"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options },
    );

    // Observe the element itself and any children with reveal classes
    const targets =
      el.classList.contains("reveal") ||
      el.classList.contains("reveal-left") ||
      el.classList.contains("reveal-right") ||
      el.classList.contains("reveal-scale")
        ? [el]
        : [];

    if (targets.length === 0) {
      const children = el.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
      );
      children.forEach((child) => {
        observer.observe(child);
      });
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
