---
clicks: 1
layout: default
---

# Why Portolan: the same goals as your SDI, a lighter way to deliver them

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="panel">
    <p class="label">WHAT WE START FROM</p>
    <p>Two decades of SDI work got the hard part right: harmonised data models, catalogues, INSPIRE themes, ISO records, services that made national data findable and interoperable. Portolan does not replace any of it. It starts from it.</p>
  </div>
  <div class="panel changed" :class="{dim:$clicks<1}">
    <p class="label">WHAT CHANGED SINCE THOSE ARCHITECTURES WERE DESIGNED</p>
    <ul>
      <li><b>A file in object storage can now be queried directly.</b> A dataset no longer needs its own server to be usable; cost and operations shrink to storage.</li>
      <li><b>Agents are readers too.</b> They need the same metadata people need, but machine-checkable and next to the data.</li>
      <li><b>Sovereignty is now designed in</b>: storage, compute, models and standards chosen and replaced independently.</li>
    </ul>
  </div>
</div>

<div class="mt-5 takeaway" :class="{dim:$clicks<1}">
  Portolan is the publishing profile that lets the data you already curate reach more people and more agents, with less to run — while your catalogues, records and models stay authoritative.
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.9rem 1.1rem; background:var(--c-panel); font-size:0.9rem; transition:opacity 200ms; }
.panel p { margin:0; }
.panel ul { margin:0; padding-left:1.1rem; display:flex; flex-direction:column; gap:0.45rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.5rem; }
.changed { border-color: var(--c-portolan); }
.takeaway { border-left:3px solid var(--c-portolan); padding:0.4rem 0.9rem; font-size:0.95rem; font-weight:600; transition:opacity 200ms; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (0:50)
"Why did we build Portolan? Not because spatial data infrastructures failed. Two decades of your work got the hard part right: harmonised models, catalogues, INSPIRE themes, ISO records, services that made national data findable across borders. Portolan starts from that work."

[Click 1]
"What changed is the delivery layer underneath it. A file in object storage can now be queried directly, so a dataset no longer needs its own server to be usable. Agents are readers too, and they need the same metadata people need, machine-checkable and next to the data. And sovereignty is designed in: storage, compute, models and standards chosen and replaced independently. Portolan is the publishing profile that lets the data you already curate reach more people and more agents, with less to run, while your catalogues, records and models stay authoritative."

[Sources]
- https://www.portolan-sdi.org/blog/introducing-portolan ("What Portolan makes possible", "Built for people and agents")
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md ("Why Portolan?", "Does it standardize my data model?")
- https://inspire.ec.europa.eu/
-->
