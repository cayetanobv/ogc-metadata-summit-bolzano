---
layout: default
hideInToc: true
---

# Backup · How an ISO record rides in a Portolan collection

```json
"assets": {
  "metadata": {
    "href": "./iso19115.xml",
    "type": "application/vnd.iso.19139+xml",
    "title": "ISO 19115 record, BRK Bestuurlijke Gebieden (Nationaal Georegister)",
    "roles": ["metadata", "iso-19115"],
    "file:size": 40942, "file:checksum": "1220…"
  }
},
"links": [
  {"rel": "describedby", "href": "./README.md", "type": "text/markdown"},
  {"rel": "describedby",
   "href": "https://www.nationaalgeoregister.nl/geonetwork/srv/api/records/208bc283-…/formatters/xml",
   "type": "application/vnd.iso.19139+xml", "title": "ISO 19115 record — authoritative"},
  {"rel": "via", "href": "https://www.pdok.nl/…", "type": "text/html", "title": "Original source (PDOK)"}
]
```

<div class="bi mt-3"><span class="en">Asset = pinned copy with checksum and mirror date. Link = live authoritative record. If they disagree, the link wins and the asset tells you how old the copy is.</span></div>

<!--
[Say]
"For the metadata people: the asset is the pinned copy, with a checksum and a mirror date. The typed describedby link points at the live authoritative record. via stays for provenance, on mirrors only. That is what real catalogs do and what CEOS codifies, with one deliberate difference: Portolan does not put metadata representations on via."

[Sources]
-->
