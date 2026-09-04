---
clicks: 1
layout: default
---

# What Portolan adds: four things the standards leave open, made mandatory

<div class="cards mt-3">
  <div class="card">
    <lucide-shield-check class="ic" />
    <div><b>A quality floor you can check</b><span>bbox columns and spatial order in every GeoParquet · overviews in every COG · providers and licence on every collection · range requests and CORS on the host. <code>rashid</code> reads the bytes, not just the JSON.</span></div>
  </div>
  <div class="card">
    <lucide-book-open class="ic" />
    <div><b>Two documents at every level</b><span><code>README.md</code> for the person deciding whether to trust the data · <code>AGENTS.md</code> for the agent that needs the join key and the caveats.</span></div>
  </div>
  <div class="card">
    <lucide-server-off class="ic" />
    <div><b>No server in the request path</b><span>a folder in storage the publisher controls · cost is storage and egress · nothing runs after publishing.</span></div>
  </div>
  <div class="card">
    <lucide-network class="ic" />
    <div><b>Federation without a central copy</b><span>a registry of independently hosted catalogs, plain JSON in version control · producer, provider and host named on each.</span></div>
  </div>
</div>

<div class="stat" :class="{dim:$clicks<1}">
  <p class="label">DOES A STATIC MODEL SCALE? FIELDS OF THE WORLD, ONE PORTOLAN CATALOG ON SOURCE COOPERATIVE</p>
  <div class="nums">
    <div><b>369 TB</b><span>published</span></div>
    <div><b>106.6 TB</b><span>served in the 28 days to 27 August 2026</span></div>
    <div><b>0</b><span>servers in front of it</span></div>
  </div>
  <p class="src">Data: Fields of the World (fieldsofthe.world), published on Source Cooperative; figures from the Portolan launch post, 2 Sep 2026.</p>
</div>

<style>
.cards { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; }
.card { border:1px solid var(--c-line); border-radius:12px; padding:0.95rem 1rem; background:var(--c-panel); display:flex; gap:0.7rem; align-items:flex-start; }
.card .ic { flex:0 0 auto; width:2rem; height:2rem; color:var(--c-portolan); margin-top:0.1rem; }
.card b { display:block; font-size:1rem; line-height:1.2; margin-bottom:0.25rem; }
.card span { display:block; font-size:0.8rem; color:var(--c-muted); line-height:1.35; }
.stat { margin-top:auto; border:1px solid var(--c-portolan); border-radius:12px; padding:0.6rem 1rem 0.5rem; background:var(--c-portolan-soft); transition:opacity 200ms; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.58rem; letter-spacing:0.08em; color:var(--c-portolan); margin:0 0 0.3rem; }
.nums { display:grid; grid-template-columns:repeat(3, 1fr); gap:0.6rem; align-items:end; }
.nums b { display:block; font-size:1.7rem; line-height:1; color:var(--c-fg); }
.nums span { display:block; font-size:0.7rem; color:var(--c-muted); margin-top:0.15rem; }
.src { font-size:0.56rem; color:var(--c-muted); margin:0.35rem 0 0; }
.dim { opacity:0.25; }
</style>

<!--
[Say] (1:00)
"So what does Portolan add on top of those standards? Four things they leave open become mandatory. One: a quality floor you can check. Bounding boxes and spatial ordering inside every GeoParquet, overviews in every COG, providers and a licence on every collection, range requests and CORS on the host; and the validator reads the bytes, not just the JSON. Two: two documents at every level, a README for the person deciding whether to trust the data and an AGENTS file for the agent that needs the join key and the caveats. Three: no server in the request path; a catalog is a folder in storage you control, cost drops to storage and egress, nothing runs after publishing. Four: federation without a central copy, a registry of independently hosted catalogs with producer, provider and host named on every one."

[Click 1]
"Does a static model scale? Fields of the World publishes its global field-boundary dataset as one Portolan catalog on Source Cooperative: 369 terabytes, and it served a hundred and six terabytes in the last four weeks of August. Nothing sits in front of it. The publisher pays for storage and egress; compute belongs to whoever asks the question. That is what lets a city and a planetary archive publish the same way."

[Sources]
- https://www.portolan-sdi.org/blog/introducing-portolan (Fig. 1: 369 TB, 106.6 TB in the 28 days ending 27 Aug 2026; "What Portolan makes possible", "Built for people and agents", "Toward a federated network")
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md ("Why Portolan?", "Common questions")
- https://source.coop/ftw/global-data
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/formats.md
-->
