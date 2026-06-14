"use client";

import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  BarChart3,
  Users,
  Award,
  Briefcase,
  MessageCircle,
  Lightbulb,
  Dumbbell,
  MonitorSmartphone,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const courses = [
  {
    icon: Briefcase,
    name: "Business Readiness Track",
    tagline: "Corporate Preparation",
    status: "Available",
    statusColor:
      "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
    description:
      "Structured learning path covering workplace fundamentals, professional communication, and corporate culture navigation.",
    features: [
      "Professional communication",
      "Workplace etiquette & culture",
      "Email & report writing",
      "Meeting facilitation",
      "Stakeholder management basics",
    ],
    color: "text-imc-red",
    bgColor: "bg-imc-red/8",
    borderColor: "hover:border-imc-red/20",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: BarChart3,
    name: "Data Analysis & AI Skills",
    tagline: "Analytics & Intelligence",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold ring-1 ring-imc-gold/20",
    description:
      "From spreadsheet fundamentals to AI-powered decision-making. Practical data skills for the modern workplace.",
    features: [
      "Spreadsheet mastery",
      "Data visualization",
      "Statistical thinking",
      "AI tools & prompting",
      "Business intelligence basics",
    ],
    color: "text-sky-400",
    bgColor: "bg-sky-500/8",
    borderColor: "hover:border-sky-500/20",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: Users,
    name: "Corporate Soft Skills",
    tagline: "Interpersonal Excellence",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold ring-1 ring-imc-gold/20",
    description:
      "Develop the interpersonal skills that matter most: teamwork, conflict resolution, leadership presence, and emotional intelligence.",
    features: [
      "Team collaboration",
      "Conflict resolution",
      "Leadership presence",
      "Emotional intelligence",
      "Giving & receiving feedback",
    ],
    color: "text-violet-400",
    bgColor: "bg-violet-500/8",
    borderColor: "hover:border-violet-500/20",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: Award,
    name: "Industry Certifications",
    tagline: "Professional Credentials",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold ring-1 ring-imc-gold/20",
    description:
      "Prepare for recognized industry certifications with structured prep courses, practice exams, and expert guidance.",
    features: [
      "Certification prep tracks",
      "Practice examinations",
      "Expert-led review sessions",
      "Study planning tools",
      "Progress benchmarking",
    ],
    color: "text-rose-400",
    bgColor: "bg-rose-500/8",
    borderColor: "hover:border-rose-500/20",
    cta: "Get Notified",
    href: "/contact",
  },
];

const learningApproach = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "Every course follows a carefully sequenced path — building foundational knowledge before advancing to complex applications and real-world scenarios.",
  },
  {
    icon: Lightbulb,
    title: "Applied Learning",
    description:
      "Case-based exercises, role-play simulations, and practical assignments ensure learners can apply concepts immediately in their professional context.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description:
      "Progress tracking, skills assessments, and completion benchmarks provide visibility into individual and team development — no guessing.",
  },
  {
    icon: MessageCircle,
    title: "Expert-Led Instruction",
    description:
      "Courses are designed and delivered by practitioners with real corporate experience — not purely academic instructors.",
  },
];

export function AcademyContent() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <main ref={sectionRef}>
      {/* Hero */}
      <section
        aria-label="IMC Academy overview"
        className="relative overflow-hidden bg-dark-950 bg-grid py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-imc-red/20 bg-imc-red/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-imc-red animate-pulse-subtle" />
              <span className="text-xs font-semibold text-imc-red tracking-wide">
                IMC Academy
              </span>
            </div>
            <h1 className="reveal delay-100 mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Corporate &amp; Business Training for{" "}
              <span className="text-gradient-red">every career stage</span>
            </h1>
            <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Structured learning paths in business readiness, data analysis
              &amp; AI skills, corporate soft skills, and professional
              certifications.
            </p>
            <div className="reveal delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#courses"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-red px-6 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
              >
                <GraduationCap className="h-4 w-4" />
                Browse Courses
              </a>
              <a
                href="#learning-approach"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
              >
                Our Approach
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Courses */}
      <section
        id="courses"
        aria-label="Course catalog"
        className="scroll-mt-20 bg-dark-900 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Corporate & Business Training
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built by practitioners,{" "}
              <span className="text-gradient-red">not academics</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Every course is designed around real-world scenarios and
              measurable outcomes.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.name}
                  className={`reveal delay-${Math.min((i + 1) * 100, 400)} group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${course.bgColor} ring-1 ring-white/[0.06]`}
                    >
                      <Icon className={`h-6 w-6 ${course.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-white">
                          {course.name}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${course.statusColor}`}
                        >
                          {course.status}
                        </span>
                      </div>
                      <p
                        className={`mt-0.5 text-sm font-medium ${course.color}`}
                      >
                        {course.tagline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${course.color.replace("text-", "bg-")}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <a
                      href={course.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${course.color} transition-all duration-200 hover:gap-2.5`}
                    >
                      {course.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section
        id="learning-approach"
        className="scroll-mt-20 bg-dark-950 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Our Approach
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we deliver{" "}
              <span className="text-gradient-red">corporate training</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Every IMC Academy course follows a proven methodology designed to
              maximize knowledge retention and workplace application.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningApproach.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`reveal delay-${(i + 2) * 100} group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-red/8 ring-1 ring-white/[0.06]">
                      <Icon className="h-6 w-6 text-imc-red" />
                    </div>
                    <span className="text-xs font-bold text-imc-red/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
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
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              The IMC Ecosystem
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore our{" "}
              <span className="text-gradient-red">other business units</span>
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="reveal-left group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8 ring-1 ring-white/[0.06]">
                <MonitorSmartphone className="h-6 w-6 text-imc-gold" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Digital Solutions & Technology
              </h3>
              <p className="mt-1 text-sm font-medium text-imc-gold">
                Gamified EdTech & Mobile Applications
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We build gamified EdTech platforms, mobile applications, and
                digital learning systems. Our flagship product Rx Challenger
                helps pharmacy professionals master prescription reading.
              </p>
              <div className="mt-6">
                <a
                  href="/digital-solutions"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-gold transition-all duration-200 hover:gap-2.5"
                >
                  Explore Digital Solutions
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
      <section className="bg-dark-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              FAQ
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {[
              {
                q: "What is IMC Academy?",
                a: "IMC Academy is our Corporate & Business Training hub — offering structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
              },
              {
                q: "What courses are available?",
                a: "Our Business Readiness Track is currently available, with Data Analysis & AI Skills, Corporate Soft Skills, and Industry Certifications tracks coming soon.",
              },
              {
                q: "How are IMC Academy courses delivered?",
                a: "All courses are delivered online through our platform. Self-paced learning tracks are accessible on any device.",
              },
              {
                q: "Is IMC Academy free to use?",
                a: "Foundational content and the Business Readiness Track are available at no cost. We believe everyone deserves access to quality career preparation.",
              },
              {
                q: "How do I get support?",
                a: "For general inquiries, reach out via the Contact Us page or email imc.hub.eg@gmail.com.",
              },
              {
                q: "When will new courses launch?",
                a: "We're actively developing our Data Analysis & AI, Corporate Soft Skills, and Industry Certifications tracks. Contact us to get notified.",
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
      <section aria-label="Get started" className="bg-dark-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal-scale mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-red/30 to-transparent" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to start learning?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Explore our Corporate &amp; Business Training courses or get
                notified when new tracks launch.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/assessment"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-red px-6 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
                >
                  <GraduationCap className="h-4 w-4" />
                  Start Free Assessment
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  Get Notified About New Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
