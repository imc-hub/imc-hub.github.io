import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { PricingSection } from "@/components/sections/pricing";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { WebPageStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Close the Gap Between Human Potential & Corporate Reality",
  description:
    "IMC helps students, career changers, and companies build real-world readiness through structured coaching, business simulations, skill development, and corporate training programs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "IMC — Close the Gap Between Human Potential & Corporate Reality",
    description:
      "IMC helps students, career changers, and companies build real-world readiness through structured coaching, business simulations, skill development, and corporate training programs.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC — Close the gap between human potential and corporate reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMC — Close the Gap Between Human Potential & Corporate Reality",
    description:
      "IMC helps students, career changers, and companies build real-world readiness through structured coaching, business simulations, skill development, and corporate training programs.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <WebPageStructuredData
        title="IMC — Intelligent Mastery Coaching | Mastery Meets Market"
        description="Close the gap between human potential and corporate reality with IMC's structured coaching, simulations, and skill development."
        url="https://imc-hub.github.io/"
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <EcosystemSection />
        <PricingSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
