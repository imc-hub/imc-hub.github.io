"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { DownloadButton } from "@/components/pwa/download-button";

export function HeroSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative bg-dark-950/60 bg-grid"
    >
      {/* Background effects — subtle overlays on top of electron canvas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.03)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-imc-red animate-pulse-subtle" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              Intelligent Mastery Coaching
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal delay-100 mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Close the gap between{" "}
            <span className="text-gradient-red">education</span> and{" "}
            <span className="text-gradient-gold">market reality</span>.
          </h1>

          {/* Subheadline */}
          <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            IMC is a tech-enabled ecosystem that builds human potential through
            strategic intellect, digital mastery, and physical &amp; mental
            endurance — preparing individuals and organizations for measurable
            success.
          </p>

          {/* CTA */}
          <div className="reveal delay-300 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold text-base h-12 px-8 sm:w-auto"
              asChild
            >
              <Link href="/assessment">
                Start Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <DownloadButton />
          </div>
        </div>

        {/* Business Unit Cards */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {[
            {
              label: "Corporate & Business Training",
              desc: "B2C & B2B capability building",
              href: "/academy",
              gradient: "from-imc-red/10 to-transparent",
              borderHover: "hover:border-imc-red/20",
              icon: "\u{1F3AF}",
            },
            {
              label: "Athletic Performance — OCTRI",
              desc: "Mental toughness & physical endurance",
              href: "https://www.octri-egypt.com/",
              external: true,
              gradient: "from-emerald-500/10 to-transparent",
              borderHover: "hover:border-emerald-500/20",
              icon: "⚡",
            },
            {
              label: "Digital Solutions & Technology",
              desc: "Gamified EdTech & learning platforms",
              href: "/digital-solutions",
              gradient: "from-imc-gold/10 to-transparent",
              borderHover: "hover:border-imc-gold/20",
              icon: "🚀",
            },
          ].map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`reveal delay-${(i + 3) * 100} group rounded-xl border border-white/[0.06] bg-gradient-to-br ${item.gradient} p-5 text-center backdrop-blur-sm transition-all duration-300 hover-lift ${item.borderHover} block`}
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Logo bar */}
        <div className="reveal delay-600 mt-20 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/40">
            Trusted by forward-thinking organizations
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "TechCorp",
              "InnovateCo",
              "DataDriven",
              "GrowthLab",
              "NextGen",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-bold tracking-tight text-white/10 transition-colors duration-300 hover:text-white/20"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950/40 to-transparent" />
    </section>
  );
}
