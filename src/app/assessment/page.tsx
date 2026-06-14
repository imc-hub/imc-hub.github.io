"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  questions,
  calculateScore,
  getReadinessLevel,
  categories,
} from "./data";
import { AssessmentClientStructuredData } from "@/components/seo/client-structured-data";

type View = "intro" | "quiz" | "results";

export default function AssessmentPage() {
  return (
    <>
      <AssessmentClientStructuredData />
      <AssessmentApp />
    </>
  );
}

function AssessmentApp() {
  const [view, setView] = useState<View>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;
  const selectedIdx = answers[question?.id];
  const isAnswered = selectedIdx !== undefined;

  const selectAnswer = (idx: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
  };

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      setView("results");
    }
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ((q) => q - 1);
  };

  const score = useMemo(() => calculateScore(answers), [answers]);
  const readiness = useMemo(
    () => getReadinessLevel(score.percentage),
    [score.percentage],
  );

  const resetQuiz = () => {
    setView("intro");
    setCurrentQ(0);
    setAnswers({});
  };

  if (view === "intro") {
    return (
      <div className="min-h-screen bg-dark-950">
        <header className="border-b border-white/[0.06] bg-dark-950/90 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="IMC Home"
            >
              <img
                src="/imc.jpeg"
                alt="IMC Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
              />
              <span className="hidden text-sm font-bold tracking-tight text-foreground sm:inline">
                IMC
              </span>
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-dark-700 ring-1 ring-white/[0.08]">
              <Target className="h-8 w-8 text-imc-red" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Capability & Readiness Assessment
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              20 multiple-choice questions across 5 key areas. Get your
              Capability Score and personalized recommendations mapped to our
              three business units.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: BarChart3, label: "20 Questions", sub: "MCQ format" },
              { icon: Clock, label: "~10 Minutes", sub: "Self-paced" },
              {
                icon: TrendingUp,
                label: "Instant Score",
                sub: "With breakdown",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/[0.06] bg-dark-800/50 p-5 text-center backdrop-blur-sm"
              >
                <item.icon className="mx-auto h-6 w-6 text-imc-red" />
                <p className="mt-2 text-sm font-bold text-white">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm">
            <h2 className="text-sm font-bold text-white">
              What you&apos;ll be assessed on:
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${cat.color}`} />
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold h-12 px-8"
              onClick={() => setView("quiz")}
            >
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-muted-foreground/60">
              Free forever. No sign-up required.
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (view === "quiz") {
    return (
      <div className="min-h-screen bg-dark-950">
        <header className="border-b border-white/[0.06] bg-dark-950/90 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Exit
            </button>
            <span className="text-sm font-medium text-foreground">
              Question {currentQ + 1} of {questions.length}
            </span>
          </div>
        </header>

        {/* Progress bar */}
        <div className="h-1 w-full bg-dark-700">
          <div
            className="h-full bg-imc-red transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
            {categories.find((c) => c.key === question.category)?.label}
          </p>
          <h2 className="mt-3 text-xl font-bold leading-relaxed text-white sm:text-2xl">
            {question.text}
          </h2>

          <div className="mt-8 space-y-3">
            {question.options.map((option, idx) => {
              const optionKey = `${question.id}-${idx}`;
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={optionKey}
                  type="button"
                  onClick={() => selectAnswer(idx)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-imc-red/40 bg-imc-red/5 ring-1 ring-imc-red/20"
                      : "border-white/[0.06] bg-dark-800/50 hover:border-white/[0.12] hover:bg-dark-800/80"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                      isSelected
                        ? "bg-imc-red text-white"
                        : "bg-dark-700 text-muted-foreground"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span
                    className={`text-sm transition-colors ${isSelected ? "font-medium text-white" : "text-muted-foreground"}`}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goPrev}
              disabled={currentQ === 0}
              className="border-white/[0.1] hover:bg-white/[0.06]"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={goNext}
              disabled={!isAnswered}
              className="bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold"
            >
              {currentQ === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Results Screen
  return (
    <div className="min-h-screen bg-dark-950">
      <header className="border-b border-white/[0.06] bg-dark-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="IMC Home"
          >
            <img
              src="/imc.jpeg"
              alt="IMC Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
            />
            <span className="hidden text-sm font-bold tracking-tight text-foreground sm:inline">
              IMC
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        {/* Score Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dark-700 ring-1 ring-white/[0.08]">
            <span className="text-2xl font-extrabold text-imc-red">
              {score.percentage}
            </span>
          </div>
          <p className="mt-2 text-xs font-medium text-muted-foreground/60">
            out of 100
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {readiness.level}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            {readiness.description}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="mt-12 rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 backdrop-blur-sm sm:p-8">
          <h2 className="text-lg font-bold text-white">Score Breakdown</h2>
          <div className="mt-6 space-y-5">
            {score.categories.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${cat.color}`}>
                    {cat.label}
                  </span>
                  <span className="font-bold text-white">
                    {cat.percentage}%
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-dark-700">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.percentage >= 75
                        ? "bg-emerald-500"
                        : cat.percentage >= 50
                          ? "bg-imc-gold"
                          : "bg-imc-red"
                    }`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 rounded-xl border border-imc-red/15 bg-imc-red/5 p-6 backdrop-blur-sm">
          <h2 className="text-base font-bold text-white">What&apos;s next?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {readiness.recommendation}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 to-dark-900/90 p-8 text-center sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to level up?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Based on your score, we recommend exploring our three business
              units — Corporate &amp; Business Training, Athletic Performance
              (OCTRI), and Digital Solutions &amp; Technology — to strengthen
              your capabilities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold h-12 px-8 sm:w-auto"
                asChild
              >
                <Link href="/#pricing">
                  View Plans & Pricing
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/[0.1] text-foreground hover:bg-white/[0.06] h-12 px-8 sm:w-auto"
                onClick={resetQuiz}
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/50">
          Share your score:{" "}
          <span className="font-bold text-imc-red">{score.percentage}/100</span>{" "}
          — IMC Capability &amp; Readiness Assessment
        </p>
      </main>
    </div>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
