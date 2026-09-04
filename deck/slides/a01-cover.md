---
clicks: 0
layout: default
class: cover-slide
---

<div class="cover">
  <p class="kicker">OGC METADATA SUMMIT 2026 · FROM METADATA STRATEGY TO PRACTICAL DATA INFRASTRUCTURE</p>

  <div class="main">
    <div class="title">
      <h1>AI-ready metadata in practice</h1>
      <h2>Lessons from building Portolan</h2>
    </div>
    <div class="meta">
      <p class="who"><strong>Cayetano Benavent</strong></p>
      <p class="role">CARTO and Portolan SDI contributor</p>
      <p class="where">Eurac Research, Bolzano / Bozen<br/>7–8 September 2026</p>
    </div>
  </div>

  <div class="logos" aria-label="OGC, Portolan SDI and CARTO logos">
    <img src="/ogc-logo.png" alt="OGC" class="ogc" />
    <div class="right">
      <span class="portolan"><img src="/portolan-mark.svg" alt="" /><span>Portolan SDI</span></span>
      <img src="/carto-logo-positive.svg" alt="CARTO" class="carto" />
    </div>
  </div>
</div>

<style>
.cover { display:flex; flex-direction:column; height:100%; padding:1.2rem 2rem 1.2rem; }
.cover .kicker { font-family:'JetBrains Mono', monospace; font-size:0.68rem; letter-spacing:0.08em; color:var(--c-muted); margin:0; }
.cover .main { flex:1 1 auto; display:grid; grid-template-columns: 3fr 2fr; gap:3rem; align-items:end; padding-bottom:2.4rem; }
.cover .title { align-self:center; }
.cover h1 { font-size:2.9rem; line-height:1.04; margin:0; }
.cover h2 { font-size:1.6rem; font-weight:400; color:var(--c-portolan); margin:0.6rem 0 0; }
.cover .meta { border-left:3px solid var(--c-portolan); padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; }
.cover .meta p { margin:0; }
.cover .who { font-size:1.2rem; line-height:1.2; }
.cover .role { font-size:0.95rem; color:var(--c-muted); }
.cover .where { color:var(--c-muted); font-size:0.9rem; line-height:1.4; margin-top:0.5rem !important; }
.cover .logos { flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; border-top:1px solid var(--c-line); padding-top:1rem; }
.cover .logos .right { display:flex; align-items:center; gap:2.2rem; }
.cover .logos img { display:block; height:1.6rem; width:auto; }
.cover .logos .ogc { height:2.1rem; }
.cover .logos .carto { height:1.75rem; }
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
