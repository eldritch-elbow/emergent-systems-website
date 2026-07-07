# Emergent Systems — Marketing Site

Marketing site for Emergent Systems Consulting: a single-page site (`/`) plus a data-driven case-study detail template (`/work/<slug>/`). Built with [Astro](https://astro.build) as a fully static site, deployed to GitHub Pages at [emergentsystems.io](https://emergentsystems.io).

## Stack

- **Astro** (static output, no server) — one page per case study is generated at build time from `src/content/caseStudies.ts`.
- **Plain CSS**, no framework — design tokens (colours, type, spacing) live in `src/styles/tokens.css`, shared component styles in `src/styles/global.css`.
- **Vanilla TypeScript** for the two pieces of real interactivity — the hero/approach canvas animations and the services list — rather than a UI framework, since the site has no other client-side state.
- No test suite currently exists. `npm run build` is the main correctness check (it fails on broken Astro templates/imports); everything else is verified visually.

## Requirements

- Node **>= 22.12** (required by Astro 7 — check with `node -v`)
- npm >= 9.6.5

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:4321, live reload
npm run build      # production build to dist/
npm run preview    # serve the dist/ build locally, to sanity-check a production build
```

After `npm run build`, open `dist/index.html` or run `npm run preview` to check the output before pushing.

## Project structure

```
src/
  layouts/BaseLayout.astro   — <head>, font loading, global CSS import
  styles/tokens.css          — design tokens (colour/type/spacing/radius/shadow custom properties)
  styles/global.css          — shared classes (.btn, .chip, .eyebrow, .h1–h3, .sec, .callout, etc.)
  components/                — one component per site section (Nav, Hero, Problem, Approach,
                                Services, Work, About, ContactFooter)
  scripts/                   — vanilla-TS logic used by components' inline <script> tags:
                                heroCanvas.ts, lifeCellsCanvas.ts (canvas animations),
                                servicesList.ts (services hover/click state)
  content/caseStudies.ts     — all case-study data (see below)
  pages/
    index.astro              — assembles the main page from the components above
    work/[slug].astro        — case-study detail template, driven by caseStudies.ts
public/
  uploads/                   — brand assets, services one-pager PDF
  uploads/case-studies/      — case-study logos and hero images
  CNAME                      — custom domain for GitHub Pages (emergentsystems.io)
design_handoff_emergent_systems_site/
                              — original design handoff (reference HTML/screenshots). Historical
                                reference only — not part of the build, do not import from it.
```

## Updating content

**Case studies** — everything (copy, images, meta, confidentiality) lives in `src/content/caseStudies.ts`. Each entry is either a `StandardCaseStudy` or a `ConfidentialCaseStudy`:

- Common fields: `slug` (drives the URL, `/work/<slug>/`), `code`, `cardTitle`, `client`, `cardBody` (shown on the Work grid card), `image` (card thumbnail — a filename under `public/uploads/case-studies/`).
- `StandardCaseStudy` (`confidential: false`) additionally needs: `heroImage` (detail-page banner, also under `public/uploads/case-studies/` — kept separate from `image` so the card logo and the detail-page photo can differ), `heroImageLabel` (alt text), `meta` (the Client/Role/Stage/Focus row), `sections` (Challenge/Approach/Outcome copy, with optional bullet lists), `atGlance`, `disciplinesBridged`, and an optional `note`.
- `ConfidentialCaseStudy` (`confidential: true`) only needs `whatCanBeShared` in addition to the common fields — it deliberately has **no** `heroImage`, so the detail page shows the redacted/"confidential" treatment instead of a photo. Don't add a `heroImage` to a confidential entry.
- Adding a new case study = add a new object to the `caseStudies` array; a new `/work/<slug>/` page is generated automatically at build time (see `getStaticPaths` in `src/pages/work/[slug].astro`).

**Case-study images** — drop new files into `public/uploads/case-studies/` and reference the filename (not the path) from `image`/`heroImage` in `caseStudies.ts`. Keep filenames kebab-case, no spaces.

**Services** — the six services shown in the Services section (name, one-line outcome, and the short addendum shown under "What you get" in the callout) are defined directly in `src/components/Services.astro`, in the `services` array at the top of the file.

**General page copy** — each section's text lives directly in its component under `src/components/`, as plain text/JSX-like markup — no CMS or content abstraction layer.

**Design tokens** — colours, fonts, spacing, radii, and shadows are all CSS custom properties in `src/styles/tokens.css`. Change a value there to update it site-wide rather than editing inline styles.

**Brand assets** — logo and services one-pager PDF are in `public/uploads/`. The one-pager is linked for download from the Services section; if you replace it, keep the same filename or update the `href` in `Services.astro`.

## Verifying changes

There's no automated test suite. Before pushing:

1. `npm run build` — must complete without errors.
2. `npm run dev` and manually check the page(s) you touched in a browser, including:
   - The hero crystallisation animation and the Approach section's background field (both respect `prefers-reduced-motion` — test with that OS setting on and off if you touch `heroCanvas.ts` or `lifeCellsCanvas.ts`).
   - The Services list hover/click interaction and the callout height (it's set to match the list's height via CSS, not a fixed value).
   - Every case-study detail page (`/work/<slug>/`), especially after editing `caseStudies.ts`, since a typo in a required field will fail the build rather than fail silently.
3. For visual/layout questions, the original design reference is in `design_handoff_emergent_systems_site/README.md` and its `screenshots/` folder — useful for checking a change hasn't drifted from the intended design.

## Deployment

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and publishes it via `actions/deploy-pages` to GitHub Pages. No manual build/upload step is needed.

The site is served from the custom domain `emergentsystems.io` (see `public/CNAME` and the `site` value in `astro.config.mjs`). This requires, outside of this repo:
- DNS at the registrar: 4 `A` records on the apex (`@`) pointing at GitHub Pages' IPs, plus a `CNAME` record for `www` pointing at `eldritch-elbow.github.io`.
- GitHub repo Settings → Pages: custom domain set to `emergentsystems.io`, "Enforce HTTPS" enabled (GitHub provisions the certificate automatically once DNS is verified).

If the custom domain ever changes, both `public/CNAME` and `site` in `astro.config.mjs` need updating together — `base` is not currently set (the site serves from `/`), and should only be reintroduced if the site moves back to a GitHub Pages subpath instead of a custom domain.
