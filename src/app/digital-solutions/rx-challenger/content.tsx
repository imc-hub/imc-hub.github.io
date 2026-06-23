"use client";

import {
  ArrowRight,
  Download,
  Monitor,
  Smartphone,
  Cloud,
  BookOpen,
  Gamepad2,
  BarChart3,
  FileText,
  Stethoscope,
  ClipboardList,
  Activity,
  ExternalLink,
  ChevronRight,
  Pill,
  GraduationCap,
  Users,
  Star,
  Terminal,
  Globe,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: FileText,
    title: "Real, Anonymized Prescriptions",
    description:
      "Authentic yet anonymized prescriptions, carefully curated to reflect the most common diagnoses encountered in real pharmacy practice.",
    color: "text-imc-gold",
    bgColor: "bg-imc-gold/8",
  },
  {
    icon: Cloud,
    title: "Cloud Progress Saving",
    description:
      "Save your progress securely with cloud storage. Start on one device and pick up where you left off on another.",
    color: "text-sky-400",
    bgColor: "bg-sky-500/8",
  },
  {
    icon: BookOpen,
    title: "Tooltip Assistance",
    description:
      "Decode complex prescriptions with context-specific help: patient history, chief complaints, diagnosis, and lab values.",
    color: "text-violet-400",
    bgColor: "bg-violet-500/8",
  },
  {
    icon: Stethoscope,
    title: "Patient History Module",
    description:
      "Provides a brief, relevant medical history for each patient — chronic conditions, past medications, surgeries, allergies, and other critical factors.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/8",
  },
  {
    icon: ClipboardList,
    title: "Chief Complaints Module",
    description:
      "Summarizes the primary reasons why the patient sought medical attention, presented as short, clear bullet points mimicking real-world scenarios.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/8",
  },
  {
    icon: Activity,
    title: "Diagnosis Module",
    description:
      "Displays the doctor's diagnosis based on patient history, symptoms, and lab results — bridging the gap between condition and prescribed medication.",
    color: "text-rose-400",
    bgColor: "bg-rose-500/8",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Prescription Interpretation Training",
    description:
      "Develop confidence in reading and interpreting real-world prescription formats, drug names, and dosage calculations.",
  },
  {
    icon: Pill,
    title: "Pharmacy Education",
    description:
      "Bridge the gap between academic knowledge and practical expertise with scenario-based learning.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description:
      "Earn badges, climb leaderboards, and unlock advanced prescription types as your skills improve.",
  },
  {
    icon: Users,
    title: "For All Skill Levels",
    description:
      "From new graduates to senior pharmacists — adaptive difficulty ensures the right challenge level for everyone.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Detailed performance tracking across prescription categories, error patterns, and improvement trends over time.",
  },
  {
    icon: Smartphone,
    title: "Learn Anywhere",
    description:
      "Available on Android, Windows, Linux, and as a PWA — learn at your own pace, on any device.",
  },
];

const testimonials = [
  {
    name: "Samer",
    role: "Pharmacy Manager",
    text: "Rx Challenger is a must for training new hires in our pharmacy. The real-world scenarios make onboarding so much more effective.",
    img: "/rx-challenger/testimonial-author-1.png",
  },
  {
    name: "Saadawy",
    role: "Product Manager",
    text: "As someone who manages pharmacy-related products, I was impressed by the attention to detail and the educational methodology.",
    img: "/rx-challenger/testimonial-author-2.png",
  },
  {
    name: "Andrew",
    role: "Senior Pharmacist",
    text: "Even as a senior pharmacist, I found Rx Challenger an excellent refresher. The focus on diagnosis and lab values bridges a critical gap.",
    img: "/rx-challenger/testimonial-author-3.png",
  },
  {
    name: "Hesham",
    role: "Software Tester",
    text: "Rx Challenger stands out as an educational app with exceptional attention to detail in both content and user experience.",
    img: "/rx-challenger/testimonial-author-4.png",
  },
];

export function RxChallengerPageContent() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <main ref={sectionRef}>
      {/* Hero Section */}
      <section
        aria-label="Rx Challenger — Product Hero"
        className="relative overflow-hidden bg-dark-950/60 bg-grid py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.05)_0%,_transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(0,180,216,0.03)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-imc-gold/20 bg-imc-gold/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-imc-gold animate-pulse-subtle" />
              <span className="text-xs font-semibold text-imc-gold tracking-wide">
                IMC Digital Solutions
              </span>
            </div>
            <div className="reveal delay-100 mt-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <img
                src="/rx-challenger/rx_325x325.png"
                alt="Rx Challenger application logo"
                className="h-14 w-14 shrink-0 rounded-xl ring-1 ring-white/[0.1] sm:h-16 sm:w-16"
                width={325}
                height={325}
              />
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Rx <span className="text-gradient-gold">Challenger</span>
              </h1>
            </div>
            <p className="reveal delay-200 mt-3 text-lg font-medium text-imc-gold/80 sm:text-xl">
              Master Prescription Deciphering with Ease!
            </p>
            <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A gamified mobile application for pharmacy graduates and
              professionals seeking to master prescription reading through
              real-world, anonymized patient scenarios.
            </p>
            <div className="reveal delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-semibold text-dark-950 transition-all hover:bg-imc-gold/90 glow-gold"
              >
                <Download className="h-4 w-4" />
                Download Free
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
              >
                Explore Features
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
            <div className="reveal delay-400 mt-6 flex items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Get Rx Challenger on Google Play"
              >
                <img
                  src="/rx-challenger/googleplay.png"
                  alt="Get it on Google Play"
                  className="h-10"
                  width={140}
                  height={40}
                />
              </a>
              <a
                href="https://github.com/rxchallenger/rxchallenger.github.io/raw/refs/heads/main/download/rxchallenger.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Download Rx Challenger for Windows"
              >
                <img
                  src="/rx-challenger/windows.png"
                  alt="Download for Windows"
                  className="h-10"
                  width={140}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-dark-950/40 to-transparent" />
      </section>

      {/* Product Overview */}
      <section
        aria-label="Product overview"
        className="bg-dark-900/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
                Product Overview
              </p>
              <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What is{" "}
                <span className="text-gradient-gold">Rx Challenger</span>?
              </h2>
              <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
                Rx Challenger is an educational mobile and desktop application
                designed to help pharmacy graduates and professionals master
                prescription reading and interpretation through realistic,
                scenario-based training.
              </p>
              <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
                Developed by Ahmed Ezzat, a clinical pharmacist with a passion
                for improving pharmacy education, Rx Challenger aims to empower
                new graduates with practical skills to excel in their careers
                and bridge the gap between academic knowledge and practical
                expertise.
              </p>
              <p className="reveal delay-300 mt-4 text-base leading-relaxed text-muted-foreground">
                With real-world scenarios, anonymized data, and powerful
                learning tools, this app is the ultimate training companion for
                anyone in the pharmacy field.
              </p>
              <div className="reveal delay-300 mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-imc-gold/20 bg-imc-gold/5 px-3 py-1 text-xs font-medium text-imc-gold">
                  <Smartphone className="h-3 w-3" />
                  Android
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-xs font-medium text-sky-400">
                  <Cloud className="h-3 w-3" />
                  Cloud Sync
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-xs font-medium text-violet-400">
                  <Gamepad2 className="h-3 w-3" />
                  Gamified
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
                  <Star className="h-3 w-3" />
                  Free
                </span>
              </div>
            </div>
            <div className="reveal-right delay-200">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.08)_0%,_transparent_70%)]" />
                <img
                  src="/rx-challenger/left-image.png"
                  alt="Rx Challenger app interface showing prescription interpretation"
                  className="relative rounded-xl border border-white/[0.08] shadow-2xl"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        id="features"
        aria-label="Key features"
        className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Key Features
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to{" "}
              <span className="text-gradient-gold">master prescriptions</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Six powerful features designed to build your confidence and
              expertise in prescription interpretation.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`reveal delay-${Math.min((i + 1) * 100, 500)} group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} ring-1 ring-white/[0.06]`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section aria-label="Benefits" className="bg-dark-900/70 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Benefits
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why choose{" "}
              <span className="text-gradient-gold">Rx Challenger</span>?
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`reveal delay-${Math.min((i + 1) * 100, 500)} group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift`}
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-imc-gold/8 ring-1 ring-white/[0.06]">
                    <Icon className="h-5 w-5 text-imc-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section
        aria-label="Learning experience"
        className="bg-dark-950/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Learning Experience
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How Rx Challenger{" "}
              <span className="text-gradient-gold">teaches you</span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Our educational methodology is built on real-world pharmacy
              workflows and progressive skill building.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand the Patient",
                description:
                  "Start with the patient's medical history, chronic conditions, allergies, and past medications. Build context before reading the prescription.",
                icon: Stethoscope,
              },
              {
                step: "02",
                title: "Analyze the Prescription",
                description:
                  "Interpret the prescription using tooltip assistance — decode drug names, dosages, frequencies, and instructions with clinical context.",
                icon: ClipboardList,
              },
              {
                step: "03",
                title: "Connect Diagnosis to Treatment",
                description:
                  "Understand how the doctor's diagnosis guides prescription choices. See the full picture from symptoms to treatment plan.",
                icon: Activity,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className={`reveal delay-${(i + 1) * 100} relative rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift sm:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-extrabold text-imc-gold/20">
                      {item.step}
                    </span>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-imc-gold/8 ring-1 ring-white/[0.06]">
                      <Icon className="h-5 w-5 text-imc-gold" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
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

      {/* Testimonials */}
      <section
        aria-label="Testimonials"
        className="bg-dark-900/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Testimonials
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What professionals <span className="text-gradient-gold">say</span>
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal delay-${(i + 1) * 100} rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover-lift sm:p-8`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-white/[0.1]"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-imc-gold text-imc-gold"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform Application Section */}
      <section
        aria-label="Cross-platform application"
        className="bg-dark-950/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
              Cross-Platform Application
            </p>
            <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available on{" "}
              <span className="text-gradient-gold">
                Android, Windows, Linux &amp; PWA
              </span>
            </h2>
            <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
              Rx Challenger is a cross-platform application built for pharmacy
              professionals — on any device, anywhere.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="reveal-left group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-imc-gold/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-imc-gold/8 ring-1 ring-white/[0.06]">
                <Smartphone className="h-6 w-6 text-imc-gold" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Android Application
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Download Rx Challenger from the Google Play Store. Optimized for
                phones and tablets with a touch-friendly interface designed for
                mobile learning.
              </p>
              <div className="mt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-imc-gold transition-all duration-200 hover:gap-3"
                  aria-label="Get Rx Challenger on Google Play"
                >
                  <img
                    src="/rx-challenger/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-8"
                    width={120}
                    height={32}
                  />
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="reveal-right group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/8 ring-1 ring-white/[0.06]">
                <Monitor className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Windows Desktop
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Prefer learning on a bigger screen? Rx Challenger is also
                available as a Windows desktop application with full feature
                parity.
              </p>
              <div className="mt-6">
                <a
                  href="https://github.com/rxchallenger/rxchallenger.github.io/raw/refs/heads/main/download/rxchallenger.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-all duration-200 hover:gap-3"
                  aria-label="Download Rx Challenger for Windows"
                >
                  <img
                    src="/rx-challenger/windows.png"
                    alt="Download for Windows"
                    className="h-8"
                    width={120}
                    height={32}
                  />
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="reveal-left group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/8 ring-1 ring-white/[0.06]">
                <Terminal className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Linux Desktop
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Linux users can run Rx Challenger natively. Download the x86_64
                build and start mastering prescriptions on your preferred
                distribution.
              </p>
              <div className="mt-6">
                <a
                  href="https://github.com/rxchallenger/RxChallenger/raw/refs/heads/main/builds/linux/rxchallenger.x86_64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-all duration-200 hover:gap-3"
                  aria-label="Download Rx Challenger for Linux"
                >
                  <img
                    src="/rx-challenger/BadgeLinux.png"
                    alt="Download for Linux"
                    className="h-8"
                    width={120}
                    height={32}
                  />
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="reveal-right group rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/20 hover-lift sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/8 ring-1 ring-white/[0.06]">
                <Globe className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Progressive Web App
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                No download needed. Access Rx Challenger instantly from any
                modern browser with the Progressive Web App — installable and
                works offline.
              </p>
              <div className="mt-6">
                <a
                  href="https://rx-challenger.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-all duration-200 hover:gap-3"
                  aria-label="Open Rx Challenger Progressive Web App"
                >
                  <img
                    src="/rx-challenger/PWABadge.png"
                    alt="Open Rx Challenger PWA"
                    className="h-8"
                    width={120}
                    height={32}
                  />
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMC Ecosystem Positioning */}
      <section
        aria-label="Part of IMC ecosystem"
        className="bg-dark-900/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-scale mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.05)_0%,_transparent_70%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-gold/30 to-transparent" />
            <div className="relative text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-gold">
                Part of the IMC Ecosystem
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A Digital Solution developed within{" "}
                <span className="text-gradient-gold">IMC</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Rx Challenger is a flagship product of IMC&apos;s Digital
                Solutions & Technology unit — one of three business units that
                make up the Intelligent Mastery Coaching ecosystem.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/digital-solutions"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  Explore Digital Solutions
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  About IMC
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Get started"
        className="bg-dark-950/70 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal-scale mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.06)_0%,_transparent_70%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-gold/30 to-transparent" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to master prescription reading?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Download Rx Challenger for free and start building your
                prescription interpretation skills today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-imc-gold px-6 text-sm font-semibold text-dark-950 transition-all hover:bg-imc-gold/90 glow-gold"
                >
                  <Download className="h-4 w-4" />
                  Download Free
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-6 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06]"
                >
                  Contact Us
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
