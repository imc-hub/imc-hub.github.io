# IMC Website — Project Context

## What This Is

IMC (Intelligent Mastery Coaching) corporate website. Static Next.js 16 site exported as plain HTML/CSS/JS, deployed to GitHub Pages.

**Live URL:** https://imc-hub.github.io/
**Repo:** https://github.com/imc-hub/imc-hub.github.io

## Tech Stack

- **Framework:** Next.js 16.2.7 (App Router, React 19) — static export only
- **Styling:** Tailwind CSS v4, shadcn/ui (base-nova), `@base-ui/react` primitives
- **Icons:** Lucide React
- **Node:** 20.20.2 (v18 not supported; SWC via `@next/swc-wasm-nodejs`)
- **Deployment:** GitHub Actions → GitHub Pages (source: "GitHub Actions")

## Project Structure

```
src/app/
├── layout.tsx              # Root layout (metadata, fonts, PWA, JSON-LD)
├── globals.css             # Tailwind + CSS theme variables
├── page.tsx                # Homepage (Hero, Stats, Ecosystem, Pricing, etc.)
├── not-found.tsx           # 404 (noindex)
├── about/page.tsx          # Mission, vision, principles, team (w/ LinkedIn links)
├── academy/page.tsx        # Corporate & Business Training
├── digital-solutions/page.tsx  # Digital Solutions & Technology (Rx Challenger)
├── assessment/page.tsx     # Career readiness quiz (client component)
├── contact/page.tsx        # Contact form (EmailJS, client component)
├── privacy/page.tsx        # Privacy Policy
├── terms/page.tsx          # Terms of Service
├── sitemap.ts              # Dynamic sitemap.xml
├── robots.ts               # robots.txt
├── assessment/layout.tsx   # Metadata wrapper for client page
└── contact/layout.tsx      # Metadata wrapper for client page
src/components/
├── layout/                 # header.tsx, footer.tsx, page-layout.tsx
├── sections/               # hero, stats, ecosystem, pricing, how-it-works, testimonials, cta
├── seo/                    # structured-data.tsx (server), client-structured-data.tsx
├── pwa/                    # install-prompt.tsx, update-toast.tsx
└── ui/                     # button, card, input, label, textarea, toast
src/lib/utils.ts            # cn() = twMerge(clsx())
scripts/                    # postbuild.mjs, serve.mjs
public/                     # favicon.ico, favicon-16/32.png, og-image.png, imc.jpeg,
                            # manifest.json, sw.js, icons/, google62c9fc6ba2ba8b2e.html
```

## Key Architecture Rules

- **Static export only** — no server, no Server Actions, no dynamic route handlers
- **No `next/image` default loader** — use plain `<img>` tags; images in `public/`
- **Event handlers require `"use client"`** — `onClick`, `onSubmit`, `onChange` break static export in server components
- **Client components can't export `metadata`** — use a sibling `layout.tsx` wrapper
- **basePath** — none for `.github.io` repos; `/repo-name` for project repos
- **CSS theme vars:** `--color-imc-navy: #0b1d3a`, `--color-imc-teal: #00b4d8`, `--color-imc-gold: #f5a623`

## Navigation

- **Header:** About → Academy → Digital Solutions → Ecosystem (#) → How It Works (#) → Contact
- **Header CTA:** "Get Started" → `/assessment`
- **Footer Product:** Academy, Digital Solutions, Ecosystem, How It Works, Pricing
- **Footer Company:** About, Contact
- **Footer Legal:** Terms, Privacy

## Business Units

1. **Corporate & Business Training** → `/academy`
2. **Athletic Performance (OCTRI)** → External link
3. **Digital Solutions & Technology** → `/digital-solutions` (Rx Challenger)

## Build & Deploy

```bash
npm ci && npm run build    # output → out/
```

Push to `main` triggers GitHub Actions. Pages source **must** be "GitHub Actions" in repo settings.

## SEO (All Implemented)

- Unique titles/descriptions per page, canonical URLs, OG + Twitter Cards
- XML sitemap (10 routes), robots.txt with sitemap + host
- JSON-LD: Organization, WebSite, WebPage, FAQPage, Course, SoftwareApplication, Quiz, Reviews
- Favicon: ICO + 16×16 + 32×32 PNG; OG image: 1200×630
- Semantic HTML, `aria-label`, image `alt`/`width`/`height`, `preconnect` for fonts

## PWA (Live)

- Workbox 7.3.0 service worker: precache (8 routes) + runtime caching
- HTML: NetworkFirst (5min), CSS/JS: StaleWhileRevalidate, Images: CacheFirst
- Install prompt: Android Chrome only (returns `null` on iOS)
- Update flow: `UpdateToast` → `SKIP_WAITING` → auto-reload

### iOS Gotchas (Do NOT)

1. `viewport-fit=cover` — breaks Safari layout
2. `overflow-x: hidden` on `<html>` — breaks Safari CSS
3. `dvh` units — use `min-h-screen`
4. `backdrop-blur` on fixed elements — Chrome iOS scroll bugs
5. `position: fixed` banners — Chrome iOS extra scroll space
6. `beforeinstallprompt` on iOS — not supported
7. `black-translucent` status bar — use `default`
8. Inline `lineHeight:0` / `fontSize:0` hacks — breaks Android Chrome
9. Parent DOM manipulation from child components
10. Install prompt on iOS — must return `null`

## Security

- Email validation regex + length checks on contact form
- Meta-tag security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- No XSS/injection vectors (fully static, no user input in `dangerouslySetInnerHTML`)
- All `target="_blank"` links use `rel="noopener noreferrer"`
- Semgrep SAST: zero findings
- Known: PostCSS CVE (build-time only, low risk); no HTTP CSP (GitHub Pages limitation)

## EmailJS Credentials (Hardcoded — Public Keys)

```typescript
const EMAILJS_PUBLIC_KEY = "AteCKovi3Grb7o0eM";
const EMAILJS_SERVICE_ID = "service_9adw98r";
const EMAILJS_TEMPLATE_ID = "template_2d2xcc4";
```

**Why hardcoded:** CI builds don't have `.env.local`. `NEXT_PUBLIC_*` env vars must be in GitHub Secrets or hardcoded for public client-side keys.

## Key Patterns

- **New page:** `src/app/<slug>/page.tsx` → wrap in `<PageLayout>` → add nav links in header + footer
- **Client component metadata:** Create sibling `layout.tsx` exporting `metadata`
- **Images:** `public/` folder → `/filename.ext` (no `next/image`)
- **Logo:** Replace `public/imc.jpeg`; header/footer reference `/imc.jpeg`
- **CI ≠ local:** `.env.local` unavailable in GitHub Actions; hardcode public keys or use Secrets

## Key URLs

| Asset       | Path                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| Favicon ICO | `/favicon.ico`                                                           |
| Favicon PNG | `/favicon-16x16.png`, `/favicon-32x32.png`                               |
| OG Image    | `https://imc-hub.github.io/og-image.png`                                 |
| Logo        | `/imc.jpeg`                                                              |
| PWA Icons   | `/icons/icon-192.png`, `/icons/icon-512.png`, `/icons/icon-maskable.png` |
| Apple Touch | `/icons/apple-touch-icon.png`                                            |
| GSC Verify  | `/google62c9fc6ba2ba8b2e.html`                                           |

## Session Notes

### 2026-06-14 — Page Architecture Refactor & Mobile/A11y Audit

**Page Structure Refactor:**

- Extracted all page content into separate `content.tsx` client components: `about`, `academy`, `contact`, `digital-solutions`
- Each page now follows the pattern: `page.tsx` (server, metadata) → `content.tsx` (client, interactive) wrapped in `<PageLayout>`
- Created new `/digital-solutions` page with full content (hero, Rx Challenger showcase, offerings, tech stack, process, FAQ, CTA)
- Created `src/app/academy/content.tsx` and `src/app/contact/content.tsx` as client content files
- Deleted empty `src/app/contact/layout.tsx` (was unused; metadata moved to `page.tsx`)

**Mobile Optimization & Accessibility Fixes:**

- Added viewport meta tag (`width=device-width, initial-scale=1`) to root layout — was missing, causing broken mobile rendering
- Added skip-to-content link (visually hidden, visible on keyboard focus) linking to `#main-content` on `<main>` in `PageLayout`
- Added `id="main-content"` to `<main>` element in `PageLayout` component
- Added `aria-label` to all `<section>` elements across all pages (~30 sections)
- Added `overflow-x: hidden` on `html` to prevent horizontal scrollbar from decorative elements
- Extended `prefers-reduced-motion` to cover CSS transitions (not just animations) using `*` selector
- Added `.sr-only` / `.focus:not-sr-only` utility classes for skip link styling
- Fixed infinite page refresh bug: removed auto-reload SW registration script from layout (the `/sw.js` was reloading on every first visit)

**Build:** 12 routes prerendered, zero TypeScript errors, zero build errors
