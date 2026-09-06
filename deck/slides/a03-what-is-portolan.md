---
clicks: 1
layout: default
---

# What Portolan is

<div class="def">
  <p>Portolan is an <span class="hl">open specification with an open-source toolkit</span> that combines <span class="hl">cloud-native file formats</span> with <span class="hl">clear metadata</span> and <span class="hl">documentation</span> so that <span class="hl">people and agents</span> can publish and use data <span class="hl">at any scale</span>.</p>
</div>

<div class="cards" :class="{dim:$clicks<1}">
  <div class="card"><lucide-file-check class="ic" /><b>specification and toolkit</b><span>spec v0.2.0 · <code>portolan</code> CLI · <code>rashid</code> validator · a registry of catalogs</span></div>
  <div class="card"><lucide-layers class="ic" /><b>cloud-native file formats</b><span>GeoParquet for vector · COG for raster · PMTiles for display</span></div>
  <div class="card"><lucide-badge-check class="ic" /><b>clear metadata</b><span>a STAC 1.1 publishing profile: what a catalog must contain</span></div>
  <div class="card"><lucide-book-open class="ic" /><b>documentation</b><span><code>README.md</code> for people · <code>AGENTS.md</code> for agents, at every level</span></div>
  <div class="card"><lucide-bot class="ic" /><b>people and agents, any scale</b><span>ten agent skills · from a city's open data to a 369 TB archive</span></div>
</div>

<p class="muted">Open source · portolan-sdi.org · public since 2 September 2026 · built in the open by contributors from several organisations</p>

<style>
.def { margin-top: 1.1rem; }
.def p { font-size: 1.55rem; line-height: 1.38; margin: 0; max-width: 34ch; text-wrap: balance; }
.hl { color: var(--c-portolan); font-weight: 700; }
.cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.6rem; margin-top: 1.4rem; transition: opacity 200ms; }
.card { border: 1px solid var(--c-line); border-radius: 12px; padding: 0.85rem 0.85rem; background: var(--c-panel); display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; }
.card .ic { width: 1.35rem; height: 1.35rem; color: var(--c-portolan); }
.card b { font-size: 0.86rem; line-height: 1.2; }
.card span { color: var(--c-muted); line-height: 1.3; }
.muted { margin-top: auto; font-size: 0.7rem; color: var(--c-muted); }
.dim { opacity: 0.25; }
</style>

<!--
[Say] (0:45)
"Everyone says metadata should be AI-ready. Few people say what that means when you have to publish a dataset on a Monday morning. We tried to find out by building, not by defining. This is what we built. Portolan is an open specification with an open-source toolkit, that combines cloud-native file formats with clear metadata and documentation, so that people and agents can publish and use data at any scale."

[Click 1]
"Each phrase in that sentence is a real thing. Specification and toolkit: a spec, a CLI, a validator called rashid, and a registry of catalogs. Cloud-native formats: GeoParquet, Cloud Optimized GeoTIFF, PMTiles. Clear metadata: a STAC publishing profile that says what a catalog must contain. Documentation: a README for people and an AGENTS file for agents, at every level. And people and agents at any scale: ten agent skills, and catalogs from a city's open data to a 369-terabyte archive. Portolan went public last Wednesday, after a year of building in the open. This is a success story with the scars still visible."

[Sources]
- https://www.portolan-sdi.org/ (definition sentence, checked 4 Sep 2026). Deliberate divergence: the site says "open-source specification and toolkit"; this deck says "an open specification with an open-source toolkit". "Open source" is an OSI term about software licensing; a specification is open by being freely available, implementable by anyone and developed in the open (cf. the EU European Interoperability Framework). Portolan is both, but they are separate claims, and this is a room that draws the distinction. The cover already says "open specification". To raise upstream: the same phrasing is on the site and in the launch post.
- https://www.portolan-sdi.org/blog/introducing-portolan
- https://github.com/portolan-sdi/portolan-spec · https://github.com/portolan-sdi/rashid · https://github.com/portolan-sdi/portolan-cli
- https://github.com/portolan-sdi/portolan-registry · https://github.com/portolan-sdi/portolan-skills
-->
