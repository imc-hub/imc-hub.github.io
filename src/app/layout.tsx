import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data";
import InstallPrompt from "@/components/pwa/install-prompt";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://imc-hub.github.io";
const SITE_NAME = "IMC — Intelligent Mastery Coaching";
const SITE_DESCRIPTION =
  "IMC is a tech-enabled ecosystem that builds human potential through three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Intelligent Mastery Coaching",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "corporate training",
    "capability development",
    "career readiness",
    "corporate solutions",
    "business transformation",
    "workforce development",
    "talent development",
    "athletic performance",
    "triathlon training",
    "mental toughness",
    "EdTech platforms",
    "gamified learning",
    "digital solutions",
    "professional development",
    "career assessment",
    "organizational development",
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
      me: ["imc.hub.eg@gmail.com"],
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
        {/* Favicon — standard ICO for browsers & Google Search */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Theme & PWA */}
        <meta name="theme-color" content="#0b1d3a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Security Headers (meta-tag fallbacks) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        {/* Structured Data */}
        <OrganizationStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
        <InstallPrompt />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .catch(function() {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
