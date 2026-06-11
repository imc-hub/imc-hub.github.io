import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  MonitorSmartphone,
  BookOpen,
  Cloud,
  Smartphone,
  Gamepad2,
  GraduationCap,
  BarChart3,
  Users,
  Star,
  ArrowRight,
  Check,
  User,
  Stethoscope,
  ClipboardList,
  Rocket,
  Target,
  Layers,
  Globe,
  Zap,
  Shield,
} from "lucide-react";
import {
  WebPageStructuredData,
  FaqStructuredData,
  TestimonialStructuredData,
  RxChallengerStructuredData,
} from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Digital Solutions & Technology",
  description:
    "IMC's Digital Solutions & Technology unit builds gamified EdTech platforms, mobile applications, and digital learning systems based on real-world case simulations to accelerate personal and organizational development at scale.",
  alternates: {
    canonical: "/digital-solutions",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/digital-solutions",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Digital Solutions & Technology | IMC",
    description:
      "Gamified EdTech platforms, mobile applications, and digital learning systems built on real-world case simulations and applied learning methodologies.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Digital Solutions & Technology — Gamified EdTech & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions & Technology | IMC",
    description:
      "Gamified EdTech platforms, mobile applications, and digital learning systems built on real-world case simulations.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

/* ── Why Digital Solutions Matter ── */
const whyDigital = [
  {
    icon: BarChart3,
    title: "Capability Development at Scale",
    description:
      "Technology enables us to reach thousands of learners simultaneously without sacrificing quality. Our platforms adapt to individual progress while maintaining enterprise-grade analytics.",
  },
  {
    icon: Zap,
    title: "Technology-Enabled Learning",
    description:
      "Gamification, real-time feedback, and adaptive difficulty transform passive content consumption into active skill building — delivering measurable outcomes, not just completion certificates.",
  },
  {
    icon: Target,
    title: "Practical Application",
    description:
      "Every digital product is built around real-world case scenarios. Learners don't just study concepts — they practice decisions, make mistakes, and build confidence in a risk-free environment.",
  },
  {
    icon: Globe,
    title: "Real-World Readiness",
    description:
      "Our solutions bridge the gap between theoretical knowledge and workplace performance by simulating actual professional challenges — from prescription analysis to corporate decision-making.",
  },
];

/* ── Core capabilities ── */
const coreCapabilities = [
  {
    icon: Gamepad2,
    title: "Gamification",
    description:
      "Points, badges, leaderboards, and progressive difficulty curves that keep learners engaged and motivated through the full learning journey.",
  },
  {
    icon: BookOpen,
    title: "Applied Learning",
    description:
      "Case-based approach where every lesson mirrors real professional scenarios. Learner performance feeds back into adaptive content delivery.",
  },
  {
    icon: Shield,
    title: "Real-World Cases",
    description:
      "Content built from anonymized, real professional situations. Pharmacy prescriptions, corporate scenarios, and analytical challenges drawn from actual practice.",
  },
  {
    icon: Layers,
    title: "Digital Learning Systems",
    description:
      "End-to-end platforms combining content delivery, progress tracking, analytics dashboards, and instructor tools in a unified system.",
  },
  {
    icon: Cloud,
    title: "Scalable Development",
    description:
      "Cloud-based architecture supporting deployments from individual learners to enterprise-scale organizational rollouts with real-time sync and cross-device access.",
  },
];

/* ── Rx Challenger deep dive ── */
const rxDeepDive = [
  {
    icon: User,
    title: "Patient History",
    description:
      "Provides a brief, relevant medical history for each patient — chronic conditions, past medications, surgeries, allergies, and other critical factors influencing prescription decisions.",
  },
  {
    icon: Stethoscope,
    title: "Chief Complaints",
    description:
      "Summarizes the primary reasons why the patient sought medical attention, presented as short, clear bullet points — mimicking real-world pharmacy scenarios.",
  },
  {
    icon: ClipboardList,
    title: "Diagnosis",
    description:
      "Displays the doctor's diagnosis based on patient history, symptoms, and lab results — bridging the gap between patient condition and prescribed medication.",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Samer",
    role: "Pharmacy Manager",
    rating: 5,
    text: "Rx Challenger is a must for training new hires. It provides realistic scenarios that help trainees develop confidence in prescription reading and decision-making. The detailed patient data and regular updates make it invaluable in a retail setting.",
  },
  {
    name: "Saadawy",
    role: "Product Manager",
    rating: 5,
    text: "As someone who manages pharmacy-related products, I was impressed by Rx Challenger's thoughtful design and user-friendly interface. It's clear the app was built with deep insight into pharmacy needs.",
  },
  {
    name: "Andrew",
    role: "Senior Pharmacist",
    rating: 5,
    text: "Even as a senior pharmacist, I found Rx Challenger an excellent refresher. The app's focus on diagnosis and lab values bridges a critical gap in pharmacy training.",
  },
  {
    name: "Hesham",
    role: "Software Tester",
    rating: 5,
    text: "Rx Challenger stands out as an educational app with exceptional attention to detail. The seamless user experience reflects the developer's commitment to quality and learning outcomes.",
  },
];

/* ── FAQ ── */
const faqItems = [
  {
    question: "What is IMC's Digital Solutions & Technology unit?",
    answer:
      "Our Digital Solutions & Technology unit is one of IMC's three core business units. We design and build gamified EdTech platforms, mobile applications, and digital learning systems based on real-world case simulations and applied learning methodologies — all aimed at accelerating personal and organizational development at scale.",
  },
  {
    question: "What types of digital products does IMC build?",
    answer:
      "We specialize in gamified learning platforms, mobile educational apps, organizational development tools, and digital learning systems. Our flagship product, Rx Challenger, is a mobile app for pharmacy professionals to master prescription reading through real-world anonymized scenarios.",
  },
  {
    question: "What is Rx Challenger?",
    answer:
      "Rx Challenger is our flagship digital product — a gamified mobile application for pharmacy graduates and professionals to master prescription reading using real-world, anonymized patient scenarios. Developed by our CTO Ahmed Ezzat, a clinical pharmacist, it provides context-rich learning with patient history, chief complaints, and diagnosis data for each prescription.",
  },
  {
    question: "How long does it take to complete Rx Challenger training?",
    answer:
      "Rx Challenger is self-paced, so learners progress at their own speed. Each prescription scenario takes approximately 3–5 minutes to work through. Most users complete 20–30 scenarios per week, building consistent prescription-analyzing habits that compound over time.",
  },
  {
    question: "Can Rx Challenger be used for corporate training?",
    answer:
      "Yes. We offer corporate deployments of Rx Challenger for pharmacy chains, hospital training programs, and university pharmacy departments. Contact us at imc.hub.eg@gmail.com to discuss licensing options and custom configurations for your organization.",
  },
  {
    question: "What is IMC's approach to digital learning?",
    answer:
      "We combine gamification mechanics, applied learning methodologies, and real-world case simulations to create digital products that deliver measurable skill development. Every product is built on evidence-based learning principles — spaced repetition, progressive difficulty, immediate feedback, and contextual practice.",
  },
  {
    question: "Do you develop custom digital solutions for organizations?",
    answer:
      "Yes. Beyond our own products, we work with organizations to design and build custom digital learning solutions tailored to their specific industry, audience, and capability gaps. From gamified assessment platforms to mobile training apps — we handle the full development lifecycle.",
  },
  {
    question: "How do I get support for Rx Challenger?",
    answer:
      "For technical support or questions about Rx Challenger, email RxChallenger.app@gmail.com. For general inquiries about IMC's Digital Solutions & Technology unit, reach out to us at imc.hub.eg@gmail.com.",
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

export default function DigitalSolutionsPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Digital Solutions & Technology | IMC"
        description="Gamified EdTech platforms, mobile applications, and digital learning systems built on real-world case simulations to accelerate personal and organizational development."
        url="https://imc-hub.github.io/digital-solutions"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "Digital Solutions & Technology", item: "https://imc-hub.github.io/digital-solutions" },
        ]}
      />
      <FaqStructuredData questions={faqItems} />
      <TestimonialStructuredData testimonials={testimonials} />
      <RxChallengerStructuredData />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section aria-label="Digital Solutions & Technology" className="relative overflow-hidden bg-imc-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-imc-navy-light)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,166,35,0.08)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-imc-gold/20 bg-imc-gold/5 px-4 py-1.5">
              <MonitorSmartphone className="h-4 w-4 text-imc-gold" />
              <span className="text-xs font-semibold text-imc-gold">
                Digital Solutions & Technology
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Technology that accelerates{" "}
              <span className="text-imc-gold">capability development</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We develop gamified EdTech platforms and mobile applications based on
              real-world case simulations to accelerate personal and organizational
              development at scale.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#rx-challenger"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-medium text-white transition-colors hover:bg-imc-gold-dark"
              >
                <Smartphone className="h-4 w-4" />
                Explore Rx Challenger
              </a>
              <a
                href="#technology"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                Our Technology Approach
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY DIGITAL SOLUTIONS MATTER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Why Digital Solutions Matter
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Scaling human potential through technology
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Traditional training hits a ceiling. Digital platforms break through it —
              delivering personalized, measurable, and scalable capability development.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyDigital.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-gold/30 sm:p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8">
                    <Icon className="h-6 w-6 text-imc-gold" />
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
          RX CHALLENGER — Flagship Digital Product
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="rx-challenger"
        className="scroll-mt-20 bg-secondary/30 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-imc-teal/20 bg-imc-teal/5 px-4 py-1.5">
              <GraduationCap className="h-4 w-4 text-imc-teal" />
              <span className="text-xs font-semibold text-imc-teal">
                Flagship Product
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Rx Challenger — Prescription Deciphering with{" "}
              <span className="text-imc-teal">Ease</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A flagship Digital Solutions &amp; Technology product — an advanced
              educational mobile application for pharmacy graduates and
              professionals. Real-world scenarios, anonymized data, and powerful
              learning tools.
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

          {/* Deep dive */}
          <div id="rx-features" className="mt-20">
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
          TECHNOLOGY APPROACH
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="technology"
        className="scroll-mt-20 bg-background py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Technology Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we build digital learning products
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every product we build follows a proven methodology combining
              gamification science, applied learning theory, and modern
              cloud architecture.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-imc-gold/30 sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8">
                      <Icon className="h-6 w-6 text-imc-gold" />
                    </div>
                    <span className="text-xs font-bold text-imc-gold/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What professionals say{" "}
              <span className="text-imc-gold">about Rx Challenger</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              How our flagship digital product has supported pharmacy graduates
              and professionals.
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
          DEVELOPER
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
                clinical pharmacist and our CTO leading the Digital Solutions
                &amp; Technology unit. Based in Alexandria, Egypt, Ahmed builds
                technology that empowers professionals with practical skills.
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
          <Rocket className="mx-auto h-10 w-10 text-imc-gold" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Build the future of learning with us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Whether you need a custom EdTech platform, a mobile training app, or
            a gamified assessment system — our Digital Solutions &amp; Technology
            unit can bring your vision to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-medium text-white transition-colors hover:bg-imc-gold-dark"
            >
              <Smartphone className="h-4 w-4" />
              Download Rx Challenger
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Users className="h-4 w-4" />
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
