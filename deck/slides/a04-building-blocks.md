---
clicks: 2
layout: default
---

# You already know the building blocks. Most carry an OGC stamp.

<div class="grid grid-cols-2 gap-6 mt-3">
  <div class="panel">
    <p class="label">WHAT A PORTOLAN CATALOG IS MADE OF</p>
    <table class="blocks">
      <tbody>
      <tr><td><b>STAC 1.1</b> catalog · collection · item · asset, plus the provider, table, file and web-map-links extensions</td><td class="st ogc">OGC Community Standard <small>Oct 2025</small></td></tr>
      <tr><td>an Item is a <b>GeoJSON</b> Feature; the STAC API extends <b>OGC API – Features</b></td><td class="st ogc">IETF RFC 7946 · OGC Standard</td></tr>
      <tr><td><b>Cloud Optimized GeoTIFF</b> for raster</td><td class="st ogc">OGC Standard <small>2023</small></td></tr>
      <tr><td><b>GeoParquet</b> for vector (Parquet + Simple Features)</td><td class="st track">OGC Standards Working Group <small>pending approval</small></td></tr>
      <tr><td><b>PMTiles</b> for map display</td><td class="st comm">community format <small>outside OGC</small></td></tr>
      <tr><td><b>Zarr</b> · <b>COPC</b> <small>(planned, not shipped)</small></td><td class="st ogc">Zarr: OGC Community Standard <small>2022</small></td></tr>
      <tr><td><b>HTTP range requests</b> on <b>object storage</b> · <b>CORS</b></td><td class="st comm">IETF · W3C</td></tr>
      </tbody>
    </table>
  </div>
  <div class="panel side">
    <p class="label" :class="{dim:$clicks<1}">SO WHAT IS LEFT TO SPECIFY?</p>
    <p :class="{dim:$clicks<1}">Every one of those standards <em>deliberately</em> leaves publishing choices open: layout, ordering, statistics, documentation, hosting, provenance. Each open choice is a branch every reader must handle.</p>
    <p class="quote" :class="{dim:$clicks<2}">"STAC describes the data.<br/>Portolan defines how it is published."</p>
    <p class="muted" :class="{dim:$clicks<2}">A STAC publishing profile, not a new format. Apache-2.0. Spec v0.2.0, 128 requirements, 105 machine-checked.</p>
  </div>
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.7rem 1rem; background:var(--c-panel); font-size:0.82rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.4rem; }
.blocks { width:100%; border-collapse:collapse; font-size:0.76rem; }
.blocks td { padding:0.26rem 0.3rem; border-top:1px solid var(--c-line); vertical-align:top; }
.blocks tr:first-child td { border-top:0; }
.st { white-space:nowrap; text-align:right; font-family:'JetBrains Mono', monospace; font-size:0.66rem; }
.st small { display:block; font-size:0.6rem; color:var(--c-muted); }
.ogc { color:var(--c-ok); } .track { color:var(--c-warn); } .comm { color:var(--c-muted); }
.side { display:flex; flex-direction:column; gap:0.7rem; }
.side p { margin:0; transition:opacity 200ms; }
.quote { font-size:1.15rem; font-weight:700; border-left:3px solid var(--c-portolan); padding-left:0.8rem; }
.muted { color:var(--c-muted); font-size:0.8rem; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (1:30)
"Everything a Portolan catalog is made of, you already know, and most of it carries an OGC stamp. STAC, catalog to asset, has been an OGC Community Standard since last October; a STAC Item is a GeoJSON Feature, and the STAC API extends OGC API Features. Cloud Optimized GeoTIFF is an OGC Standard since 2023. GeoParquet is in an OGC Standards Working Group, pending approval. Zarr, which we plan but have not shipped, is an OGC Community Standard. PMTiles for display is a community format outside OGC, and underneath it all are HTTP range requests on object storage. Nothing here is ours."

[Click 1]
"So what is left to specify? Every one of those standards deliberately leaves the publishing choices open: how files are laid out, whether they are spatially ordered, which statistics they carry, what documentation sits next to them, how they are hosted, who produced them. That is the right design for a standard. It is the wrong thing to leave open for a reader, because every open choice is a branch every reader has to handle."

[Click 2]
"That is the gap Portolan fills. STAC describes the data. Portolan defines how it is published. It is a publishing profile on top of these standards, not a new format: Apache-2.0, version 0.2.0, 128 requirements, 105 of them checked by a machine."

[Sources]
- https://www.ogc.org/announcement/ogc-announces-publication-of-the-spatiotemporal-asset-catalog-community-standards/ (28 Oct 2025; "an Item … is simply a GeoJSON Feature"; "The STAC API extends the OGC API – Features – Part 1: Core")
- https://docs.ogc.org/is/21-026/21-026.html (OGC Cloud Optimized GeoTIFF Standard 1.0, 2023)
- https://github.com/opengeospatial/geoparquet/blob/main/README.md ("official Standards Working Group … pending OGC approval", checked 3 Sep 2026)
- https://www.ogc.org/announcement/ogc-forms-new-geozarr-standards-working-group-to-establish-a-zarr-encoding-for-geospatial-data/ (Zarr V2 endorsed as OGC Community Standard, June 2022)
- https://docs.protomaps.com/pmtiles/ (PMTiles; not an OGC document)
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md ("Isn't this just STAC and cloud-optimized formats?")
-->
