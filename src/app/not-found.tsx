import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to the IMC homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center bg-dark-950">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-red">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-imc-red px-6 text-sm font-semibold text-white transition-all hover:bg-imc-red-dark glow-red"
      >
        Go back home
      </Link>
    </div>
  );
}
