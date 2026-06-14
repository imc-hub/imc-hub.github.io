"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    value: "73%",
    label: "of graduates lack workplace readiness",
    source: "Industry Report 2025",
    accent: "text-imc-red",
  },
  {
    value: "$41B",
    label: "spent annually on corporate retraining",
    source: "Training Industry",
    accent: "text-imc-gold",
  },
  {
    value: "3x",
    label: "faster capability development with applied learning",
    source: "IMC Research",
    accent: "text-imc-teal",
  },
  {
    value: "3",
    label: "integrated business units driving readiness",
    source: "Corporate · Athletic · Digital",
    accent: "text-emerald-400",
  },
];

export function StatsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-label="Our impact"
      className="relative bg-dark-900 py-16 sm:py-20"
    >
      {/* Top border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            The Readiness Gap
          </p>
          <h2 className="reveal delay-100 mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            The readiness gap is widening.{" "}
            <span className="text-gradient-red">We&apos;re closing it.</span>
          </h2>
          <p className="reveal delay-200 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Through three integrated business units — Corporate &amp; Business
            Training, Athletic Performance, and Digital Solutions &amp;
            Technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${(i + 1) * 100} group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-dark-800/80 hover-lift`}
            >
              <p
                className={`text-3xl font-extrabold ${stat.accent} sm:text-4xl`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/50">
                {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
