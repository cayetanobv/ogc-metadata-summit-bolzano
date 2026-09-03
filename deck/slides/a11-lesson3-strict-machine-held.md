---
clicks: 3
layout: default
---

# Lesson 3 of 3 · Be strict, and let a machine hold the line

<div class="grid grid-cols-2 gap-5 mt-3">
  <div class="panel">
    <p class="label">WHY SO PRESCRIPTIVE</p>
    <p>An agent can only rely on what is <em>required</em>. Every MAY in a specification is a branch every consumer has to write.</p>
    <ul>
      <li>GeoParquet without bbox columns and spatial ordering: spatial queries read the whole file</li>
      <li>a bucket without CORS: unusable from a browser</li>
      <li>an empty <code>providers</code> list: the prose looks fine, every machine fails</li>
    </ul>
  </div>
  <div class="panel" :class="{dim:$clicks<1}">
    <p class="label">WHAT THE MACHINE HOLDS · SPEC v0.2.0</p>
    <div class="nums">
      <div><b>128</b><span>normative requirements</span></div>
      <div><b>105</b><span>checked deterministically by <code>rashid</code></span></div>
      <div><b>23</b><span>stay with the publisher's judgment</span></div>
    </div>
    <p class="muted">MUST → failure, SHOULD → warning, JSON out. A city's catalog passes the same validator a planetary archive passes.</p>
  </div>
</div>

<div class="mt-4 takeaway" :class="{dim:$clicks<2}">
  <b>Conformance is a floor.</b> "You can have perfectly FAIR, utterly useless data." Above pass/fail, a grader scores usability from A+ to F, and weights the machine contract equally with what a browser shows.
</div>
<div class="mt-2 takeaway" :class="{dim:$clicks<3}">
  A metadata quality policy only sticks when a machine can check it.
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.9rem 1.1rem; background:var(--c-panel); font-size:0.86rem; transition:opacity 200ms; }
.panel ul { margin:0.4rem 0 0; padding-left:1.1rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
.nums { display:grid; grid-template-columns: repeat(3, 1fr); gap:0.5rem; margin:0.3rem 0 0.5rem; }
.nums b { display:block; font-size:1.8rem; line-height:1; color:var(--c-fg); }
.nums span { font-size:0.72rem; color:var(--c-muted); line-height:1.25; display:block; margin-top:0.2rem; }
.muted { color:var(--c-muted); font-size:0.8rem; margin:0; }
.takeaway { border:1px solid var(--c-line); border-radius:10px; padding:0.6rem 1rem; background:var(--c-panel); font-size:0.9rem; transition:opacity 200ms; }
.dim { opacity:0.35; }
</style>

<!--
[Say] (1:15)
"Third lesson, and the uncomfortable one: be strict. Publishers do not love this. But an agent can only rely on what is required. Every MAY in a spec is a branch every consumer has to write, forever. So Portolan says: GeoParquet must carry bbox columns and be spatially ordered, or a spatial query reads the whole file. The bucket must serve CORS, or a browser cannot touch it. Every collection must name its providers, or the prose looks fine and every machine fails."

[Click 1]
"And strictness only works if a machine holds the line. The spec, version 0.2.0, has 128 normative requirements. 105 are checked deterministically by rashid, the validator: structure, required files, roles, license, provenance, and the actual bytes. 23 stay with the publisher: whether the upstream meaning survived, whether the license really applies. A city's catalog passes the same validator a planetary archive passes."

[Click 2]
"Conformance is a floor. You can have perfectly FAIR, utterly useless data. So above pass or fail, a grader scores usability from A plus to F, and it deliberately weights the machine contract equally with what a browser shows. A rubric that only rewards pretty thumbnails certifies catalogs that fail every machine that reads them. Many ISO records render nicely and parse badly. Same problem."

[Click 3]
"The lesson in one line: a metadata quality policy only sticks when a machine can check it."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/requirements.yaml (regenerated 3 Sep 2026 at v0.2.0 and origin/main 2d1f972: 128 total, 105 validator / 23 process)
- https://github.com/portolan-sdi/portolan-spec/releases/tag/v0.2.0
- https://github.com/portolan-sdi/rashid
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/best-practices/grader.md
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/best-practices/philosophy.md
- https://www.portolan-sdi.org/blog/introducing-portolan (bbox structs + spatial ordering, CORS examples; MUST/SHOULD reporting)
- Sundwall 2025, https://radiant.earth/blog/2025/11/great-data-products/
-->
