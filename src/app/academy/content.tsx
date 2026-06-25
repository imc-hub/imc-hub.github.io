"use client";

import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Lightbulb,
  Dumbbell,
  MonitorSmartphone,
  BrainCircuit,
  BarChart3,
  Clock,
  CalendarDays,
  Zap,
  Globe,
  Bot,
  Handshake,
  FolderKanban,
  BriefcaseBusiness,
  Sun,
  Moon,
  UserCheck,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNC5cyZQbvBBkCp1F95kk67BVlOP2K5Y8jrc3wwvsNOe9bhA/viewform";

const roadmapModules = [
  {
    icon: BriefcaseBusiness,
    title: "Understanding Freelancing",
    description:
      "Learn the fundamentals of freelancing — how the gig economy works, what clients expect, and how to position yourself as a professional service provider.",
  },
  {
    icon: Globe,
    title: "Local & International Platforms",
    description:
      "Navigate platforms like Upwork, Fiverr, Mostaql, and Khamsat. Understand how to build a presence that attracts both local and global clients.",
  },
  {
    icon: UserCheck,
    title: "Professional LinkedIn Profile",
    description:
      "Craft a client-winning LinkedIn profile — headline optimization, portfolio showcase, endorsements, and networking strategies that generate leads.",
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description:
      "Master the art of writing effective prompts for ChatGPT, Claude, Gemini, and other AI tools. Learn frameworks for consistent, high-quality outputs.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Build and deploy AI agents that automate business tasks — from content generation to customer support. Hands-on with no-code and low-code tools.",
  },
  {
    icon: Handshake,
    title: "Communication & Negotiation Skills",
    description:
      "Develop professional communication, client handling, scope definition, and negotiation tactics that protect your time and maximize your rates.",
  },
  {
    icon: FolderKanban,
    title: "Project Management Fundamentals",
    description:
      "Manage freelance projects end-to-end — timelines, deliverables, client feedback loops, and tools like Trello, Notion, and Asana.",
  },
];

const highlights = [
  { icon: Zap, label: "Boost Your Skills" },
  { icon: Globe, label: "Get Freelance Opportunities" },
  { icon: BrainCircuit, label: "Build Your Future with AI" },
  { icon: BriefcaseBusiness, label: "Real-world business applications" },
  { icon: GraduationCap, label: "Professional freelancing readiness" },
  { icon: Bot, label: "AI productivity tools" },
];

const featuredCourse = {
  icon: BrainCircuit,
  name: "AI for Business",
  subtitle: "From Zero to Freelance Ready",
  tagline: "AI & Business Strategist-Led Training",
  status: "Enrolling Now",
  statusColor: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
  description:
    "Master AI tools and build a freelance career from scratch. A practical, hands-on program that takes you from fundamentals to paid work — designed for students, graduates, career changers, and professionals ready to leverage AI for business.",
  features: [
    "7 modules: freelancing to project management",
    "Weekend & weekday track options",
    "Morning & evening timing choices",
    "4-hour focused sessions",
    "Instructor: Mohamed Talaat — AI & Business Strategist",
  ],
  color: "text-imc-red",
  bgColor: "bg-imc-red/8",
  borderColor: "hover:border-imc-red/20",
  cta: "Register Now",
  href: REGISTRATION_URL,
  external: true,
  price: "2000 EGP",
  image: "/AI for Business – From Zero to Freelance Ready.jpeg",
  imageAlt: "AI for Business – From Zero to Freelance Ready course poster",
  instructor: "Mohamed Talaat",
  instructorPosition: "AI & Business Strategist",
};

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
        className="relative overflow-hidden bg-dark-950/60 bg-grid py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.04)_0%,_transparent_70%)]" />
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
              Our primary program:{" "}
              <strong className="text-foreground">
                AI for Business – From Zero to Freelance Ready
              </strong>{" "}
              — plus the Business Readiness Track for corporate preparation.
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
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950/40 to-transparent" />
      </section>

      {/* Courses */}
      <section
        id="courses"
        aria-label="Course catalog"
        className="scroll-mt-20 bg-dark-900/70 py-20 sm:py-28"
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
          {/* Featured Course */}
          <div className="mt-16">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red mb-4">
              Featured Program
            </p>
            <div className="reveal group relative overflow-hidden rounded-xl border border-imc-red/20 bg-dark-800/60 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="relative lg:col-span-2 overflow-hidden bg-dark-900/60">
                  <img
                    src={featuredCourse.image}
                    alt={featuredCourse.imageAlt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800/40 lg:bg-gradient-to-l" />
                </div>
                <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${featuredCourse.statusColor}`}
                    >
                      {featuredCourse.status}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-imc-gold/10 px-2.5 py-0.5 text-xs font-semibold text-imc-gold ring-1 ring-imc-gold/20">
                      {featuredCourse.price}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    {featuredCourse.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-imc-red">
                    {featuredCourse.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>
                      Instructor:{" "}
                      <strong className="text-foreground">
                        {featuredCourse.instructor}
                      </strong>
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span>{featuredCourse.instructorPosition}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featuredCourse.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {featuredCourse.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${featuredCourse.color.replace("text-", "bg-")}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href={featuredCourse.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-red px-8 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
                    >
                      {featuredCourse.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Courses */}
          <div className="mt-12">
            <h3 className="reveal text-lg font-bold text-white mb-6">
              Additional Programs
            </h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
        </div>
      </section>

      {/* Course Roadmap */}
      <section
        id="roadmap"
        aria-label="AI for Business course roadmap"
        className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
              Course Roadmap
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your path to{" "}
              <span className="text-gradient-red">freelance readiness</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Seven focused modules that take you from understanding freelancing
              to managing real client projects.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {roadmapModules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className={`reveal delay-${Math.min((i + 1) * 100, 500)} group relative rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-red/20 hover-lift`}
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-imc-red/8 ring-1 ring-white/[0.06]">
                      <Icon className="h-5 w-5 text-imc-red" />
                    </div>
                    <span className="text-xs font-bold text-imc-red/40">
                      Module {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="mt-12 rounded-xl border border-imc-gold/15 bg-imc-gold/[0.03] p-6 sm:p-8">
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-imc-gold">
              What You&apos;ll Gain
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className={`reveal delay-${Math.min((i + 1) * 100, 500)} flex flex-col items-center gap-2 text-center`}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-imc-gold/10 ring-1 ring-imc-gold/20">
                      <Icon className="h-5 w-5 text-imc-gold" />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schedule & Timing */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Track Options */}
            <div className="reveal-left rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-imc-red" />
                <h3 className="text-lg font-bold text-white">Track Options</h3>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/[0.06] bg-dark-900/50 p-4">
                  <p className="text-sm font-semibold text-white">
                    Weekend Track
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Saturday", "Monday", "Wednesday"].map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center rounded-full bg-imc-red/10 px-2.5 py-1 text-xs font-medium text-imc-red ring-1 ring-imc-red/20"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-dark-900/50 p-4">
                  <p className="text-sm font-semibold text-white">
                    Weekday Track
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Sunday", "Tuesday", "Thursday"].map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center rounded-full bg-imc-gold/10 px-2.5 py-1 text-xs font-medium text-imc-gold ring-1 ring-imc-gold/20"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timing Options */}
            <div className="reveal-right rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-imc-red" />
                <h3 className="text-lg font-bold text-white">Timing Options</h3>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-dark-900/50 p-4">
                  <Sun className="mt-0.5 h-5 w-5 shrink-0 text-imc-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">Morning</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-dark-900/50 p-4">
                  <Moon className="mt-0.5 h-5 w-5 shrink-0 text-imc-red" />
                  <div>
                    <p className="text-sm font-semibold text-white">Evening</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      6:00 PM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-imc-red/5 px-4 py-3">
                <Clock className="h-4 w-4 shrink-0 text-imc-red" />
                <p className="text-sm text-foreground">
                  <strong>4 hours</strong> per session
                </p>
              </div>
            </div>
          </div>

          {/* Register CTA */}
          <div className="mt-12 text-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-red px-8 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
            >
              Register Now — 2000 EGP
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section
        id="learning-approach"
        className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
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
        className="bg-dark-900/70 py-20 sm:py-28"
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
      <section className="bg-dark-950/70 py-20 sm:py-28">
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
                a: "IMC Academy is our Corporate & Business Training hub — home to our flagship program AI for Business – From Zero to Freelance Ready, plus the Business Readiness Track for corporate preparation.",
              },
              {
                q: "What courses are available?",
                a: "Our flagship program AI for Business – From Zero to Freelance Ready is currently enrolling. The Business Readiness Track is also available for corporate preparation.",
              },
              {
                q: "How are IMC Academy courses delivered?",
                a: "All courses are delivered online through our platform. Self-paced learning tracks are accessible on any device.",
              },
              {
                q: "How much does the AI for Business course cost?",
                a: "The AI for Business – From Zero to Freelance Ready program is 2000 EGP, covering the full training from fundamentals to freelance readiness.",
              },
              {
                q: "How do I get support?",
                a: "For general inquiries, reach out via the Contact Us page or email imc.hub.eg@gmail.com.",
              },
              {
                q: "Who is the AI for Business course for?",
                a: "The course is designed for students, graduates, career changers, freelancers, and professionals interested in leveraging AI for business and building a freelance career.",
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
        aria-label="Get started"
        className="bg-dark-900/70 py-16 sm:py-20"
      >
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
