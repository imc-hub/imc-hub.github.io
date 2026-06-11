# IMC Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github)](https://imc-hub.github.io/)

> Official website for **IMC (Intelligent Mastery Coaching)** — a technology-enabled ecosystem bridging the gap between academic education and market reality.

**Live Site:** [https://imc-hub.github.io/](https://imc-hub.github.io/)

---

## About IMC

IMC (Intelligent Mastery Coaching) is a technology-enabled ecosystem that bridges the gap between academic education and market reality. Our framework integrates **Strategic Intellect**, **Digital Mastery**, and **Physical & Mental Endurance** to accelerate personal and organizational development.

We operate across three business units, each addressing a distinct dimension of human and organizational capability:

---

## Business Units

### Corporate & Business Training

Career readiness programs designed to prepare professionals for the modern workforce. Our curriculum covers data analysis, AI tools, professional development, and real-world project execution. We partner with organizations to deliver customized training that transforms talent pipelines and drives measurable business outcomes.

**Key offerings:**
- Career readiness & workplace preparation
- Data analysis & AI literacy
- Professional development workshops
- Corporate training programs
- Real-world project simulations

### Athletic Performance (OCTRI)

Performance coaching for endurance athletes and executives alike. Our OCTRI program focuses on triathlon training, mental toughness, and physical endurance — building the resilience and discipline that translates from sport to the boardroom.

**Key offerings:**
- Triathlon & endurance coaching
- Mental toughness development
- Physical performance optimization
- Executive performance programs

### Digital Solutions & Technology

Gamified EdTech platforms and mobile applications that make learning engaging, measurable, and scalable. We build technology-enabled learning systems that serve individual learners and enterprise clients alike.

**Key offerings:**
- Gamified learning platforms
- Mobile education applications
- Organizational development systems
- Scalable digital learning infrastructure

### Featured Product: Rx Challenger

**Rx Challenger** is our flagship healthcare education app — a gamified prescription interpretation training platform that helps pharmacy students and healthcare professionals build clinical skills through interactive case studies. Available on [Google Play](https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en).

---

## Website Features

- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **SEO Optimized** — Complete meta tags, Open Graph, Twitter Cards, structured data
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation
- **Progressive Web App** — Installable, offline-capable with service worker caching
- **Contact Form** — EmailJS-powered contact form with validation
- **Dynamic Sitemap** — Auto-generated `sitemap.xml` with priorities and change frequency
- **Structured Data** — JSON-LD for Organization, WebPage, FAQ, Course, Quiz, and Product schemas
- **Social Sharing** — Optimized preview cards for WhatsApp, LinkedIn, Facebook, X/Twitter

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) (base-nova style) |
| Headless UI | [@base-ui/react](https://base-ui.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Email | [EmailJS](https://www.emailjs.com) |
| Fonts | Inter (Google Fonts) |
| Build Output | Static HTML/CSS/JS export |
| Deployment | [GitHub Pages](https://pages.github.com) via GitHub Actions |
| PWA | [Workbox](https://developer.chrome.com/docs/workbox) 7.3.0 |

---

## Project Structure

```
imc-hub.github.io/
├── docs/                     # Project documentation
├── public/                   # Static assets
│   ├── icons/                # PWA icons (192, 512, maskable)
│   ├── favicon.ico           # Multi-resolution favicon
│   ├── favicon-16x16.png     # 16×16 favicon
│   ├── favicon-32x32.png     # 32×32 favicon
│   ├── og-image.png          # Social sharing preview (1200×630)
│   ├── manifest.json         # PWA app manifest
│   └── sw.js                 # Workbox service worker
├── scripts/
│   └── postbuild.mjs         # Post-build cleanup script
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout (fonts, SEO, PWA)
│   │   ├── globals.css       # Tailwind import, theme variables
│   │   ├── robots.ts         # robots.txt generator
│   │   ├── sitemap.ts        # sitemap.xml generator
│   │   ├── not-found.tsx     # 404 page
│   │   ├── about/            # About IMC (mission, vision, team)
│   │   ├── academy/          # Corporate & Business Training
│   │   ├── digital-solutions/ # Digital Solutions & Technology
│   │   ├── assessment/       # Career readiness quiz
│   │   ├── contact/          # Contact form + FAQ
│   │   ├── faq/              # Frequently asked questions
│   │   ├── privacy/          # Privacy policy
│   │   └── terms/            # Terms of service
│   ├── components/
│   │   ├── layout/           # Header, footer, page layout wrapper
│   │   ├── sections/         # Homepage sections (hero, stats, ecosystem, etc.)
│   │   ├── ui/               # Reusable UI components (button, card, input, etc.)
│   │   ├── seo/              # Structured data (JSON-LD) components
│   │   └── pwa/              # Install prompt, update toast
│   └── lib/
│       └── utils.ts          # Utility functions (cn, etc.)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment pipeline
├── CLAUDE.md                 # AI agent project context
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies and scripts
```

---

## Local Development

### Prerequisites

- **Node.js** 20.9.0 or later (Next.js 16 requirement)
- **npm** (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/imc-hub/imc-hub.github.io.git
cd imc-hub.github.io

# Install dependencies
npm ci
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Build

```bash
npm run build
```

This generates a static export in the `out/` directory. To preview locally:

```bash
cd out && python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

### Lint

```bash
npm run lint
```

---

## Deployment

The site is deployed to **GitHub Pages** via GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers the deployment pipeline:

1. GitHub Actions checks out the code and sets up Node.js 20
2. Runs `npm ci` to install dependencies
3. Runs `npx next build` with `GITHUB_PAGES=true`
4. Adds `.nojekyll` to the output directory
5. Uploads the `out/` directory as a Pages artifact
6. Deploys to GitHub Pages

### Manual Deployment

You can also trigger the workflow manually from the **Actions** tab in the GitHub repository.

### Repository Settings

Ensure GitHub Pages source is set to **"GitHub Actions"** in the repository Settings → Pages.

---

## SEO Features

| Feature | Status | Description |
|---------|--------|-------------|
| Unique page titles | ✅ | 50–60 characters, per-page |
| Meta descriptions | ✅ | 150–160 characters, per-page |
| Canonical URLs | ✅ | On all server-rendered pages |
| Open Graph tags | ✅ | title, description, url, type, image |
| Twitter Cards | ✅ | `summary_large_image` format |
| XML sitemap | ✅ | Auto-generated with priorities & changefreq |
| robots.txt | ✅ | With sitemap reference and host directive |
| JSON-LD Organization | ✅ | Global, with logo and contact points |
| JSON-LD WebSite | ✅ | With SearchAction and AssessAction |
| JSON-LD WebPage | ✅ | Per-page with BreadcrumbList |
| JSON-LD FAQPage | ✅ | Academy, Digital Solutions, Contact, FAQ pages |
| JSON-LD Course | ✅ | Rx Challenger course schema |
| JSON-LD Product | ✅ | Rx Challenger with reviews and rating |
| JSON-LD Quiz | ✅ | Career readiness assessment |
| Semantic HTML | ✅ | `<nav>`, `<main>`, one `<h1>` per page |
| Image optimization | ✅ | Alt text, width, and height attributes |
| Favicon | ✅ | ICO + 16×16 + 32×32 PNG |
| OG Image | ✅ | 1200×630 social preview image |
| PWA | ✅ | Installable, offline-capable |

---

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct, development workflow, and how to submit pull requests.

---

## Contact

**Email:** [imc.hub.eg@gmail.com](mailto:imc.hub.eg@gmail.com)

**Website:** [https://imc-hub.github.io/](https://imc-hub.github.io/)

---

## License

This project is licensed under the [MIT License](LICENSE).
