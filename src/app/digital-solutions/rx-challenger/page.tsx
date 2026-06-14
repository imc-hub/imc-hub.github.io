import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  WebPageStructuredData,
  FaqStructuredData,
} from "@/components/seo/structured-data";
import { RxChallengerPageContent } from "./content";

const faqItems = [
  {
    question: "What is Rx Challenger?",
    answer:
      "Rx Challenger is a gamified mobile application for pharmacy graduates and professionals to master prescription reading using real-world, anonymized patient scenarios with context-rich clinical data.",
  },
  {
    question: "Who is Rx Challenger for?",
    answer:
      "Rx Challenger is designed for pharmacy graduates, new pharmacy hires, pharmacy managers training staff, senior pharmacists seeking a refresher, and product managers in the pharmacy space.",
  },
  {
    question: "What platforms does Rx Challenger run on?",
    answer:
      "Rx Challenger is available on Android via Google Play Store and on Windows as a desktop application.",
  },
  {
    question: "Is Rx Challenger free?",
    answer: "Yes, Rx Challenger is completely free to download and use.",
  },
  {
    question: "What features does Rx Challenger include?",
    answer:
      "Rx Challenger features real anonymized prescriptions, cloud progress saving, tooltip assistance with patient history, chief complaints, and diagnosis modules.",
  },
  {
    question: "Is Rx Challenger part of IMC?",
    answer:
      "Yes. Rx Challenger is a Digital Solution developed within the IMC ecosystem by IMC's Digital Solutions & Technology unit.",
  },
];

export const metadata: Metadata = {
  title: "Rx Challenger | Mobile Learning Application | IMC Digital Solutions",
  description:
    "Rx Challenger is a gamified mobile application that helps pharmacy graduates and professionals master prescription reading through real-world, anonymized patient scenarios. Developed within the IMC ecosystem.",
  alternates: {
    canonical: "/digital-solutions/rx-challenger",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/digital-solutions/rx-challenger",
    siteName: "IMC — Intelligent Mastery Coaching",
    title:
      "Rx Challenger | Mobile Learning Application | IMC Digital Solutions",
    description:
      "Master prescription deciphering with Rx Challenger — a gamified mobile application for pharmacy education. Real anonymized prescriptions, adaptive learning, cloud sync.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rx Challenger — Mobile Learning Application by IMC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rx Challenger | Mobile Learning Application | IMC Digital Solutions",
    description:
      "Master prescription deciphering with Rx Challenger — a gamified mobile application for pharmacy education developed within the IMC ecosystem.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function RxChallengerPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Rx Challenger | Mobile Learning Application | IMC Digital Solutions"
        description="Rx Challenger is a gamified mobile application that helps pharmacy graduates and professionals master prescription reading through real-world, anonymized patient scenarios."
        url="https://imc-hub.github.io/digital-solutions/rx-challenger"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          {
            name: "Digital Solutions & Technology",
            item: "https://imc-hub.github.io/digital-solutions",
          },
          {
            name: "Rx Challenger",
            item: "https://imc-hub.github.io/digital-solutions/rx-challenger",
          },
        ]}
      />
      <FaqStructuredData questions={faqItems} />
      <RxChallengerPageContent />
    </PageLayout>
  );
}
