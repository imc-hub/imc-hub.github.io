# Deployment Guide

## Overview

The IMC Hub website is deployed to **GitHub Pages** via a GitHub Actions CI/CD pipeline. The site is built as a static export using Next.js and served as plain HTML, CSS, and JavaScript.

**Live URL:** https://imc-hub.github.io/

---

## Automatic Deployment

Every push to the `main` branch automatically triggers a new deployment.

### Pipeline Steps

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌──────────┐    ┌────────┐
│ Checkout │───▶│  Setup  │───▶│  Build  │───▶│ Post-    │───▶│ Deploy │
│   Code   │    │  Node   │    │  Next.js │    │ process  │    │ Pages  │
└─────────┘    └─────────┘    └─────────┘    └──────────┘    └────────┘
```

1. **Checkout** — `actions/checkout@v4` pulls the latest code
2. **Setup** — `actions/setup-node@v4` configures Node.js 20
3. **Install** — `npm ci --ignore-scripts` installs dependencies from lockfile
4. **Build** — `npx next build` with `GITHUB_PAGES=true` generates static export to `out/`
5. **Post-process** — `node scripts/postbuild.mjs` removes Next.js internal build artifacts
6. **No Jekyll** — `touch out/.nojekyll` ensures GitHub Pages serves underscore-prefixed files
7. **Upload** — `actions/upload-pages-artifact@v3` uploads `out/` as deployment artifact
8. **Deploy** — `actions/deploy-pages@v4` publishes to GitHub Pages

---

## Manual Deployment

You can trigger a manual deployment from the GitHub Actions tab:

1. Go to the **Actions** tab in the repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**

---

## Repository Configuration

### Required Settings

The following repository settings must be configured correctly:

| Setting | Value | Location |
|---------|-------|----------|
| Pages Source | `GitHub Actions` | Settings → Pages |
| Workflow Permissions | `contents: read`, `pages: write`, `id-token: write` | Workflow-level permissions |

### Environment Variables

The following environment variable is set in the workflow:

| Variable | Value | Purpose |
|----------|-------|---------|
| `GITHUB_PAGES` | `true` | Signals the build to configure for GitHub Pages deployment |

### Node.js Version

The project requires **Node.js 20.9.0 or later** (Next.js 16 requirement). The workflow specifies Node 20.

---

## CI/CD Environment vs. Local Builds

**Important:** CI builds do NOT have access to `.env.local`. Environment variables requiring runtime availability must either:

1. Be hardcoded if they are public keys (e.g., EmailJS public key), OR
2. Be set as GitHub Secrets and passed via the workflow `env:` block

The project ships with all required public credentials hardcoded in source, so no GitHub Secrets are needed for deployment.

---

## Verifying a Deployment

After a deploy completes:

1. Check the **Actions** tab for a green checkmark on the workflow run
2. Visit `https://imc-hub.github.io/` to confirm the site loads
3. Check browser DevTools → Application → Service Workers for SW registration
4. Verify the new content is visible (may require a hard refresh: `Ctrl+Shift+R`)

### Force Cache Refresh

After deployment, users with the PWA installed will see an "Update Available" banner. Users without the PWA should perform a hard refresh:

- **Windows/Linux:** `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

---

## Rollback

To roll back to a previous deployment:

1. Revert the desired commit: `git revert <commit-sha>`
2. Push to `main`: `git push origin main`
3. The deployment pipeline will automatically build and deploy the reverted code

---

## Troubleshooting

| Symptom | Likely Cause | Solution |
|---------|-------------|----------|
| Site shows README.md | Pages source set to "Deploy from a branch" | Change to "GitHub Actions" in Settings → Pages |
| CSS not loading | `basePath` mismatch in `next.config.ts` | Verify basePath config matches deployment URL |
| Build fails in CI | Node version incompatibility | Ensure Node 20 is specified in workflow |
| Old content after deploy | Service worker cache | Hard refresh or clear site data |
| 404 on page refresh | Static file not found | Verify page exists in `out/` directory after build |
