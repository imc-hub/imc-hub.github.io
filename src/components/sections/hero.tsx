import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-imc-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-imc-teal)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-imc-gold)_0%,_transparent_50%)] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal sm:text-sm">
            Mastery Meets Market
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Close the gap between{" "}
            <span className="text-imc-teal">human potential</span> and{" "}
            <span className="text-imc-gold">corporate reality</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            IMC replaces theoretical entrepreneurship illusions with structured
            corporate readiness. Real solutions. Real skills. Real outcomes.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button
              size="lg"
              className="w-full bg-imc-teal text-white hover:bg-imc-teal-dark sm:w-auto"
              asChild
            >
              <Link href="/assessment">
                Start Free Assessment
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mx-auto lg:max-w-3xl">
          {[
            {
              label: "IMC Academy",
              desc: "Structured learning paths",
              color: "bg-imc-teal/10 border-imc-teal/20 text-imc-teal",
            },
            {
              label: "Corporate Solutions",
              desc: "Business transformation programs",
              color: "bg-imc-gold/10 border-imc-gold/20 text-imc-gold",
            },
            {
              label: "OCTRI",
              desc: "Mental & physical endurance",
              color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-xl border p-4 text-center ${item.color}`}
            >
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Trusted by forward-thinking organizations
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-40">
            {["TechCorp", "InnovateCo", "DataDriven", "GrowthLab", "NextGen"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm font-bold tracking-tight text-slate-300"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
