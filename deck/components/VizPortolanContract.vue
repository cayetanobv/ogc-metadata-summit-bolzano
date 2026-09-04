<script setup lang="ts">
// Publish · update · use lifecycle. Ported from Youssef Harby's CNG Japan 2026 deck
// (components/VizPortolanContract.vue), English only; the first goal reads AI-ready.
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { isPrintMode } = useNav()
const s = computed(() => (isPrintMode.value ? 99 : $clicks.value))
</script>

<template>
  <div class="stage">
    <svg class="canvas" viewBox="0 0 800 460" role="group"
         aria-label="Portolan combines existing standards and infrastructure into one repeatable publish, update, and use lifecycle. Publishers convert and describe data, preserve provenance and revalidate updates, and let software, people, and agents use the same static publication. The design goals are AI-ready, easy to implement, scalable, low cost, and sovereign.">
      <defs>
        <marker id="contract-arrow" viewBox="0 0 8 8" markerWidth="8" markerHeight="8"
                refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M1 1 L7 4 L1 7" class="marker-head" />
        </marker>
      </defs>

      <text x="400" y="27" text-anchor="middle" class="kicker">ONE PRACTICE ACROSS THE DATA LIFECYCLE</text>

      <path d="M267 150 H306 M497 150 H536" class="flow" marker-end="url(#contract-arrow)" />

      <g class="phase publish" :class="{ on: s >= 1, active: s === 1 }">
        <rect x="38" y="67" width="229" height="201" rx="20" class="phase-body" />
        <text x="62" y="101" class="phase-num">01</text>
        <text x="106" y="101" class="phase-title">PUBLISH</text>
        <path d="M62 119 H243" class="phase-rule" />
        <text x="62" y="151" class="phase-copy">convert to open formats</text>
        <text x="62" y="184" class="phase-copy">write STAC + docs</text>
        <text x="62" y="217" class="phase-copy">check + upload</text>
        <text x="62" y="250" class="phase-result">STATIC PUBLICATION</text>
      </g>

      <g class="phase update" :class="{ on: s >= 2, active: s === 2 }">
        <rect x="306" y="67" width="191" height="201" rx="20" class="phase-body" />
        <text x="330" y="101" class="phase-num">02</text>
        <text x="374" y="101" class="phase-title">UPDATE</text>
        <path d="M330 119 H473" class="phase-rule" />
        <text x="330" y="151" class="phase-copy">change the source</text>
        <text x="330" y="184" class="phase-copy">preserve provenance</text>
        <text x="330" y="217" class="phase-copy">recheck + sync</text>
        <text x="330" y="250" class="phase-result">STABLE LINKS</text>
      </g>

      <g class="phase use" :class="{ on: s >= 3, active: s === 3 }">
        <rect x="536" y="67" width="226" height="201" rx="20" class="phase-body" />
        <text x="560" y="101" class="phase-num">03</text>
        <text x="604" y="101" class="phase-title">USE</text>
        <path d="M560 119 H738" class="phase-rule" />
        <text x="560" y="151" class="phase-copy">discover the catalog</text>
        <text x="560" y="184" class="phase-copy">range-read the assets</text>
        <text x="560" y="217" class="phase-copy">cite sources + limits</text>
        <text x="560" y="250" class="phase-result">ONE CATALOG FOR ALL</text>
      </g>

      <g class="identity" :class="{ on: s >= 1 }">
        <image href="/portolan-mark.svg" x="42" y="293" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
        <text x="98" y="310" class="identity-title">PORTOLAN</text>
        <text x="98" y="333" class="identity-copy">opinionated · checkable · no new data format · nothing replaced</text>
        <text x="758" y="321" text-anchor="end" class="foundation">STAC 1.1 · GeoParquet · COG · PMTiles · HTTP · object storage</text>
      </g>

      <g class="goals" :class="{ on: s >= 3 }">
        <path d="M42 360 H758" class="goals-rule" />
        <foreignObject x="42" y="377" width="716" height="76">
          <div xmlns="http://www.w3.org/1999/xhtml" class="goal-row">
            <div class="goal-item">AI-READY</div>
            <div class="goal-item">EASY TO IMPLEMENT</div>
            <div class="goal-item">SCALABLE</div>
            <div class="goal-item">LOW COST</div>
            <div class="goal-item">SOVEREIGN</div>
          </div>
        </foreignObject>
      </g>
    </svg>
  </div>
</template>

<style scoped>
@keyframes contract-focus {
  from { opacity: 0.28; transform: translateY(7px); }
  to { opacity: 1; transform: none; }
}

.kicker { fill: var(--c-portolan); font-size: 16px; font-weight: 900; letter-spacing: 0.075em; }
.flow { fill: none; stroke: var(--c-portolan); stroke-width: var(--w-connector-active); stroke-linecap: round; }
.marker-head { fill: none; stroke: var(--c-portolan); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.phase, .identity, .goals { opacity: 0.28; }
.phase.on, .identity.on, .goals.on { animation: contract-focus 430ms ease-out both; }
.phase-body { fill: var(--c-panel); stroke: var(--c-line); stroke-width: 3; }
.phase.active .phase-body { stroke: var(--c-accent); }
.phase-num { fill: var(--c-accent); font-size: 15px; font-weight: 900; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.phase-title { fill: var(--c-fg); font-size: 20px; font-weight: 900; letter-spacing: 0.05em; }
.phase-rule { stroke: var(--c-line); stroke-width: 2; }
.phase.active .phase-rule { stroke: var(--c-accent); }
.phase-copy { fill: var(--c-fg); font-size: 14px; font-weight: 780; }
.phase-result { fill: var(--c-portolan); font-size: 11px; font-weight: 900; letter-spacing: 0.065em; }
.identity-title { fill: var(--c-fg); font-size: 19px; font-weight: 900; letter-spacing: 0.06em; }
.identity-copy { fill: var(--c-muted); font-size: 11px; font-weight: 800; }
.foundation { fill: var(--c-muted); font-size: 11px; font-weight: 850; }
.goals-rule { stroke: var(--c-line); stroke-width: 3; }
.goal-row { display: flex; align-items: stretch; justify-content: space-between; gap: 12px; height: 100%; }
.goal-item { display: flex; align-items: center; justify-content: center; flex: 1; padding: 0 4px 9px; border-bottom: 4px solid var(--c-accent); color: var(--c-fg); font-size: 13px; font-weight: 900; line-height: 1.15; text-align: center; letter-spacing: 0.025em; }
</style>
