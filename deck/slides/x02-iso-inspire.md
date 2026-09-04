---
clicks: 3
layout: default
---

# Appendix 2 · Your ISO 19115 / INSPIRE records are inputs, not casualties

<div class="grid grid-cols-3 gap-5 mt-4">
  <div class="panel" :class="{dim:$clicks<1}">
    <p class="label">ISO IN</p>
    <p><code>portolan extract wfs</code> reads the ISO 19139 record over CSW and seeds title, abstract, keywords, license, contact, lineage, dates.</p>
  </div>
  <div class="panel" :class="{dim:$clicks<2}">
    <p class="label">ISO ALONGSIDE</p>
    <p>The record travels with the data as an asset with <code>roles: ["metadata","iso-19115"]</code> and a typed <code>describedby</code> link to the catalogue that owns it.</p>
  </div>
  <div class="panel" :class="{dim:$clicks<3}">
    <p class="label">GEODCAT-AP OUT</p>
    <p>Generated from the same source as a sibling representation, so open-data portals can harvest it. Roadmap, not shipped.</p>
  </div>
</div>

<div class="mt-5 bi"><span class="en">The same pattern swisstopo and the CEOS STAC best practices already follow. There is still no ISO 19115 STAC extension — an open question for this room.</span></div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:1rem 1.1rem; background:var(--c-panel); font-size:0.88rem; transition:opacity 200ms; }
.panel.dim { opacity:0.4; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
</style>

<!--
[Say]
"You maintain ISO 19115 and INSPIRE records. Let me be explicit about how this relates to them, because the honest answer is additive."

[Click 1]
"Your record is an input. The CLI reads it over CSW and seeds the catalog metadata from it. Nobody retypes anything."

[Click 2]
"Your record ships alongside the data as a metadata-role asset, with a typed link back to the catalogue that owns it. The catalogue stays authoritative. The Netherlands provinces example in the spec does exactly this."

[Click 3]
"GeoDCAT-AP comes out the other side, generated from the same source, for the portals that harvest DCAT. That part is roadmap, not shipped. And I want to be honest about one gap: there is still no ISO 19115 STAC extension, in Portolan or anywhere. Whether the record should hang off a typed link or ride as an asset is unresolved. This is the room that could settle it."

[Sources]
- https://github.com/ceos-org/stac-collection-and-granule-discovery-best-practices/blob/main/best-practices.md
- https://data.geo.admin.ch/api/stac/v1/collections/ch.meteoschweiz.ogd-smn
- https://github.com/portolan-sdi/portolan-spec/tree/main/examples/catalog/portolan-reference/boundaries/netherlands-provinces
- https://portal.ogc.org/files/103396 (OGC GeoDCAT SWG charter)
-->
