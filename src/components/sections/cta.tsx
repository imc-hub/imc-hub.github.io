import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="scroll-mt-20 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-imc-navy p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to close the gap?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Take the free career assessment and discover your professional
            identity. No credit card required. No fluff.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <Button
              size="lg"
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white sm:w-auto"
              asChild
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Free assessment takes 15 minutes. Get your readiness score
            instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
