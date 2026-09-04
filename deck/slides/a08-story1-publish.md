---
clicks: 3
layout: default
---

# Story 1 · A mirror of this province's open data, published as a spec v0.2.0 catalog in five commands

<div class="grid grid-cols-2 gap-6 mt-2">
<div>

```bash
# 1. Pull 69 of the 207 layers of South Tyrol's WFS (~12 min)
portolan extract wfs $BZ_WFS ./bz --license CC0-1.0 \
  --layers "p_bz-Health:*,p_bz-Hydrology:Watercourses,…"

# 2. Validate against the spec
portolan check
# ✗ PTL-PRV-001  no provider carries the 'producer' role  (×69)

# 3. Who produced it, who hosts it, what it is not; 11 themes
$EDITOR .portolan/metadata.yaml

# 4. Regenerate STAC + README + AGENTS.md, re-check
portolan add --force . && portolan readme
portolan check --fix && rashid check . --schema --data
# 0 error(s), 0 warning(s) across 81 files

# 5. Push to a public bucket (Milan). Nothing else runs.
portolan push gs://south-tyrol-geodata-portolan-mirror/
rashid check . --live --live-base-url $PUBLIC_URL
# 0 error(s): range requests, CORS, sizes honoured
```

</div>
<div class="steps">
  <div class="step" :class="{on: $clicks>=1}"><b>The service seeded what it could.</b> Titles in three languages, keywords, abstracts, styles from the WMS. 69 layers to GeoParquet, spatially ordered, bbox column added; PMTiles and thumbnails alongside.</div>
  <div class="step" :class="{on: $clicks>=2}"><b>The validator failed on the machine contract</b>, not on the prose: no producer, no license from the service. The producer's knowledge went into YAML at every level; from it came <code>README.md</code>, <code>collection.json</code>, <code>AGENTS.md</code>.</div>
  <div class="step" :class="{on: $clicks>=3}"><b>Two validators, same answer: conforms to v0.2.0</b>, hosting contract included once pushed (range requests, CORS, sizes). The same run, hands off: an agent with the <code>portolan-bootstrap</code> skill does steps 1–5 and writes the documentation. No server was started. The result is a folder in a bucket.</div>
</div>
</div>

<p class="browse">
  <span class="label">EXAMPLE CATALOG</span>
  <a class="source-link" href="https://browser.portolan-sdi.org/#/external/storage.googleapis.com/south-tyrol-geodata-portolan-mirror/catalog.json" target="_blank" rel="noopener noreferrer">open it in the Portolan browser ↗</a>
  <span class="sep">·</span>
  <a class="source-link" href="https://storage.googleapis.com/south-tyrol-geodata-portolan-mirror/catalog.json" target="_blank" rel="noopener noreferrer">catalog.json on storage.googleapis.com ↗</a>
  <span class="sep">·</span>
  <a class="source-link" href="https://github.com/cayetanobv/south-tyrol-geodata-portolan-mirror" target="_blank" rel="noopener noreferrer">metadata and CI on GitHub ↗</a>
</p>

<p class="attrib">Data: Provincia Autonoma di Bolzano – Alto Adige / Autonome Provinz Bozen – Südtirol (Ripartizione 28 · ASTAT · Ripartizione 23 Salute), CC0 1.0, via data.civis.bz.it and the provincial WFS. Community mirror extracted 5 September 2026 — not an official publication; the authoritative source is the Province's geoportal.</p>

<style>
.browse { margin-top:auto; font-size:0.72rem; display:flex; flex-wrap:nowrap; gap:0.7rem; align-items:baseline; margin-bottom:0; white-space:nowrap; }
.browse a { text-decoration-style:solid; text-decoration-thickness:1px; }
.browse .label { font-family:'JetBrains Mono', monospace; font-size:0.58rem; letter-spacing:0.08em; color:var(--c-portolan); }
.browse .sep { color:var(--c-muted); }
.attrib { margin:0.25rem 0 0; font-size:0.62rem; color:var(--c-muted); line-height:1.3; }
.steps { display:flex; flex-direction:column; gap:0.55rem; font-size:0.8rem; }
pre, .slidev-code { font-size:0.66rem !important; line-height:1.3 !important; }
.step { border-left:3px solid var(--c-line); padding:0.3rem 0.8rem; color:var(--c-muted); transition: all 200ms; }
.step.on { border-left-color: var(--c-portolan); color: var(--c-fg); }
</style>

<!--
[Say] (1:15)
"First story, and it is yours. To be clear from the start: this is a mirror, not an official publication; the Province remains the authority. On Saturday I pointed the CLI at this province's WFS, the 207 INSPIRE-themed layers South Tyrol publishes, and took 69 of them, from municipalities and population to hazard-zone plans, health facilities, hydrology, transport and cultural heritage. Five commands."

[Click 1]
"The service seeded what it could: titles in three languages, keywords, an abstract, the map styles. Sixty-nine layers, 58 megabytes, became GeoParquet, spatially ordered, with a bbox column, plus PMTiles and thumbnails. Nobody retyped metadata."

[Click 2]
"Step two is the interesting one. Validation failed. Not on the prose, on the machine contract: no provider carries the producer role, and the service publishes no license. So the producer's knowledge went into YAML files, one per level: who produced it, who hosts this copy, that hospitals are points and not catchments, that hazard zones are planning classes and not forecasts. And a folder move grouped the 69 collections into 11 themes; the CLI wrote the subcatalogs. From that one file came the README for people, the STAC for software, the AGENTS file for agents."

[Click 3]
"Regenerate, re-check. Two independent validators, the CLI and rashid, give the same answer: conforms to version 0.2.0 of the spec. 128 requirements checked. The remaining notes are publisher judgment: there is no upstream STAC catalog to link to. And nothing was started. The result is a folder. Push it to a bucket and it is live."

[Sources]
- https://geoservices1.civis.bz.it/geoserver/ows?service=WFS&version=2.0.0&request=GetCapabilities
- License verified Sep 3, 2026 on the Province's open-data portal (CKAN `license_id: cc-zero`, publisher "Provincia Autonoma di Bolzano - Alto Adige", records updated 2025-04-23):
  https://data.civis.bz.it/dataset/comuni · https://data.civis.bz.it/dataset/popolazione-ufficiale ·
  https://data.civis.bz.it/dataset/piani-delle-zone-di-pericolo-pericoli-idraulici · https://data.civis.bz.it/dataset/ospedali ·
  https://data.civis.bz.it/dataset/farmacie
- https://github.com/portolan-sdi/portolan-cli · https://github.com/portolan-sdi/rashid
- Example catalog, live: https://storage.googleapis.com/south-tyrol-geodata-portolan-mirror/catalog.json · in the Portolan browser: https://browser.portolan-sdi.org/#/external/storage.googleapis.com/south-tyrol-geodata-portolan-mirror/catalog.json
-->
