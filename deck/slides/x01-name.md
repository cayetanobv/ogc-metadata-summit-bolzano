---
clicks: 1
layout: default
---

# Appendix 1 · Why "Portolan"

<div class="grid grid-cols-5 gap-6 mt-2">
  <div class="col-span-3 chart">
    <img src="/portolan-chart-1550.jpg" alt="Portolan chart of the Mediterranean and the Black Sea, Battista Agnese, 1550" />
    <p class="credit">Portolan chart of the Mediterranean and the Black Sea, Battista Agnese, 1550. Bibliothèque nationale de France, via Wikimedia Commons (public domain).</p>
  </div>
  <div class="col-span-2 text">
    <p>Portolan charts were among the earliest <b>practical</b> navigational maps: not theoretical pictures of the world but working tools, built from sailors' observations, continuously refined, and shared across ports and nations.</p>
    <ul>
      <li><b>Decentralised</b> — made and improved by many hands</li>
      <li><b>Interoperable</b> — readable wherever a ship went</li>
      <li><b>Critical infrastructure</b> — for trade, for safety, for sovereignty</li>
    </ul>
    <p class="now" :class="{dim:$clicks<1}">The project takes its name from that tradition. Practical rather than academic; built from data in open formats rather than drawings; designed for sharing across organisations, clouds and borders.</p>
  </div>
</div>

<style>
.chart img { width:100%; border-radius:10px; border:1px solid var(--c-line); display:block; }
.credit { font-size:0.62rem; color:var(--c-muted); margin:0.4rem 0 0; }
.text { font-size:0.9rem; display:flex; flex-direction:column; gap:0.6rem; }
.text p { margin:0; }
.text ul { margin:0; padding-left:1.1rem; display:flex; flex-direction:column; gap:0.3rem; }
.now { border-left:3px solid var(--c-portolan); padding-left:0.8rem; font-weight:600; transition:opacity 200ms; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (0:45)
"Portolan charts were among the earliest practical navigational maps. Not theoretical pictures of the world but working tools: built from sailors' observations, continuously refined, shared across ports and nations. Decentralised, made and improved by many hands. Interoperable, readable wherever a ship went. And critical infrastructure, for trade, for safety, for sovereignty."

[Click 1]
"The project takes its name from that tradition. Practical rather than academic. Built from data in open formats rather than drawings. Designed for sharing across organisations, clouds and borders."

[Sources]
- Launch commentary, 2 September 2026: https://carto.com/blog/introducing-portolan-and-carto-sdi/ ("A postscript on the name")
- Image: Wikimedia Commons, "1550 Portolan chart of the Mediterranean Sea and the Black Sea", Battista Agnese; Bibliothèque nationale de France; public domain
-->
