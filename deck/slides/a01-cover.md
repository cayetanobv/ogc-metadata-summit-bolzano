---
clicks: 0
layout: default
class: cover-slide
---

<div class="cover">
  <p class="kicker">OGC METADATA SUMMIT 2026 · FROM METADATA STRATEGY TO PRACTICAL DATA INFRASTRUCTURE</p>
  <h1>AI-ready metadata in practice</h1>
  <h2>Lessons from building Portolan</h2>
  <p class="who"><strong>Cayetano Benavent</strong></p>
  <p class="role">CARTO and Portolan contributor</p>
  <p class="where">Eurac Research, Bolzano / Bozen · 7–8 September 2026</p>
  <div class="logos" aria-label="OGC, Portolan and CARTO logos">
    <img src="/ogc-logo.png" alt="OGC" class="ogc" />
    <span class="portolan"><img src="/portolan-mark.svg" alt="" /><span>Portolan</span></span>
    <img src="/carto-logo-positive.svg" alt="CARTO" class="carto" />
  </div>
</div>

<style>
.cover { position:relative; display:flex; flex-direction:column; justify-content:center; height:100%; gap:0.7rem; padding: 0 2rem 3rem; }
.cover .kicker { font-family:'JetBrains Mono', monospace; font-size:0.68rem; letter-spacing:0.08em; color:var(--c-muted); }
.cover h1 { font-size:2.8rem; line-height:1.05; margin:0; }
.cover h2 { font-size:1.6rem; font-weight:400; color:var(--c-portolan); margin:0; }
.cover .who { margin-top:1.6rem; font-size:1.15rem; }
.cover .role { font-size:0.95rem; color:var(--c-muted); margin-top:-0.4rem; }
.cover .where { color:var(--c-muted); font-size:0.9rem; }
.cover .logos { position:absolute; left:2rem; right:2rem; bottom:1.4rem; display:flex; align-items:center; gap:2.2rem; }
.cover .logos img { display:block; height:1.6rem; width:auto; }
.cover .logos .ogc { height:2.1rem; }
.cover .logos .carto { height:1.15rem; }
.cover .logos .portolan { display:inline-flex; align-items:center; gap:0.45rem; font-weight:700; letter-spacing:0.04em; font-size:1rem; color:var(--c-fg); }
.cover .logos .portolan img { height:1.6rem; }
/* dark mode: the OGC and CARTO marks are dark-on-light artwork; render them white */
html.dark .cover .logos .ogc, html.dark .cover .logos .carto { filter: brightness(0) invert(1); opacity:0.92; }
</style>

<!--
[Say] (0:20)
"Good afternoon. I am Cayetano Benavent. This is a success story with the scars still visible: what we learned building Portolan, an open specification for AI-ready geospatial catalogs, and what happened when we pointed it at this province's own data."

[Sources]
- https://events.ogc.org/MetadataSummit2026
- Logos: OGC (ogc.org, official blue logo file `OGC-Logo-Blue.png`, used to identify the host organisation of this event), Portolan mark (portolan-sdi.org), CARTO positive logo. Trademarks of their owners; used for identification only.
-->
