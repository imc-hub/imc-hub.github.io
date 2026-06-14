import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "About Us — Mission, Vision & Team",
  description:
    "Learn about IMC's mission to close the gap between education and market reality. Discover our three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/about",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "About Us — IMC Intelligent Mastery Coaching",
    description:
      "IMC is a tech-enabled ecosystem with three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC — Intelligent Mastery Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — IMC Intelligent Mastery Coaching",
    description:
      "IMC is a tech-enabled ecosystem with three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="About Us — IMC Intelligent Mastery Coaching"
        description="Learn about IMC's mission to close the gap between education and market reality. Meet our team and discover our three business units."
        url="https://imc-hub.github.io/about"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "About Us", item: "https://imc-hub.github.io/about" },
        ]}
      />
      <AboutPageContent />
    </PageLayout>
  );
}
