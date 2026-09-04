---
clicks: 2
layout: default
---

# The skills: the know-how that made both stories run

<div class="grid grid-cols-2 gap-5 mt-2">
  <div class="panel" :class="{dim:$clicks<1}">
    <p class="label">STORY 1 · PUBLISHING</p>
    <ul>
      <li><code>portolan-bootstrap</code> — from a WFS, an Esri service, a portal or a folder to a documented, validated, published catalog</li>
      <li><code>portolan-cli</code> — init, add, check, push, sync, conversion</li>
      <li><code>portolan-thumbnails</code> — framed, checked thumbnails over a basemap</li>
      <li><code>portolan-migrate</code> — bring an existing catalog up to the spec without rebuilding it</li>
      <li><code>git-backed-catalog</code> · <code>sourcecoop</code> · <code>register-catalog</code> — versioned metadata, hosting, the registry pull request</li>
    </ul>
  </div>
  <div class="panel" :class="{dim:$clicks<2}">
    <p class="label">STORY 2 · CONSUMING</p>
    <ul>
      <li><code>reading-portolan</code> — navigate the STAC tree, query GeoParquet with DuckDB, read COGs, join across collections, report with sources</li>
      <li><code>portolan-consume</code> — explore and visualise a catalog: PMTiles, MapLibre, deck.gl</li>
      <li><code>report-catalog-issue</code> — a wrong licence or a broken link becomes an issue on the registry, from the agent</li>
    </ul>
  </div>
</div>

<div class="mt-4 takeaway">
  Plain <code>SKILL.md</code> files in the open <b>Agent Skills</b> format: the same know-how works in Claude Code, Gemini CLI and other agents. Ten skills, one repository, Apache-2.0. <b>The spec says what a good catalog is; the skills encode how to build and use one.</b>
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.8rem 1rem; background:var(--c-panel); font-size:0.8rem; transition:opacity 200ms; }
.panel ul { margin:0; padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem; }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.45rem; }
.takeaway { border-left:3px solid var(--c-portolan); padding:0.4rem 0.9rem; font-size:0.88rem; }
.dim { opacity:0.3; }
</style>

<!--
[Say] (0:45)
"One more thing the two stories relied on: skills. Portolan ships ten agent skills, plain SKILL files in the open Agent Skills format."

[Click 1]
"On the publishing side: bootstrap takes a WFS, an Esri service, a portal or a folder all the way to a documented, validated, published catalog; the CLI skill covers the day-to-day commands; thumbnails, migrate, and the skills for git-backed metadata, hosting and the registry pull request."

[Click 2]
"On the consuming side: reading-portolan is what the agent used in story two, navigating the STAC tree, querying GeoParquet with DuckDB, joining collections, reporting with sources; consume adds maps; and report-catalog-issue turns a wrong licence into an issue on the registry. The same files work in Claude Code, Gemini CLI and other agents. The spec says what a good catalog is; the skills encode how to build and use one."

[Sources]
- https://github.com/portolan-sdi/portolan-skills (ten skills, README checked 4 Sep 2026)
- https://github.com/anthropics/agent-skills (Agent Skills open format, SKILL.md)
-->
