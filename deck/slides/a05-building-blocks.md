---
clicks: 2
layout: default
---

# You already know the stack. Most of it carries an OGC stamp.

<div class="grid grid-cols-5 gap-5 mt-2 body">
  <div class="col-span-2 panel">
    <p class="label">WHAT A PORTOLAN CATALOG IS MADE OF</p>
    <table class="blocks">
      <tbody>
      <tr><td><b>STAC 1.1</b> catalog · collection · item · asset</td><td class="st ogc">OGC Community Standard <small>Oct 2025</small></td></tr>
      <tr><td><b>GeoJSON</b> · every Item is a Feature</td><td class="st comm">IETF RFC 7946</td></tr>
      <tr><td><b>Cloud Optimized GeoTIFF</b> · raster</td><td class="st ogc">OGC Standard <small>2023</small></td></tr>
      <tr><td><b>GeoParquet</b> · vector</td><td class="st ogc">OGC SWG <small>approval pending</small></td></tr>
      <tr><td><b>PMTiles</b> · map display</td><td class="st comm">community format</td></tr>
      <tr><td><b>Zarr</b> · <b>COPC</b> <small>planned</small></td><td class="st ogc">Zarr: OGC Community Standard <small>2022</small></td></tr>
      <tr><td><b>HTTP range requests</b> · <b>CORS</b></td><td class="st comm">IETF · WHATWG</td></tr>
      </tbody>
    </table>
    <p class="muted">Nothing here is new.</p>
  </div>
  <div class="col-span-3 viz">
    <VizTheGap />
  </div>
</div>

<div class="bi"><span class="en">"STAC describes the data. Portolan defines how it is published." A publishing profile on top of these standards, not a new format.</span></div>

<style>
.body { flex:1 1 0; min-height:0; }
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.6rem 0.8rem; background:var(--c-panel); font-size:0.78rem; display:flex; flex-direction:column; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.6rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.35rem; }
.blocks { width:100%; border-collapse:collapse; font-size:0.7rem; }
.blocks td { padding:0.24rem 0.2rem; border-top:1px solid var(--c-line); vertical-align:top; line-height:1.25; }
.blocks tr:first-child td { border-top:0; }
.st { white-space:nowrap; text-align:right; font-family:'JetBrains Mono', monospace; font-size:0.58rem; }
.st small { display:block; font-size:0.54rem; color:var(--c-muted); }
.ogc { color:var(--c-ok); } .comm { color:var(--c-muted); }
.muted { color:var(--c-muted); font-size:0.72rem; margin:0; padding-top:0.5rem; }
.viz { display:flex; align-items:center; min-height:0; }
.viz .stage { height:100%; }
</style>

<!--
[Say] (1:15)
"Everything a Portolan catalog is made of, you already know, and most of it carries an OGC stamp. STAC, catalog to asset, has been an OGC Community Standard since last October. Every STAC Item is a GeoJSON Feature, an IETF standard. Cloud Optimized GeoTIFF is an OGC Standard since 2023. GeoParquet has its own OGC Standards Working Group; approval of 1.0 is the remaining formality. Zarr, which we plan but have not shipped, is an OGC Community Standard. PMTiles for display is a community format, and underneath it all are HTTP range requests on object storage. Nothing here is new."

[Click 1]
"STAC does its normal job: it describes and links the same objects, catalog, collection, item, asset. Portolan uses the static side of STAC only: files, no API."

[Click 2]
"Every one of those standards deliberately leaves the publishing choices open. That is the right design for a standard and the wrong thing to leave open for a reader, because every open choice is a branch every reader has to handle. Portolan makes six of those choices explicit: structure and links, formats and statistics, access and hosting, licence and provenance, README and AGENTS documentation, and visualisation. A catalog declares which version of the profile it follows. STAC describes the data. Portolan defines how it is published."

[Sources]
- https://www.ogc.org/announcement/ogc-announces-publication-of-the-spatiotemporal-asset-catalog-community-standards/ (28 Oct 2025; "an Item … is simply a GeoJSON Feature")
- https://datatracker.ietf.org/doc/html/rfc7946 (GeoJSON, IETF, not an OGC document)
- https://docs.ogc.org/is/21-026/21-026.html (OGC Cloud Optimized GeoTIFF Standard 1.0, 2023)
- https://github.com/opengeospatial/geoparquet/blob/main/README.md ("official Standards Working Group … pending OGC approval", checked 3 Sep 2026)
- https://www.ogc.org/announcement/ogc-forms-new-geozarr-standards-working-group-to-establish-a-zarr-encoding-for-geospatial-data/ (Zarr V2 endorsed as OGC Community Standard, June 2022)
- https://docs.protomaps.com/pmtiles/ (PMTiles; not an OGC document)
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md (the six families of publishing choices)
- VizTheGap by Youssef Harby, CNG Japan 2026 deck, reused as team material
-->
