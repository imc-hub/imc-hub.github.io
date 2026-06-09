import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  BookOpen,
  Cloud,
  HelpCircle,
  User,
  Stethoscope,
  ClipboardList,
  Star,
  ArrowRight,
  Check,
  Smartphone,
  GraduationCap,
  BarChart3,
  Users,
  Award,
  Briefcase,
  Pill,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";
import {
  WebPageStructuredData,
  AcademyStructuredData,
  FaqStructuredData,
  TestimonialStructuredData,
} from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "IMC Academy — Courses & Learning Paths for Every Career Stage",
  description:
    "Explore IMC Academy's structured learning paths: Rx Challenger for pharmacy prescription training, business readiness, data analysis & AI skills, corporate soft skills, and industry certifications.",
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/academy",
    title: "IMC Academy — Courses & Learning Paths for Every Career Stage",
    description:
      "Structured learning paths for pharmacy, business readiness, data analysis, AI skills, and corporate soft skills. Start learning today.",
  },
};

/* ── Courses catalog ── */
const courses = [
  {
    icon: Pill,
    name: "Rx Challenger",
    tagline: "Prescription Deciphering",
    status: "Available Now",
    statusColor: "bg-emerald-500/10 text-emerald-500",
    description:
      "Master prescription reading with real-world, anonymized scenarios. Built for pharmacy graduates and professionals.",
    features: [
      "Real anonymized prescriptions",
      "Cloud progress saving",
      "Tooltip clinical assistance",
      "Patient history & diagnosis context",
      "New cases added monthly",
    ],
    color: "text-imc-teal",
    bgColor: "bg-imc-teal/8",
    borderColor: "hover:border-imc-teal/30",
    cta: "Explore Rx Challenger",
    href: "#rx-challenger",
    badge: "Featured",
  },
  {
    icon: Briefcase,
    name: "Business Readiness Track",
    tagline: "Corporate Preparation",
    status: "Coming Soon",
    statusColor: "bg-imc-gold/10 text-imc-gold",
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

/* ── Rx Challenger deep-dive data ── */
const rxFeatures = [
  {
    icon: BookOpen,
    title: "Real, Anonymized Prescriptions",
    description:
      "Authentic yet anonymized prescriptions, carefully curated to reflect the most common diagnoses.",
  },
  {
    icon: Cloud,
    title: "Cloud Progress Saving",
    description:
      "Save your progress securely with cloud storage. Start on one device and pick up where you left off on another.",
  },
  {
    icon: HelpCircle,
    title: "Tooltip Assistance",
    description:
      "Decode complex prescriptions with context-specific help: patient history, chief complaints, diagnosis, and lab values.",
  },
];

const rxDeepDive = [
  {
    icon: User,
    title: "Patient History",
    description:
      "Provides a brief, relevant medical history for each patient. This includes chronic conditions, past medications, surgeries, allergies, or other critical factors influencing prescription decisions.",
  },
  {
    icon: Stethoscope,
    title: "Chief Complaints",
    description:
      "Summarizes the primary reasons why the patient sought medical attention, presented as short, clear bullet points. Mimics real-world scenarios where pharmacists must quickly identify and address the patient's primary concerns.",
  },
  {
    icon: ClipboardList,
    title: "Diagnosis",
    description:
      "Displays the doctor's diagnosis based on patient history, symptoms, and lab results. It acts as a bridge between the patient's condition and the prescribed medication.",
  },
];

const testimonials = [
  {
    name: "Samer",
    role: "Pharmacy Manager",
    rating: 5,
    text: "Rx Challenger is must for training new hires in our pharmacy. It provides realistic scenarios that help trainees develop confidence in prescription reading and decision-making. The detailed patient data and regular updates make it a must-have in retail setting.",
  },
  {
    name: "Saadawy",
    role: "Product Manager",
    rating: 5,
    text: "As someone who manages pharmacy-related products, I was impressed by Rx Challenger's thoughtful design and user-friendly interface. It's clear that the app was built with deep insight into pharmacy needs, making it a fantastic learning resource.",
  },
  {
    name: "Andrew",
    role: "Senior Pharmacist",
    rating: 5,
    text: "Even as a senior pharmacist, I found Rx Challenger an excellent refresher. The app's focus on diagnosis and lab values bridges a critical gap in pharmacy training. I recommend it to anyone looking to stay sharp and mentor younger colleagues more effectively.",
  },
  {
    name: "Hesham",
    role: "Software Tester",
    rating: 5,
    text: "Rx Challenger stands out as an educational app with exceptional attention to detail. Testing the app gave me insights into its robust features like cloud sync and tooltips. The seamless user experience reflects the developer commitment to quality and learning outcomes",
  },
];

const faqItems = [
  {
    question: "What is Rx Challenger?",
    answer:
      "Rx Challenger is an advanced educational tool designed to enhance the practical knowledge of pharmacy trainees and professionals. It offers real-life prescription scenarios to help users improve their drug recognition and problem-solving skills.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "The app is optimized for both Android and Windows devices. Ensure you are running the latest operating system for the best experience.",
  },
  {
    question: "Is my progress saved?",
    answer:
      "Yes, Rx Challenger includes a cloud-based progress saving feature. Simply log in to your account to ensure your progress is synced and accessible across devices.",
  },
  {
    question: "How frequently are new cases added?",
    answer:
      "New prescription cases are added monthly, ensuring users have fresh content to continue their learning journey.",
  },
  {
    question: "When will other Academy courses launch?",
    answer:
      "We're actively developing our Business Readiness, Data Analysis & AI, Corporate Soft Skills, and Industry Certifications tracks. Contact us to get notified when each course becomes available.",
  },
  {
    question: "How do I get support?",
    answer:
      "For technical support, reach out via the Contact Us page or email RxChallenger.app@gmail.com. We strive to address all queries within 48 hours.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-imc-gold text-imc-gold" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function AcademyPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="IMC Academy — Courses & Learning Paths for Every Career Stage"
        description="Explore IMC Academy's structured learning paths: Rx Challenger for pharmacy, business readiness, data analysis & AI skills, corporate soft skills, and industry certifications."
        url="https://imc-hub.github.io/academy"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "IMC Academy", item: "https://imc-hub.github.io/academy" },
        ]}
      />
      <AcademyStructuredData />
      <FaqStructuredData questions={faqItems} />
      <TestimonialStructuredData testimonials={testimonials} />
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Academy overview
      ═══════════════════════════════════════════════════════════════════ */}
      <section aria-label="IMC Academy overview" className="relative overflow-hidden bg-imc-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-imc-navy-light)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              IMC Academy
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Structured learning paths for{" "}
              <span className="text-imc-teal">every career stage</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From pharmacy prescription deciphering to business readiness, data
              analysis, and soft skills — IMC Academy delivers industry-built
              courses that bridge the gap between academic knowledge and
              workplace performance.
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
                href="#rx-challenger"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                Featured: Rx Challenger
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COURSES & SOLUTIONS CATALOG
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="courses" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Courses & Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built by practitioners, not academics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every course is designed around real-world scenarios and measurable
              outcomes. New tracks are added regularly.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              const isFeatured = course.badge !== undefined;
              return (
                <div
                  key={course.name}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 sm:p-8 ${
                    isFeatured
                      ? "border-imc-teal/30 ring-1 ring-imc-teal/10 lg:col-span-2"
                      : `border-border/60 ${course.borderColor}`
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-imc-teal px-3 py-1">
                      <span className="flex items-center gap-1 text-xs font-bold text-white">
                        <Sparkles className="h-3 w-3" />
                        {course.badge}
                      </span>
                    </div>
                  )}

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
          RX CHALLENGER DEEP DIVE
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="rx-challenger"
        className="scroll-mt-20 bg-secondary/30 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-imc-teal/20 bg-imc-teal/5 px-4 py-1.5">
              <Pill className="h-4 w-4 text-imc-teal" />
              <span className="text-xs font-semibold text-imc-teal">
                Featured Course
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Rx Challenger — Master Prescription Deciphering with{" "}
              <span className="text-imc-teal">Ease</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The ultimate tool for pharmacy graduates and professionals seeking
              to master prescription reading. Real-world scenarios, anonymized
              data, and powerful learning tools — all in one app.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
              >
                <Smartphone className="h-4 w-4" />
                Get on Google Play
              </a>
              <a
                href="#rx-features"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border/60 px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See Features
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Core features */}
          <div id="rx-features" className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {rxFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
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
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Deep dive */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
                Deep Dive
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Context-rich learning at every step
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every prescription comes with the clinical context you need to
                understand not just what was prescribed, but why.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {rxDeepDive.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="shrink-0">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-imc-navy">
                        <Icon className="h-5 w-5 text-imc-teal" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What they think{" "}
              <span className="text-imc-gold">about Rx Challenger</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              How Rx Challenger has supported pharmacy graduates and
              professionals…
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-teal/20 sm:p-8"
              >
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-imc-navy">
                    <span className="text-xs font-bold text-imc-teal">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
          ABOUT RX CHALLENGER DEVELOPER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
                About the Developer
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Built by a pharmacist, for pharmacists
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Rx Challenger was developed by{" "}
                <strong className="text-foreground">Ahmed Ezzat</strong>, a
                clinical pharmacist with a passion for improving pharmacy
                education. Based in Alexandria, Egypt, Ahmed aims to empower new
                graduates with practical skills to excel in their careers.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/ahmed-m-ezzat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-teal transition-colors hover:text-imc-teal-dark"
                >
                  LinkedIn
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/Ahmed-M-Ezzat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-teal transition-colors hover:text-imc-teal-dark"
                >
                  GitHub
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="mailto:RxChallenger.App@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-imc-teal transition-colors hover:text-imc-teal-dark"
                >
                  Contact
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
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
            Download Rx Challenger today or get notified when new Academy courses
            launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
            >
              <Smartphone className="h-4 w-4" />
              Download Rx Challenger
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
