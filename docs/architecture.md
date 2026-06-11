# Architecture

## Overview

The IMC Hub website is a **static site** built with Next.js 16 and exported as plain HTML, CSS, and JavaScript. There is no server, no database, and no server-side rendering at runtime. The entire site is served from GitHub Pages as static files.

## Static Export Model

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  Source Code │────▶│  next build  │────▶│   out/ dir   │
│  (Next.js)   │     │  (static)    │     │  (HTML/CSS)  │
└─────────────┘     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
                                        ┌──────────────┐
                                        │ GitHub Pages │
                                        │  (CDN/Edge)  │
                                        └──────────────┘
```

### Key Implications

- **No server-side code** at runtime — all pages are pre-rendered HTML
- **No API routes** — all data is either hardcoded or fetched client-side
- **No authentication** — the site is fully public
- **No database** — content is embedded in components at build time
- **Client-side interactivity** is limited to browser APIs (EmailJS, assessment quiz)

## Rendering Strategy

### Server Components (Default)

Most pages are **Server Components** — they render to static HTML at build time. This is the default in Next.js App Router.

**Benefits:**
- Full SEO support (metadata export, structured data)
- Zero JavaScript shipped to the browser for static content
- Fastest possible page loads

**Constraints:**
- No browser APIs (`window`, `document`, `localStorage`)
- No event handlers (`onClick`, `onSubmit`, `onChange`)
- No `useState`, `useEffect`, or other client hooks

### Client Components (`"use client"`)

Used only where interactivity is required:

| Component | Reason |
|-----------|--------|
| `AssessmentApp` | Quiz logic, state management, scoring |
| `ContactForm` | Form state, EmailJS integration |
| `Header` | Mobile menu toggle |
| `InstallPrompt` | PWA install banner |
| `UpdateToast` | Service worker update notification |

**Pattern for client component pages:** A separate `layout.tsx` in the page directory exports `metadata` and structured data, while the `page.tsx` uses `"use client"` for interactivity. Client-side JSON-LD is injected via `useEffect`.

## Routing

| Route | Type | Description |
|-------|------|-------------|
| `/` | Server | Homepage (hero, stats, ecosystem, pricing, how-it-works, testimonials, CTA) |
| `/about` | Server | Mission, vision, principles, team |
| `/academy` | Server | Corporate & Business Training programs |
| `/digital-solutions` | Server | Digital Solutions & Technology (Rx Challenger) |
| `/assessment` | Client | Career readiness quiz (20 MCQ questions) |
| `/contact` | Client | Contact form + FAQ |
| `/faq` | Server | Frequently asked questions |
| `/privacy` | Server | Privacy policy |
| `/terms` | Server | Terms of service |
| `/sitemap.xml` | Dynamic | Auto-generated XML sitemap |
| `/robots.txt` | Dynamic | Search engine directives |

## Styling Architecture

### Tailwind CSS 4

The project uses Tailwind CSS v4 with a custom design system defined in CSS custom properties (`globals.css`):

```css
/* Brand Colors */
--color-imc-navy: #0b1d3a;
--color-imc-navy-light: #132a4a;
--color-imc-teal: #00b4d8;
--color-imc-teal-dark: #0096b8;
--color-imc-gold: #f5a623;
--color-imc-gold-dark: #d48e1c;
```

### Component Variants

UI components use `class-variance-authority` (CVA) for type-safe variant definitions. The `cn()` utility combines `clsx` and `tailwind-merge` for conditional class composition.

## PWA Architecture

```
┌─────────────────────────────────────────────┐
│                 Browser                      │
│  ┌─────────────┐    ┌───────────────────┐   │
│  │  App Shell   │    │  Service Worker   │   │
│  │  (HTML/CSS)  │◄───│  (Workbox 7.3.0)  │   │
│  └─────────────┘    └───────┬───────────┘   │
│                             │                │
│              ┌──────────────┼──────────┐     │
│              │              │          │     │
│         Precache      Runtime     Network    │
│         (8 routes)    Cache      Fallback   │
└─────────────────────────────────────────────┘
```

### Caching Strategy

| Resource Type | Strategy | TTL |
|---------------|----------|-----|
| HTML pages | NetworkFirst | 5 min |
| CSS/JS bundles | StaleWhileRevalidate | 1 day |
| Images | CacheFirst | 30 days |
| Google Fonts CSS | StaleWhileRevalidate | 7 days |
| Google Fonts files | CacheFirst | 1 year |
| EmailJS API | NetworkOnly | N/A |

### Update Flow

1. New deploy updates service worker precache manifest
2. Browser detects new service worker via `updatefound` event
3. `UpdateToast` component shows "Update Available" banner
4. User clicks "Refresh Now" → `SKIP_WAITING` message → new SW activates → page reloads

## SEO Architecture

### Structured Data (JSON-LD)

| Schema Type | Location | Component |
|-------------|----------|-----------|
| Organization | Global (layout) | `OrganizationStructuredData` |
| WebSite | Global (layout) | `WebsiteStructuredData` |
| WebPage | Per-page | `WebPageStructuredData` |
| BreadcrumbList | Per-page | `WebPageStructuredData` (breadcrumbs prop) |
| FAQPage | Academy, Digital Solutions, Contact, FAQ | `FaqStructuredData` / `FaqClientStructuredData` |
| Course | Academy | `AcademyStructuredData` |
| Product + Reviews | Academy, Digital Solutions | `TestimonialStructuredData` |
| SoftwareApplication | Digital Solutions | `RxChallengerStructuredData` |
| Quiz | Assessment | `AssessmentStructuredData` / `AssessmentClientStructuredData` |

### Meta Tags

The root layout provides global meta tags (Open Graph, Twitter Cards, security headers, theme color). Individual pages override title, description, and canonical URL via Next.js `metadata` export.

## Build Pipeline

```
Developer Push → GitHub Actions → npm ci → next build → postbuild → upload → deploy
```

1. Push to `main` triggers `.github/workflows/deploy.yml`
2. GitHub Actions sets up Node.js 20
3. `npm ci --ignore-scripts` installs dependencies
4. `npx next build` generates static export to `out/`
5. `node scripts/postbuild.mjs` cleans up Next.js internal files
6. `touch out/.nojekyll` prevents GitHub Pages from ignoring underscore-prefixed files
7. `actions/upload-pages-artifact` uploads `out/` directory
8. `actions/deploy-pages` deploys to GitHub Pages
