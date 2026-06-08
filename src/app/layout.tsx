import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://imc-hub.github.io";
const SITE_NAME = "IMC — Intelligent Mastery Coaching";
const SITE_DESCRIPTION =
  "Close the gap between human potential and corporate reality. IMC helps students, career changers, and companies build real-world readiness through structured coaching, simulations, and skill development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Intelligent Mastery Coaching",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "career coaching",
    "corporate readiness",
    "skills training",
    "business simulation",
    "career development",
    "professional training",
    "pharmacy education",
    "Rx Challenger",
    "corporate simulator",
    "career assessment",
    "workplace readiness",
    "IMC Academy",
  ],
  authors: [{ name: "IMC — Intelligent Mastery Coaching", url: SITE_URL }],
  creator: "IMC — Intelligent Mastery Coaching",
  publisher: "IMC — Intelligent Mastery Coaching",
  applicationName: "IMC — Intelligent Mastery Coaching",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "IMC — Close the gap between human potential and corporate reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@imc_hub",
    creator: "@imc_hub",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
    other: {
      me: ["hello@imc-hub.com"],
    },
  },
  appleWebApp: {
    capable: true,
    title: "IMC",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/imc.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/imc.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#0b1d3a" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        <OrganizationStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
