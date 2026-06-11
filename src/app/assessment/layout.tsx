import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability & Readiness Assessment — Free 10-Min Quiz",
  description:
    "Take IMC's free Capability & Readiness Assessment. 20 multiple-choice questions across 5 key areas. Get your score and personalized recommendations mapped to our three business units.",
  alternates: {
    canonical: "/assessment",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/assessment",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Capability & Readiness Assessment — Free 10-Min Quiz",
    description:
      "Take IMC's free Capability & Readiness Assessment. 20 MCQs across 5 key areas. Get your score and recommendations mapped to our three business units.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Capability & Readiness Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capability & Readiness Assessment — Free 10-Min Quiz",
    description:
      "Take IMC's free Capability & Readiness Assessment. 20 MCQs across 5 key areas.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
