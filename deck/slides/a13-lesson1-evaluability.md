---
clicks: 2
layout: default
---

# Lesson 1 of 3 · Discovery is the solved half. Evaluability is the gap.

<div class="grid grid-cols-5 gap-6 mt-3">
  <div class="col-span-2">
    <p class="label">WHAT A GOOD STAC CATALOG ALREADY GIVES YOU</p>
    <p>Found. Crawled. Opened.</p>
    <p class="label mt-4">WHAT PEOPLE AND AGENTS STILL LACK</p>
    <p>Is this dataset <em>for</em> my question? Where is it weak? How wrong can it be?</p>
  </div>
  <div class="col-span-3 quote" v-click>
    <p class="label">ONE SENTENCE FROM A REAL CATALOG (FIELDS OF THE WORLD)</p>
    <blockquote>A field polygon "is a <em>remote-sensing field unit</em>, <strong>not</strong> a cadastral/legal parcel. This is not a land-tenure product."</blockquote>
    <p class="muted">No accuracy figure prevents that misuse. One sentence of scope does.</p>
    <p class="muted src">Source: Fields of the World, global field-boundary dataset documentation (fieldsofthe.world, CC BY 4.0), as quoted in the Portolan documentation best practices.</p>
  </div>
</div>

<div class="mt-3 takeaway" v-click>
  AI-ready = documented limitations, quantified uncertainty, named biases — <strong>as data where possible</strong> (a confidence column, a quality mask), not buried in prose. Expertise that otherwise lives only in the heads of domain experts.
</div>

<div class="where" :class="{dim:$clicks<2}">
  <p class="label">WHERE A LIMITATION LIVES IN A PORTOLAN CATALOG</p>
  <div class="chain">
    <div><code>known_issues:</code><span>in <code>metadata.yaml</code>, written once by the publisher</span></div>
    <div class="arr">→</div>
    <div><code>## Known Issues</code><span>in <code>README.md</code>, for people</span></div>
    <div class="arr">→</div>
    <div><code>## Data quality &amp; usage notes</code><span>in <code>AGENTS.md</code>, for agents</span></div>
    <div class="arr">→</div>
    <div><span class="h"><code>confidence</code> column</span><span>as data, where the limitation is per row</span></div>
  </div>
</div>

<style>
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
.quote { border-left:3px solid var(--c-portolan); padding-left:1rem; }
blockquote { font-size:1.02rem; margin:0.3rem 0; border:0; padding:0; }
.muted { color:var(--c-muted); font-size:0.82rem; }
.src { font-size:0.62rem; margin-top:0.3rem; }
.takeaway { border:1px solid var(--c-line); border-radius:10px; padding:0.6rem 1rem; background:var(--c-panel); font-size:0.88rem; }
.where { margin-top:auto; transition:opacity 200ms; }
.chain { display:grid; grid-template-columns:1fr auto 1fr auto 1fr auto 1fr; gap:0.4rem; align-items:center; font-size:0.72rem; }
.chain > div:not(.arr) { border:1px solid var(--c-line); border-radius:10px; padding:0.45rem 0.6rem; background:var(--c-panel); display:flex; flex-direction:column; gap:0.15rem; }
.chain code { font-size:0.7rem; color:var(--c-fg); }
.chain .h { color:var(--c-fg); font-size:0.7rem; }
.chain span { color:var(--c-muted); font-size:0.66rem; line-height:1.25; }
.arr { color:var(--c-portolan); font-weight:700; }
.dim { opacity:0.25; }
</style>

<!--
[Say] (1:10)
"Three lessons from building this. The first is the one I would keep if I could keep only one. A well-formed STAC catalog is already findable and crawlable. Discovery is largely solved. What people and agents cannot do yet is evaluate: is this dataset fit for my question, where is it weak, how wrong can it be."

[Click 1]
"One sentence from a real catalog, Fields of the World: a field polygon is a remote-sensing field unit, not a cadastral parcel. That single sentence prevents a whole category of misuse that no accuracy number would catch. In the Bolzano answer you saw the same thing: a hospital point inside a hazard polygon is a location, not a catchment. Someone wrote that down."

[Click 2]
"So our working definition: AI-ready means documented limitations, quantified uncertainty and named biases, as data where possible. And where does that live? In one field, known_issues, in the publisher's YAML. From there the CLI puts it in the Known Issues section of the README for people; the AGENTS file carries the data-quality and usage notes for agents; and the best practice is to make it a column an agent can filter on, a confidence value or a quality mask, rather than a paragraph it has to interpret. This is the expertise that otherwise lives only in the heads of domain experts, and it is the part of your metadata work that no automation replaces."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/best-practices/documentation.md
- South Tyrol mirror, health/rest-homes: `known_issues` in `.portolan/metadata.yaml` → `## Known Issues` in README.md; `## Data quality & usage notes` in AGENTS.md (portolan-cli 0.8.0, checked 4 Sep 2026)
- Trochim & Roy 2025, Candid Core Framework, doi:10.5281/zenodo.15227664
- https://source.coop/ftw/global-data
- https://www.portolan-sdi.org/blog/introducing-portolan ("context that'd otherwise be scattered across documentation or live only in the heads of domain experts")
-->
