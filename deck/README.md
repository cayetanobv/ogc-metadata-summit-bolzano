# AI-ready metadata in practice: lessons from building Portolan

Slidev source of Cayetano Benavent's talk at the [OGC Metadata Summit 2026](https://events.ogc.org/MetadataSummit2026),
Eurac Research, Bolzano / Bozen, 7 September 2026 (success stories session, 15 minutes).

The deck builds on the Slidev deck that Youssef Harby, a fellow member of the Portolan team, presented at
Cloud Native Geospatial Japan 2026 (https://github.com/yharby/cng-japan-2026). Portolan is a team effort and
the two talks share one message, so some of his visualizations (`VizLayout`, `VizTheGap`, `VizPortolanContract`,
`VizClose`) are reused here with thanks.

```bash
pnpm install
pnpm dev            # http://localhost:3030/  ·  presenter view: http://localhost:3030/#/presenter/
pnpm validate       # slide order, click budget, and a short list of claims that must not appear on screen
pnpm build          # static site in dist/ (served under /ogc-metadata-summit-bolzano/)
pnpm export:pdf     # ../export/ogc-metadata-summit-2026.pdf — one page per slide, links preserved (the only export;
                    # Slidev's PPTX export rasterises slides, so links would not work there)
```

Slides live in `slides/` (`a01`–`a17` are the talk; `x01`–`x03` are the appendix, shown only in Q&A), in the order given
by `slides.md`. Each slide file carries the speaker script (`[Say]`, `[Click n]`) and a `[Sources]` list.

Portolan: https://portolan-sdi.org · the South Tyrol mirror catalog shown in the talk:
https://github.com/cayetanobv/south-tyrol-geodata-portolan-mirror
