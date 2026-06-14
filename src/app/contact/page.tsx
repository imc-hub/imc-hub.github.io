import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Reach out to IMC about Corporate & Business Training, Athletic Performance (OCTRI), Digital Solutions & Technology, or partnerships. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/contact",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Contact Us — IMC Intelligent Mastery Coaching",
    description:
      "Reach out to IMC about Corporate & Business Training, Athletic Performance (OCTRI), Digital Solutions & Technology, or partnerships.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact IMC — Intelligent Mastery Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — IMC Intelligent Mastery Coaching",
    description:
      "Reach out to IMC about Corporate & Business Training, Athletic Performance (OCTRI), Digital Solutions & Technology, or partnerships.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Contact Us — IMC Intelligent Mastery Coaching"
        description="Reach out to IMC about Corporate & Business Training, Athletic Performance (OCTRI), Digital Solutions & Technology, or partnerships."
        url="https://imc-hub.github.io/contact"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "Contact Us", item: "https://imc-hub.github.io/contact" },
        ]}
      />
      <ContactContent />
    </PageLayout>
  );
}
