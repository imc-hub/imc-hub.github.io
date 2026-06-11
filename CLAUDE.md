# IMC Website — Project Context

## What This Is

IMC (Intelligent Mastery Coaching) corporate website. A static site built with Next.js 16, exported as plain HTML/CSS/JS and deployed to GitHub Pages.

**Live URL:** https://imc-hub.github.io/
**Repo:** https://github.com/imc-hub/imc-hub.github.io

## Tech Stack

- **Framework:** Next.js 16.2.7 (App Router, React 19)
- **Styling:** Tailwind CSS v4 with custom theme
- **UI shadcn/ui** (base-nova style) — Button, Card, Input, Label, Textarea
- **Base UI:** `@base-ui/react` for headless primitives (Button, Input)
- **Icons:** Lucide React
- **Build:** Static export (`output: 'export'`), no server
- **Node:** 20.20.2 (required by Next.js 16; v18 is NOT supported)
- **Deployment:** GitHub Actions → `actions/deploy-pages` (Pages source must be "GitHub Actions")

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Inter font, CSS vars, <html>/<body>)
│   ├── globals.css         # Tailwind import, theme, light/dark variables
│   ├── page.tsx            # Homepage (Hero, Stats, Ecosystem, Pricing, HowItWorks, Testimonials, CTA)
│   ├── not-found.tsx       # 404 page
│   ├── imc.jpeg            # IMC logo image (also copied to public/imc.jpeg)
│   ├── about/page.tsx      # About (mission, vision, principles, team)
│   ├── academy/page.tsx    # IMC Academy — multi-course platform + Rx Challenger deep-dive
│   ├── assessment/page.tsx # Career readiness assessment (quiz, scoring, results)
│   ├── contact/page.tsx    # Contact (methods, form→EmailJS w/ validation, FAQ)
│   ├── privacy/page.tsx    # Privacy Policy (12 sections)
│   └── terms/page.tsx      # Terms of Service (13 sections)
├── components/
│   ├── layout/
│   │   ├── header.tsx      # "use client" — sticky, responsive mobile menu
│   │   ├── footer.tsx      # Links: Product, Company, Legal
│   │   └── page-layout.tsx # Header + Footer wrapper for sub-pages
│   ├── sections/
│   │   ├── hero.tsx        # Hero with gradient bg, CTA, pillar cards, logos
│   │   ├── stats.tsx       # 4 stats on navy background
│   │   ├── ecosystem.tsx   # 3 pillar cards (Academy, Corporate Solutions, OCTRI)
│   │   ├── pricing.tsx     # 3 pricing cards (Academy free, Corporate Solutions, OCTRI)
│   │   ├── how-it-works.tsx# 4-step process with icons
│   │   ├── testimonials.tsx# 3 testimonial cards with stars
│   │   └── cta.tsx         # Final CTA with buttons
│   └── ui/
│       ├── button.tsx      # CVA variants: default, outline, secondary, ghost, destructive, link
│       ├── card.tsx        # Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
│       ├── input.tsx       # @base-ui/react Input wrapper
│       ├── label.tsx       # "use client" label
│       ├── textarea.tsx    # Standard textarea
│       └── toast.tsx       # "use client" global toast system
└── lib/
    └── utils.ts            # cn() = twMerge(clsx())
scripts/
├── postbuild.mjs           # Cleans up __next.* junk files from static export
└── serve.mjs               # Local dev server (port 8080) with path traversal protection + security headers
public/
├── imc.jpeg                              # IMC logo (referenced by header & footer)
└── google62c9fc6ba2ba8b2e.html           # Google Search Console verification file
```

## Architecture Decisions

### Static Export
- `next.config.ts` sets `output: 'export'` — no server, pure static files
- `images: { unoptimized: true }` — required for static export (no Next.js image optimizer)
- `basePath` / `assetPrefix` — auto-configured based on `REPO_NAME` env var:
  - `*.github.io` repos → no basePath (served from root)
  - Project repos (e.g. `repo-name`) → `basePath: /repo-name`
- Build output goes to `out/` directory (gitignored)

### No Inline Event Handlers in Server Components
- Contact page form had `onSubmit={(e) => e.preventDefault()}` — **this breaks static export**
- Fixed by replacing `<form>` with `<div>` and converting the submit button to a `<a href="mailto:">`
- Rule: any component with `onSubmit`, `onClick`, `onChange` etc. must be `"use client"`

### CSS Variable Theme (in `globals.css`)
```css
--color-imc-navy: #0b1d3a;
--color-imc-navy-light: #132a4a;
--color-imc-teal: #00b4d8;
--color-imc-teal-dark: #0096b8;
--color-imc-gold: #f5a623;
--color-imc-gold-dark: #d48e1c;
```
- Light mode: `--background: #fafbfc`, `--foreground: #0f172a`
- Dark mode: `--background: #0b1d3a`, `--foreground: #e2e8f0`
- Both light and dark theme variables defined but dark mode class not currently toggled

### Hash Links for Homepage Sections
- Header and footer use `href="/#ecosystem"`, `href="/#how-it-works"`, `href="/#get-started"`
- These are on `<Link>` components which handle basePath automatically
- Pricing section exists (`/pricing` section id on homepage)

### Navigation Links
- Header: About (`/about`), Academy (`/academy`), Ecosystem (`/#ecosystem`), How It Works (`/#how-it-works`), Contact (`/contact`)
- Header buttons: "Get Started" → `/assessment` only (Sign In removed)
- Footer Product: Academy, Ecosystem, How It Works, Pricing; Company: About, Contact; Legal: Terms, Privacy

### Logo
- IMC logo is `/imc.jpeg` (stored in `public/`, referenced via `<img src="/imc.jpeg">`)
- Header: `h-9 w-9 rounded-lg object-cover` (36×36px)
- Footer: `h-8 w-8 rounded-lg object-cover` (32×32px)
- Original navy box + "IMC" text placeholder replaced with the actual logo image
- Image placed at `src/app/imc.jpeg` and copied to `public/imc.jpeg` for static export

## Build & Deploy

### Local Build
```bash
npm ci
npm run build        # outputs to out/
cd out && python3 -m http.server 8080
```

### GitHub Pages Deployment
1. Repo remote: `https://github.com/imc-hub/imc-hub.github.io.git`
2. Push to `main` triggers `.github/workflows/deploy.yml`
3. Workflow: npm ci → npx next build (with `GITHUB_PAGES=true`) → add `.nojekyll` → upload-pages-artifact → deploy-pages
4. **Pages source must be set to "GitHub Actions"** in repo Settings → Pages
5. Required permissions: `contents: read`, `pages: write`, `id-token: write`

### Git Auth
- No credential helper configured — `git push` requires manual auth (PAT or password)
- Remote URL was previously `https://imc-hub/imc-hub.github.io.git` (missing `github.com`) — fixed to `https://github.com/imc-hub/imc-hub.github.io.git`

## Known Issues & Fixes Applied

| Issue | Cause | Fix |
|-------|-------|-----|
| Node 18 too old | Next.js 16 requires ≥20.9.0 | Upgraded to Node 20 via NodeSource |
| Turbopack native bindings missing | Platform doesn't support Turbopack | Installed `@next/swc-wasm-nodejs` |
| Inline `onSubmit` breaks build | Can't pass event handlers in Server Components | Replaced `<form>` with `<div>`, button → mailto link |
| CSS not loading on GitHub Pages | `basePath` was wrong (had `/repo-name` prefix) | Fixed: no basePath for `.github.io` repos |
| GitHub Pages served README.md | Pages source was "branch" not "Actions" | User must change to "GitHub Actions" in Settings |
| Lockfile root warning | Multiple package-lock.json files | Not critical; workflow uses `--ignore-scripts` |

## Platform-Specific Notes

- **Host:** Dell Latitude 3510, Intel i5-10210U, 12GB RAM, Ubuntu 24.04 LTS
- **SWC:** Must use `@next/swc-wasm-nodejs` (no native bindings for this platform)
- **No Node version manager** (nvm/fnm/n/volta not available) — Node upgraded via apt + NodeSource
- **No `gh` CLI authenticated** — pushes require manual HTTPS auth

## Key Next.js 16 Docs
- Static exports: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`
- Unsupported with static export: `next/image` default loader, Server Actions, Route Handlers with dynamic data, redirects, rewrites, headers, cookies, ISR, Draft Mode
- Client Components are prerendered to HTML during `next build`; Web APIs (window, localStorage) only accessible in `useEffect`

## What to Do When...

- **Adding a new page:** Create `src/app/<slug>/page.tsx`, wrap content in `<PageLayout>`, add nav links in header and footer
- **CSS not loading in production:** Check if `basePath` in `next.config.ts` matches the deployment URL structure
- **Form/button not working:** Event handlers (`onClick`, `onSubmit`) only work in `"use client"` components; Server Components can only have `action` attributes or link-based interactions
- **GitHub Pages still serving README.md:** Ensure Pages source is "GitHub Actions" not a branch; check Actions tab for workflow failures
- **Adding images:** Place in `public/` folder and reference as `/filename.ext` — `next/image` default loader is unavailable with static export; use plain `<img>` tags
- **Updating the logo:** Replace `public/imc.jpeg`; header and footer both reference `/imc.jpeg`

## Session Changes (2026-06-09)

### New Pages
- **`/academy`** — Full IMC Academy platform page with:
  - Hero: "Structured learning paths for every career stage"
  - Courses catalog: 5 course cards (Rx Challenger featured + 4 Coming Soon)
  - Rx Challenger deep-dive: features, patient history/chief complaints/diagnosis, testimonials, FAQ
  - Developer about section (Ahmed Ezzat)
  - CTA: Download Rx Challenger + get notified about new courses
- **`/assessment`** — Career readiness quiz (20 MCQ questions, 5 categories, scoring, results)

### Modified Components
- **Header**: Removed "Sign In" button (desktop + mobile); "Get Started" is the only CTA
- **Hero**: Removed "Watch Demo" button; "Start Free Assessment" is the single CTA
- **Header & Footer**: Replaced navy box + "IMC" text logo with `<img src="/imc.jpeg">`
- **Ecosystem**: Academy "Explore" link → `/academy` (was `/#get-started`)
- **Pricing**: Academy "Start Learning" link → `/academy` (was `/#get-started`)
- **Header nav**: Added "Academy" link between About and Ecosystem
- **Footer nav**: Added "Academy" link at top of Product column

### Rx Challenger Content (from rxchallenger.github.io)
- All text, features, testimonials, FAQ, and developer info pulled from the live site
- Rx Challenger is positioned as a featured course within the broader IMC Academy platform
- Links to Google Play: `https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en`
- Developer: Ahmed Ezzat, clinical pharmacist, Alexandria, Egypt

## SEO Overhaul (2026-06-09)

### New Files Created
- **`src/app/sitemap.ts`** — Dynamic sitemap.xml with 7 routes, priorities, and changefreq
- **`src/app/robots.ts`** — robots.txt allowing all, disallowing `/_next/` and `/out/`
- **`src/components/seo/structured-data.tsx`** — Server-side JSON-LD components:
  - `OrganizationStructuredData` — Organization schema (name, logo, address, contact points)
  - `WebsiteStructuredData` — WebSite schema (SearchAction + AssessAction)
  - `WebPageStructuredData` — Per-page WebPage schema with BreadcrumbList support
  - `AcademyStructuredData` — EducationalOrganization + Course schema for Rx Challenger
  - `FaqStructuredData` — FAQPage schema for FAQ sections
  - `TestimonialStructuredData` — Product + AggregateRating + Review schemas
  - `AssessmentStructuredData` — Quiz schema for the assessment page
- **`src/components/seo/client-structured-data.tsx`** — Client-side JSON-LD injection (for `"use client"` pages):
  - `AssessmentClientStructuredData` — Quiz schema injected via `useEffect`
  - `WebPageClientStructuredData` — WebPage schema for client pages
  - `FaqClientStructuredData` — FAQPage schema for client pages (Contact)

### Modified Files
- **`src/app/layout.tsx`** — Added `metadataBase`, title template (`%s | Intelligent Mastery Coaching`), 12 keywords, Open Graph (title/description/url/type/locale/siteName/image), Twitter Cards (`summary_large_image`), Google robot directives, `theme-color`, `preconnect` hints, Organization + Website JSON-LD in `<head>`. Added security meta tags: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/microphone/geolocation/payment disabled)
- **`src/app/page.tsx`** — Added `metadata` export (title, description, canonical, OG), `WebPageStructuredData`
- **`src/app/about/page.tsx`** — Added `metadata` export, `WebPageStructuredData` with breadcrumbs
- **`src/app/academy/page.tsx`** — Added `metadata` export, `WebPageStructuredData` with breadcrumbs, `AcademyStructuredData`, `FaqStructuredData`, `TestimonialStructuredData`
- **`src/app/assessment/page.tsx`** — Split into `AssessmentPage` (wrapper) + `AssessmentApp` (logic), added `AssessmentClientStructuredData`
- **`src/app/contact/page.tsx`** — Added `FaqClientStructuredData` for FAQ JSON-LD
- **`src/app/privacy/page.tsx`** — Added `metadata` export (canonical, robots), `WebPageStructuredData` with breadcrumbs
- **`src/app/terms/page.tsx`** — Added `metadata` export (canonical, robots), `WebPageStructuredData` with breadcrumbs
- **`src/app/not-found.tsx`** — Added `metadata` export with `robots: noindex`
- **`src/components/layout/header.tsx`** — Added `aria-label` on logo link, `<nav aria-label="Primary navigation">`, `width`/`height` on logo `<img>`, improved `alt` text
- **`src/components/layout/footer.tsx`** — Changed Product/Company/Legal `<div>` wrappers to `<nav aria-label="...">`, added `aria-label` on logo link, `width`/`height` on logo `<img>`, improved `alt` text

### SEO Checklist (All Implemented)
- [x] Unique `<title>` on every page (50-60 chars)
- [x] Unique `<meta name="description">` on every page (150-160 chars)
- [x] Canonical URLs on all server-rendered pages
- [x] Open Graph tags (title, description, url, type, image)
- [x] Twitter Card tags (summary_large_image)
- [x] XML sitemap with priorities and changefreq
- [x] robots.txt with sitemap reference
- [x] JSON-LD Organization schema (global)
- [x] JSON-LD WebSite schema with SearchAction + AssessAction (global)
- [x] JSON-LD WebPage + BreadcrumbList (per-page)
- [x] JSON-LD FAQPage (Academy, Contact)
- [x] JSON-LD Course (Academy — Rx Challenger)
- [x] JSON-LD Product + Reviews + AggregateRating (Academy — Rx Challenger testimonials)
- [x] JSON-LD Quiz (Assessment)
- [x] Semantic HTML: `<nav aria-label>`, `<main>`, one `<h1>` per page
- [x] Image `alt` text, `width`, and `height` attributes
- [x] `preconnect` hints for Google Fonts
- [x] `theme-color` meta tag
- [x] `font-display: swap` on Inter font
- [x] 404 page with `noindex` robots directive

### Notes
- Client components (`assessment`, `contact`) cannot export `metadata` — they use client-side JSON-LD injection via `useEffect` instead
- The `dangerouslySetInnerHTML` in `JsonLd` component is safe here — it renders only hardcoded JSON-LD objects, never user input
- Build generates 12 static pages including `/sitemap.xml` and `/robots.txt`
- All pages pass `npx next build` with zero errors

## Security Audit (2026-06-09)

### Fixes Applied
| Finding | Severity | Fix |
|---------|----------|-----|
| Missing email validation in contact form | Medium | Added email regex validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) + server-side length checks for all fields in `contact/page.tsx` |
| No security headers | Medium | Added meta-tag security headers in `layout.tsx`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` disabling unused APIs |
| Path traversal in dev server `serve.mjs` | Low | Added path resolution check ensuring served files stay within `out/` directory; added security headers + CSP to dev server responses |

### Known Issues
- **PostCSS XSS (CVE, moderate)**: Transitive dependency via `next@16.2.7` bundles PostCSS 8.4.31 (<8.5.10). Risk is low for our static site since PostCSS runs at build time only, not on user input. Cannot be fixed without downgrading Next.js.
- **No HTTP CSP header on production**: GitHub Pages doesn't support custom HTTP headers. A `Content-Security-Policy` cannot be set as an HTTP header. Consider using Cloudflare as a CDN in front of GitHub Pages for full header control.

### Clean Scan Results
- No XSS vectors (no user input in `dangerouslySetInnerHTML`, no `eval`, `innerHTML`, `document.write`)
- No injection vectors (no SQL, command, SSRF, SSTI, LFI/RFI — fully static site)
- No auth/session issues (no authentication system)
- No open redirect or DOM-based vulnerabilities
- No client-side storage (`localStorage`, `sessionStorage`, cookies)
- All `target="_blank"` links properly use `rel="noopener noreferrer"`
- No hardcoded secrets; env vars use `NEXT_PUBLIC_` prefix correctly
- Semgrep SAST scan: zero findings
- Robots.txt excludes `/_next/` and `/out/` directories

### Google Search Console Verification
- Verification file: `public/google62c9fc6ba2ba8b2e.html` → served at `https://imc-hub.github.io/google62c9fc6ba2ba8b2e.html`
- File must remain in place for continued verification

## PWA — Implemented (2026-06-10)

### Current State: ✅ Live
PWA is fully implemented and deployed. Install prompt works on Android Chrome. Offline caching via Workbox service worker.

### Files
| File | Purpose |
|------|---------|
| `public/manifest.json` | App manifest — standalone, icons, theme #0b1d3a |
| `public/sw.js` | Workbox 7.3.0 service worker — precache + runtime caching |
| `public/icons/icon-192.png` | PWA icon 192×192 |
| `public/icons/icon-512.png` | PWA icon 512×512 |
| `public/icons/icon-maskable.png` | Maskable icon 512×512 (safe zone padded) |
| `public/icons/apple-touch-icon.png` | iOS home screen icon 180×180 |
| `src/components/pwa/install-prompt.tsx` | Install banner (Android Chrome only) |

### Layout Changes (`src/app/layout.tsx`)
- `<link rel="manifest" href="/manifest.json" />` in `<head>`
- `<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />`
- `<meta name="mobile-web-app-capable" content="yes" />`
- `<meta name="apple-mobile-web-app-capable" content="yes" />`
- `<meta name="apple-mobile-web-app-status-bar-style" content="default" />`
- SW registration via inline `<script>` in body (registers `/sw.js` on load)
- `<InstallPrompt />` component after `{children}` in body

### Caching Strategy
- HTML pages: NetworkFirst (1hr TTL, offline fallback to cached `/`)
- CSS/JS bundles: CacheFirst (1yr, hashed filenames = immutable)
- Images: CacheFirst (30 days)
- Google Fonts CSS: StaleWhileRevalidate (7 days)
- Google Fonts files: CacheFirst (1yr)
- EmailJS API: NetworkOnly (never cache)

### Pages Precached (7 routes)
`/`, `/about`, `/academy`, `/assessment`, `/contact`, `/privacy`, `/terms`

### iOS Gotchas (Critical — Do NOT Re-introduce These)
1. **Do NOT use `viewport-fit=cover`** — breaks Safari iOS layout
2. **Do NOT use `overflow-x: hidden` on `<html>`** — breaks Safari CSS
3. **Do NOT use `dvh` units** — causes Safari CSS issues; stick with `min-h-screen`
4. **Do NOT use `backdrop-blur` on fixed elements** — causes Chrome iOS viewport/scroll bugs
5. **Do NOT use `position: fixed` banners on iOS** — Chrome iOS creates extra scrollable space
6. **Do NOT register `beforeinstallprompt` on iOS** — not supported, causes layout reflows
7. **Do NOT use `black-translucent` status bar style** — use `default` to prevent content behind status bar
8. **Do NOT use inline styles with `lineHeight:0` / `fontSize:0` hacks** — breaks Android Chrome CSS
9. **Do NOT manipulate parent DOM from child components** — causes cross-browser layout issues
10. **Install prompt must return `null` on iOS** — only show on Android/desktop Chrome

### Install Prompt Behavior
- **Android Chrome**: Shows fixed bottom banner via `beforeinstallprompt` event
- **iOS (all browsers)**: Returns `null` — no banner (Apple doesn't support programmatic install)
- **Desktop Chrome**: Shows banner if `beforeinstallprompt` fires
- Uses pure Tailwind classes — no inline styles, no DOM manipulation

## SEO Audit & Fix — Favicon, Social Sharing, Structured Data (2026-06-10)

### Problem
Logo/preview not showing in Google Search, WhatsApp, Facebook, LinkedIn, X/Twitter, Telegram.

### Root Causes Found
1. **No `favicon.ico`** — Browsers and Google Search look for `/favicon.ico` at root. Missing entirely.
2. **No `og-image.png`** — OG and Twitter image references pointed to `/og-image.png` which didn't exist.
3. **Incomplete favicon references** — Only had `/imc.jpeg` as icon + apple-touch-icon. Missing 16x16, 32x32, and ICO.
4. **Organization `logo` in JSON-LD used `imc.jpeg`** — Google prefers a proper ImageObject with dimensions.
5. **Per-page OG metadata missing `og:image` and `og:site_name`** — About, academy, privacy, terms, faq, cookies, sitemap pages all lacked OG images.
6. **Assessment and contact pages couldn't export metadata** — Client components can't export `metadata`.

### Files Created (7)
| File | Purpose |
|------|---------|
| `public/favicon.ico` | Multi-resolution ICO (16/32/48px embedded) |
| `public/favicon-16x16.png` | Standard 16×16 favicon |
| `public/favicon-32x32.png` | Standard 32×32 favicon |
| `public/og-image.png` | 1200×630 social preview (navy bg + logo) |
| `public/og-image-square.png` | 600×600 square fallback |
| `src/app/assessment/layout.tsx` | Metadata for client component page |
| `src/app/contact/layout.tsx` | Metadata for client component page |

### Files Modified (12)
| File | Changes |
|------|---------|
| `src/app/layout.tsx` | Added favicon.ico/16/32 link tags, removed imc.jpeg as favicon |
| `src/app/page.tsx` | Added og:image + og:site_name + twitter:* per page |
| `src/app/about/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/academy/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/faq/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/cookies/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/privacy/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/terms/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/app/sitemap/page.tsx` | Added og:image + og:site_name + twitter:* |
| `src/components/seo/structured-data.tsx` | Changed Organization `logo` to ImageObject with og-image.png, added `image` field, added GitHub to `sameAs` |
| `src/app/sitemap.ts` | Verified all 9 routes exist (including faq, cookies) |
| `src/app/robots.ts` | Added `host` directive |

### Key URLs
| Purpose | URL |
|---------|-----|
| Favicon (ICO) | `/favicon.ico` |
| Favicon 16×16 | `/favicon-16x16.png` |
| Favicon 32×32 | `/favicon-32x32.png` |
| OG Image | `https://imc-hub.github.io/og-image.png` |
| Organization Logo (JSON-LD) | `https://imc-hub.github.io/og-image.png` (ImageObject) |
| Apple Touch Icon | `/icons/apple-touch-icon.png` |
| PWA Icons | `/icons/icon-192.png`, `/icons/icon-512.png`, `/icons/icon-maskable.png` |
| Header/Footer Logo | `/imc.jpeg` |

### Pattern: Client Component Pages Need Separate Layout for Metadata
- `"use client"` pages **cannot** export `metadata` — Next.js ignores it.
- Solution: Create a `layout.tsx` in the same directory that exports `metadata`.
- The layout wraps children with `<>{children}</>`.
- Client-side JSON-LD (structured data) can still be via `useEffect` injection.

### Pattern: Favicon Setup (Complete)
```html
<link rel="icon" href="/favicon.ico" sizes="48x48"/>
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png"/>
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png"/>
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180"/>
```

### Pattern: Organization Structured Data (Google-recommended)
```json
{
  "@type": "Organization",
  "logo": {
    "@type": "ImageObject",
    "url": "https://imc-hub.github.io/og-image.png",
    "width": 1200,
    "height": 630,
    "caption": "IMC — Intelligent Mastery Coaching"
  },
  "image": "https://imc-hub.github.io/og-image.png"
}
```

### Remaining Recommendations
1. After deploy, request re-indexing in Google Search Console for new favicon/structured data.
2. Test with Facebook Sharing Debugger, LinkedIn Post Inspector, Twitter Card Validator.
3. Consider a dedicated square logo (512×512) for Google Knowledge Panel.
4. Add more social profiles to `sameAs` when available (LinkedIn, X/Twitter, etc.).

## Session Changes (2026-06-11)

### Business Email Update
All business contact emails changed from `hello@imc-hub.com`, `sales@imc-hub.com`, `privacy@imc-hub.com`, `legal@imc-hub.com`, `dpo@imc-hub.com` → `imc.hub.eg@gmail.com` across 8 files. Excluded (unchanged): `RxChallenger.app@gmail.com`, `ahmed_m_ezzat@outlook.com`. Contact form `to_email` parameter updated.

### Corporate Repositioning: Simulator → Solutions
Repositioned the entire website from "Corporate Simulator / Simulation" to "Corporate Solutions". Company offerings are now: Corporate Solutions, Business Transformation Solutions, Organizational Development Solutions, Workforce Development Solutions, Talent Development Solutions, Corporate Training Solutions, Performance Improvement Solutions, and Business Capability Building Solutions.

**Files modified (17):**

| File | Key Changes |
|------|-------------|
| `hero.tsx` | "Real simulations" → "Real solutions"; pillar card renamed |
| `stats.tsx` | "simulations" → "applied learning" |
| `ecosystem.tsx` | Entire Simulator pillar → Corporate Solutions (name, tagline, description, 5 features) |
| `pricing.tsx` | Simulator plan → Corporate Solutions plan (tagline, description, features, CTA "Get Started") |
| `how-it-works.tsx` | Step 2 & 3 text updated |
| `testimonials.tsx` | Quote updated |
| `src/app/page.tsx` | Metadata descriptions updated |
| `src/app/about/page.tsx` | Mission, vision, CTO description updated |
| `src/app/assessment/data.ts` | Recommendation text updated |
| `src/app/assessment/layout.tsx` | Metadata updated |
| `src/app/faq/faq-content.tsx` | 6 FAQ references updated |
| `src/app/faq/page.tsx` | Same 6 changes for structured data |
| `src/app/contact/page.tsx` | FAQ question + answer updated |
| `src/app/privacy/page.tsx` | 5 references updated |
| `src/app/terms/page.tsx` | Section 7 renamed + 4 content references updated |
| `src/app/cookies/page.tsx` | Introduction updated |
| `src/components/seo/structured-data.tsx` | Organization + WebSite descriptions updated |
| `src/components/seo/client-structured-data.tsx` | Quiz name: "Corporate Readiness" → "Corporate Capability" |
| `src/app/layout.tsx` | Site description + keywords updated |

**Verification:**
- `npx next build` — compiled successfully, 15/15 pages, zero errors
- Full codebase grep for `simulation|simulator|simulated|P&L.*Engine|business simulation|corporate simulation` — zero matches

## Session Changes (2026-06-11)

### LinkedIn Links on About Page
Added LinkedIn profile links to team member cards on the About page:
- **Mohamed Talaat** (CEO) → `https://www.linkedin.com/in/mohamed-talaat-hagrass/`
- **Ahmed Ezzat** (CTO) → `https://www.linkedin.com/in/ahmed-m-ezzat/`

Each link renders as a 32×32px LinkedIn-branded icon button below the member's description, with `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`, hover/focus states. Uses inline SVG (no lucide-react LinkedIn icon exists). Only renders when `member.linkedin` is defined (other members unaffected).

### Contact Form EmailJS Fix
**Problem**: Contact form showed "Email service is not configured" on the live GitHub Pages site.

**Root Cause**: The GitHub Actions CI workflow (`.github/workflows/deploy.yml`) does NOT have access to `.env.local`. `NEXT_PUBLIC_*` env vars were only present in the local build environment. During CI builds, `process.env.NEXT_PUBLIC_EMAILJS_*` was `undefined`, so Next.js emitted runtime lookups (`a.default.env.NEXT_PUBLIC_EMAILJS_*`) that resolved to `undefined` in the browser, falling back to `""` and triggering the error.

**Fix**: Hardcoded the three EmailJS credentials directly in `src/app/contact/page.tsx`:
```typescript
const EMAILJS_PUBLIC_KEY = "AteCKovi3Grb7o0eM";
const EMAILJS_SERVICE_ID = "service_9adw98r";
const EMAILJS_TEMPLATE_ID = "template_2d2xcc4";
```
These are public client-side keys (the `NEXT_PUBLIC_` prefix means they're intentionally exposed), so hardcoding is safe. Removed the runtime config check that showed the error message.

**Lesson**: Never rely on `process.env.NEXT_PUBLIC_*` for values that must work in CI/CD builds unless those env vars are explicitly set in the workflow. For third-party public keys (EmailJS, Firebase, etc.), hardcoding is acceptable and more reliable.

### Service Worker Cache Fix
**Problem**: Old service worker was serving stale JS bundles that didn't have the EmailJS credentials.

**Fix** (`public/sw.js`):
1. Bumped all precache revisions from `'1'` to `'2'` to force cache refresh
2. Changed JS/CSS bundle strategy from `CacheFirst` to `StaleWhileRevalidate` so future deployments are picked up automatically

### Key Pattern: CI Builds ≠ Local Builds
- `.env.local` is NOT available in GitHub Actions
- `NEXT_PUBLIC_*` env vars must be set as GitHub Secrets and passed via `env:` in the workflow, OR hardcoded if they're public keys
- Always verify the deployed JS bundles contain expected values: `curl -s https://imc-hub.github.io/_next/static/chunks/*.js | grep 'KEY_NAME'`

## Session Changes (2026-06-11)

### FAQ Page — Corporate Repositioning

**Scope**: Modified ONLY the FAQ page (`src/app/faq/page.tsx` and `src/app/faq/faq-content.tsx`). No other pages were changed.

**Objective**: Remove all Rx Challenger-specific content from the FAQ and reposition it as a company-level business FAQ representing IMC's full corporate offerings.

**FAQ Entries Removed (1):**
- "What is Rx Challenger?" — entire product-specific question deleted

**FAQ Entries Rewritten (9):**
| Question | Change |
|----------|--------|
| "What is IMC?" | Removed Rx Challenger as flagship example; now references corporate training programs |
| "Who is IMC designed for?" | Renamed to "Who are your solutions designed for?" |
| "What programs does IMC offer?" | **Replaced** with "What services does IMC provide?" — lists 8 service areas (Corporate Solutions, Business Transformation, Workforce Development, Talent Development, Organizational Development, Corporate Training, Performance Improvement, Consulting & Advisory) |
| "Do you offer corporate or B2B training?" | Expanded with customization detail |
| "Is IMC free to use?" | Removed Rx Challenger references |
| "How are IMC courses delivered?" | Removed Rx Challenger / Google Play references |
| "How long does it take?" | Removed Rx Challenger timeframes |
| "Can I access on my phone?" | Removed native app references |
| "How can I contact?" | Removed Google Play listing reference |
| "How do I stay informed?" | Removed Google Play listing reference |

**FAQ Entries Added (4):**
1. "Do you offer customized corporate solutions?" — tailored programs, organizational needs
2. "How do your training and development programs work?" — structured delivery approach
3. "How can organizations work with the IMC team?" — engagement models for companies
4. "Does IMC work with partners and resellers?" — partnerships question

**Categories Renamed:**
| Old | New |
|-----|-----|
| "Services" | "Corporate Solutions & Services" |
| "Projects & Delivery" | "Programs & Delivery" |
| "Account & Contact Information" | "Contact & Partnerships" |

**Result:**
- 26 FAQ entries across 7 categories (up from 22)
- Zero Rx Challenger references remain in FAQ files
- `grep -rniE 'rx[\s_-]?challenger' src/app/faq/` — no matches
- `npx next build` — 15/15 pages, zero errors
- Only 2 files modified: `src/app/faq/page.tsx` and `src/app/faq/faq-content.tsx`

## Session Changes (2026-06-11)

### Athletic & EdTech Positioning — SEO Keywords + Structured Data

**Scope:** Final SEO pass — updated global keywords and client-side assessment structured data to reflect IMC's three business units (Corporate & Business Training, Athletic Performance/OCTRI, Digital Solutions & Technology).

**Keywords Updated (`src/app/layout.tsx`):**
- Removed: "career coaching", "skills training", "pharmacy education", "Rx Challenger", "corporate readiness", "workplace readiness", "IMC Academy"
- Added: "athletic performance", "triathlon training", "mental toughness", "EdTech platforms", "gamified learning", "digital solutions", "capability development", "business transformation", "workforce development", "talent development", "organizational development"

**Client-Side Structured Data Updated (`src/components/seo/client-structured-data.tsx`):**
- Quiz name: "IMC Corporate Capability Assessment" → "IMC Capability & Readiness Assessment"
- Description expanded to list 5 competency areas (business acumen, professional skills, technical literacy, workplace communication, corporate mindset)
- Added `assesses` field matching server-side `AssessmentStructuredData`

**Verification:**
- `npx next build` — compiled successfully, 15/15 pages, zero errors
