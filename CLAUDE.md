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
│   ├── page.tsx            # Homepage (Hero, Stats, Ecosystem, HowItWorks, Testimonials, CTA)
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx      # About (mission, vision, principles, team)
│   ├── contact/page.tsx    # Contact (methods, form→mailto, FAQ)
│   ├── privacy/page.tsx    # Privacy Policy (12 sections)
│   └── terms/page.tsx      # Terms of Service (13 sections)
├── components/
│   ├── layout/
│   │   ├── header.tsx      # "use client" — sticky, responsive mobile menu
│   │   ├── footer.tsx      # Links: Product, Company, Legal
│   │   └── page-layout.tsx # Header + Footer wrapper for sub-pages
│   ├── sections/
│   │   ├── hero.tsx        # Hero with gradient bg, CTAs, pillar cards, logos
│   │   ├── stats.tsx       # 4 stats on navy background
│   │   ├── ecosystem.tsx   # 3 pillar cards (Academy, Simulator, OCTRI)
│   │   ├── how-it-works.tsx# 4-step process with icons
│   │   ├── testimonials.tsx# 3 testimonial cards with stars
│   │   └── cta.tsx         # Final CTA with buttons
│   └── ui/
│       ├── button.tsx      # CVA variants: default, outline, secondary, ghost, destructive, link
│       ├── card.tsx        # Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
│       ├── input.tsx       # @base-ui/react Input wrapper
│       ├── label.tsx       # "use client" label
│       └── textarea.tsx    # Standard textarea
└── lib/
    └── utils.ts            # cn() = twMerge(clsx())
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
- NOTE: `/#pricing` footer link exists but there's no pricing section on the page

### Navigation Links
- Header: About (`/about`), Ecosystem (`/#ecosystem`), How It Works (`/#how-it-works`), Contact (`/contact`)
- Footer Product: Ecosystem, How It Works, Pricing; Company: About, Contact; Legal: Terms, Privacy

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
