---
clicks: 1
layout: default
---

# Honestly unfinished: trust and provenance

<div class="qs mt-6">
  <div class="q"><lucide-badge-check class="ic" /><p>How should <b>authority</b> be signalled cryptographically, not just declared in a providers list?</p></div>
  <div class="q"><lucide-bot class="ic" /><p>What does <b>trust</b> mean when the consumer is an agent acting unattended?</p></div>
  <div class="q"><lucide-git-fork class="ic" /><p>How does a <b>mirror</b> stay verifiably faithful to its source?</p></div>
</div>

<p class="muted">Today: every collection names producer, licensor, processor and host; official or mirror is derived from that; a registry of ~20 independently hosted catalogs, plain JSON in git. All declarative. The questions above map onto the OGC Testbed on Trusted Data and Systems.</p>

<div class="state" :class="{dim:$clicks<1}">
  <div><b>Public since 2 September 2026.</b> Early adopters wanted; breaking changes still expected. First goal: ~100 reference catalogs, then a stable v1.0 CLI.</div>
  <div class="mono">portolan-sdi.org · #portolan on the Cloud-Native Geospatial Forum Slack · community call Fridays 10:00 CET · demo desk at the coffee breaks</div>
</div>

<style>
.qs { display:grid; grid-template-columns:repeat(3, 1fr); gap:0.7rem; }
.q { border:1px solid var(--c-portolan); border-radius:12px; padding:1.2rem 1.2rem; background:var(--c-panel); display:flex; flex-direction:column; gap:0.7rem; font-size:1.05rem; }
.q .ic { width:1.9rem; height:1.9rem; color:var(--c-portolan); }
.q p { margin:0; line-height:1.35; }
.muted { color:var(--c-muted); font-size:0.86rem; margin-top:1.2rem; max-width:60ch; }
.state { margin-top:auto; border-top:2px solid var(--c-portolan); padding-top:0.6rem; font-size:0.9rem; display:flex; flex-direction:column; gap:0.3rem; transition:opacity 200ms; }
.state .mono { font-family:'JetBrains Mono', monospace; font-size:0.7rem; color:var(--c-portolan); }
.dim { opacity:0.25; }
</style>

<!--
[Say] (0:45)
"Let me close with what we have not solved. Today every collection names who produced, licensed, processed and hosts the data; whether a catalog is official or a mirror is derived from that; and the registry is nothing more than a catalog of about twenty independently hosted catalogs. If it disappeared tomorrow, every one of them would keep working. All of that is declarative. So three open questions, and they map straight onto the Testbed on Trusted Data and Systems: how should authority be signalled cryptographically? What does trust mean when the consumer is an agent nobody is watching? And how does a mirror prove it is faithful to its source?"

[Click 1]
"Portolan has been public for five days. It is built by contributors across several organisations, it wants early adopters, and it still expects breaking changes. The first goal is about a hundred reference catalogs. The community call is Fridays at ten, Central European time, the Slack channel is open, and I am at the demo desk during the coffee breaks. These are the questions we would like to work on with the people in this room. Thank you."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md (Providers, Source Provenance)
- https://github.com/portolan-sdi/portolan-registry
- https://www.portolan-sdi.org/blog/introducing-portolan (registry framing, ~100 reference catalogs goal, Friday 10:00 CET meeting, #portolan channel, contributor organisations)
- https://carto.com/blog/introducing-portolan-and-carto-sdi/ (twenty catalogs at launch; mirror must name producer and link back)
-->
