---
clicks: 2
layout: default
---

# Lesson 6 · Sometimes "no API" is the honest answer

<div class="grid grid-cols-3 gap-5 mt-4">
  <div class="panel">
    <p class="label">A PORTOLAN CATALOG IS</p>
    <p>Files on any S3-compatible storage. <code>catalog.json</code>, <code>collection.json</code>, GeoParquet, COG, PMTiles, two Markdown files.</p>
    <p class="muted">No server to operate. No STAC API. The metadata is the interface.</p>
  </div>
  <div class="panel" v-click>
    <p class="label">HOW IT IS READ</p>
    <p>An agent reads the catalog, then queries the GeoParquet in place with DuckDB. No credentials. QGIS, Pandas and BigQuery read the same files.</p>
  </div>
  <div class="panel" v-click>
    <p class="label">WHAT THAT BUYS</p>
    <ul>
      <li>cost drops to storage and egress</li>
      <li>nothing runs after publishing</li>
      <li>sovereignty is structural: the publisher picks the storage, including national providers</li>
      <li>if Portolan disappeared tomorrow, every file still works</li>
    </ul>
  </div>
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:1rem 1.1rem; background:var(--c-panel); font-size:0.9rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
.muted { color:var(--c-muted); font-size:0.82rem; margin-top:0.5rem; }
.panel ul { margin:0; padding-left:1.1rem; }
</style>

<!--
[Say]
"Sixth lesson. Portolan catalogs are static. Files in a bucket, described by STAC, with two Markdown files beside them. There is no server to operate and no STAC API. The metadata is the interface."

[Click 1]
"An agent reads the catalog and then queries the GeoParquet directly with DuckDB, with no credentials. QGIS, Pandas and BigQuery read the same files."

[Click 2]
"The consequences are what a spatial data infrastructure cares about. Cost drops to storage and egress. Nothing runs after publishing. Sovereignty is structural, because the publisher chooses where the bytes live, including a provider in their own country. And if Portolan disappeared tomorrow, every file would still open in the tools you already use."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md
-->
