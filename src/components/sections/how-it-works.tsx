"use client";

import {
  ClipboardCheck,
  GraduationCap,
  Dumbbell,
  MonitorSmartphone,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Take our free capability assessment to identify your strengths, development areas, and optimal path across our three business units.",
    detail: "15-minute adaptive assessment",
    color: "text-imc-red",
    bgColor: "bg-imc-red/10",
  },
  {
    step: 2,
    icon: GraduationCap,
    title: "Train",
    description:
      "Build professional capabilities through structured corporate training — data analysis, AI tools, business skills, and career readiness.",
    detail: "Corporate & Business Training",
    color: "text-imc-teal",
    bgColor: "bg-imc-teal/10",
  },
  {
    step: 3,
    icon: Dumbbell,
    title: "Strengthen",
    description:
      "Develop mental toughness and physical resilience through OCTRI's athletic performance and executive endurance programs.",
    detail: "Athletic Performance — OCTRI",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    step: 4,
    icon: MonitorSmartphone,
    title: "Scale",
    description:
      "Leverage our digital solutions — gamified platforms, mobile apps, and technology-enabled systems — to accelerate development at scale.",
    detail: "Digital Solutions & Technology",
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/10",
  },
];

export function HowItWorksSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-label="How it works"
      className="scroll-mt-20 bg-dark-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            How It Works
          </p>
          <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From assessment to readiness{" "}
            <span className="text-gradient-red">in four steps</span>
          </h2>
          <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
            A structured path across our three business units — taking you from
            uncertainty to measurable readiness with proof of your capabilities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`reveal delay-${(i + 2) * 100} relative text-center group`}
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${item.bgColor} ring-1 ring-white/[0.06] transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-7 w-7 ${item.color}`} />
                </div>

                <div
                  className={`mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full ${item.bgColor} text-xs font-bold ${item.color}`}
                >
                  {item.step}
                </div>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className={`mt-2 text-xs font-semibold ${item.color}`}>
                  {item.detail}
                </p>

                {item.step < 4 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-white/[0.08] to-transparent lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
