---
clicks: 5
layout: default
---

# What the agent actually did with the metadata

<div class="path mt-4">
  <div class="node" :class="{on:$clicks>=1}"><span class="n">1</span><b>Open <code>catalog.json</code></b><small>follow the explicit child links: 11 theme catalogs, 69 collections; the linked graph is the publication boundary</small></div>
  <div class="node" :class="{on:$clicks>=2}"><span class="n">2</span><b>Read <code>AGENTS.md</code></b><small>join key <code>ISTAT_CODE</code>, CRS, the H2–H4 class strings, what the data is not for</small></div>
  <div class="node" :class="{on:$clicks>=3}"><span class="n">3</span><b>Inspect each collection</b><small>picks five of the 69: one GeoParquet asset each, with provider, license, extent, row count</small></div>
  <div class="node" :class="{on:$clicks>=4}"><span class="n">4</span><b>Plan a DuckDB query</b><small>the model plans and explains; DuckDB computes, reading only the row groups it needs</small></div>
  <div class="node" :class="{on:$clicks>=5}"><span class="n">5</span><b>Report</b><small>method, exact URLs and query, producer, license, limitations</small></div>
</div>

<div class="bottom">
  <a class="clip" href="https://storage.googleapis.com/ogc-metadata-summit-bolzano-talk-media/ogc-metadata-2026-bolzano-demo-south-tyrol-agent.mp4" target="_blank" rel="noopener noreferrer" aria-label="Open the recording of the agent run in a new tab">
    <img src="/bz-agent-frame.jpg" alt="Terminal frame from the recording: the agent's answer, 4 hospitals and clinics and 31 pharmacies in H3/H4 hydraulic hazard zones, with the tables it produced" />
    <span class="play"><lucide-play class="ic" /></span>
    <span class="cap"><b>Watch the run</b> · 1 min 16 s · opens in a new tab</span>
  </a>
  <div class="side">
    <p class="bi-text">Every step consumed something the publisher wrote down. Nothing was guessed. That is the operational meaning of AI-ready metadata.</p>
    <p class="muted">Live at the demo desk: ask the agent <em>your</em> question on the South Tyrol catalog and watch it read the metadata before it answers.</p>
  </div>
</div>

<style>
.path { display:grid; grid-template-columns: repeat(5, 1fr); gap:0.7rem; }
.node { border:1px solid var(--c-line); border-radius:12px; padding:0.8rem; background:var(--c-panel); opacity:0.45; transition:opacity 200ms; display:flex; flex-direction:column; gap:0.35rem; font-size:0.85rem; }
.node.on { opacity:1; border-color: var(--c-portolan); }
.node .n { font-family:'JetBrains Mono', monospace; color:var(--c-portolan); font-size:0.7rem; }
.node small { color:var(--c-muted); font-size:0.72rem; line-height:1.3; }
.bottom { margin-top:1rem; flex:1 1 0; min-height:0; display:grid; grid-template-columns: 5fr 6fr; gap:1.4rem; align-items:center; }
.clip { position:relative; display:block; border-radius:12px; overflow:hidden; border:1px solid var(--c-line); background:#1e2430; text-decoration:none; color:inherit; max-height:100%; }
.clip img { display:block; width:100%; height:auto; opacity:0.92; transition:opacity 200ms; }
.clip:hover img { opacity:1; }
.clip .play { position:absolute; left:50%; top:44%; transform:translate(-50%,-50%); width:3.2rem; height:3.2rem; border-radius:50%; background:var(--c-portolan); display:grid; place-items:center; box-shadow:0 6px 24px rgba(0,0,0,0.35); }
.clip .play .ic { width:1.5rem; height:1.5rem; color:#fff; margin-left:0.15rem; }
.clip .cap { position:absolute; left:0; right:0; bottom:0; padding:0.4rem 0.7rem; font-size:0.7rem; color:#fff; background:linear-gradient(to top, rgba(14,23,38,0.92), rgba(14,23,38,0)); }
.side { display:flex; flex-direction:column; gap:0.7rem; }
.bi-text { margin:0; font-size:1.02rem; line-height:1.35; font-weight:600; border-left:3px solid var(--c-portolan); padding-left:0.9rem; }
.muted { margin:0; font-size:0.84rem; color:var(--c-muted); padding-left:calc(0.9rem + 3px); }
</style>

<!--
[Say] (0:50)
"Here is what the agent actually did, because this is where AI-ready stops being a slogan."

[Click 1]
"It opened the catalog and followed the explicit child links: eleven theme catalogs, sixty-nine collections. The linked graph is the publication boundary."

[Click 2]
"It read AGENTS dot md: the join key, the coordinate system, the exact hazard-class strings, and what the data is not for."

[Click 3]
"It inspected each collection: one GeoParquet asset each, with provider, license, extent and row count."

[Click 4]
"It planned a DuckDB query. The model plans and explains; DuckDB computes, reading only the row groups it needs thanks to the spatial ordering the spec requires."

[Click 5]
"It reported with method, URLs, producer, license and limitations. Every step consumed something the publisher wrote down. Nothing was guessed. I cannot run this in ten minutes, so it runs live at the demo desk: bring a question about South Tyrol and watch the agent read the metadata before it answers. The recording is linked here as well."

[Sources]
- https://github.com/portolan-sdi/portolan-skills/tree/main/skills/reading-portolan
- Recording of the run (thumbnail: a frame from it, public/bz-agent-frame.jpg): https://storage.googleapis.com/ogc-metadata-summit-bolzano-talk-media/ogc-metadata-2026-bolzano-demo-south-tyrol-agent.mp4 (public bucket in europe-west8, 18 MB, H.264, 76 s, no audio; replaced 5 Sep 2026)
-->
