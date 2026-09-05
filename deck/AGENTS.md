# AGENTS.md

Slidev deck for the talk **"AI-ready metadata in practice: lessons from building Portolan"** — OGC Metadata Summit 2026,
Eurac Research, Bolzano, 7 September 2026, success stories session, 15 minutes.

## Structure
- `slides.md` sets the order; one Markdown file per slide in `slides/`. Slides `a01`–`a17` are the talk (18 slides: `a05a` table and `a05b` STAC/profile diagram
  replace the former `a05-building-blocks.md`, kept unreferenced in `slides/` until the split is approved; the last slide is Questions); `x01`–`x03` are the appendix (why "Portolan", ISO 19115 / INSPIRE, the ISO JSON example).
- `components/`: Vue visualizations. `VizLayout`, `VizTheGap`, `VizPortolanContract`, `VizClose` are originally by Youssef Harby, a
  fellow Portolan team member, for his CNG Japan 2026 deck (https://github.com/yharby/cng-japan-2026); reused as team material.
  `VizMetadataSources` (measured / harvested / asserted) is this deck's own. `composables/useDeckLocale.ts`
  (English-only helper kept for the components), `global-top.vue`, `style.css` (palette and layout).
- `public/`: logos (OGC official blue mark, Portolan mark, CARTO), STAC artwork, the closing QR (`qr-deck.svg`, pointing at
  the published deck, slide 18).
- `scripts/`: `validate-deck.mjs` (order, click budget, forbidden on-screen claims), `export.mjs` (PDF via `slidev export`; PDF is the only export, PPTX was dropped because it rasterises slides and loses links),
  `render-slides.mjs` (renders every slide to PNG for visual QA), `smoke.mjs` (render check in light and dark).
- `deck.config.mjs`: Pages base (`/ogc-metadata-summit-bolzano/`), main-slide count (18), click budget, export paths (`../export/`).

## Editorial rules
- Simple, literal titles; one idea per slide; every slide keeps `[Say]` notes with time budgets and a `[Sources]` block.
- Portolan is an open specification: describe it as a STAC publishing profile, never as a product. Affiliation appears on the
  cover and the bio slide only.
- The deck is fixed to dark (`colorSchema: dark` in `slides.md`); the exports come out dark too. Everything that is not a
  CSS variable (logos, QR frame, video thumbnail) must be checked in dark.
- Say "no server in the request path" rather than "serverless" on screen. Portolan is AI-ready, not AI-first (the five goals
  on the Why and lifecycle slides read AI-ready, easy to implement, scalable, low cost, sovereign).
- Talk order: what Portolan is → why (five goals) → building blocks (table, then STAC/profile) → lifecycle → what it adds → story 1 → where the metadata
  comes from → story 2 → skills → three lessons → close → questions. Restructure rationale in `../notes/11-restructure-plan.md`.
- Spec version and requirement counts (v0.2.0: 128 requirements, 105 validator-enforced / 23 process) come from
  `portolan-spec/specs/portolan/requirements.yaml`; regenerate before freezing. `pnpm validate` rejects stale counts.
- Every dataset shown is attributed on the slide (producer, licence, source, date).

## Commands
`pnpm install` · `pnpm dev` · `pnpm validate` · `pnpm build` · `pnpm smoke` · `pnpm test` (all three) ·
`pnpm export:pdf`.
Visual QA: serve `dist/` under `/ogc-metadata-summit-bolzano/` and run `node scripts/render-slides.mjs <baseUrl> <outdir> 18`.
Do not commit `dist/` or `node_modules/`; the exported PDF lives in `../export/` and is committed.
