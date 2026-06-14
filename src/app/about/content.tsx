"use client";

import {
  Target,
  Eye,
  TrendingUp,
  Crown,
  Code,
  GraduationCap,
  Megaphone,
  Dumbbell,
  MonitorSmartphone,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  {
    icon: Target,
    title: "Structure Over Style",
    description:
      "Every element earns its place. No decoration for decoration. If it doesn't communicate or function, we remove it.",
  },
  {
    icon: TrendingUp,
    title: "Data Is Beautiful",
    description:
      "Numbers, progress bars, and metrics are design elements. We make data visible, readable, and satisfying.",
  },
  {
    icon: Eye,
    title: "Progress Is Visible",
    description:
      "Users must always know where they are and what's next. Progress bars, step indicators, completion states.",
  },
  {
    icon: Megaphone,
    title: "Corporate Clean, Not Corporate Boring",
    description:
      "Professional doesn't mean sterile. Warmth through content, not through decoration.",
  },
];

const businessUnits = [
  {
    icon: GraduationCap,
    name: "Corporate & Business Training",
    description:
      "B2C and B2B training empowering high school pupils, university students, career changers, and corporate teams. Covers data analysis, AI tools, business skills, professional development, soft skills, and career readiness.",
    color: "text-imc-red",
    bgColor: "bg-imc-red/10",
  },
  {
    icon: Dumbbell,
    name: "Athletic Performance — OCTRI",
    description:
      "A specialized sports academy focused on mental toughness, physical endurance, triathlon training, and executive performance. Building resilience, discipline, and elite performance capacity.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: MonitorSmartphone,
    name: "Digital Solutions & Technology",
    description:
      "Gamified EdTech platforms, mobile applications, digital learning systems, and organizational development tools — built on real-world case simulations and applied learning methodologies.",
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/10",
  },
];

const team = [
  {
    icon: Crown,
    name: "Mohamed Talaat",
    role: "Chief Executive Officer",
    description:
      "Strategic vision, project management, and direct oversight of the Athletic Performance unit (OCTRI integration).",
    color: "text-imc-red",
    bgColor: "bg-imc-red/10",
    linkedin: "https://www.linkedin.com/in/mohamed-talaat-hagrass/",
  },
  {
    icon: Code,
    name: "Ahmed Ezzat",
    role: "Chief Technology Officer",
    description:
      "Digital solutions & technology — gamified EdTech platforms, mobile applications, digital learning systems, and technology-enabled learning solutions.",
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/10",
    linkedin: "https://www.linkedin.com/in/ahmed-m-ezzat/",
  },
  {
    icon: GraduationCap,
    name: "Mostafa Alam",
    role: "Learning & Development Director",
    description:
      "Corporate & Business Training — educational content creation, training program management, and B2B corporate training delivery.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Megaphone,
    name: "Mohamed Ramadan",
    role: "Chief Commercial Officer",
    description:
      "Marketing, sales, commercial partnerships, and corporate contract acquisition across all three business units.",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

export function AboutPageContent() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <main ref={sectionRef}>
      {/* Hero */}
      <section
        aria-label="About IMC"
        className="relative overflow-hidden bg-dark-950 bg-grid py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-imc-red animate-pulse-subtle" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                About IMC
              </span>
            </div>
            <h1 className="reveal delay-100 mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              We build capability.{" "}
              <span className="text-gradient-red">We close gaps.</span>
            </h1>
            <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              IMC exists because the gap between what people learn and what the
              market actually needs is widening. We&apos;re here to close it —
              through an integrated ecosystem of Corporate &amp; Business
              Training, Athletic Performance, and Digital Solutions &amp;
              Technology.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section
        aria-label="Mission and vision"
        className="bg-dark-950 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="reveal-left rounded-2xl border border-white/[0.06] bg-dark-800/50 p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
                Our Mission
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Close the gap between education and market reality.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every year, millions of graduates enter the workforce unprepared
                for what awaits them. Meanwhile, companies spend billions
                retraining hires who should have been ready from day one. IMC
                bridges this gap with an integrated ecosystem that combines
                structured learning, applied corporate programs, athletic
                performance development, and technology-enabled solutions —
                producing measurable readiness for academic, professional,
                entrepreneurial, and corporate success.
              </p>
            </div>

            <div className="reveal-right rounded-2xl border border-white/[0.06] bg-dark-800/50 p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
                Our Vision
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A world where every professional enters the workforce ready to
                perform.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We envision a future where organized minds master systems,
                tools, and execution — where capability is measured by
                demonstrated outcomes, not generic certificates. Where employers
                trust readiness assessments as much as GPAs. Where career
                changers and organizations alike can prove and develop
                capabilities through our integrated ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Business Units */}
      <section
        aria-label="Business units"
        className="bg-dark-900 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Our Business Units
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Three units.{" "}
              <span className="text-gradient-red">One ecosystem.</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              IMC integrates Corporate &amp; Business Training, Athletic
              Performance, and Digital Solutions &amp; Technology to build
              complete human potential.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {businessUnits.map((unit, i) => {
              const Icon = unit.icon;
              return (
                <div
                  key={unit.name}
                  className={`reveal delay-${(i + 2) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${unit.bgColor} ring-1 ring-white/[0.06]`}
                  >
                    <Icon className={`h-6 w-6 ${unit.color}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {unit.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {unit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        aria-label="Our principles"
        className="bg-dark-950 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Our Principles
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we build
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`reveal delay-${(i + 1) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-dark-700 ring-1 ring-white/[0.08]">
                    <Icon className="h-5 w-5 text-imc-red" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-label="Our team" className="bg-dark-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Our Team
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built by operators, educators,{" "}
              <span className="text-gradient-red">and engineers</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              We&apos;re not a content platform. We&apos;re a team of people
              who&apos;ve lived the problem we&apos;re solving.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className={`reveal delay-${(i + 1) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] group`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${member.bgColor} ring-1 ring-white/[0.06] transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-6 w-6 ${member.color}`} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <p className={`mt-0.5 text-xs font-semibold ${member.color}`}>
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} — LinkedIn profile`}
                      className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Get started" className="bg-dark-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal-scale mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to build capability?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Whether you&apos;re a student, career changer, HR leader, or
                organization — IMC has a path for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/assessment"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-imc-red px-6 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
                >
                  Start Free Assessment
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
