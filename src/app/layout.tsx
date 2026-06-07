import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMC — Intelligent Mastery Coaching | Mastery Meets Market",
  description:
    "Close the gap between human potential and corporate reality. IMC helps students, career changers, and companies build real-world readiness through structured coaching, simulations, and skill development.",
  keywords: [
    "career coaching",
    "corporate readiness",
    "skills training",
    "business simulation",
    "career development",
    "professional training",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
