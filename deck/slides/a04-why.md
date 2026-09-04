---
clicks: 5
layout: default
---

# Why Portolan: the same goals as your SDI, a lighter way to deliver them

<p class="kicker-line">SAME VISION · A FEDERATED SPATIAL DATA INFRASTRUCTURE, DISCOVERABLE, INTEROPERABLE, OPENLY ACCESSIBLE TO ALL</p>

<div class="goals">
  <div class="goal" :class="{on:$clicks>=1, now:$clicks===1}">
    <lucide-bot class="ic" /><b>AI-ready</b>
    <p class="l">TODAY</p><p>SDIs were not built for agents. Agents need full data and rich metadata, fast.</p>
    <p class="l">INSTEAD</p><p class="ok">Agents are first-class readers.</p>
  </div>
  <div class="goal" :class="{on:$clicks>=2, now:$clicks===2}">
    <lucide-folder-open class="ic" /><b>Easy to implement</b>
    <p class="l">TODAY</p><p>Database, WFS, WMS, schemas, specialist staff. Most organisations cannot take part.</p>
    <p class="l">INSTEAD</p><p class="ok">Files in a bucket.</p>
  </div>
  <div class="goal" :class="{on:$clicks>=3, now:$clicks===3}">
    <lucide-trending-up class="ic" /><b>Scalable</b>
    <p class="l">TODAY</p><p>Agents crawl whole datasets. Popularity means more servers, until something breaks.</p>
    <p class="l">INSTEAD</p><p class="ok">Scales with nobody on call.</p>
  </div>
  <div class="goal" :class="{on:$clicks>=4, now:$clicks===4}">
    <lucide-coins class="ic" /><b>Low cost</b>
    <p class="l">TODAY</p><p>Servers always on, ops engineers, a traffic spike is an emergency.</p>
    <p class="l">INSTEAD</p><p class="ok">Storage and egress.</p>
  </div>
  <div class="goal" :class="{on:$clicks>=5, now:$clicks===5}">
    <lucide-landmark class="ic" /><b>Sovereign</b>
    <p class="l">TODAY</p><p>Dependence on foreign clouds and vendors.</p>
    <p class="l">INSTEAD</p><p class="ok">The full stack in your jurisdiction.</p>
  </div>
</div>

<div class="takeaway">Two decades of SDI work got the hard part right: models, catalogues, INSPIRE themes, ISO records. What changed is the delivery layer underneath. Your catalogues and records stay authoritative.</div>

<style>
.kicker-line { font-family:'JetBrains Mono', monospace; font-size:0.6rem; letter-spacing:0.08em; color:var(--c-portolan); margin:0.3rem 0 0; }
.goals { display:grid; grid-template-columns:repeat(5, 1fr); gap:0.6rem; margin-top:0.9rem; }
.goal { border:1px solid var(--c-line); border-radius:12px; padding:0.85rem 0.85rem; background:var(--c-panel); display:flex; flex-direction:column; gap:0.15rem; font-size:0.78rem; opacity:0.25; transition:opacity 200ms, border-color 200ms; }
.goal.on { opacity:1; }
.goal.now { border-color:var(--c-portolan); }
.goal .ic { width:1.5rem; height:1.5rem; color:var(--c-portolan); margin-bottom:0.2rem; }
.goal b { font-size:0.95rem; line-height:1.15; margin-bottom:0.35rem; }
.goal p { margin:0; line-height:1.3; }
.goal .l { font-family:'JetBrains Mono', monospace; font-size:0.55rem; letter-spacing:0.08em; color:var(--c-muted); margin-top:0.35rem; }
.goal .ok { color:var(--c-portolan); font-weight:700; }
.takeaway { margin-top:1.4rem; border-left:3px solid var(--c-portolan); padding:0.35rem 0.9rem; font-size:0.86rem; }
</style>

<!--
[Say] (1:00)
"Why did we build it? Not because spatial data infrastructures failed. The vision is the same one you have worked on for two decades: a federated infrastructure, discoverable, interoperable, open to all. What changed is what the delivery layer should give you. Five goals, borrowed from Chris Holmes's framing."

[Click 1]
"AI-ready. Our SDIs were not built for agents. Agents want the full dataset and rich metadata, fast, and they should be first-class readers, not scrapers."

[Click 2]
"Easy to implement. Today you need a database, a WFS, a WMS, schemas and specialist staff. That barrier keeps most organisations out. It should be files in a bucket."

[Click 3]
"Scalable. Agents crawl whole datasets. Today popularity means more servers, until something breaks. It should scale with nobody on call."

[Click 4]
"Low cost. Servers always on, ops engineers, and a traffic spike is an emergency. Sharing public data should cost storage and egress."

[Click 5]
"Sovereign. The full stack inside your jurisdiction, with storage, compute, models and standards you can swap independently. Your catalogues, records and models stay authoritative. What Portolan changes is how the data underneath them is delivered."

[Sources]
- https://cholmes.github.io/open-geodag-presentation/opengeo-dag.html (slides 5–10: the vision and the five goals; Chris frames the first as AI-first, this deck says AI-ready on screen)
- https://www.portolan-sdi.org/blog/introducing-portolan ("What Portolan makes possible", "Built for people and agents")
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md ("Why Portolan?")
- https://inspire.ec.europa.eu/
-->
