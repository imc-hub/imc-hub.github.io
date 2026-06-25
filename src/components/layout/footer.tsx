import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.instagram.com/imc1hub",
    label: "Follow IMC on Instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61591257352541",
    label: "Follow IMC on Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/imc-hub/",
    label: "Follow IMC on LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

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
    <footer
      id="footer"
      className="relative border-t border-white/[0.06] bg-dark-950/80"
    >
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-imc-red/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
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

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, svg }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/[0.08] transition-all duration-200 hover:bg-imc-red/15 hover:ring-imc-red/30 hover:shadow-[0_0_12px_rgba(220,38,38,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imc-red/50"
                >
                  <span className="text-white transition-colors duration-200 group-hover:text-imc-red">
                    {svg}
                  </span>
                </a>
              ))}
            </div>
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
