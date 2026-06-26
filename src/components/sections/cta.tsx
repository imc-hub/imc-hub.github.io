"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CTASection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="get-started"
      aria-label="Get started"
      className="scroll-mt-20 bg-dark-950/70 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale relative mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-dark-800/80 via-dark-900/90 to-dark-800/80 p-8 text-center backdrop-blur-sm sm:p-12 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.12)_0%,_transparent_70%)]" />
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-red/30 to-transparent" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to <span className="text-gradient-red">close the gap?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Take the free capability assessment and discover where you fit
              across our three business units — Corporate &amp; Business
              Training, Athletic Performance, and Digital Solutions &amp;
              Technology.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold h-12 px-8 sm:w-auto"
                asChild
              >
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/50">
              Free assessment takes 15 minutes. Get your readiness score
              instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
