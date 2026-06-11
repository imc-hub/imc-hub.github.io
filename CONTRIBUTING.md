# Contributing to IMC Hub

Thank you for your interest in contributing to the IMC Hub website. This document provides guidelines and instructions for contributing.

---

## Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## How to Contribute

### Reporting Issues

- Use the [GitHub Issue Tracker](https://github.com/imc-hub/imc-hub.github.io/issues) to report bugs or request features
- Provide a clear description of the issue
- Include steps to reproduce (for bugs)
- Specify your browser and environment details where relevant

### Submitting Changes

1. **Fork** the repository
2. **Create a branch** from `main` describing your change:
   - `feature/description` — New features or content
   - `fix/description` — Bug fixes
   - `docs/description` — Documentation updates
   - `seo/description` — SEO improvements
3. **Make your changes** following the coding conventions below
4. **Test locally** by running `npm run build` to verify the build succeeds
5. **Commit** with clear, descriptive commit messages
6. **Open a Pull Request** against the `main` branch

---

## Development Conventions

### Page Creation

- Server Components (default) for static content pages — supports `metadata` export for SEO
- `"use client"` directive only when interactivity is required (forms, quizzes, dynamic UI)
- Never use inline event handlers (`onClick`, `onSubmit`) in Server Components — they break static export
- All structured data for client components must be injected via `useEffect` using client-side JSON-LD components

### Styling

- Use Tailwind CSS utility classes
- Use the `cn()` utility (`src/lib/utils.ts`) for conditional class composition
- Follow the existing design system variables defined in `globals.css`
- Test across mobile, tablet, and desktop viewports

### SEO Requirements

Every page must include:
- Unique `<title>` (50–60 characters)
- Unique `<meta name="description">` (150–160 characters)
- Canonical URL
- Open Graph and Twitter Card tags (inherited from root layout or page-level metadata)
- Appropriate JSON-LD structured data

### Accessibility

- Semantic HTML elements (`<nav>`, `<main>`, `<section>`)
- `aria-label` attributes on navigation and interactive elements
- Alt text on all images
- Keyboard-navigable interactive components

---

## Project Structure Guidelines

- **New pages** → `src/app/<slug>/page.tsx` wrapped in `<PageLayout>`
- **Reusable components** → `src/components/` organized by purpose (layout, sections, ui, seo, pwa)
- **Static assets** → `public/` for images, favicons, and PWA assets
- **Documentation** → `docs/` for architectural and process documentation

---

## Review Process

- All changes require a pull request
- PRs are reviewed for: build compatibility, SEO compliance, accessibility, responsive design, and brand consistency
- The deployment pipeline runs automatically on merge to `main`

---

## Questions?

Reach out to us at [imc.hub.eg@gmail.com](mailto:imc.hub.eg@gmail.com).
