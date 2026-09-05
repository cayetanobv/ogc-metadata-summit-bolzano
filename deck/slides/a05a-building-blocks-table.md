---
clicks: 0
layout: default
---

# You already know the stack. Most of it carries an OGC stamp.

<table class="blocks mt-4">
  <thead><tr><th>Piece</th><th>Role in a Portolan catalog</th><th class="st">Status</th></tr></thead>
  <tbody>
  <tr><td><b>STAC 1.1</b></td><td>catalog · collection · item · asset, plus the provider, table, file and web-map-links extensions</td><td class="st ogc">OGC Community Standard <small>Oct 2025</small></td></tr>
  <tr><td><b>GeoJSON</b></td><td>every STAC Item is a GeoJSON Feature</td><td class="st comm">IETF RFC 7946</td></tr>
  <tr><td><b>Cloud Optimized GeoTIFF</b></td><td>raster, with overviews, read by range requests</td><td class="st ogc">OGC Standard <small>2023</small></td></tr>
  <tr><td><b>GeoParquet</b></td><td>vector: Parquet with Simple Features geometry</td><td class="st ogc">OGC Standards Working Group <small>approval pending</small></td></tr>
  <tr><td><b>PMTiles</b></td><td>tiles in one file, for map display</td><td class="st comm">community format <small>outside OGC</small></td></tr>
  <tr><td><b>Zarr</b> · <b>COPC</b></td><td>multidimensional arrays · point clouds <small>planned, not shipped</small></td><td class="st ogc">Zarr: OGC Community Standard <small>2022</small></td></tr>
  <tr><td><b>HTTP range requests</b> · <b>object storage</b> · <b>CORS</b></td><td>the only server involved is the storage itself</td><td class="st comm">IETF · W3C</td></tr>
  </tbody>
</table>

<div class="bi"><span class="en">Nothing here is new. Portolan uses the static side of STAC only: files, no API.</span></div>

<style>
.blocks { width:100%; border-collapse:collapse; font-size:0.9rem; flex:1 1 auto; }
.blocks th { text-align:left; font-family:'JetBrains Mono', monospace; font-size:0.6rem; letter-spacing:0.08em; color:var(--c-portolan); font-weight:400; padding:0 0.5rem 0.4rem; border-bottom:1px solid var(--c-portolan); }
.blocks td { padding:0.55rem 0.5rem; border-top:1px solid var(--c-line); vertical-align:top; line-height:1.3; }
.blocks tr:first-child td { border-top:0; }
.blocks td:nth-child(2) { color:var(--c-muted); }
.blocks td small, .blocks .st small { display:block; font-size:0.7em; color:var(--c-muted); }
.st { white-space:nowrap; text-align:right; font-family:'JetBrains Mono', monospace; font-size:0.72rem; }
.ogc { color:var(--c-ok); } .comm { color:var(--c-muted); }
.bi { margin-top:auto; }
</style>

<!--
[Say] (0:45)
"Everything a Portolan catalog is made of, you already know, and most of it carries an OGC stamp. STAC, catalog to asset, has been an OGC Community Standard since last October. Every STAC Item is a GeoJSON Feature, an IETF standard. Cloud Optimized GeoTIFF is an OGC Standard since 2023. GeoParquet has its own OGC Standards Working Group; approval of 1.0 is the remaining formality. Zarr, which we plan but have not shipped, is an OGC Community Standard. PMTiles for display is a community format, and underneath it all are HTTP range requests on object storage. Nothing here is new. And Portolan uses the static side of STAC only: files, no API."

[Sources]
- https://www.ogc.org/announcement/ogc-announces-publication-of-the-spatiotemporal-asset-catalog-community-standards/ (28 Oct 2025; "an Item … is simply a GeoJSON Feature")
- https://datatracker.ietf.org/doc/html/rfc7946 (GeoJSON, IETF, not an OGC document)
- https://docs.ogc.org/is/21-026/21-026.html (OGC Cloud Optimized GeoTIFF Standard 1.0, 2023)
- https://github.com/opengeospatial/geoparquet/blob/main/README.md ("official Standards Working Group … pending OGC approval", checked 3 Sep 2026)
- https://www.ogc.org/announcement/ogc-forms-new-geozarr-standards-working-group-to-establish-a-zarr-encoding-for-geospatial-data/ (Zarr V2 endorsed as OGC Community Standard, June 2022)
- https://docs.protomaps.com/pmtiles/ (PMTiles; not an OGC document)
-->
