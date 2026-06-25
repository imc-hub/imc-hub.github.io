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
├── cookies/page.tsx        # Cookie Declaration
├── privacy/page.tsx        # Privacy Policy
├── terms/page.tsx          # Terms of Service
├── sitemap.ts              # Dynamic sitemap.xml
├── robots.ts               # robots.txt
├── assessment/layout.tsx   # Metadata wrapper for client page
└── contact/layout.tsx      # Metadata wrapper for client page
src/components/
├── layout/                 # header.tsx, footer.tsx, page-layout.tsx
├── sections/               # hero, stats, ecosystem, pricing, how-it-works, testimonials, cta
├── effects/                # electron-background.tsx (global canvas animation)
├── seo/                    # structured-data.tsx (server), client-structured-data.tsx
├── pwa/                    # install-prompt.tsx, update-toast.tsx, download-button.tsx
├── cookie-consent/         # (unused — banner removed to fix freeze; files kept for reference)
└── ui/                     # button, card, input, label, textarea, toast
src/lib/
├── utils.ts                # cn() = twMerge(clsx())
└── cookie-consent.ts       # (unused — kept for reference)
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
- **Footer Social:** Instagram, Facebook, LinkedIn (external links, `noopener noreferrer`)

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
- **Download App button**: Hero section modal with 5-platform install instructions (Android/iOS/Windows/macOS/Linux); uses `createPortal` + module-level `beforeinstallprompt` capture

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

## Cookie Consent (Removed)

Cookie consent banner and preference center were implemented but caused page freezes due to hydration issues with Next.js static export. Removed from layout and `/cookies` page. Files remain on disk for reference but are no longer imported.

## Session Notes

### 2026-06-22 — Cache Busting Fix (No CSS on Return Visits)

**Problem:** Returning visitors got HTML with no CSS/JS. Old service worker served stale cached assets that no longer matched the new build's hashed filenames.

**Root Causes:**

1. `StaleWhileRevalidate` for CSS/JS served old cached versions when revalidation failed silently
2. SW precache revision stuck at `"3"` — never updated, so SW didn't re-precache
3. Old SW `activate` event didn't purge outdated caches
4. No cache-busting meta tags on HTML pages
5. Browser cached HTML pages without revalidating

**Fix:**

- `public/sw.js`:
  - CSS/JS: Changed from `StaleWhileRevalidate` → `NetworkFirst` (3s timeout). Fresh assets always fetched first; stale cache only as network fallback
  - Navigation: Changed from `NetworkOnly` → `NetworkFirst` (3s timeout, 1hr expiry) for faster loads with freshness
  - Added `cleanupOutdatedCaches()` to purge old precache on SW update
  - Added `activate` handler that immediately deletes ALL old caches
  - Bumped precache revision from `"3"` → `"4"`
- `src/app/layout.tsx`:
  - Added cache-busting meta tags: `Cache-Control: no-cache, no-store, must-revalidate`, `Pragma: no-cache`, `Expires: 0`
  - SW registration now unregisters ALL existing SWs and clears ALL browser caches before registering fresh SW — ensures returning visitors start clean

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-22 — Social Media Buttons in Footer

**What:** Added Instagram, Facebook, and LinkedIn icon buttons to the global footer.

**Changes:** `src/components/layout/footer.tsx` (only file modified)

- Added `"Follow Us"` section with 3 social icon buttons between Brand and Product columns
- Used inline SVG icons (Lucide-style paths) — no new dependencies needed
  - `lucide-react` v1.17.0 does **not** include `Instagram`, `Facebook`, or `Linkedin` exports
- Footer grid expanded from `md:grid-cols-4` → `md:grid-cols-5` to accommodate new section

**Design:**

- 36×36px buttons (`h-9 w-9`), `rounded-lg`, dark glass style (`bg-white/[0.04]`, `ring-white/[0.08]`)
- Hover: red accent (`hover:bg-imc-red/15`, `hover:ring-imc-red/30`, subtle red glow via `box-shadow`)
- Icon color: `text-muted-foreground` → `group-hover:text-imc-red`, 200ms transitions
- `strokeWidth={1.75}` matching existing Lucide icon aesthetics

**Links:**

- Instagram: `https://www.instagram.com/imc1hub?igsh=ZXIzcTV4c3JkcXFo`
- Facebook: `https://www.facebook.com/share/18dYFeXKku/`
- LinkedIn: `https://www.linkedin.com/company/imc-hub/`
- All use `target="_blank"` + `rel="noopener noreferrer"`

**Accessibility:**

- `aria-label` per link: "Follow IMC on Instagram/Facebook/LinkedIn"
- `focus-visible:ring-2 focus-visible:ring-imc-red/50` for keyboard focus

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-25 — Floating Social Media Widget (Global)

**What:** Added a persistent floating social media widget visible on all pages with Instagram, Facebook, and LinkedIn links.

**New Component:** `src/components/layout/floating-social.tsx`

- `"use client"` component, zero new npm dependencies
- Fixed position: `bottom-5 left-5 z-[9996]` — bottom-left chosen to avoid conflicts:
  - PWA install prompt: `bottom-0` full-width at `z-[9999]`
  - Update toast: `bottom-16 right-4` at `z-[9998]`
  - Cookie banner: `bottom-0` full-width at `z-[9997]`
- 3 circular buttons (40×40px), glass-morphism style (`bg-dark-950/80 ring-1 ring-white/[0.08] backdrop-blur-sm`)
- Hover: red accent glow + subtle `scale(1.1)` scale effect
- Fade-in animation on mount (CSS translate + opacity transition)
- `prefers-reduced-motion` respected (disables transitions)
- All links: `target="_blank" rel="noopener noreferrer"`
- Accessibility: `aria-label` per link ("Follow IMC on Instagram/Facebook/LinkedIn"), `role="group"` on container
- Reuses same inline SVG icons as footer (no icon library dependency)

**Modified:** `src/app/layout.tsx`

- Added import + `<FloatingSocial />` after `<UpdateToast />` (line 181)
- Renders globally for all pages — no per-page changes needed

**Icon approach:** Inline SVGs matching the footer's `strokeWidth={1.75}` Lucide-style aesthetic. Same URLs as footer social links.

**Design rationale:**

- Bottom-left is the only viewport corner not occupied by existing fixed elements
- Circular shape distinguishes from rectangular footer social buttons
- Subtle red glow on hover ties to IMC brand without being aggressive
- Small footprint (3 × 40px) ensures no content obstruction on mobile

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-22 — Electron Background Animation (Global)

**What:** Replaced static black background with a dynamic animated electron particle network across all pages.

**Source:** Adapted from `E:\move` (standalone Canvas 2D particle network — 177 lines JS, zero dependencies).

**New Component:** `src/components/effects/electron-background.tsx`

- `"use client"` React component using Canvas 2D API
- Zero new npm dependencies (pure Canvas 2D)
- IMC brand colors: red (`#dc2626`), white, soft red (`#ef4444`), soft white (`#e0e0e0`)
- `prefers-reduced-motion` support: stops animation entirely when enabled
- `pointer-events: none` + `aria-hidden="true"` — never blocks interaction
- Debounced resize (200ms), passive event listeners, refs for hot state (no re-renders)

**Integration:** `src/app/layout.tsx`

- `<ElectronBackground />` rendered as first child of `<body>` (fixed, z-0)
- All page content wrapped in `<div className="relative z-10">`
- Body background set to `transparent`, html background to `#050507`

**Section Background Changes (16 files, ~40 sections):**

- All section-level `bg-dark-950` → `bg-dark-950/70` (or `/60` for hero sections)
- All section-level `bg-dark-900` → `bg-dark-900/70`
- Hero bottom fades: `from-dark-950` → `from-dark-950/40`
- Footer: `bg-dark-950` → `bg-dark-950/80`
- Card-level backgrounds (`bg-dark-800/50`) already semi-transparent — left as-is
- Radial gradient glows: reduced opacity by ~30-40% to work with canvas behind

**Pages affected:** Home, About, Academy, Contact, Digital Solutions, Rx Challenger (all 17 routes)

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-23 — Electron Background Enhancement

**What:** Enhanced the electron background animation to be more vibrant, interactive, and visually engaging while preserving performance, accessibility, and readability. The previous animation was too sparse and subtle.

**Changes:** `src/components/effects/electron-background.tsx` (only file modified)

**Configuration Changes (all centralized in `CONFIG` object):**

- Particle counts: desktop 70→**120**, tablet 45→**70**, mobile 25→**40**
- Electron radius range: 1.5-3px → **2-4px** (~30% larger)
- Connection distance: 180→**200px**; max opacity 0.25→**0.35**

**New Features:**

1. **Depth layering** — each particle gets a random `depthLayer` (0=far, 1=near); far particles render smaller (×0.7) and move slower; connection opacity weighted by average depth of connected particles
2. **Organic sinusoidal drift** — particles oscillate with unique phase offsets for natural floating movement
3. **Per-particle speed variation** — random `speedMultiplier` (0.6-1.×) per particle
4. **Dual mouse interaction** — gentle attraction toward cursor + soft repulsion when very close (replaced single-direction repulsion)
5. **Connection proximity boost** — connections near the cursor strengthen temporarily (up to +0.15 alpha)
6. **Low-power device detection** — checks `hardwareConcurrency` and `deviceMemory`; devices with ≤2 cores or ≤2 GB RAM get 60% fewer particles (min 15)

**Performance Optimizations:**

- Squared distance checks to skip `Math.sqrt` on pairs exceeding link distance
- Early alpha discard (`alpha <= 0`) before canvas state changes
- `getContext("2d", { alpha: true })` for optimal compositing
- All hot state in refs, zero re-renders, passive event listeners

**Accessibility:**

- `prefers-reduced-motion` fully respected (stops loop, clears canvas, listener on media query changes)

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-17 — Cookie Consent Removed

**Problem:** Cookie consent banner caused page freezes. Multiple implementation attempts (useEffect-based, module-level typeof window) all had hydration issues with Next.js static export.

**Fix:** Removed the cookie banner and preference center from the layout and cookies page entirely. The component files (`src/components/cookie-consent/`, `src/lib/cookie-consent.ts`) remain on disk but are no longer imported — no impact on bundle or build.

**Changes:**

- `src/app/layout.tsx` — removed `ConsentProvider` and `CookieBanner` imports and JSX
- `src/app/cookies/page.tsx` — removed `PreferenceCenter` import and section
- `src/components/cookie-consent/consent-provider.tsx` — switched to module-level `typeof window` read (file still exists but unused)

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-17 — Cookie Consent System & PWA Download Button (Earlier — Superseded)

**Cookie Consent Implementation:**

- Created full cookie consent system: first-visit banner + preference center on `/cookies`
- Banner at `z-[9997]` with Reject All / Customize / Accept All
- Preference Center embedded at `#preference-center` on the cookies page
- "Customize" in banner links to `/cookies#preference-center` (scrolls to section)
- Consent state stored in localStorage with schema versioning
- All components are `"use client"` (client-side only, static export compatible)

**PWA Download Button (Homepage Hero):**

- Added "Download App" button beside "Start Free Assessment" in hero section
- Opens a modal (via `createPortal` to `document.body`) with 5 platform tabs: Android, iOS, Windows, macOS, Linux
- Auto-detects user's platform; shows native install button when `beforeinstallprompt` is available
- Module-level `beforeinstallprompt` listener captures the event before any component mounts
- Each tab shows step-by-step manual installation instructions
- Modal uses `z-[2147483647]` (max 32-bit int) to ensure it's above all content

**Hero Section Stacking Context Fix:**

- Removed `overflow-hidden` from `<section>` (was creating stacking context that trapped children above modals)
- Moved `overflow-hidden` to inner background effects `<div>` (only needs to clip radial gradients)
- Added `z-10` to content wrapper to keep it above background

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

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

### 2026-06-14 — Rx Challenger Dedicated Product Page

**New Route:** `/digital-solutions/rx-challenger`

- Created `src/app/digital-solutions/rx-challenger/page.tsx` (server component with metadata, OG/Twitter cards, canonical URL, breadcrumb + FAQ JSON-LD)
- Created `src/app/digital-solutions/rx-challenger/content.tsx` (client component) with 10 sections:
  - Hero (logo + title + tagline + CTA + platform badges)
  - Product Overview (description + app screenshot + tech badges)
  - Key Features (6 cards: prescriptions, cloud save, tooltips, patient history, chief complaints, diagnosis)
  - Benefits (6 cards: training, education, gamification, skill levels, analytics, cross-platform)
  - Learning Experience (3-step methodology)
  - Testimonials (4 cards with author photos + 5-star ratings)
  - Mobile Application (Android + Windows download cards)
  - IMC Ecosystem Positioning (links back to Digital Solutions + About)
  - FAQ (6 questions, schema-enabled)
  - CTA (Download Free + Contact Us)

**Digital Solutions Page Updates:**

- Added "Explore Rx Challenger" CTA button in the Flagship Product section linking to the new page
- Added Rx Challenger logo (`rx_325x325.png`) beside the flagship product title

**SEO & Schema:**

- Title: `Rx Challenger | Mobile Learning Application | IMC Digital Solutions`
- Updated `RxChallengerStructuredData` URL to `/digital-solutions/rx-challenger`
- Added `/digital-solutions/rx-challenger` to sitemap (priority 0.7)
- Breadcrumb schema: Home → Digital Solutions → Rx Challenger

**Assets — Rx Challenger Product Images (13 files in `public/rx-challenger/`):**

- `rx_325x325.png` — Product logo (325×325 PNG, 5 KB, sRGB), used beside titles on both pages
- `left-image.png` — App screenshot (55 KB), used in product overview
- `googleplay.png` — Google Play badge (16 KB)
- `windows.png` — Windows download badge (7 KB)
- `testimonial-author-1-4.png` — Testimonial author photos (4 files)
- `features-icon-1-3.png` — Feature icons (3 files, available for future use)
- `about-icon-01-03.png` — About icons (3 files, available for future use)

**Internal Linking:**

- Digital Solutions → Rx Challenger via "Explore Rx Challenger" button
- Rx Challenger → Digital Solutions via "Explore Digital Solutions" in ecosystem section
- Rx Challenger → About / Contact via ecosystem + CTA sections

**Logo Integration:**

- Digital Solutions page flagship section: logo (`h-10 w-10` mobile → `h-12 w-12` desktop) inline beside "Rx Challenger — Gamified Pharmacy Training"
- Rx Challenger product page hero: logo (`h-14 w-14` mobile → `h-16 w-16` desktop) stacked above title on mobile, inline on desktop (`sm:flex-row`)
- Both use `alt="Rx Challenger application logo"` for accessibility

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors

### 2026-06-14 — Rx Challenger Logo Fix

**Problem:** `rx_325x325.png` logo not rendering on Digital Solutions page and Rx Challenger product page.

**Root Cause — Three issues in `<img>` tags:**

1. `width`/`height` HTML attributes were set to the CSS _display_ size (48, 64) instead of the _actual image dimensions_ (325×325). This aspect ratio mismatch caused browsers to miscalculate the image box.
2. `object-cover` class was applied unnecessarily (logo is already square 325×325). This class is for cropping non-matching aspect ratios and caused rendering failures.
3. Missing `shrink-0` — flex container could compress the image.

**Fix (commit `a69c198`):**

- Set `width={325} height={325}` (matching actual image dimensions) on both pages
- Removed `object-cover` class
- Added `shrink-0` to prevent flex compression

**Lesson:** When using `<img>` with explicit `width`/`height` attributes, always set them to the _actual image pixel dimensions_, not the CSS display size. Use CSS (`w-*`, `h-*`) for visual sizing. Avoid `object-cover` on square images.

### 2026-06-16 — "This page couldn't load" Fix

**Problem:** Intermittent "This page couldn't load" error (with Reload/Back buttons) when navigating between pages on GitHub Pages.

**Root Cause — Two issues:**

1. **`scripts/postbuild.mjs` was too aggressive:** It deleted `__next.*` junk files from subdirectories, then removed the entire subdirectory if empty. When applied to ALL directories (or to root-level), it deleted `__next.*` files that Next.js needs for client-side navigation, breaking hydration on subsequent pages.

2. **`public/sw.js` masked real errors:** The service worker used `NetworkFirst` with a 3-second timeout for navigation, plus a `setCatchHandler` that served cached `/` (the homepage) for ANY navigation failure. When a real 404/network error occurred, the SW silently served stale homepage HTML at the wrong URL, causing the browser to show "This page couldn't load" instead of the actual error.

**Fix:**

- `scripts/postbuild.mjs`: Rewrote to only delete `__next.*` files from a known list of route subdirectories. Never touches root-level `__next.*` files or the `_next/` directory. Never deletes the subdirectory itself (only its junk contents).
- `public/sw.js`: Replaced `NetworkFirst` + `setCatchHandler` with `NetworkOnly` for navigation requests. This ensures the browser always gets a fresh response from the server, and real 404/500 errors bubble up correctly. Updated precache list to use `.html` suffixes matching the actual build output.

**Lesson:** When writing a postbuild cleanup script, be explicit about which directories to clean — don't glob or recurse. When using Workbox for a fully static site, `NetworkOnly` for navigation is safer than `NetworkFirst` + `setCatchHandler` because stale fallbacks can mask real errors.

### 2026-06-23 — Rx Challenger: Linux & PWA Download Buttons

**What:** Added Linux and PWA download buttons to the Rx Challenger product page, updated section heading to reflect all platforms.

**Changes:** `src/app/digital-solutions/rx-challenger/content.tsx` (only file modified)

**New Imports:** `Terminal`, `Globe` from `lucide-react`

**Section renamed:** "Mobile Application" → "Cross-Platform Application"

**Section heading updated:** "Available on Android & Windows" → "Available on Android, Windows, Linux & PWA"

**Grid layout changed:** `lg:grid-cols-2` → `sm:grid-cols-2` for consistent 2×2 layout across all breakpoints

**New Cards Added:**

1. **Linux Desktop** (emerald accent):
   - Icon: `Terminal` (emerald-400), hover border: `hover:border-emerald-500/20`
   - Badge: `/rx-challenger/BadgeLinux.png`
   - URL: `https://github.com/rxchallenger/RxChallenger/raw/refs/heads/main/builds/linux/rxchallenger.x86_64`
   - `aria-label="Download Rx Challenger for Linux"`

2. **Progressive Web App** (violet accent):
   - Icon: `Globe` (violet-400), hover border: `hover:border-violet-500/20`
   - Badge: `/rx-challenger/PWABadge.png`
   - URL: `https://rx-challenger.vercel.app`
   - `aria-label="Open Rx Challenger Progressive Web App"`

**Accessibility improvements:** Added `aria-label` to existing Android and Windows download links (were previously missing).

**Benefits section updated:** "Learn Anywhere" description now reads "Android, Windows, Linux, and as a PWA" instead of "Android and Windows".

**New assets:** `public/rx-challenger/BadgeLinux.png`, `public/rx-challenger/PWABadge.png`

**Build:** 17 routes prerendered, zero TypeScript errors, zero build errors
