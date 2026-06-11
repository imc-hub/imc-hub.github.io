import { BookOpen, Building2, Dumbbell, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const pillars = [
  {
    icon: BookOpen,
    name: "IMC Academy",
    tagline: "Structured Learning Paths",
    description:
      "Career discovery, business readiness, data analysis, AI skills, and soft skills — built by industry practitioners, not academics.",
    features: [
      "Career Discovery Assessment",
      "Business Readiness Track",
      "Data Analysis & AI Skills",
      "Corporate Soft Skills",
      "Industry Certifications",
    ],
    color: "text-imc-teal",
    bgColor: "bg-imc-teal/8",
    borderColor: "hover:border-imc-teal/30",
  },
  {
    icon: Building2,
    name: "Corporate Solutions",
    tagline: "Business Transformation Programs",
    description:
      "Applied corporate development programs that build real business capabilities. Lead teams through structured challenges. Build a portfolio of proven organizational outcomes.",
    features: [
      "Corporate Performance Framework",
      "Team-Based Development",
      "Industry-Specific Programs",
      "Performance Benchmarking",
      "Case Study Competitions",
    ],
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/8",
    borderColor: "hover:border-imc-gold/30",
  },
  {
    icon: Dumbbell,
    name: "OCTRI",
    tagline: "Mental & Physical Endurance",
    description:
      "Build mental toughness and physical resilience through structured triathlon preparation and executive performance programs.",
    features: [
      "Triathlon Preparation",
      "Mental Toughness Training",
      "Executive Performance",
      "Endurance Tracking",
      "Community Events",
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/8",
    borderColor: "hover:border-emerald-500/30",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
            The IMC Ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three pillars. One readiness platform.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Academy, Corporate Solutions, and OCTRI work together to build the complete
            professional — technically skilled, business-ready, and mentally
            resilient.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.name}
                className={`group relative flex flex-col overflow-hidden border border-border/60 p-6 transition-all duration-300 ${pillar.borderColor} sm:p-8`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgColor}`}
                >
                  <Icon className={`h-6 w-6 ${pillar.color}`} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground">
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
                    href={pillar.name === "OCTRI" ? "https://www.octri-egypt.com/" : pillar.name === "IMC Academy" ? "/academy" : "/#get-started"}
                    {...(pillar.name === "OCTRI" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${pillar.color} transition-all hover:gap-2.5`}
                  >
                    Explore {pillar.name}
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
