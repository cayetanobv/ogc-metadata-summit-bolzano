---
clicks: 1
layout: default
---

# What Portolan adds, and why it is worth the world's attention

<div class="grid grid-cols-5 gap-6 mt-4">
  <div class="col-span-3">
    <p class="label">FOUR THINGS THE STANDARDS LEAVE OPEN, MADE MANDATORY</p>
    <ul class="what">
      <li><b>A quality floor you can check.</b> Spatial ordering and bbox columns in every GeoParquet, overviews in every COG, providers and license on every collection, range requests and CORS on the host. <code>rashid</code> reads the bytes, not just the JSON.</li>
      <li><b>Documentation for two audiences, at every level.</b> <code>README.md</code> for the person deciding whether to trust the data; <code>AGENTS.md</code> for the agent that needs the join key and the caveats.</li>
      <li><b>No server in the request path.</b> A folder in storage the publisher controls. Cost is storage and egress; sovereignty is structural; nothing runs after publishing.</li>
      <li><b>Federation without a central copy.</b> A registry of independently hosted catalogs, plain JSON in version control; producer, provider and host named on each.</li>
    </ul>
  </div>
  <div class="col-span-2 stat" v-click>
    <p class="label">DOES THE STATIC MODEL SCALE? FIELDS OF THE WORLD</p>
    <p class="big">369 TB</p>
    <p class="sub">published as one Portolan catalog on Source Cooperative</p>
    <p class="big">106.6 TB</p>
    <p class="sub">served in the 28 days to 27 August 2026</p>
    <p class="none">No serving layer in front of it.</p>
    <p class="src">Data: Fields of the World (fieldsofthe.world), published on Source Cooperative; figure from the Portolan launch post, 2 Sep 2026.</p>
  </div>
</div>

<style>
.label { font-family:'JetBrains Mono', monospace; font-size:0.62rem; letter-spacing:0.08em; color:var(--c-portolan); margin-bottom:0.4rem; }
.what { margin:0; padding-left:1.1rem; font-size:0.84rem; display:flex; flex-direction:column; gap:0.35rem; }
.stat .why { margin-top:auto; font-size:0.78rem; border-top:1px solid var(--c-line); padding-top:0.5rem; }
.stat { border:1px solid var(--c-portolan); border-radius:12px; padding:1rem 1.2rem; background:var(--c-panel); display:flex; flex-direction:column; }
.stat .big { font-size:1.9rem; font-weight:700; line-height:1; margin:0.3rem 0 0; color:var(--c-fg); }
.stat .sub { color:var(--c-muted); font-size:0.76rem; margin:0.15rem 0 0.3rem; }
.stat .src { font-size:0.58rem; color:var(--c-muted); margin:0.3rem 0 0; }
.stat .none { margin-top:0.2rem; font-weight:700; color:var(--c-portolan); font-size:0.85rem; }
</style>

<!--
[Say] (1:15)
"So what does Portolan add, and why should anyone outside this room care? Four things the standards leave open become mandatory. One: a quality floor you can check. Spatial ordering and bounding boxes inside every GeoParquet, overviews in every COG, providers and a license on every collection, range requests and CORS on the host; and the validator reads the bytes, not just the JSON. Two: documentation for two audiences at every level, a README for the person deciding whether to trust the data and an AGENTS file for the agent that needs the join key and the caveats. Three: no server in the request path; a catalog is a folder in storage the publisher controls, cost drops to storage and egress, sovereignty is structural, nothing runs after publishing. Four: federation without a central copy, a registry of independently hosted catalogs with producer, provider and host named on every one. Portolan is the missing agreement that lets a city and a planetary archive publish the same way."

[Click 1]
"Does a static model scale? Fields of the World publishes its global field-boundary dataset as one Portolan catalog on Source Cooperative: 369 terabytes, and it served a hundred and six terabytes in the last four weeks of August. Nothing sits in front of it. The publisher pays for storage and egress; compute belongs to whoever asks the question."

[Sources]
- https://www.portolan-sdi.org/blog/introducing-portolan (Fig. 1: 369 TB, 106.6 TB in the 28 days ending 27 Aug 2026; "What Portolan makes possible", "Built for people and agents", "Toward a federated network")
- https://github.com/portolan-sdi/portolan-ops/blob/main/copy/messaging.md ("Why Portolan?", "Common questions")
- The three shifts (economics of cloud-native formats, agents changing who can use data, sovereignty as architecture) are the framing of the 2 Sep 2026 launch commentary; facts only, no vendor cited on screen
- https://source.coop/ftw/global-data
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/formats.md
-->
