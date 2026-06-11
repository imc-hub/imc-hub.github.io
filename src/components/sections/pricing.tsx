import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Corporate & Business Training",
    tagline: "B2C & B2B Capability Building",
    price: "Free",
    priceNote: "to start",
    description:
      "Access career discovery, learning paths, and foundational skills training. Upgrade for advanced corporate programs and team development.",
    features: [
      "Career Discovery Assessment",
      "Business Readiness Track",
      "Data Analysis & AI Skills",
      "Corporate Soft Skills",
      "Industry Certifications",
    ],
    cta: "Start Learning",
    href: "/academy",
    external: false,
    highlight: false,
    color: "text-imc-teal",
    bgColor: "bg-imc-teal",
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
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
            Plans & Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Start free with Corporate &amp; Business Training. Scale with custom
            corporate solutions or OCTRI athletic performance programs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden border p-6 transition-all duration-300 sm:p-8 ${
                plan.highlight
                  ? "border-imc-gold/30 ring-1 ring-imc-gold/20"
                  : "border-border/60 hover:border-imc-teal/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-imc-gold px-3 py-1">
                  <span className="flex items-center gap-1 text-xs font-bold text-white">
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
              <h3 className="mt-2 text-xl font-bold text-foreground">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-foreground">
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
                    className={`inline-flex h-11 w-full items-center justify-center rounded-lg border border-border/60 text-sm font-medium transition-colors hover:bg-secondary ${plan.color}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                ) : (
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlight
                        ? "bg-imc-gold text-white hover:bg-imc-gold-dark"
                        : "bg-imc-teal text-white hover:bg-imc-teal-dark"
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

        <p className="mt-10 text-center text-xs text-muted-foreground">
          All prices in EGP. Corporate and enterprise plans available —{" "}
          <Link
            href="/contact"
            className="text-imc-teal underline hover:no-underline"
          >
            contact sales
          </Link>{" "}
          for custom pricing.
        </p>
      </div>
    </section>
  );
}
