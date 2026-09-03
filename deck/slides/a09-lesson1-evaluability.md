---
clicks: 2
layout: default
---

# Lesson 1 of 3 · Discovery is the solved half. Evaluability is the gap.

<div class="grid grid-cols-5 gap-6 mt-4">
  <div class="col-span-2">
    <p class="label">WHAT A GOOD STAC CATALOG ALREADY GIVES YOU</p>
    <p>Found. Crawled. Opened.</p>
    <p class="label mt-6">WHAT PEOPLE AND AGENTS STILL LACK</p>
    <p>Is this dataset <em>for</em> my question? Where is it weak? How wrong can it be?</p>
  </div>
  <div class="col-span-3 quote" v-click>
    <p class="label">ONE SENTENCE FROM A REAL CATALOG (FIELDS OF THE WORLD)</p>
    <blockquote>A field polygon "is a <em>remote-sensing field unit</em>, <strong>not</strong> a cadastral/legal parcel. This is not a land-tenure product."</blockquote>
    <p class="muted">No accuracy figure prevents that misuse. One sentence of scope does.</p>
    <p class="muted src">Source: Fields of the World, global field-boundary dataset documentation (fieldsofthe.world, CC BY 4.0), as quoted in the Portolan documentation best practices.</p>
  </div>
</div>

<div class="mt-6 takeaway" v-click>
  AI-ready = documented limitations, quantified uncertainty, named biases — <strong>as data where possible</strong> (a confidence column, a quality mask), not buried in prose. Expertise that otherwise lives only in the heads of domain experts.
</div>

<style>
.label { font-family:'JetBrains Mono', monospace; font-size:0.65rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
.quote { border-left:3px solid var(--c-portolan); padding-left:1rem; }
blockquote { font-size:1.1rem; margin:0.4rem 0; border:0; padding:0; }
.muted { color:var(--c-muted); font-size:0.85rem; }
.src { font-size:0.65rem; margin-top:0.4rem; }
.takeaway { border:1px solid var(--c-line); border-radius:10px; padding:0.8rem 1rem; background:var(--c-panel); }
</style>

<!--
[Say] (1:15)
"Three lessons from building this. The first is the one I would keep if I could keep only one. A well-formed STAC catalog is already findable and crawlable. Discovery is largely solved. What people and agents cannot do yet is evaluate: is this dataset fit for my question, where is it weak, how wrong can it be."

[Click 1]
"One sentence from a real catalog, Fields of the World: a field polygon is a remote-sensing field unit, not a cadastral parcel. That single sentence prevents a whole category of misuse that no accuracy number would catch. In the Bolzano answer you saw the same thing: a hospital point inside a hazard polygon is a location, not a catchment. Someone wrote that down."

[Click 2]
"So our working definition. AI-ready means documented limitations, quantified uncertainty and named biases. As data where possible, a confidence column or a quality mask an agent can filter on, rather than a paragraph it has to interpret. This is the expertise that otherwise lives only in the heads of domain experts, and it is the part of your metadata work that no automation replaces."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/best-practices/documentation.md
- Trochim & Roy 2025, Candid Core Framework, doi:10.5281/zenodo.15227664
- https://source.coop/ftw/global-data
- https://www.portolan-sdi.org/blog/introducing-portolan ("context that'd otherwise be scattered across documentation or live only in the heads of domain experts")
-->
