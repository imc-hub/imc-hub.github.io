"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, BarChart3, Target, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { questions, calculateScore, getReadinessLevel, categories } from "./data";
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
  const readiness = useMemo(() => getReadinessLevel(score.percentage), [score.percentage]);

  const resetQuiz = () => {
    setView("intro");
    setCurrentQ(0);
    setAnswers({});
  };

  // ── Intro Screen ──
  if (view === "intro") {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2.5" aria-label="IMC Home">
              <img src="/imc.jpeg" alt="IMC Logo" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
              <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
                Intelligent Mastery Coaching
              </span>
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-imc-navy">
              <Target className="h-8 w-8 text-imc-teal" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Corporate Readiness Assessment
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              20 multiple-choice questions across 5 key areas. Get your Corporate Readiness Score and personalized recommendations in ~10 minutes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: BarChart3, label: "20 Questions", sub: "MCQ format" },
              { icon: Clock, label: "~10 Minutes", sub: "Self-paced" },
              { icon: TrendingUp, label: "Instant Score", sub: "With breakdown" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/60 bg-card p-5 text-center">
                <item.icon className="mx-auto h-6 w-6 text-imc-teal" />
                <p className="mt-2 text-sm font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-sm font-bold text-foreground">What you&apos;ll be assessed on:</h2>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {categories.map((cat) => (
                <div key={cat.key} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${cat.color}`} />
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-imc-teal text-white hover:bg-imc-teal-dark"
              onClick={() => setView("quiz")}
            >
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Free forever. No sign-up required.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // ── Quiz Screen ──
  if (view === "quiz") {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <button onClick={resetQuiz} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Exit
            </button>
            <span className="text-sm font-medium text-foreground">
              Question {currentQ + 1} of {questions.length}
            </span>
          </div>
        </header>

        {/* Progress bar */}
        <div className="h-1 w-full bg-border/40">
          <div
            className="h-full bg-imc-teal transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
            {categories.find((c) => c.key === question.category)?.label}
          </p>
          <h2 className="mt-3 text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
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
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-imc-teal bg-imc-teal/5 ring-1 ring-imc-teal/30"
                      : "border-border/60 bg-card hover:border-imc-teal/30 hover:bg-secondary/50"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      isSelected
                        ? "bg-imc-teal text-white"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className={`text-sm ${isSelected ? "font-medium text-foreground" : "text-muted-foreground"}`}>
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
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={goNext}
              disabled={!isAnswered}
              className="bg-imc-teal text-white hover:bg-imc-teal-dark"
            >
              {currentQ === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // ── Results Screen ──
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="IMC Home">
            <img src="/imc.jpeg" alt="IMC Logo" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
              Intelligent Mastery Coaching
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        {/* Score Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-imc-navy">
            <span className="text-2xl font-extrabold text-imc-teal">{score.percentage}</span>
          </div>
          <p className="mt-2 text-xs font-medium text-muted-foreground">out of 100</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {readiness.level}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            {readiness.description}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="mt-12 rounded-xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Score Breakdown</h2>
          <div className="mt-6 space-y-5">
            {score.categories.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${cat.color}`}>{cat.label}</span>
                  <span className="font-bold text-foreground">{cat.percentage}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.percentage >= 75
                        ? "bg-emerald-500"
                        : cat.percentage >= 50
                        ? "bg-imc-gold"
                        : "bg-red-400"
                    }`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 rounded-xl border border-imc-teal/20 bg-imc-teal/5 p-6">
          <h2 className="text-base font-bold text-foreground">What&apos;s next?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {readiness.recommendation}
          </p>
        </div>

        {/* CTA to Pricing */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-imc-navy p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to level up?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-300">
            Based on your score, we recommend exploring our structured programs to strengthen your corporate readiness.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-imc-teal text-white hover:bg-imc-teal-dark sm:w-auto"
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
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white sm:w-auto"
              onClick={resetQuiz}
            >
              Retake Assessment
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Share your score: <span className="font-bold text-imc-teal">{score.percentage}/100</span> — IMC Corporate Readiness Assessment
        </p>
      </main>
    </div>
  );
}

// Clock icon for intro
function Clock(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
