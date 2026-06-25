import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { PricingSection } from "@/components/sections/pricing";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FeaturedCourseSection } from "@/components/sections/featured-course";
import { CTASection } from "@/components/sections/cta";
import { WebPageStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Close the Gap Between Education & Market Reality",
  description:
    "IMC is a tech-enabled ecosystem with three business units. Our flagship AI for Business — From Zero to Freelance Ready course, plus Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "IMC — Close the Gap Between Education & Market Reality",
    description:
      "IMC is a tech-enabled ecosystem with three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC — Close the gap between education and market reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMC — Close the Gap Between Education & Market Reality",
    description:
      "IMC is a tech-enabled ecosystem with three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <WebPageStructuredData
        title="IMC — Intelligent Mastery Coaching | Close the Gap"
        description="Close the gap between education and market reality with IMC's three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology."
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
        <FeaturedCourseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
