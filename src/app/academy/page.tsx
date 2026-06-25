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
      "IMC Academy is our Corporate & Business Training hub — home to our flagship program AI for Business — From Zero to Freelance Ready, plus the Business Readiness Track. It is one of IMC's three business units, alongside Athletic Performance (OCTRI) and Digital Solutions & Technology.",
  },
  {
    question: "What courses are available?",
    answer:
      "Our flagship program AI for Business — From Zero to Freelance Ready is currently enrolling. The Business Readiness Track is also available for corporate preparation.",
  },
  {
    question: "How are IMC Academy courses delivered?",
    answer:
      "All courses are delivered online through our platform. Self-paced learning tracks are accessible on any device. Corporate training programs can be delivered as facilitated virtual workshops or blended learning experiences.",
  },
  {
    question: "How much does the AI for Business course cost?",
    answer:
      "The AI for Business — From Zero to Freelance Ready program is 2000 EGP, covering the full training from fundamentals to freelance readiness.",
  },
  {
    question: "Who is the AI for Business course for?",
    answer:
      "The course is designed for students, graduates, career changers, freelancers, and professionals interested in leveraging AI for business and building a freelance career.",
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
    "IMC Academy is our Corporate & Business Training hub — AI for Business — From Zero to Freelance Ready, Business Readiness Track, and professional development.",
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/academy",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "IMC Academy — Corporate & Business Training",
    description:
      "AI for Business — From Zero to Freelance Ready, Business Readiness Track, and professional development programs.",
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
      "AI for Business — From Zero to Freelance Ready, Business Readiness Track, and professional development programs.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function AcademyPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="IMC Academy — Corporate & Business Training"
        description="AI for Business — From Zero to Freelance Ready, Business Readiness Track, and professional development programs."
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
