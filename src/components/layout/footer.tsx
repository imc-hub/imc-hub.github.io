import Link from "next/link";

const footerLinks = {
  product: [
    { href: "/academy", label: "Academy" },
    { href: "/digital-solutions", label: "Digital Solutions" },
    { href: "/#ecosystem", label: "Ecosystem" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Declaration" },
    { href: "/sitemap", label: "Sitemap" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-950/80">
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-red/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="IMC — Home"
            >
              <img
                src="/imc.jpeg"
                alt="IMC — Intelligent Mastery Coaching"
                className="h-8 w-8 rounded-lg object-cover ring-1 ring-white/10"
                width={32}
                height={32}
              />
              <span className="text-sm font-bold text-foreground tracking-tight">
                IMC
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[260px]">
              Close the gap between human potential and corporate reality.
            </p>
          </div>

          <nav aria-label="Product links">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} IMC — Intelligent Mastery
            Coaching. All rights reserved.
          </p>
          <p className="text-xs font-medium text-muted-foreground/40 tracking-wider">
            Mastery Meets Market.
          </p>
        </div>
      </div>
    </footer>
  );
}
