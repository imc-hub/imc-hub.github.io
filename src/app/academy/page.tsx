import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  WebPageStructuredData,
  FaqStructuredData,
} from "@/components/seo/structured-data";
import { AcademyContent } from "./content";

const faqItems = [
  {
    question: "What is IMC Academy?",
    answer:
      "IMC Academy is our Corporate & Business Training hub — offering structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development. It is one of IMC's three business units, alongside Athletic Performance (OCTRI) and Digital Solutions & Technology.",
  },
  {
    question: "What courses are available?",
    answer:
      "Our Business Readiness Track is currently available, with Data Analysis & AI Skills, Corporate Soft Skills, and Industry Certifications tracks coming soon.",
  },
  {
    question: "How are IMC Academy courses delivered?",
    answer:
      "All courses are delivered online through our platform. Self-paced learning tracks are accessible on any device. Corporate training programs can be delivered as facilitated virtual workshops or blended learning experiences.",
  },
  {
    question: "When will new courses launch?",
    answer:
      "We're actively developing our Data Analysis & AI, Corporate Soft Skills, and Industry Certifications tracks. Contact us to get notified when each course becomes available.",
  },
  {
    question: "Is IMC Academy free to use?",
    answer:
      "Foundational content and the Business Readiness Track are available at no cost. We believe everyone deserves access to quality career preparation. Advanced corporate modules and certification tracks may have associated pricing, but core readiness tools remain free.",
  },
  {
    question: "How do I get support?",
    answer:
      "For general inquiries, reach out via the Contact Us page or email imc.hub.eg@gmail.com.",
  },
];

export const metadata: Metadata = {
  title: "IMC Academy — Corporate & Business Training",
  description:
    "IMC Academy is our Corporate & Business Training hub — structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/academy",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "IMC Academy — Corporate & Business Training",
    description:
      "Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Academy — Corporate & Business Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMC Academy — Corporate & Business Training",
    description:
      "Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function AcademyPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="IMC Academy — Corporate & Business Training"
        description="Structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development."
        url="https://imc-hub.github.io/academy"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "IMC Academy", item: "https://imc-hub.github.io/academy" },
        ]}
      />
      <FaqStructuredData questions={faqItems} />
      <AcademyContent />
    </PageLayout>
  );
}
