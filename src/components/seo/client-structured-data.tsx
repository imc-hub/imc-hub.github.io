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
  name: "IMC Corporate Capability Assessment",
  description:
    "20 multiple-choice questions across 5 key areas. Get your Corporate Readiness Score and personalized recommendations.",
  url: `${SITE_URL}/assessment`,
  creator: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
  educationalLevel: "Intermediate",
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
