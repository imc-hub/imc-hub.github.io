# SEO Guide

## Overview

The IMC Hub website implements comprehensive on-page and technical SEO. Every page is optimized for search engine discovery, social sharing, and rich result eligibility.

---

## On-Page SEO

### Titles and Descriptions

Each page has a unique `<title>` (50–60 characters) and `<meta name="description">` (150–160 characters):

| Page | Title | Description |
|------|-------|-------------|
| Home | Intelligent Mastery Coaching (IMC) | Career readiness platform... |
| About | About Us | Mission, vision, team... |
| Academy | Corporate & Business Training | Structured learning paths... |
| Digital Solutions | Digital Solutions & Technology | Gamified EdTech platforms... |
| Assessment | Career Readiness Assessment | Free 20-question quiz... |
| Contact | Contact Us | Get in touch with IMC... |
| FAQ | Frequently Asked Questions | Common questions about IMC... |
| Privacy | Privacy Policy | How IMC collects and uses data... |
| Terms | Terms of Service | Terms governing use of IMC... |

### Canonical URLs

All server-rendered pages include a `<link rel="canonical">` tag pointing to their absolute URL on the live domain.

---

## Technical SEO

### Sitemap

**Route:** `/sitemap.xml` (auto-generated via `src/app/sitemap.ts`)

| Route | Priority | Change Frequency |
|-------|----------|-----------------|
| `/` | 1.0 | weekly |
| `/about` | 0.8 | monthly |
| `/academy` | 0.9 | monthly |
| `/digital-solutions` | 0.8 | monthly |
| `/assessment` | 0.8 | monthly |
| `/contact` | 0.7 | monthly |
| `/faq` | 0.6 | monthly |
| `/privacy` | 0.3 | yearly |
| `/terms` | 0.3 | yearly |

### robots.txt

**Route:** `/robots.txt` (auto-generated via `src/app/robots.ts`)

- Allows all crawlers
- Disallows `/_next/` and `/out/` directories
- Includes sitemap reference
- Includes host directive

### Structured Data (JSON-LD)

The site implements eight schema types for rich result eligibility:

#### Organization (Global)
```json
{
  "@type": "Organization",
  "name": "IMC — Intelligent Mastery Coaching",
  "url": "https://imc-hub.github.io/",
  "logo": { "@type": "ImageObject", ... },
  "sameAs": ["https://github.com/imc-hub"],
  "contactPoint": [{ ... }]
}
```

#### WebSite (Global)
- `SearchAction` — Site search potential
- `AssessAction` — Assessment action

#### WebPage (Per-page)
- `BreadcrumbList` with full navigation path

#### FAQPage (Academy, Digital Solutions, Contact, FAQ)
- Up to 26FAQ entries across categories
- Enables Google FAQ rich results

#### Course (Academy)
- Rx Challenger course details
- Provider: IMC

#### Product + Reviews (Academy, Digital Solutions)
- Rx Challenger product schema
- AggregateRating: 4.8/5
- Three Review schemas

#### SoftwareApplication (Digital Solutions)
- Rx Challenger app details
- Download URL, author, category, offers

#### Quiz (Assessment)
- `Quiz` schema for career readiness assessment
- `assesses` field with 5 competency areas

---

## Social Sharing

### Open Graph

Every page includes:
- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:site_name`
- `og:image` (1200×630)
- `og:locale`

### Twitter Cards

- `twitter:card: summary_large_image`
- `twitter:title`
- `twitter:description`
- `twitter:image`

### Favicons and Icons

| Reference | File |
|-----------|------|
| Favicon (ICO) | `/favicon.ico` (16/32/48px multi-res) |
| Favicon 16×16 | `/favicon-16x16.png` |
| Favicon 32×32 | `/favicon-32x32.png` |
| Apple Touch Icon | `/icons/apple-touch-icon.png` (180×180) |
| PWA Icon 192 | `/icons/icon-192.png` |
| PWA Icon 512 | `/icons/icon-512.png` |
| Maskable Icon | `/icons/icon-maskable.png` |
| OG Image | `/og-image.png` (1200×630) |
| OG Image Square | `/og-image-square.png` (600×600) |

---

## Performance

- **Static HTML** — Zero server response time for page rendering
- **Pre-rendered pages** — All content available in initial HTML payload
- **Minimal JavaScript** — Only client components ship JS; static pages are HTML-only
- **Workbox caching** — Service worker caches assets for repeat visits
- **Responsive images** — Width/height attributes prevent layout shift
- **Font optimization** — Google Fonts with `preconnect` hints and `font-display: swap`

---

## Security Headers (Meta Tags)

GitHub Pages does not support custom HTTP headers. Security policies are implemented via `<meta>` tags:

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=(), payment=() |

For full HTTP header control, a CDN (e.g., Cloudflare) can be placed in front of GitHub Pages.

---

## Verification

### Google Search Console

The site includes a verification file at `public/google62c9fc6ba2ba8b2e.html`. This must remain in place for continued verification.

### Testing Tools

| Tool | Purpose |
|------|---------|
| Google Rich Results Test | Verify structured data |
| Facebook Sharing Debugger | Test OG tags for Facebook/WhatsApp |
| LinkedIn Post Inspector | Test OG tags for LinkedIn |
| Twitter Card Validator | Test Twitter Cards |
| Google PageSpeed Insights | Performance audit |
| WAVE Web Accessibility | Accessibility audit |
| W3C Validator | HTML validation |
