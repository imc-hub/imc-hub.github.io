import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  BookOpen,
  HelpCircle,
  ArrowRight,
  Check,
  GraduationCap,
  BarChart3,
  Users,
  Award,
  Briefcase,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import {
  WebPageStructuredData,
  FaqStructuredData,
} from "@/components/seo/structured-data";


export const metadata: Metadata = {
  title: "IMC Academy — Corporate & Business Training",
  description:
    "IMC Academy is our Corporate & Business Training hub — structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/academy",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "IMC Academy — Corporate & Business Training",
    description:
      "Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Academy — Corporate & Business Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMC Academy — Corporate & Business Training",
    description:
      "Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

/* ── Courses catalog ── */
const courses = [
  {
    icon: Briefcase,
    name: "Business Readiness Track",
    tagline: "Corporate Preparation",
    status: "Available",
    statusColor: "bg-emerald-500/10 text-emerald-500",
    description:
      "Structured learning path covering workplace fundamentals, professional communication, and corporate culture navigation.",
    features: [
      "Professional communication",
      "Workplace etiquette & culture",
      "Email & report writing",
      "Meeting facilitation",
      "Stakeholder management basics",
    ],
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/8",
    borderColor: "hover:border-imc-gold/30",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: BarChart3,
    name: "Data Analysis & AI Skills",
    tagline: "Analytics & Intelligence",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold",
    description:
      "From spreadsheet fundamentals to AI-powered decision-making. Practical data skills for the modern workplace.",
    features: [
      "Spreadsheet mastery",
      "Data visualization",
      "Statistical thinking",
      "AI tools & prompting",
      "Business intelligence basics",
    ],
    color: "text-sky-500",
    bgColor: "bg-sky-500/8",
    borderColor: "hover:border-sky-500/30",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: Users,
    name: "Corporate Soft Skills",
    tagline: "Interpersonal Excellence",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold",
    description:
      "Develop the interpersonal skills that matter most: teamwork, conflict resolution, leadership presence, and emotional intelligence.",
    features: [
      "Team collaboration",
      "Conflict resolution",
      "Leadership presence",
      "Emotional intelligence",
      "Giving & receiving feedback",
    ],
    color: "text-violet-500",
    bgColor: "bg-violet-500/8",
    borderColor: "hover:border-violet-500/30",
    cta: "Get Notified",
    href: "/contact",
  },
  {
    icon: Award,
    name: "Industry Certifications",
    tagline: "Professional Credentials",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold",
    description:
      "Prepare for recognized industry certifications with structured prep courses, practice exams, and expert guidance.",
    features: [
      "Certification prep tracks",
      "Practice examinations",
      "Expert-led review sessions",
      "Study planning tools",
      "Progress benchmarking",
    ],
    color: "text-rose-500",
    bgColor: "bg-rose-500/8",
    borderColor: "hover:border-rose-500/30",
    cta: "Get Notified",
    href: "/contact",
  },
];

/* ── Learning approach ── */
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

/* ── FAQ ── */
const faqItems = [
  {
    question: "What is IMC Academy?",
    answer:
      "IMC Academy is our Corporate & Business Training hub — offering structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development. It is one of IMC's three business units, alongside Athletic Performance (OCTRI) and Digital Solutions & Technology.",
  },
  {
    question: "What courses are available?",
    answer:
      "Our Business Readiness Track is currently available, with Data Analysis & AI Skills, Corporate Soft Skills, and Industry Certifications tracks coming soon.",
  },
  {
    question: "How are IMC Academy courses delivered?",
    answer:
      "All courses are delivered online through our platform. Self-paced learning tracks are accessible on any device. Corporate training programs can be delivered as facilitated virtual workshops or blended learning experiences.",
  },
  {
    question: "When will new courses launch?",
    answer:
      "We're actively developing our Data Analysis & AI, Corporate Soft Skills, and Industry Certifications tracks. Contact us to get notified when each course becomes available.",
  },
  {
    question: "Is IMC Academy free to use?",
    answer:
      "Foundational content and the Business Readiness Track are available at no cost. We believe everyone deserves access to quality career preparation. Advanced corporate modules and certification tracks may have associated pricing, but core readiness tools remain free.",
  },
  {
    question: "How do I get support?",
    answer:
      "For general inquiries, reach out via the Contact Us page or email imc.hub.eg@gmail.com.",
  },
];

export default function AcademyPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="IMC Academy — Corporate & Business Training"
        description="Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development."
        url="https://imc-hub.github.io/academy"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "IMC Academy", item: "https://imc-hub.github.io/academy" },
        ]}
      />
      <FaqStructuredData questions={faqItems} />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section aria-label="IMC Academy overview" className="relative overflow-hidden bg-imc-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-imc-navy-light)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              IMC Academy
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Corporate &amp; Business Training for{" "}
              <span className="text-imc-teal">every career stage</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Structured learning paths in business readiness, data analysis &amp;
              AI skills, corporate soft skills, and professional certifications —
              designed to close the gap between education and workplace performance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#courses"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
              >
                <GraduationCap className="h-4 w-4" />
                Browse Courses
              </a>
              <a
                href="#learning-approach"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                Our Approach
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COURSES CATALOG
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="courses" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Corporate & Business Training
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built by practitioners, not academics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every course is designed around real-world scenarios and measurable
              outcomes. New tracks are added regularly.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.name}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 sm:p-8 border-border/60 ${course.borderColor}`}
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${course.bgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${course.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">
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
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${course.color.replace("text-", "bg-")}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-border/60 pt-5">
                    <a
                      href={course.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${course.color} transition-all hover:gap-2.5`}
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

      {/* ═══════════════════════════════════════════════════════════════════
          LEARNING APPROACH
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="learning-approach"
        className="scroll-mt-20 bg-secondary/30 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we deliver corporate training
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every IMC Academy course follows a proven methodology designed
              to maximize knowledge retention and workplace application.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningApproach.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-teal/30 sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-teal/8">
                      <Icon className="h-6 w-6 text-imc-teal" />
                    </div>
                    <span className="text-xs font-bold text-imc-teal/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
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

      {/* ═══════════════════════════════════════════════════════════════════
          OTHER BUSINESS UNITS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              The IMC Ecosystem
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore our other business units
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              IMC integrates three business units to build complete human potential.
              Corporate &amp; Business Training is one part of a broader ecosystem.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-gold/30 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8">
                <BarChart3 className="h-6 w-6 text-imc-gold" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Digital Solutions & Technology
              </h3>
              <p className="mt-1 text-sm font-medium text-imc-gold">
                Gamified EdTech & Mobile Applications
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We build gamified EdTech platforms, mobile applications, and digital
                learning systems. Our flagship product Rx Challenger helps pharmacy
                professionals master prescription reading through real-world scenarios.
              </p>
              <div className="mt-6">
                <a
                  href="/digital-solutions"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-gold transition-all hover:gap-2.5"
                >
                  Explore Digital Solutions
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-emerald-500/30 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/8">
                <Users className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Athletic Performance — OCTRI
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-500">
                Mental Toughness & Physical Endurance
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A specialized sports academy focused on building resilience, discipline,
                and elite performance through triathlon preparation, mental toughness
                training, and executive performance programs.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.octri-egypt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 transition-all hover:gap-2.5"
                >
                  Visit OCTRI
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-border/60 bg-card p-6"
              >
                <h3 className="text-base font-bold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-imc-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to start learning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Explore our Corporate &amp; Business Training courses or get notified
            when new tracks launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/assessment"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
            >
              <GraduationCap className="h-4 w-4" />
              Start Free Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              Get Notified About New Courses
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
