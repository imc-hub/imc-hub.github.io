import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with IMC",
  description:
    "Contact IMC for inquiries about coaching, partnerships, or support. Reach us by email or fill out our contact form. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/contact",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Contact Us — Get in Touch with IMC",
    description:
      "Contact IMC for inquiries about coaching, partnerships, or support. Reach us by email or fill out our contact form.",
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
    title: "Contact Us — Get in Touch with IMC",
    description:
      "Contact IMC for inquiries about coaching, partnerships, or support.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
