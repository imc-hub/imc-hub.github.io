import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Target, Eye, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — IMC Intelligent Mastery Coaching",
  description:
    "Learn about IMC's mission to close the gap between human potential and corporate reality. Meet our team and discover our story.",
};

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
    icon: Users,
    title: "Corporate Clean, Not Corporate Boring",
    description:
      "Professional doesn't mean sterile. Warmth through content, not through decoration.",
  },
];

const team = [
  {
    name: "Founding Team",
    role: "Vision & Strategy",
    description:
      "Built by senior operators, educators, and engineers who've seen the gap between education and employment firsthand.",
  },
  {
    name: "Education Design",
    role: "Curriculum & Pedagogy",
    description:
      "Former McKinsey consultants, corporate trainers, and learning scientists designing structured readiness paths.",
  },
  {
    name: "Engineering",
    role: "Platform & Simulation",
    description:
      "Full-stack engineers and simulation designers building the readiness platform from the ground up.",
  },
  {
    name: "Industry Advisors",
    role: "Corporate Partnerships",
    description:
      "CHROs, startup founders, and hiring managers ensuring IMC outcomes match real corporate needs.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-imc-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              About IMC
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              We build corporate readiness.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              IMC exists because the gap between what people learn and what
              companies need is widening. We&apos;re here to close it — with
              structured coaching, real simulations, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
                Our Mission
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Replace theoretical entrepreneurship illusions with structured
                corporate readiness.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every year, millions of graduates enter the workforce unprepared
                for what awaits them. Meanwhile, companies spend billions
                retraining hires who should have been ready from day one. IMC
                bridges this gap with a platform that combines structured
                learning, real-world simulations, and measurable skill
                verification.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
                Our Vision
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A world where every professional enters the workforce ready to
                perform.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We envision a future where the IMC Corporate Readiness Score is
                as recognized as a university degree. Where employers trust
                simulation outcomes as much as GPAs. Where career changers can
                prove their capabilities before they ever walk into an interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Our Principles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we build
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-border/60 bg-card p-6 sm:p-8"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-imc-navy">
                    <Icon className="h-5 w-5 text-imc-teal" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
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
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Our Team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built by operators, educators, and engineers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We&apos;re not a content platform. We&apos;re a team of people
              who&apos;ve lived the problem we&apos;re solving.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((group) => (
              <div
                key={group.name}
                className="rounded-xl border border-border/60 bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-imc-teal/10">
                  <span className="text-sm font-bold text-imc-teal">
                    {group.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {group.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-imc-teal">
                  {group.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-imc-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to build corporate readiness?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Whether you&apos;re a student, career changer, or HR leader — IMC
            has a path for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#get-started"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
            >
              Start Free Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
