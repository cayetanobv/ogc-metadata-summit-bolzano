# AGENTS.md

Slidev deck for the talk **"AI-ready metadata in practice: lessons from building Portolan"** — OGC Metadata Summit 2026,
Eurac Research, Bolzano, 7 September 2026, success stories session, 15 minutes.

## Structure
- `slides.md` sets the order; one Markdown file per slide in `slides/`. Slides `a01`–`a14` are the talk
  (`16-honest-work.md` sits at position 12); `b12`, `b15`, `b06`, `b08` follow as Q&A backups.
- `components/`: Vue visualizations (`VizLayout`, `VizTheGap`, `VizHonestWork`, `VizClose`), `composables/useDeckLocale.ts`
  (English-only helper kept for the components), `global-top.vue`, `style.css` (palette and layout).
- `public/`: logos (OGC official blue mark, Portolan mark, CARTO), STAC artwork, the closing QR (`qr-deck.svg`, pointing at
  the published deck, slide 14).
- `scripts/`: `validate-deck.mjs` (order, click budget, forbidden on-screen claims), `export.mjs` (PDF/PPTX via `slidev export`),
  `render-slides.mjs` (renders every slide to PNG for visual QA), `smoke.mjs` (render check in light and dark).
- `deck.config.mjs`: Pages base (`/ogc-metadata-summit-bolzano/`), main-slide count (14), click budget, export paths (`../export/`).

## Editorial rules
- Simple, literal titles; one idea per slide; every slide keeps `[Say]` notes with time budgets and a `[Sources]` block.
- Portolan is an open specification: describe it as a STAC publishing profile, never as a product. Affiliation appears on the
  cover and the bio slide only.
- Say "no server in the request path" rather than "serverless" on screen. Portolan is AI-ready, not AI-first.
- Spec version and requirement counts (v0.2.0: 128 requirements, 105 validator-enforced / 23 process) come from
  `portolan-spec/specs/portolan/requirements.yaml`; regenerate before freezing. `pnpm validate` rejects stale counts.
- Every dataset shown is attributed on the slide (producer, licence, source, date).

## Commands
`pnpm install` · `pnpm dev` · `pnpm validate` · `pnpm build` · `pnpm smoke` · `pnpm test` (all three) ·
`pnpm export:pdf` / `pnpm export:pptx` / `pnpm export:pptx-clicks` / `pnpm export:all`.
Visual QA: serve `dist/` under `/ogc-metadata-summit-bolzano/` and run `node scripts/render-slides.mjs <baseUrl> <outdir> 14`.
Do not commit `dist/` or `node_modules/`; the exported PPTX/PDF live in `../export/` and are committed.
