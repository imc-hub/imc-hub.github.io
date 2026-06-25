"use client";

import { ArrowRight, Clock, CalendarDays, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNC5cyZQbvBBkCp1F95kk67BVlOP2K5Y8jrc3wwvsNOe9bhA/viewform";

export function FeaturedCourseSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-label="Featured course"
      className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            IMC Training Programs
          </p>
          <h2 className="reveal delay-100 mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our flagship:{" "}
            <span className="text-gradient-red">AI for Business</span>
          </h2>
          <p className="reveal delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
            IMC&apos;s primary active training program — from zero to freelance
            ready.
          </p>
        </div>

        <div className="reveal delay-300 mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-800/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="relative lg:col-span-2 overflow-hidden bg-dark-900/60">
              <img
                src="/AI for Business – From Zero to Freelance Ready.jpeg"
                alt="AI for Business – From Zero to Freelance Ready course poster"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800/40 lg:bg-gradient-to-l" />
            </div>
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                  Enrolling Now
                </span>
                <span className="inline-flex items-center rounded-full bg-imc-gold/10 px-2.5 py-0.5 text-xs font-semibold text-imc-gold ring-1 ring-imc-gold/20">
                  2000 EGP
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                AI for Business
              </h3>
              <p className="mt-1 text-sm font-medium text-imc-red">
                From Zero to Freelance Ready
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  Instructor:{" "}
                  <strong className="text-foreground">Mohamed Talaat</strong>
                </span>
                <span className="text-muted-foreground/50">·</span>
                <span>AI &amp; Business Strategist</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Master AI tools and build a freelance career from scratch.
                Designed for students, graduates, career changers, and
                professionals ready to leverage AI for business.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "7 modules: freelancing to project management",
                  "Weekend & weekday tracks available",
                  "Morning & evening timing options",
                  "4-hour focused sessions",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-imc-red" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="w-full bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold h-12 px-8 sm:w-auto"
                  asChild
                >
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/[0.1] text-foreground hover:bg-white/[0.06] h-12 px-8 sm:w-auto"
                  asChild
                >
                  <a href="/academy">View Academy</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick info bar */}
        <div className="reveal delay-400 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-white/[0.06] bg-dark-800/50 p-4 text-center">
            <CalendarDays className="mx-auto h-5 w-5 text-imc-red" />
            <p className="mt-2 text-sm font-semibold text-white">
              Weekend Track
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Sat · Mon · Wed
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-dark-800/50 p-4 text-center">
            <CalendarDays className="mx-auto h-5 w-5 text-imc-gold" />
            <p className="mt-2 text-sm font-semibold text-white">
              Weekday Track
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Sun · Tue · Thu
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-dark-800/50 p-4 text-center">
            <Sun className="mx-auto h-5 w-5 text-imc-gold" />
            <p className="mt-2 text-sm font-semibold text-white">Morning</p>
            <p className="mt-1 text-xs text-muted-foreground">
              10:00 AM – 2:00 PM
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-dark-800/50 p-4 text-center">
            <Moon className="mx-auto h-5 w-5 text-imc-red" />
            <p className="mt-2 text-sm font-semibold text-white">Evening</p>
            <p className="mt-1 text-xs text-muted-foreground">
              6:00 PM – 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
