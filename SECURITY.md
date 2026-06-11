# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in the IMC Hub website, please report it responsibly:

1. **Email** us at [imc.hub.eg@gmail.com](mailto:imc.hub.eg@gmail.com) with the subject line "Security Vulnerability Report"
2. Include a detailed description of the vulnerability and steps to reproduce
3. Allow reasonable time for a response before public disclosure

We take all security reports seriously and will respond promptly.

---

## Security Posture

### Current Architecture

The IMC Hub website is a **static site** built with Next.js and exported as plain HTML/CSS/JS. There is no server-side processing, database, or authentication system. This architecture inherently limits the attack surface.

### Implemented Security Measures

- **Content Security Policy** — Meta-tag CSP restricting resource loading
- **X-Content-Type-Options: nosniff** — Prevents MIME type sniffing
- **X-Frame-Options: DENY** — Prevents clickjacking
- **Referrer-Policy: strict-origin-when-cross-origin** — Limits referrer information leakage
- **Permissions-Policy** — Disables unused browser APIs (camera, microphone, geolocation, payment)
- **Input Validation** — Client-side validation on all form inputs
- **No inline event handlers in Server Components** — Prevents injection via server-rendered markup
- **All `target="_blank"` links use `rel="noopener noreferrer"`** — Prevents reverse tabnapping
- **No client-side storage** — No localStorage, sessionStorage, or cookies used
- **No user input in `dangerouslySetInnerHTML`** — All JSON-LD is hardcoded structured data

### Known Considerations

- **PostCSS (build-time)**: The project bundles PostCSS 8.4.31 via Next.js 16.2.7. This is a build-time dependency that does not process user input. The risk is minimal for a static site.
- **HTTP Headers on GitHub Pages**: GitHub Pages does not support custom HTTP headers. Security headers are implemented via `<meta>` tags where possible. For full HTTP header control, a CDN (e.g., Cloudflare) can be placed in front of GitHub Pages.
- **EmailJS Credentials**: EmailJS public keys are intentionally exposed in client-side code. These are public-facing keys designed for browser use and do not grant access to the EmailJS account.

### Dependency Management

Dependencies are kept up to date. Security advisories for transitive dependencies are monitored. The project uses `npm ci` in CI/CD to ensure reproducible builds.
