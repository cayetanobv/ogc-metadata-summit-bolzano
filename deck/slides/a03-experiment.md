---
clicks: 1
layout: default
---

# Everyone says metadata should be AI-ready. We tried to find out what that means.

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="panel">
    <p class="label">THE QUESTION</p>
    <p>What does "AI-ready metadata" mean <em>operationally</em>, for a metadata producer, on a Monday morning?</p>
    <p class="muted">Not a definition. A set of requirements a machine can check and a publisher can meet.</p>
  </div>
  <div class="panel" v-click>
    <p class="label">THE EXPERIMENT · PUBLIC SINCE 2 SEPTEMBER 2026</p>
    <ul>
      <li>a specification, STAC 1.1 at its core</li>
      <li>a validator (<code>rashid</code>) and a grader</li>
      <li>a CLI that builds catalogs from files and services</li>
      <li>a registry: a catalog of independently hosted catalogs</li>
      <li>real catalogs, from a city to a planetary archive</li>
    </ul>
    <p class="muted">What follows is what worked, and what surprised us.</p>
  </div>
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:1rem 1.2rem; background:var(--c-panel); }
.panel .label { font-family:'JetBrains Mono', monospace; font-size:0.65rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.4rem; }
.panel .muted { color:var(--c-muted); font-size:0.85rem; margin-top:0.6rem; }
.panel ul { margin:0; padding-left:1.1rem; }
</style>

<!--
[Say] (0:35)
"The phrase AI-ready metadata is everywhere. Few people say what it means when you actually have to publish a dataset on a Monday morning. We tried to answer it by building instead of defining."

[Click 1]
"A spec, a validator, a CLI, a registry, and real catalogs. Portolan went public last Wednesday, the second of September, after a year of building in the open. So this is a success story with the scars still visible: what worked, and what surprised us."

[Sources]
- https://www.portolan-sdi.org/blog/introducing-portolan
- https://github.com/portolan-sdi/portolan-spec
- https://github.com/portolan-sdi/rashid
- https://github.com/portolan-sdi/portolan-cli
- https://github.com/portolan-sdi/portolan-registry
-->
