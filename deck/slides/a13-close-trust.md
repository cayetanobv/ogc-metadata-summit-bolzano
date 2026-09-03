---
clicks: 2
layout: default
---

# Trust and provenance, honestly unfinished

<div class="grid grid-cols-2 gap-6 mt-3">
  <div class="panel">
    <p class="label">WHAT EXISTS TODAY</p>
    <ul>
      <li>every collection names producer, licensor, processor and host (STAC provider extension)</li>
      <li>official vs mirror is <em>derived</em> from providers; a mirror must name its producer and link back to the original</li>
      <li>the <code>source</code> role separates provenance from hosting</li>
      <li>the registry: a catalog of ~20 independently hosted catalogs, plain JSON in version control. "If the registry disappeared tomorrow, every catalog would keep working."</li>
    </ul>
  </div>
  <div class="panel open" v-click>
    <p class="label">OPEN QUESTIONS · FOR THE TESTBED ON TRUSTED DATA AND SYSTEMS</p>
    <ul>
      <li>How should authority be signalled cryptographically, not just declaratively?</li>
      <li>What does trust mean when the consumer is an agent acting unattended?</li>
      <li>How do mirrors stay verifiably faithful to their source?</li>
    </ul>
  </div>
</div>

<div class="mt-4 state" v-click>
  <div><b>Public since 2 September 2026.</b> Early adopters wanted; breaking changes still expected. First goal: ~100 reference catalogs, then a stable v1.0 CLI.</div>
  <div class="mono">portolan-sdi.org · #portolan on the Cloud-Native Geospatial Forum Slack · community call Fridays 10:00 CET</div>
</div>

<style>
.panel { border:1px solid var(--c-line); border-radius:12px; padding:0.9rem 1.1rem; background:var(--c-panel); font-size:0.84rem; }
.panel.open { border-color: var(--c-portolan); }
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.3rem; }
.panel ul { margin:0; padding-left:1.1rem; }
.state { border-top:2px solid var(--c-portolan); padding-top:0.6rem; font-size:0.86rem; display:flex; flex-direction:column; gap:0.3rem; }
.state .mono { font-family:'JetBrains Mono', monospace; font-size:0.72rem; color:var(--c-portolan); }
</style>

<!--
[Say] (1:15)
"Let me close with what we have not solved. Today every collection names who produced, licensed, processed and hosts the data. Whether a catalog is official or a mirror is derived from that, and a mirror must name its producer and link back to the original. The registry is deliberately nothing more than a catalog of independently hosted catalogs, about twenty at launch, from Overture and GHSL to national agencies in Argentina and Moldova to cities like Madrid, Utrecht and Philadelphia. If the registry disappeared tomorrow, every one of them would keep working."

[Click 1]
"Everything on the left is declarative. The open questions map straight onto the Testbed on Trusted Data and Systems. How should authority be signalled cryptographically? What does trust mean when the consumer is an agent nobody is watching? How does a mirror prove it is faithful to its source?"

[Click 2]
"Portolan has been public for five days. It is built by a group of contributors across several organisations, it wants early adopters, and it still expects breaking changes. The first goal is about a hundred reference catalogs. The community call is Fridays at ten, Central European time, and the Slack channel is open. These are the questions we would like to work on with the people in this room. Thank you."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md (Providers, Source Provenance)
- https://github.com/portolan-sdi/portolan-registry
- https://www.portolan-sdi.org/blog/introducing-portolan (registry framing, ~100 reference catalogs goal, Friday 10:00 CET meeting, #portolan channel, contributor organisations)
- https://carto.com/blog/introducing-portolan-and-carto-sdi/ (twenty catalogs at launch; mirror must name producer and link back)
-->
