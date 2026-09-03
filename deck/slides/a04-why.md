---
clicks: 2
layout: default
---

# Why we moved: the ambition was right, the experience was painful

<div class="grid grid-cols-2 gap-5 mt-2">
  <div class="panel pain">
    <p class="label">WHAT PUBLISHING SPATIAL DATA HAS MEANT</p>
    <ul>
      <li><b>For the publisher:</b> deploy databases, servers, APIs and a portal, then maintain them for years; size for peaks; pay whether the data is used or not; updates are slow.</li>
      <li><b>For the user:</b> find the dataset, understand the service, interpret the metadata, download, reproject, clean, combine. In practice, reachable mainly by GIS specialists.</li>
    </ul>
    <p class="muted">INSPIRE's ambition — discoverable, interoperable, usable across borders — was right. The infrastructure model underneath it is what became unsustainable.</p>
  </div>
  <div class="panel shifts" :class="{dim:$clicks<1}">
    <p class="label">THREE SHIFTS, NOW CONVERGING</p>
    <ol>
      <li><b>Cloud-native formats changed the economics.</b> A client reads only the bytes it needs, with its own compute. The publisher stores the data once instead of running a service for every way it might be used.</li>
      <li><b>Agents changed who can use the data.</b> Given structured metadata, documentation and direct access, an agent finds the authoritative sources, inspects them, runs the analysis and answers with its sources and query. Federation without a central copy.</li>
      <li><b>Sovereignty became an architectural requirement.</b> Where the data lives, where queries run, which models may touch it, how easily each layer can be swapped.</li>
    </ol>
  </div>
</div>

<div class="mt-3 takeaway" :class="{dim:$clicks<2}">
  The three shifts were already under way. <b>What was still hard was assembling them into an SDI a real publisher can create, operate and maintain without designing the whole architecture from scratch.</b> That is why we joined others in building Portolan.
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.7rem 1rem; background:var(--c-panel); font-size:0.8rem; transition:opacity 200ms; }
.panel ul, .panel ol { margin:0; padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.4rem; }
.muted { color:var(--c-muted); font-size:0.76rem; margin:0.5rem 0 0; }
.shifts { border-color: var(--c-portolan); }
.takeaway { border-left:3px solid var(--c-portolan); padding:0.3rem 0.9rem; font-size:0.86rem; transition:opacity 200ms; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (1:15)
"Why did we move at all? Because the ambition of spatial data infrastructures, INSPIRE's ambition, discoverable, interoperable, usable across borders, was right, and the experience has often been painful. For the publisher, publishing a dataset has meant deploying databases, servers, APIs and a portal, then maintaining them for years, sized for peaks, paid for whether anyone uses the data or not. For the user, finding the dataset is only the beginning: understand the service, interpret the metadata, download, reproject, clean, combine. In practice, mainly GIS specialists get through."

[Click 1]
"Three changes are now converging. Cloud-native formats changed the economics: a client reads only the bytes it needs, with its own compute, and the publisher stores the data once. Agents changed who can use the data: given structured metadata and direct access, an agent finds the authoritative sources, inspects them, runs the analysis and answers with its sources and a query you can re-run; federation without a central copy. And sovereignty became an architectural requirement: where the data lives, where queries run, which models may touch it, how easily each layer can be replaced."

[Click 2]
"All three were already under way. What was still hard was assembling them into an infrastructure a real publisher can create, operate and maintain without designing the whole architecture from scratch. That is why we joined others in building Portolan."

[Sources]
- Launch commentary, 2 September 2026: https://carto.com/blog/introducing-portolan-and-carto-sdi/ ("The ambition was right. The experience has often been painful."; "Three changes reshaping spatial data infrastructure"; "What is still difficult is assembling them into an SDI that a real data publisher can create, operate, and maintain")
- https://www.portolan-sdi.org/blog/introducing-portolan ("What Portolan makes possible", "Built for people and agents")
- https://inspire.ec.europa.eu/
-->
