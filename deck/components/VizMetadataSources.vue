<script setup lang="ts">
// Where the values in a Portolan record come from. Two inputs reach `portolan add`: the
// metadata.yaml tree (declared: asserted by the publisher, or drafted by a harvest / an agent and
// then reviewed) and the data file (measured). Harvested values never enter the record directly;
// `portolan extract` writes them into the collection's YAML for review. Figures: South Tyrol
// mirror, portolan-cli 0.8.0, 4 Sep 2026.
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { isPrintMode } = useNav()
const s = computed(() => (isPrintMode.value ? 99 : $clicks.value))
</script>

<template>
  <div class="stage">
    <svg class="canvas" viewBox="0 0 800 460" role="group"
         aria-label="Two inputs fill a Portolan record. Left: a metadata.yaml at every level of the tree; the publisher asserts licence, contact and providers once at the root, inherited by 11 theme files and 69 collection files; a harvest from the source service, or an agent, drafts description, keywords and source URL into the collection file for review. Right: portolan add measures extent, row count, columns and checksums from the data file. portolan add merges the two into collection.json, README.md and AGENTS.md.">
      <defs>
        <marker id="ms-arrow" viewBox="0 0 8 8" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M1 1 L7 4 L1 7" class="marker-head" />
        </marker>
      </defs>

      <!-- DECLARED: the yaml tree, left -->
      <g class="blk" :class="{ on: s >= 2 }">
        <text x="30" y="24" class="chip c-asserted">DECLARED IN metadata.yaml · one file per level</text>
        <rect x="30" y="36" width="240" height="66" rx="12" class="box b-asserted" />
        <text x="44" y="57" class="mono">catalog root · 1 file</text>
        <text x="44" y="76" class="copy c-asserted">license · contact · providers</text>
        <text x="44" y="92" class="copy c-asserted">attribution · keywords · citations</text>
        <path d="M150 102 V126" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <text x="160" y="119" class="small c-asserted">inherits</text>
        <rect x="30" y="130" width="240" height="50" rx="12" class="box b-asserted" />
        <text x="44" y="151" class="mono">themes · 11 files</text>
        <text x="44" y="170" class="copy c-asserted">title · description</text>
        <path d="M150 180 V204" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <text x="160" y="197" class="small c-asserted">inherits</text>
      </g>
      <g class="blk" :class="{ on: s >= 1 }">
        <rect x="30" y="208" width="240" height="90" rx="12" class="box b-asserted" />
        <text x="44" y="229" class="mono">collections · 69 files</text>
        <text x="44" y="248" class="copy c-harvested">description · keywords · source_url</text>
        <text x="44" y="264" class="copy c-harvested">processing_notes · license_url</text>
        <text x="44" y="284" class="copy c-asserted">title · known_issues</text>
      </g>

      <!-- counters, centre top -->
      <g class="blk" :class="{ on: s >= 2 }">
        <text x="400" y="74" text-anchor="middle" class="big">81</text>
        <text x="400" y="94" text-anchor="middle" class="small">metadata.yaml files, one per level</text>
        <text x="400" y="146" text-anchor="middle" class="big">1</text>
        <text x="400" y="166" text-anchor="middle" class="small">carries the licence, contact and</text>
        <text x="400" y="182" text-anchor="middle" class="small">providers for all 69 collections</text>
      </g>

      <!-- HARVESTED: drafts into the collection yaml, centre -->
      <g class="blk" :class="{ on: s >= 1 }">
        <text x="300" y="203" class="chip c-harvested">HARVESTED · extract / agent</text>
        <rect x="300" y="214" width="200" height="84" rx="12" class="box b-harvested" />
        <text x="314" y="235" class="mono">WFS · CSW · portal page</text>
        <text x="314" y="254" class="copy">abstract · keywords · URL</text>
        <text x="314" y="270" class="copy">"TODO: Add value" if none</text>
        <text x="314" y="289" class="copy c-harvested">drafted into YAML, reviewed</text>
        <path d="M300 256 H276" class="link l-harvested" marker-end="url(#ms-arrow)" />
      </g>

      <!-- MEASURED: the data file, right -->
      <g class="blk" :class="{ on: s >= 1 }">
        <text x="530" y="24" class="chip c-measured">MEASURED FROM THE DATA · portolan add, every run</text>
        <rect x="530" y="36" width="240" height="262" rx="12" class="box b-measured" />
        <text x="544" y="58" class="mono">rest-homes.parquet</text>
        <text x="544" y="86" class="copy">extent.spatial.bbox</text>
        <text x="544" y="108" class="copy">CRS · geoparquet:geometry_type</text>
        <text x="544" y="130" class="copy">table:row_count</text>
        <text x="544" y="152" class="copy">table:columns, names + types</text>
        <text x="544" y="174" class="copy">file:size · file:checksum</text>
        <text x="544" y="196" class="copy">stac_extensions · as found</text>
        <text x="544" y="236" class="copy c-measured">re-read on every add:</text>
        <text x="544" y="254" class="copy c-measured">the record cannot drift</text>
        <text x="544" y="272" class="copy c-measured">from the file it describes</text>
      </g>

      <!-- MERGE -->
      <g class="blk" :class="{ on: s >= 3 }">
        <path d="M150 298 V354 H296" class="link l-asserted" marker-end="url(#ms-arrow)" />
        <path d="M650 298 V354 H504" class="link l-measured" marker-end="url(#ms-arrow)" />
        <rect x="300" y="324" width="200" height="60" rx="12" class="box b-merge" />
        <circle cx="320" cy="344" r="4.5" class="dot-asserted" />
        <circle cx="334" cy="344" r="4.5" class="dot-measured" />
        <text x="400" y="370" text-anchor="middle" class="mono strong">portolan add</text>
        <path d="M400 384 V404" class="link l-merge" marker-end="url(#ms-arrow)" />
        <text x="400" y="424" text-anchor="middle" class="mono strong">collection.json · README.md · AGENTS.md</text>
        <text x="400" y="450" text-anchor="middle" class="foot">drafted by a tool · approved by a person · gated by <tspan class="mono">rashid check</tspan> in CI on every push</text>
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
.copy.c-asserted { fill: var(--c-portolan); }
.copy.c-harvested { fill: var(--c-warn); }
.copy.c-measured { fill: var(--c-ok); }
.small { font-size: 11.5px; font-weight: 700; fill: var(--c-muted); }
.big { font-size: 44px; font-weight: 900; fill: var(--c-fg); }
.link { fill: none; stroke-width: 2.25; stroke-linecap: round; stroke-linejoin: round; }
.l-asserted { stroke: var(--c-portolan); }
.l-harvested { stroke: var(--c-warn); }
.l-measured { stroke: var(--c-ok); }
.l-merge { stroke: var(--c-fg); }
.marker-head { fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.dot-asserted { fill: var(--c-portolan); }
.dot-measured { fill: var(--c-ok); }
.foot { font-size: 12px; font-weight: 700; fill: var(--c-portolan); }
.foot .mono { fill: var(--c-portolan); font-size: 12px; }
</style>
