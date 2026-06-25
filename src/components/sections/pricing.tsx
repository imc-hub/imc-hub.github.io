"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Corporate & Business Training",
    tagline: "B2C & B2B Capability Building",
    price: "From",
    priceNote: "2000 EGP",
    description:
      "Access career discovery and foundational skills training. Our flagship AI for Business — From Zero to Freelance Ready program, plus the Business Readiness Track.",
    features: [
      "Career Discovery Assessment",
      "AI for Business — From Zero to Freelance Ready",
      "Business Readiness Track",
      "Corporate soft skills development",
      "Professional certifications prep",
    ],
    cta: "Explore Training",
    href: "/academy",
    external: false,
    highlight: false,
    color: "text-imc-red",
    bgColor: "bg-imc-red",
  },
  {
    name: "Corporate Solutions — B2B",
    tagline: "Organizational Development",
    price: "Custom",
    priceNote: "pricing",
    description:
      "Tailored corporate development programs — workforce development, talent development, organizational transformation, and performance improvement.",
    features: [
      "Custom corporate training programs",
      "Team-based development & benchmarking",
      "Workforce & talent development",
      "Organizational development consulting",
      "Performance improvement frameworks",
    ],
    cta: "Contact Sales",
    href: "/#get-started",
    external: false,
    highlight: true,
    color: "text-imc-gold",
    bgColor: "bg-imc-gold",
  },
  {
    name: "OCTRI — Athletic Performance",
    tagline: "Endurance & Mental Toughness",
    price: "From EGP 500",
    priceNote: "/month",
    description:
      "Build mental toughness and physical resilience through structured triathlon preparation, executive performance programs, and fitness coaching.",
    features: [
      "Single Sport Training — EGP 1,500/mo",
      "Two Sports Combo — EGP 2,500/mo",
      "Full Triathlon (3 Sports) — EGP 3,000/mo",
      "Fitness Only — EGP 800/mo",
      "Nutrition Coaching — EGP 500/mo",
    ],
    cta: "View All Plans",
    href: "https://www.octri-egypt.com/services-offers/offers",
    external: true,
    highlight: false,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500",
  },
];

export function PricingSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="pricing"
      aria-label="Pricing plans"
      className="scroll-mt-20 bg-dark-900/70 py-20 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            Plans & Pricing
          </p>
          <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transparent pricing.{" "}
            <span className="text-gradient-red">No hidden fees.</span>
          </h2>
          <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
            From our flagship AI for Business program to custom corporate
            solutions and OCTRI athletic performance training.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`reveal delay-${(i + 2) * 100} group relative flex flex-col overflow-hidden border p-6 transition-all duration-300 sm:p-8 ${
                plan.highlight
                  ? "border-imc-gold/20 ring-1 ring-imc-gold/10 bg-dark-800/80"
                  : "border-white/[0.06] hover:border-white/[0.12] bg-dark-800/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-imc-gold px-3 py-1">
                  <span className="flex items-center gap-1 text-xs font-bold text-dark-950">
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </span>
                </div>
              )}

              <p
                className={`text-xs font-semibold uppercase tracking-[0.15em] ${plan.color}`}
              >
                {plan.tagline}
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="text-sm text-muted-foreground">
                    {plan.priceNote}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.color}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                {plan.external ? (
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-11 w-full items-center justify-center rounded-lg border border-white/[0.08] text-sm font-medium transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.15] ${plan.color}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                ) : (
                  <Button
                    size="lg"
                    className={`w-full font-semibold ${
                      plan.highlight
                        ? "bg-imc-gold text-dark-950 hover:bg-imc-gold-dark"
                        : "bg-imc-red text-white hover:bg-imc-red-dark glow-red"
                    }`}
                    asChild
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground/60">
          All prices in Egyptian Pounds. Corporate and enterprise plans
          available —{" "}
          <Link
            href="/contact"
            className="text-imc-red underline hover:no-underline"
          >
            contact sales
          </Link>{" "}
          for custom pricing.
        </p>
      </div>
    </section>
  );
}
