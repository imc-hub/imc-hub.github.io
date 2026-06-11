"use client";

import { useEffect } from "react";

interface JsonLdData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export function ClientStructuredData({ data }: { data: JsonLdData }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
  return null;
}

const SITE_URL = "https://imc-hub.github.io";

const assessmentQuizData: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "IMC Capability & Readiness Assessment",
  description:
    "20 multiple-choice questions across 5 key areas: business acumen, professional skills, technical literacy, workplace communication, and corporate mindset. Get your Capability Score and personalized recommendations mapped to IMC's three business units.",
  url: `${SITE_URL}/assessment`,
  creator: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
  educationalLevel: "Intermediate",
  assesses: [
    "Capability assessment",
    "Business acumen",
    "Professional skills",
    "Technical literacy",
    "Workplace communication",
    "Corporate mindset",
  ],
};

export function AssessmentClientStructuredData() {
  return <ClientStructuredData data={assessmentQuizData} />;
}

export function WebPageClientStructuredData({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data: JsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
  return <ClientStructuredData data={data} />;
}

export function FaqClientStructuredData({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const data: JsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
  return <ClientStructuredData data={data} />;
}
