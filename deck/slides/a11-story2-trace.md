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

<div class="mt-6 bi"><span class="en">Every step consumed something the publisher wrote down. Nothing was guessed. That is the operational meaning of AI-ready metadata.</span></div>

<div class="mt-5 invite">
  <p class="label">LIVE AT THE DEMO DESK</p>
  <p>This story, live: ask the agent <em>your</em> question on the South Tyrol catalog, and watch it read the metadata before it answers.</p>
  <p class="rec"><lucide-video class="ic" /><a class="source-link" href="https://storage.googleapis.com/ogc-metadata-summit-bolzano-talk-media/ogc-metadata-2026-bolzano-demo-south-tyrol-agent.mp4" target="_blank" rel="noopener noreferrer">Recording of this run, 1 min 33 s ↗</a></p>
</div>

<style>
.path { display:grid; grid-template-columns: repeat(5, 1fr); gap:0.7rem; }
.node { border:1px solid var(--c-line); border-radius:12px; padding:0.8rem; background:var(--c-panel); opacity:0.45; transition:opacity 200ms; display:flex; flex-direction:column; gap:0.35rem; font-size:0.85rem; }
.node.on { opacity:1; border-color: var(--c-portolan); }
.node .n { font-family:'JetBrains Mono', monospace; color:var(--c-portolan); font-size:0.7rem; }
.node small { color:var(--c-muted); font-size:0.72rem; line-height:1.3; }
.invite { border:1px solid var(--c-portolan); border-radius:10px; padding:0.6rem 0.9rem; background:var(--c-portolan-soft); font-size:0.88rem; }
.invite .label { font-family:'JetBrains Mono', monospace; font-size:0.6rem; letter-spacing:0.08em; color:var(--c-portolan); margin:0 0 0.2rem; }
.invite p { margin:0; }
.invite .rec { margin-top:0.35rem; display:flex; align-items:center; gap:0.4rem; font-size:0.8rem; }
.invite .rec .ic { width:1rem; height:1rem; color:var(--c-portolan); }
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
- Recording of the run: https://storage.googleapis.com/ogc-metadata-summit-bolzano-talk-media/ogc-metadata-2026-bolzano-demo-south-tyrol-agent.mp4 (public bucket in europe-west8, 19 MB, H.264, 93 s, no audio)
-->
