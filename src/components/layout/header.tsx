"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/digital-solutions", label: "Digital Solutions" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="IMC — Home"
        >
          <img
            src="/imc.jpeg"
            alt="IMC — Intelligent Mastery Coaching"
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-imc-red/40 transition-all duration-300"
            width={36}
            height={36}
          />
          <span className="hidden text-sm font-bold tracking-tight text-foreground sm:inline">
            IMC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-imc-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            size="sm"
            className="bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold tracking-wide"
            asChild
          >
            <Link href="/assessment">
              Get Started
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="relative h-5 w-5">
            <Menu
              className={cn(
                "h-5 w-5 absolute inset-0 transition-all duration-300",
                mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
              )}
            />
            <X
              className={cn(
                "h-5 w-5 absolute inset-0 transition-all duration-300",
                mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 bg-dark-950/98 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 pt-6 h-full overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-foreground/80 transition-all duration-200 hover:text-foreground hover:bg-white/[0.04]",
                mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
              )}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.06] pt-6 pb-8">
            <Button
              size="lg"
              className="w-full bg-imc-red text-white hover:bg-imc-red-dark glow-red font-semibold"
              asChild
            >
              <Link href="/assessment" onClick={() => setMobileOpen(false)}>
                Get Started
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              asChild
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
