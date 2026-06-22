"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Dumbbell,
  MonitorSmartphone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: GraduationCap,
    name: "Corporate & Business Training",
    tagline: "B2C & B2B Capability Building",
    description:
      "From high school pupils discovering their academic fit to corporate teams building modern business capabilities. Training covers data analysis, AI tools, business skills, professional development, and career readiness.",
    features: [
      "Career Discovery for students & pupils",
      "University training & real-world projects",
      "Career changer upskilling programs",
      "Corporate team development (B2B)",
      "Data Analysis, AI Tools & Business Skills",
    ],
    color: "text-imc-red",
    bgColor: "bg-imc-red/8",
    borderColor: "hover:border-imc-red/20",
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.15)]",
  },
  {
    icon: Dumbbell,
    name: "Athletic Performance — OCTRI",
    tagline: "Mental Toughness & Physical Endurance",
    description:
      "A specialized sports academy building resilience, discipline, and elite performance capacity through triathlon preparation, mental toughness training, and executive performance programs.",
    features: [
      "Triathlon preparation & coaching",
      "Mental toughness development",
      "Executive performance programs",
      "Physical endurance tracking",
      "High-performance habits & discipline",
    ],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/8",
    borderColor: "hover:border-emerald-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]",
  },
  {
    icon: MonitorSmartphone,
    name: "Digital Solutions & Technology",
    tagline: "Gamified EdTech & Learning Platforms",
    description:
      "Technology-enabled learning solutions including gamified EdTech platforms, mobile applications, and digital learning systems — built on real-world case simulations and applied learning methodologies.",
    features: [
      "Gamified EdTech platforms",
      "Mobile learning applications",
      "Digital learning systems",
      "Real-world case simulations",
      "Organizational development tools",
    ],
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/8",
    borderColor: "hover:border-imc-gold/20",
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(245,166,35,0.15)]",
  },
];

export function EcosystemSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      aria-label="Our ecosystem"
      className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            The IMC Ecosystem
          </p>
          <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three business units.{" "}
            <span className="text-gradient-red">One integrated ecosystem.</span>
          </h2>
          <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
            Corporate &amp; Business Training, Athletic Performance, and Digital
            Solutions &amp; Technology work together to build the complete
            professional — technically skilled, business-ready, and mentally
            resilient.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.name}
                className={`reveal delay-${(i + 2) * 100} group relative flex flex-col overflow-hidden border border-white/[0.06] p-6 transition-all duration-300 ${pillar.borderColor} ${pillar.glowColor} sm:p-8`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgColor} ring-1 ring-white/[0.06]`}
                >
                  <Icon className={`h-6 w-6 ${pillar.color}`} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {pillar.name}
                </h3>
                <p className={`mt-1 text-sm font-medium ${pillar.color}`}>
                  {pillar.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {pillar.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${pillar.color.replace("text-", "bg-")}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href={
                      pillar.name.includes("OCTRI")
                        ? "https://www.octri-egypt.com/"
                        : pillar.name.includes("Digital")
                          ? "/digital-solutions"
                          : "/#get-started"
                    }
                    {...(pillar.name.includes("OCTRI")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${pillar.color} transition-all duration-200 hover:gap-2.5`}
                  >
                    Explore {pillar.name.split("—")[0].trim()}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
