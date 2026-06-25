"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    href: "https://www.instagram.com/imc1hub",
    label: "Follow IMC on Instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61591257352541",
    label: "Follow IMC on Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/imc-hub/",
    label: "Follow IMC on LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function FloatingSocial() {
  const [visible, setVisible] = useState(false);
  const [hiddenByFooter, setHiddenByFooter] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const checkFooter = () => {
      const footer = document.getElementById("footer");
      if (!footer) {
        setHiddenByFooter(false);
        return;
      }
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setHiddenByFooter(rect.top < windowHeight);
    };

    checkFooter();

    window.addEventListener("scroll", checkFooter, { passive: true });
    window.addEventListener("resize", checkFooter, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkFooter);
      window.removeEventListener("resize", checkFooter);
    };
  }, []);

  return (
    <div
      aria-label="Social media links"
      role="group"
      className={`fixed bottom-20 right-5 z-[9996] flex flex-col gap-2.5 transition-all duration-500 ease-out motion-reduce:transition-none sm:bottom-5 ${
        visible && !hiddenByFooter
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {socialLinks.map(({ href, label, svg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-dark-950/80 ring-1 ring-white/[0.08] backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-imc-red/15 hover:ring-imc-red/30 hover:shadow-[0_0_16px_rgba(220,38,38,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imc-red/60 motion-reduce:hover:scale-100"
        >
          <span className="text-white transition-colors duration-200 group-hover:text-imc-red">
            {svg}
          </span>
        </a>
      ))}
    </div>
  );
}
