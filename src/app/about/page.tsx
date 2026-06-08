import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Target, Eye, Users, TrendingUp, Crown, Code, GraduationCap, Megaphone } from "lucide-react";
import { WebPageStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "About Us — Mission, Vision & Team",
  description:
    "Learn about IMC's mission to close the gap between human potential and corporate reality. Meet our leadership team and discover how we build corporate readiness.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/about",
    title: "About Us — IMC Intelligent Mastery Coaching",
    description:
      "Learn about IMC's mission, vision, principles, and the team building corporate readiness solutions.",
  },
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
    icon: Crown,
    name: "Mohamed Talaat",
    role: "Chief Executive Officer",
    description:
      "Strategic vision, project management, and direct oversight of the sports & physical endurance sector (OCTRI integration).",
    color: "text-imc-teal",
    bgColor: "bg-imc-teal/10",
  },
  {
    icon: Code,
    name: "Ahmed Ezzat",
    role: "Chief Technology Officer",
    description:
      "Digital solutions, software development, website, and mobile application development powered by gamification and simulation.",
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/10",
  },
  {
    icon: GraduationCap,
    name: "Mostafa Alam",
    role: "Learning & Development Director",
    description:
      "Educational & training content creation, and corporate training program management (B2B).",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Megaphone,
    name: "Mohamed Ramadan",
    role: "Chief Commercial Officer",
    description:
      "Marketing, sales, commercial partnerships, and corporate contract acquisition.",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="About Us — IMC Intelligent Mastery Coaching"
        description="Learn about IMC's mission to close the gap between human potential and corporate reality. Meet our team."
        url="https://imc-hub.github.io/about"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "About Us", item: "https://imc-hub.github.io/about" },
        ]}
      />
      {/* Hero */}
      <section aria-label="About IMC" className="bg-imc-navy py-20 sm:py-28">
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
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className="rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-teal/30"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${member.bgColor}`}>
                    <Icon className={`h-6 w-6 ${member.color}`} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className={`mt-0.5 text-xs font-semibold ${member.color}`}>
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              );
            })}
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
              href="/assessment"
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
