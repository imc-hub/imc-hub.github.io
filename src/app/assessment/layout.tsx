import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Readiness Assessment — Free 10-Min Quiz",
  description:
    "Take IMC's free Corporate Readiness Assessment. 20 multiple-choice questions across 5 key areas. Get your score and personalized recommendations in ~10 minutes.",
  alternates: {
    canonical: "/assessment",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/assessment",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Career Readiness Assessment — Free 10-Min Quiz",
    description:
      "Take IMC's free Corporate Readiness Assessment. 20 multiple-choice questions across 5 key areas. Get your score and personalized recommendations.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Career Readiness Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Readiness Assessment — Free 10-Min Quiz",
    description:
      "Take IMC's free Corporate Readiness Assessment. 20 multiple-choice questions across 5 key areas.",
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
