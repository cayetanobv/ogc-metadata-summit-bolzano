<script setup lang="ts">
// Where the values in a Portolan record come from: asserted in metadata.yaml and inherited
// down the tree, harvested from the source service, measured from the data file, merged by
// `portolan add` into collection.json, README.md and AGENTS.md. Figures: South Tyrol mirror,
// portolan-cli 0.8.0, 4 Sep 2026.
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { isPrintMode } = useNav()
const s = computed(() => (isPrintMode.value ? 99 : $clicks.value))
</script>

<template>
  <div class="stage">
    <svg class="canvas" viewBox="0 0 800 460" role="group"
         aria-label="Three kinds of value fill a Portolan record. The publisher asserts licence, contact and providers once in a root metadata.yaml, inherited by 11 theme files and 69 collection files. A harvest from the source service drafts descriptions and keywords. The CLI measures extent, row count, columns and checksums from the data file. portolan add merges all three into collection.json, README.md and AGENTS.md.">
      <defs>
        <marker id="ms-arrow" viewBox="0 0 8 8" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M1 1 L7 4 L1 7" class="marker-head" />
        </marker>
      </defs>

      <!-- ASSERTED: the yaml tree, left -->
      <g class="blk asserted" :class="{ on: s >= 2 }">
        <text x="30" y="24" class="chip c-asserted">ASSERTED BY THE PUBLISHER · metadata.yaml</text>
        <rect x="30" y="36" width="260" height="70" rx="12" class="box b-asserted" />
        <text x="46" y="58" class="mono">catalog root · 1 file</text>
        <text x="46" y="78" class="copy">license · contact · providers</text>
        <text x="46" y="95" class="copy">attribution · keywords · citations</text>
        <path d="M160 106 V132" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <text x="170" y="124" class="small c-asserted">inherits</text>
        <rect x="30" y="136" width="260" height="52" rx="12" class="box b-asserted" />
        <text x="46" y="158" class="mono">themes · 11 files</text>
        <text x="46" y="177" class="copy">title · description</text>
        <path d="M160 188 V214" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <text x="170" y="206" class="small c-asserted">inherits</text>
      </g>
      <g class="blk asserted" :class="{ on: s >= 1 }">
        <rect x="30" y="218" width="260" height="70" rx="12" class="box b-asserted" />
        <text x="46" y="240" class="mono">collections · 69 files</text>
        <text x="46" y="260" class="copy">title · description · source_url</text>
        <text x="46" y="277" class="copy">processing_notes · known_issues</text>
      </g>

      <!-- counter, centre -->
      <g class="blk counter" :class="{ on: s >= 2 }">
        <text x="400" y="92" text-anchor="middle" class="big">81</text>
        <text x="400" y="112" text-anchor="middle" class="small">metadata.yaml files, one per level</text>
        <text x="400" y="176" text-anchor="middle" class="big">1</text>
        <text x="400" y="196" text-anchor="middle" class="small">carries the licence, contact and</text>
        <text x="400" y="212" text-anchor="middle" class="small">providers for all 69 collections</text>
      </g>

      <!-- HARVESTED: the source service, right top -->
      <g class="blk harvested" :class="{ on: s >= 1 }">
        <text x="510" y="24" class="chip c-harvested">HARVESTED · portolan extract, or an agent</text>
        <rect x="510" y="36" width="268" height="70" rx="12" class="box b-harvested" />
        <text x="526" y="58" class="mono">WFS · CSW record · portal page</text>
        <text x="526" y="78" class="copy">abstract · keywords · source URL · style</text>
        <text x="526" y="95" class="copy">"TODO: Add value" if nothing was found</text>
      </g>

      <!-- MEASURED: the data file, right bottom -->
      <g class="blk measured" :class="{ on: s >= 1 }">
        <text x="510" y="146" class="chip c-measured">MEASURED · portolan add, on every run</text>
        <rect x="510" y="158" width="268" height="130" rx="12" class="box b-measured" />
        <text x="526" y="180" class="mono">rest-homes.parquet</text>
        <text x="526" y="201" class="copy">extent.spatial.bbox · CRS</text>
        <text x="526" y="219" class="copy">table:row_count · table:columns</text>
        <text x="526" y="237" class="copy">geoparquet:geometry_type</text>
        <text x="526" y="255" class="copy">file:size · file:checksum per asset</text>
        <text x="526" y="273" class="copy">stac_extensions · from what was found</text>
      </g>

      <!-- MERGE -->
      <g class="blk merge" :class="{ on: s >= 3 }">
        <path d="M160 288 V346 H298" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <path d="M778 71 H792 V346 H502" class="link l-harvested" marker-end="url(#ms-arrow)" />
        <path d="M640 288 V346" class="link l-measured" />
        <rect x="302" y="316" width="196" height="60" rx="12" class="box b-merge" />
        <circle cx="322" cy="336" r="4.5" class="dot-asserted" />
        <circle cx="336" cy="336" r="4.5" class="dot-harvested" />
        <circle cx="350" cy="336" r="4.5" class="dot-measured" />
        <text x="400" y="362" text-anchor="middle" class="mono strong">portolan add</text>
        <path d="M400 376 V398" class="link l-merge" marker-end="url(#ms-arrow)" />
        <text x="400" y="418" text-anchor="middle" class="mono strong">collection.json · README.md · AGENTS.md</text>
        <text x="400" y="446" text-anchor="middle" class="foot">drafted by a tool · approved by a person · gated by <tspan class="mono">rashid check</tspan> in CI on every push</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
@keyframes ms-focus {
  from { opacity: 0.22; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}
.blk { opacity: 0.22; }
.blk.on { animation: ms-focus 400ms ease-out both; }
.chip { font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 800; letter-spacing: 0.07em; }
.c-asserted { fill: var(--c-portolan); }
.c-harvested { fill: var(--c-warn); }
.c-measured { fill: var(--c-ok); }
.box { fill: var(--c-panel); stroke-width: 2.5; }
.b-asserted { stroke: var(--c-portolan); }
.b-harvested { stroke: var(--c-warn); }
.b-measured { stroke: var(--c-ok); }
.b-merge { stroke: var(--c-fg); stroke-width: 2.5; }
.mono { font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 12.5px; font-weight: 800; fill: var(--c-fg); }
.strong { font-size: 13.5px; }
.copy { font-size: 12px; font-weight: 600; fill: var(--c-muted); }
.small { font-size: 11.5px; font-weight: 700; fill: var(--c-muted); }
.big { font-size: 44px; font-weight: 900; fill: var(--c-fg); }
.link { fill: none; stroke-width: 2.25; stroke-linecap: round; stroke-linejoin: round; }
.l-asserted { stroke: var(--c-portolan); }
.l-harvested { stroke: var(--c-warn); }
.l-measured { stroke: var(--c-ok); }
.l-merge { stroke: var(--c-fg); }
.marker-head { fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.dot-asserted { fill: var(--c-portolan); }
.dot-harvested { fill: var(--c-warn); }
.dot-measured { fill: var(--c-ok); }
.foot { font-size: 12px; font-weight: 700; fill: var(--c-portolan); }
.foot .mono { fill: var(--c-portolan); font-size: 12px; }
</style>
