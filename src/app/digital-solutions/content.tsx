"use client";

import {
  ArrowRight,
  MonitorSmartphone,
  Gamepad2,
  Smartphone,
  GraduationCap,
  Dumbbell,
  BarChart3,
  Shield,
  Zap,
  Users,
  BookOpen,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const offerings = [
  {
    icon: Gamepad2,
    name: "Gamified EdTech Platforms",
    description:
      "Learning platforms built on game mechanics — points, levels, leaderboards, and achievement systems that drive engagement and knowledge retention.",
    features: [
      "Points & badge systems",
      "Leaderboards & competitions",
      "Progressive unlock mechanics",
      "Adaptive difficulty scaling",
    ],
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/8",
  },
  {
    icon: Smartphone,
    name: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android — designed for performance, accessibility, and seamless user experience.",
    features: [
      "iOS & Android support",
      "Offline-first architecture",
      "Push notifications",
      "Biometric authentication",
    ],
    color: "text-sky-400",
    bgColor: "bg-sky-500/8",
  },
  {
    icon: GraduationCap,
    name: "Digital Learning Systems",
    description:
      "End-to-end learning management systems with content delivery, progress tracking, assessment engines, and analytics dashboards.",
    features: [
      "Content management",
      "Progress analytics",
      "Assessment engines",
      "Certification tracking",
    ],
    color: "text-violet-400",
    bgColor: "bg-violet-500/8",
  },
  {
    icon: BarChart3,
    name: "Organizational Development Tools",
    description:
      "Data-driven tools for workforce planning, skills gap analysis, training ROI measurement, and organizational capability mapping.",
    features: [
      "Skills gap analysis",
      "Training ROI tracking",
      "Capability mapping",
      "Workforce planning dashboards",
    ],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/8",
  },
];

const techStack = [
  { icon: Zap, label: "React / Next.js", category: "Frontend" },
  { icon: Shield, label: "TypeScript", category: "Language" },
  { icon: BarChart3, label: "Node.js / Python", category: "Backend" },
  { icon: Users, label: "PostgreSQL / MongoDB", category: "Database" },
  { icon: Cloud, label: "AWS / Vercel", category: "Infrastructure" },
  { icon: Smartphone, label: "React Native", category: "Mobile" },
];

import { Cloud } from "lucide-react";

const process = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description:
      "We map your learning objectives, user personas, and technical constraints to define the optimal solution architecture.",
  },
  {
    step: "02",
    title: "UX Design & Prototyping",
    description:
      "Interactive prototypes that validate user flows, gamification mechanics, and content delivery patterns before development begins.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Iterative build cycles with continuous stakeholder feedback. Every sprint delivers working, testable features.",
  },
  {
    step: "04",
    title: "QA & Launch",
    description:
      "Comprehensive testing across devices, performance optimization, and staged rollout with monitoring.",
  },
];

export function DigitalSolutionsContent() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <main ref={sectionRef}>
      {/* Hero */}
      <section
        aria-label="Digital Solutions & Technology"
        className="relative overflow-hidden bg-dark-950 bg-grid py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.06)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-imc-gold/20 bg-imc-gold/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-imc-gold animate-pulse-subtle" />
              <span className="text-xs font-semibold text-imc-gold tracking-wide">
                Digital Solutions & Technology
              </span>
            </div>
            <h1 className="reveal delay-100 mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Technology that{" "}
              <span className="text-gradient-gold">powers learning</span>
            </h1>
            <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build gamified EdTech platforms, mobile applications, and
              digital learning systems — from concept to launch.
            </p>
            <div className="reveal delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#offerings"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-semibold text-dark-950 transition-all hover:bg-imc-gold/90 glow-gold"
              >
                <MonitorSmartphone className="h-4 w-4" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
              >
                Start a Project
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Flagship Product: Rx Challenger */}
      <section
        aria-label="Flagship product — Rx Challenger"
        className="bg-dark-900 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Flagship Product
            </p>
            <div className="reveal delay-100 mt-3 flex items-center justify-center gap-3 sm:gap-4">
              <img
                src="/rx-challenger/rx_325x325.png"
                alt="Rx Challenger application logo"
                className="h-10 w-10 shrink-0 rounded-lg ring-1 ring-white/[0.1] sm:h-12 sm:w-12"
                width={325}
                height={325}
              />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Rx Challenger —{" "}
                <span className="text-gradient-gold">
                  Gamified Pharmacy Training
                </span>
              </h2>
            </div>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Our flagship mobile application helps pharmacy professionals
              master prescription reading through real-world scenarios, adaptive
              difficulty, and competitive leaderboards.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Real-World Scenarios",
                desc: "Practice with realistic prescription formats, drug names, and dosage calculations drawn from actual pharmacy workflows.",
              },
              {
                icon: Gamepad2,
                title: "Adaptive Gamification",
                desc: "Difficulty scales with proficiency. Earn badges, climb leaderboards, and unlock advanced prescription types as you improve.",
              },
              {
                icon: BarChart3,
                title: "Progress Analytics",
                desc: "Detailed performance tracking across prescription categories, error patterns, and improvement trends over time.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`reveal delay-${(i + 2) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift sm:p-8`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8 ring-1 ring-white/[0.06]">
                    <Icon className="h-6 w-6 text-imc-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="reveal delay-500 mt-10 text-center">
            <a
              href="/digital-solutions/rx-challenger"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-gold/10 border border-imc-gold/20 px-6 text-sm font-semibold text-imc-gold transition-all hover:bg-imc-gold/20"
            >
              Explore Rx Challenger
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section
        id="offerings"
        aria-label="What we build"
        className="scroll-mt-20 bg-dark-950 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              What We Build
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              End-to-end{" "}
              <span className="text-gradient-gold">digital solutions</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              From gamified learning platforms to mobile apps and organizational
              development tools.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`reveal delay-${Math.min((i + 1) * 100, 400)} group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bgColor} ring-1 ring-white/[0.06]`}
                    >
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.color.replace("text-", "bg-")}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        aria-label="Technology stack"
        className="bg-dark-900 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Our Stack
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies we{" "}
              <span className="text-gradient-gold">work with</span>
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.label}
                  className={`reveal delay-${Math.min((i + 1) * 100, 600)} rounded-xl border border-white/[0.06] bg-dark-800/50 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift`}
                >
                  <Icon className="mx-auto h-6 w-6 text-imc-gold" />
                  <p className="mt-3 text-sm font-bold text-white">
                    {tech.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {tech.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-label="Our process" className="bg-dark-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Our Process
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we <span className="text-gradient-gold">deliver</span>
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <div
                key={item.step}
                className={`reveal delay-${(i + 1) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift sm:p-8`}
              >
                <span className="text-2xl font-extrabold text-imc-gold/30">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Business Units */}
      <section
        aria-label="Other business units"
        className="bg-dark-900 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              The IMC Ecosystem
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore our{" "}
              <span className="text-gradient-gold">other business units</span>
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="reveal-left group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-red/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-red/8 ring-1 ring-white/[0.06]">
                <GraduationCap className="h-6 w-6 text-imc-red" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Corporate & Business Training
              </h3>
              <p className="mt-1 text-sm font-medium text-imc-red">
                IMC Academy
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Structured learning paths in business readiness, data analysis,
                AI skills, corporate soft skills, and professional development.
              </p>
              <div className="mt-6">
                <a
                  href="/academy"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-red transition-all duration-200 hover:gap-2.5"
                >
                  Explore Academy
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="reveal-right group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/8 ring-1 ring-white/[0.06]">
                <Dumbbell className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Athletic Performance — OCTRI
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-400">
                Mental Toughness & Physical Endurance
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A specialized sports academy focused on building resilience,
                discipline, and elite performance through triathlon preparation
                and mental toughness training.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.octri-egypt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-all duration-200 hover:gap-2.5"
                >
                  Visit OCTRI
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-label="Frequently asked questions"
        className="bg-dark-950 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              FAQ
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {[
              {
                q: "What is IMC Digital Solutions?",
                a: "Digital Solutions & Technology is IMC's technology arm — building gamified EdTech platforms, mobile applications, and digital learning systems for organizations and end users.",
              },
              {
                q: "What is Rx Challenger?",
                a: "Rx Challenger is our flagship mobile application that helps pharmacy professionals master prescription reading through gamified, real-world scenarios with adaptive difficulty.",
              },
              {
                q: "Do you build custom software for organizations?",
                a: "Yes. We design and build custom digital learning solutions tailored to your organization's specific needs — from LMS platforms to mobile training apps.",
              },
              {
                q: "What technologies do you use?",
                a: "Our stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, and React Native for cross-platform mobile development.",
              },
              {
                q: "How do I start a project with IMC?",
                a: "Reach out via the Contact Us page. We'll schedule a discovery call to understand your objectives, scope, and timeline.",
              },
            ].map((item, i) => (
              <div
                key={item.q}
                className={`reveal delay-${Math.min((i + 1) * 100, 500)} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1]`}
              >
                <h3 className="text-base font-bold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Start a project"
        className="bg-dark-900 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal-scale mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.1)_0%,_transparent_70%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-gold/30 to-transparent" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to build something great?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Let&apos;s discuss your digital solution — from gamified
                learning platforms to mobile apps and beyond.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-semibold text-dark-950 transition-all hover:bg-imc-gold/90 glow-gold"
                >
                  <MonitorSmartphone className="h-4 w-4" />
                  Start a Project
                </a>
                <a
                  href="/assessment"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  Take Free Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
