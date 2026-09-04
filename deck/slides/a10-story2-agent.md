---
clicks: 2
layout: default
---

# Story 2 · Then an agent was asked a question no single layer answers

<div class="grid grid-cols-5 gap-5 mt-2">
  <div class="col-span-3 answer">
    <p class="q">"Which hospitals and pharmacies in South Tyrol sit inside high or very-high hydraulic hazard zones of the approved hazard-zone plans, and how many residents live in those municipalities?"</p>
    <div class="cards" :class="{dim:$clicks<1}">
      <div class="card"><b>4 of 17</b><span>hospitals inside H3/H4 zones · Bolzano, Bressanone, Brunico, Ortisei</span></div>
      <div class="card"><b>31 of 158</b><span>pharmacies inside H3/H4 zones · Merano 3, Bolzano 2, Bressanone 2, Brunico 2 …</span></div>
      <div class="card"><b>108 of 116</b><span>municipalities with an approved hydraulic hazard plan · 536,933 residents in the province</span></div>
    </div>
    <div class="caveats" :class="{dim:$clicks<2}">
      <p class="label">STATED BY THE AGENT, BECAUSE THE PUBLISHER WROTE IT DOWN</p>
      <p>Points are locations, not service catchments. Hazard classes are planning zones, not event forecasts. Eight municipalities have no approved plan yet. Producer: Autonomous Province of Bolzano – South Tyrol · CC0-1.0 · query attached.</p>
    </div>
  </div>
  <div class="col-span-2 side">
    <p class="label">WHAT IT HAD TO WORK WITH</p>
    <ul>
      <li>69 collections in 11 themes, <code>AGENTS.md</code> at every level</li>
      <li>the join key <code>ISTAT_CODE</code>, the CRS, the H2–H4 class strings, the caveats</li>
      <li>GeoParquet with bbox columns, read in place with DuckDB</li>
      <li>the <code>reading-portolan</code> skill: how to navigate, query, join and report</li>
    </ul>
    <p class="label mt-3">WHAT IT DID NOT HAVE</p>
    <ul>
      <li>a server, an API, credentials, or a person in the loop</li>
    </ul>
    <p class="muted mt-3">A screening, not a risk assessment. The same catalog answers the next question tomorrow.</p>
  </div>
</div>

<p class="attrib">Data: Provincia Autonoma di Bolzano – Alto Adige — Comuni · Popolazione ufficiale · Piani delle zone di pericolo: pericoli idraulici · Ospedali · Farmacie — CC0 1.0, data.civis.bz.it. Run on a community mirror; a screening, not an official assessment.</p>

<style>
.attrib { margin-top:auto; font-size:0.68rem; color:var(--c-muted); }
.label { font-family:'JetBrains Mono', monospace; font-size:0.6rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.25rem; }
.answer { display:flex; flex-direction:column; gap:0.7rem; }
.answer .q { font-style:italic; font-size:0.95rem; margin:0; border-left:3px solid var(--c-portolan); padding-left:0.8rem; }
.cards { display:grid; grid-template-columns: repeat(3, 1fr); gap:0.5rem; transition:opacity 200ms; }
.card { border:1px solid var(--c-line); border-radius:10px; padding:0.6rem 0.7rem; background:var(--c-panel); display:flex; flex-direction:column; gap:0.25rem; }
.card b { font-size:1.6rem; line-height:1; }
.card span { font-size:0.7rem; color:var(--c-muted); line-height:1.3; }
.caveats { border:1px solid var(--c-portolan); border-radius:10px; padding:0.6rem 0.8rem; background:var(--c-portolan-soft); font-size:0.82rem; transition:opacity 200ms; }
.caveats p { margin:0; }
.side { font-size:0.84rem; }
.side ul { margin:0; padding-left:1.1rem; }
.side p { margin:0; }
.muted { color:var(--c-muted); font-size:0.8rem; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (1:15)
"Second story, same catalog, the next day. Out of 69 collections, an agent was asked a question no single layer answers: which hospitals and pharmacies sit inside high or very-high hydraulic hazard zones, and how many residents live in those municipalities. Nobody guided it."

[Click 1]
"Four of seventeen hospitals, in Bolzano, Bressanone, Brunico and Ortisei. Thirty-one of a hundred and fifty-eight pharmacies. A hundred and eight of the hundred and sixteen municipalities have an approved plan. The agent joined five collections on the ISTAT code, filtered the hazard classes by the strings the AGENTS file told it about, and ran the intersection in DuckDB against the GeoParquet in place."

[Click 2]
"And it said what the numbers do not mean, because the publisher wrote it down: points are locations, not catchments; hazard classes are planning zones, not forecasts; eight municipalities have no approved plan yet. Producer, license and the query came attached. This is a screening, not a risk assessment. But look at what it did not have: a server, an API, credentials, or a person in the loop. The same catalog answers the next question tomorrow."

[Sources]
- https://github.com/portolan-sdi/portolan-skills/tree/main/skills/reading-portolan
-->
