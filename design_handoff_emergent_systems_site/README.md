# Handoff: Emergent Systems — Marketing Site

## Overview
A marketing website for **Emergent Systems**, a medical technology & software consultancy (fractional CTO / technical strategy for digital-health companies). The design comprises a single-page marketing site plus a case-study detail template. Its central idea is **"bringing order to chaos in health technology"** — expressed through an animated hero in which a scattered particle cloud crystallises into a coherent network.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behaviour. They are **not production code to copy directly**. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, Svelte, etc.) using its established components, styling approach, and conventions. If no front-end environment exists yet, choose an appropriate modern stack (e.g. React + a CSS approach of your choice) and implement there.

The prototypes are authored as "Design Components" (`.dc.html`) driven by a runtime shim (`support.js`). **Do not port `support.js` or the `<x-dc>`/`<sc-for>`/`renderVals` machinery** — that is prototyping scaffolding. Reproduce the *rendered* UI and behaviour instead. The two pieces of real logic worth reading are the canvas animations and the services interaction, both described in detail below.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, and interactions are all specified here and should be reproduced faithfully. The only placeholders are imagery (see **Assets**): striped boxes stand in for real photos/screenshots and should be replaced with real images in production.

---

## Screens / Views

### 1. Main site — `Emergent Systems Site.dc.html`
A single centred page, **1120px wide**, background `#f6f2ea`, radius 14px, drop shadow `0 8px 40px rgba(29,35,51,.14)`, sitting on a desk background `#e7e2da`. Sections top-to-bottom:

**Nav bar** (sticky-feel header, not fixed)
- Padding `20px 84px`, background `#f6f2ea`, bottom border `1px solid #e7ddcd`.
- Left: logo mark (32×32, radius 8) + wordmark "Emergent Systems" (Space Grotesk 600, 18px, `#1d2333`).
- Right: text links "Approach / Services / Work / About" (system-ui 500, 14px, `#57606f`), then a coral CTA button "Get in touch".

**Hero** (`.sec`, flex row, gap 52px, vertically centred; padding 76px 84px)
- Left column (flex 1.25):
  - Eyebrow: "Medical Technology and Software Consultancy" (IBM Plex Mono 600, 12px, uppercase, letter-spacing .1em, `#c0562f`).
  - H1 (Space Grotesk 600, 44px/1.12, letter-spacing -.02em, `#1d2333`): **"Bringing order to chaos in health technology, across science, AI, software, and regulation."**
  - Lead (system-ui 400, 19px/1.55, `#57606f`): "Helping digital health innovators cut through the complexity to realise the value of their ideas, attract investment, and make a real impact in healthcare by creating safe, secure, and scalable regulated products."
  - Button row: navy "See services" + outline-coral "Book a call →".
- Right column (flex 1): a **300px-tall navy panel** (radius 14, `overflow:hidden`, shadow `0 10px 34px rgba(29,35,51,.16)`) containing the **crystallisation canvas animation** (see Interactions). Canvas has `role="img"` + `aria-label="Order, waiting to be uncovered in apparent chaos — a network crystallising out of a chaotic cloud"`.

**The problem** (`.sec`, band background `#edece8`, top+bottom border `1px solid #d8d8d0`)
- Eyebrow "The problem".
- H2 (max-width 820px): "Most teams have world-class science or world-class engineering — rarely both, and almost never with the regulatory fluency that clinical-grade software demands."
- Body (max-width 720px): "That gap is where good digital health companies quietly fail. Bridging from scientific idea to an investable product concept with a robust regulatory and technology strategy is intrinsically complex, and an easy place to stall without expert insight."
- Row of 3 solid chips: "Founders · CTOs · technical leaders", "Seed to Series B", "Healthtech & life sciences".

**Approach / End-to-end** (`.sec`, id `approach`, padding 60px 84px)
- Contains one **navy feature card** (`#1d2333`, radius 18, padding 44px 48px, `position:relative; overflow:hidden`) with a faint **"life cells" canvas field** behind the content (see Interactions).
- Eyebrow "End to end" (in light coral `#f0a07f`), H2 white "One advisor, the full technical picture".
- A horizontal **chain** of 5 nodes (numbered circles 01–05, 60px, 2px coral border, white number) with connecting arrows, labels: Scientific insight → AI / ML judgement → Software architecture → Regulatory pathway → Investor narrative. Node 05 uses light-coral border `#f0a07f`.
- Body paragraph (light `#aeb3c0`, max-width 760px): "Emergent Systems finds the pattern hidden across scientific insight, AI/ML judgement, software architecture, regulatory pathway, and investor narrative — and resolves it into a single coherent technology strategy. The rare combination that usually gets split across four different people."

**Services** (`.sec`, id `services`, band `#edece8`, top border)
- Header block (max-width 460): eyebrow "Services", H2 "How we work with you", body "A focused set of engagements. Hover a service to see the outcome it's built to deliver."
- Two-column row (gap 46, align-items flex-start, margin-top 28):
  - **Left (flex 1.32):** a bordered list card (`#fbf8f2`, border `1px solid #e2dccf`, radius 14, shadow `0 2px 14px rgba(29,35,51,.04)`). Each row: `display:flex; align-items:center; gap:18px; padding:19px 24px; cursor:pointer; border-top:1px solid #ede6d8`. Row contents: a mono code (min-width 70px, 11px, `#b98d6f`), the service name (Space Grotesk 600, 18px/1.25, `#242a36`), and a trailing "→". The **selected/hovered** row: white background + `box-shadow: inset 4px 0 0 #d9663c` + coral arrow `#d9663c`; unselected arrow `#cbc2b1`.
  - **Right (flex 0.82, `position:sticky; top:20px`):** a callout card (`#fffdf9`, border `1px solid #ecd9cd`, left border `4px solid #d9663c`, radius 14, padding 30px 32px). Contents: selected service code (mono 11px `#c0562f`), label "What you get" (mono 10.5px uppercase `#ad9f88`), the outcome sentence (system-ui 400, 19px/1.5, `#2f3542`), and a coral button "Discuss this engagement →" pinned to the bottom.
- Footer row (margin-top 30, top border `1px solid #ded9cf`): "Also available:" + 3 coral chips (AI Integration Strategy / Health Data & Platform Architecture / Scientific → Software Translation), and a navy download button "Download the services one-pager (PDF) ↓" linking to the PDF.
- **Service data** (code · name · outcome):
  1. CTO · Fractional CTO — Digital Health · "Secure a senior technical leader without full-time hiring."
  2. SPRINT · Technology Strategy Sprint · "Develop a technology strategy to realise your vision, de-risked with a scalable prototype."
  3. DILIGENCE · Technical Due Diligence · "Gain a clear read on technical risk before you commit."
  4. SaMD · SaMD & Regulated Software Advisory · "Establish a credible regulatory path for your clinical software."
  5. BOARD · Board Technical Advisor · "Provide board assurance for your technology choices."
  6. GRANT · Innovate UK Grant Advisory · "Build strong, reviewer-ready innovation submissions."

**Selected work** (`.sec`, id `work`)
- Eyebrow "Selected work", H2 "Case studies".
- 3-column grid (gap 18). Each card: `#fffdf9`, border `1px solid #ece3d5`, radius 12, `overflow:hidden`. Top: a 150px image placeholder (bottom border). Body (padding 22): H3 title, client label (13px `#c0562f`), body copy, and "Read case study →" (Space Grotesk 600, 13px, `#d9663c`).
  - CLM · "SaMD & clinical trials" · Closed Loop Medicine.
  - OFH · "Platform architecture" · Our Future Health.
  - DD · "Technical due diligence" · Platform acquisition · Lean Library.

**About** (`.sec`, id `about`, flex row gap 44, align-items flex-start, band `#edece8`, top+bottom border)
- Left: circular 150px image placeholder ("photo").
- Right: eyebrow "About", H2 "Led by James Siddle", body bio paragraph, a row of 3 proof chips (SaMD · MHRA · EU MDR fluency / Patents & publications / Innovate UK grant track record), a row of 3 outline-coral buttons (Personal site ↗ / LinkedIn ↗ / CV ↗), and a small note "Full biography, publications and talks live on jamessiddle.net."

**Contact / Footer** (`.sec`, id `contact`, background `#1d2333`, padding 56px top / 40px bottom)
- Top row (space-between, bottom border `1px solid #2e344a`, padding-bottom 34): left — H2 white "Let's talk." + light body (`#aeb3c0`, max-width 440); right — coral "Book a call (Calendly)" + outline-white "Email me".
- Bottom row (padding-top 22): white brand mark + wordmark; muted line "emergentsystems.consulting@gmail.com · © 2026 Emergent Systems".

### 2. Case study detail — `Case Study Detail.dc.html`
A detail-page template (same 1120px page shell, section padding 56px 84px) for an individual case study. Includes: back link, eyebrow + H1 title, a **meta row** (key/value pairs, e.g. Client / Sector / Engagement / Year, mono uppercase keys `#a99f8d` over 15px values), a two-column body (narrative `.body` copy + a sticky **side panel** `.side` in `#eae6dd` with key facts and bulleted outcomes using coral dot bullets), image placeholders, and a **"confidential" treatment** (`.conf`: dashed border `#cbc0aa`, redaction bars `.redact` `#ddd5c6`, and a `.lock` mono label) for NDA-restricted work. Reuses all the same tokens/components as the main site.

---

## Interactions & Behavior

### Hero crystallisation animation (canvas 2D, the signature motif)
Rendered on the hero's navy panel; background repainted `#1d2333` each frame.
- **Structure:** ~90 nodes laid out on a jittered 13×7 grid whose bounds extend **beyond the canvas on all four sides** (x from −12% to 112% of width, y from −14% to 114% of height), so the visible frame shows *part* of a larger network. Edges are precomputed by proximity (connect node pairs within ~1.15× grid spacing) → an irregular, varied-length network.
- **Node sizes:** wide spread, skewed small — `size = 1.5 + pow(random, 1.8) * 5.2` (≈1.5–6.7px).
- **Colours:** regular nodes **pure white** `rgba(255,255,255,alpha)`; ~14% of nodes are **coral hubs** `rgba(240,160,127,alpha)`. Edges are cool white `rgba(214,220,232, …)` at low alpha (≤~0.42). Alpha rises with coherence.
- **Loop (~16s):** `crystallise 6s → hold 5s → decohere 3.5s → gap 1.5s → repeat`.
  - *Crystallise:* an ordering "front" sweeps left→right; each node's order = smoothstep of the front crossing its target x.
  - *Hold:* fully ordered; nodes sit at target positions with a gentle constrained drift (`±~6px` sinusoidal, per-node phase) so edges flex — "order has emerged but the system is still alive."
  - *Decohere:* order fades globally back to 0; nodes drift out to scattered chaos positions (`±~118px` x / `±~90px` y).
- Uses `requestAnimationFrame` with a clamped delta-time; a smoothstep `p*p*(3-2*p)` blends chaos↔order positions. Implement as a self-contained canvas component; respect `prefers-reduced-motion` by rendering a single cohered frame.

### "Life cells" field (Approach section background)
A faint field of dots behind the bridge chain on the navy card. For each cell in a grid (cell ≈19px) a scalar value is summed from several travelling sine waves + a radial term; where it exceeds a threshold a coral dot is drawn, radius/alpha scaled by intensity (max alpha ~0.20). Continuous, subtle, non-halting. This motif is **retained as-is** and is intentionally distinct from the hero.

### Services list ↔ callout
Hovering (mouse enter) or clicking a service row sets the selected index; the sticky right-hand callout updates to show that service's code + outcome + CTA. Selected row gets a white background, an inset 4px coral left-bar, and a coral arrow. Default selection is the first service (index 0).

### Global
- Nav links are in-page anchors (`#approach`, `#services`, `#work`, `#about`, `#contact`).
- Buttons/links: define hover states (e.g. slight darken/lift). Links should inherit the coral palette, never browser-default blue.
- Transitions: row background transition ~120ms.

## State Management
- `selectedService` (int, default 0) — drives the Services callout. Set on row hover/click.
- Canvas animations own their internal timeline state (elapsed time, per-node phases); no external state needed. Clean up `requestAnimationFrame` on unmount.
- No data fetching; all content is static copy (listed above).

## Design Tokens

**Colours**
- Desk / outermost background: `#e7e2da`
- Page surface: `#f6f2ea`
- Alt band section: `#edece8` (dividers `#d8d8d0`)
- Ink / navy sections: `#1d2333` (deep canvas variant `#161b29`; footer divider `#2e344a`)
- Primary accent (buttons): `#d9663c`
- Accent dark (eyebrows, links, client labels): `#c0562f`
- Light coral (accents on navy): `#f0a07f`
- Text: primary `#1d2333`, body `#5c6473`, lead/secondary `#57606f`, on-navy body `#aeb3c0`
- Muted / mono labels: `#8a8172`, `#a99f8d`, `#b98d6f`, `#9a917f`
- Chip (coral): bg `#f7e9e0`, border `#eecfc0`, text `#c0562f`
- Chip (solid/neutral): bg `#e2e2db`, border `#d4d5cc`, text `#585a52`
- Card surfaces: `#fffdf9` (work / callout), `#fbf8f2` (services list), `#eae6dd` (side panel); card borders `#ece3d5` / `#e2dccf` / `#e2d9c8`
- Outline-coral button border: `#e2b4a0`; outline-white-on-navy border: `#3c4258`
- Image placeholder: 45° stripes `#efe7d8`/`#e6dccb`, border `#e2d6c4`, label text `#ad9f88`

**Typography**
- Display / headings / buttons: **Space Grotesk** (400/500/600/700)
- Eyebrows / codes / labels: **IBM Plex Mono** (400/500), uppercase, letter-spacing ~.1em
- Body: **system-ui**
- Scale: H1 600 44px/1.12 (-.02em) · H2 600 30px/1.18 (-.01em) · H3 600 18px · lead 400 19px/1.55 · body 400 15px/1.6 · small 400 13px/1.5 · eyebrow 600 12px mono

**Spacing / layout**
- Page width 1120px, centred; section padding `70px 84px` (site) / `56px 84px` (case study)
- Common gaps: 44–58px (major columns), 14–18px (chip/button rows)

**Radius:** buttons 9px · cards 10–14px · navy feature card / hero frame 14–18px · chips 999px · avatar & node dots 50%

**Shadows:** page `0 8px 40px rgba(29,35,51,.14)` · hero frame `0 10px 34px rgba(29,35,51,.16)` · cards `0 4px 22px rgba(29,35,51,.07)` · services list `0 2px 14px rgba(29,35,51,.04)`

**Buttons**
- `.btn` base: Space Grotesk 600 14px, padding 13px 22px, radius 9px.
- Variants: navy (`#1d2333`/white), coral (`#d9663c`/white), outline-coral (transparent / `#c0562f` / 1.5px `#e2b4a0`), outline-white (transparent / white / 1.5px `#3c4258`).

## Assets
- `uploads/Emergent Systems Icon.png` — the brand mark (circular emblem: concentric maze-like arcs, four compass arrows, a segmented DNA-like ring, and a solid core). Used at 32×32 in the nav and footer.
- `uploads/Emergent Systems - Services One-Pager v2.pdf` — linked from the Services "download one-pager" button.
- **Image placeholders** (striped boxes labelled "photo", "CLM", "OFH", "DD", etc.) are **not final** — replace with the real founder photo and case-study imagery in production.
- Fonts load from Google Fonts (Space Grotesk, IBM Plex Mono); swap to the codebase's font-loading strategy if different.

## Screenshots
Reference renders are in `screenshots/` for posterity:
- `01-site.png … 06-site.png` — the main page top-to-bottom (hero, approach/end-to-end, services, work, about, contact/footer).
- `01-case-study.png … 04-case-study.png` — the case-study detail template, scrolled top-to-bottom.
Note: the hero and life-cells motifs are animated; the stills capture a single frame.

## Files
Included in this bundle (design references — see note above):
- `Emergent Systems Site.dc.html` — the full marketing page.
- `Case Study Detail.dc.html` — the case-study detail template.
- `support.js` — prototyping runtime **only**; do not port.
- `uploads/Emergent Systems Icon.png` — brand mark asset.
- `uploads/Emergent Systems - Services One-Pager v2.pdf` — services one-pager (linked download).

To preview a reference file, open the `.dc.html` in a browser. The signature hero animation and the "life cells" field are both plain `<canvas>` 2D routines inside the site file's logic block — read those directly when reimplementing.
