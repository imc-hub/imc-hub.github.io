import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  WebPageStructuredData,
  FaqStructuredData,
} from "@/components/seo/structured-data";
import { DigitalSolutionsContent } from "./content";

const faqItems = [
  {
    question: "What is IMC Digital Solutions?",
    answer:
      "Digital Solutions & Technology is IMC's technology arm — building gamified EdTech platforms, mobile applications, and digital learning systems for organizations and end users.",
  },
  {
    question: "What is Rx Challenger?",
    answer:
      "Rx Challenger is our flagship mobile application that helps pharmacy professionals master prescription reading through gamified, real-world scenarios with adaptive difficulty.",
  },
  {
    question: "Do you build custom software for organizations?",
    answer:
      "Yes. We design and build custom digital learning solutions tailored to your organization's specific needs — from LMS platforms to mobile training apps.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, and React Native for cross-platform mobile development.",
  },
  {
    question: "How do I start a project with IMC?",
    answer:
      "Reach out via the Contact Us page. We'll schedule a discovery call to understand your objectives, scope, and timeline.",
  },
];

export const metadata: Metadata = {
  title: "Digital Solutions & Technology — Gamified EdTech & Mobile Apps",
  description:
    "IMC Digital Solutions builds gamified EdTech platforms, mobile applications, and digital learning systems. Our flagship product Rx Challenger helps pharmacy professionals master prescription reading.",
  alternates: {
    canonical: "/digital-solutions",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/digital-solutions",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Digital Solutions & Technology — Gamified EdTech & Mobile Apps",
    description:
      "IMC Digital Solutions builds gamified EdTech platforms, mobile applications, and digital learning systems.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Digital Solutions & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions & Technology — Gamified EdTech & Mobile Apps",
    description:
      "IMC Digital Solutions builds gamified EdTech platforms, mobile applications, and digital learning systems.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function DigitalSolutionsPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Digital Solutions & Technology — IMC"
        description="IMC Digital Solutions builds gamified EdTech platforms, mobile applications, and digital learning systems."
        url="https://imc-hub.github.io/digital-solutions"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          {
            name: "Digital Solutions & Technology",
            item: "https://imc-hub.github.io/digital-solutions",
          },
        ]}
      />
      <FaqStructuredData questions={faqItems} />
      <DigitalSolutionsContent />
    </PageLayout>
  );
}
