---
clicks: 3
layout: default
---

# Story 1 · A mirror of this province's open data, published as a spec v0.2.0 catalog in five commands

<div class="grid grid-cols-2 gap-6 mt-2">
<div>

```bash
# 1. Pull 69 layers from South Tyrol's WFS (207 available; ~12 min)
portolan extract wfs $BZ_WFS ./bz --license CC0-1.0 --workers 4 \
  --layers "p_bz-Health:*,p_bz-Hydrology:Watercourses,\
            p_bz-TerritorialPlans:UrbanPlan-HazardZonePlan-*,…"

# 2. Validate against the spec
portolan check
# ✗ PTL-PRV-001  no provider carries the 'producer' role  (×69)

# 3. Say who produced it, who hosts it, what it is not;
#    group into 11 themes (a folder move → subcatalogs)
$EDITOR .portolan/metadata.yaml

# 4. Regenerate STAC + README + AGENTS.md, re-check
portolan add --force . && portolan readme
portolan check --fix && rashid check . --schema --data
# 0 error(s), 0 warning(s) across 81 files

# 5. Push to a public bucket (Milan region). Nothing else runs.
portolan push gs://south-tyrol-geodata-portolan-mirror/
rashid check . --live --live-base-url https://storage.googleapis.com/…/
# 0 error(s): range requests, CORS, sizes all honoured by the host
```

</div>
<div class="steps">
  <div class="step" :class="{on: $clicks>=1}"><b>The service seeded what it could.</b> Titles in three languages, keywords, abstracts, styles from the WMS. 69 layers, 58 MB, converted to GeoParquet, spatially ordered, bbox column added; PMTiles and framed thumbnails alongside.</div>
  <div class="step" :class="{on: $clicks>=2}"><b>The validator failed on the machine contract</b>, not on the prose: no producer, no license from the service. The producer's knowledge went into YAML at every level (root, 11 themes, 69 collections); from it came <code>README.md</code>, <code>collection.json</code>, <code>AGENTS.md</code>.</div>
  <div class="step" :class="{on: $clicks>=3}"><b>Two independent validators, same answer: conforms to v0.2.0.</b> 128 requirements checked, including the hosting contract once pushed: range requests, CORS, byte sizes. The remaining notes are publisher judgment (no upstream STAC to link to). No server was started. The result is a folder in a bucket.</div>
</div>
</div>

<p class="attrib">Data: Provincia Autonoma di Bolzano – Alto Adige / Autonome Provinz Bozen – Südtirol (Ripartizione 28 · ASTAT · Ripartizione 23 Salute), CC0 1.0, via data.civis.bz.it and the provincial WFS. Community mirror extracted 5 September 2026 — not an official publication; the authoritative source is the Province's geoportal.</p>

<style>
.attrib { margin-top:auto; font-size:0.68rem; color:var(--c-muted); }
.steps { display:flex; flex-direction:column; gap:0.6rem; font-size:0.84rem; }
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
-->
