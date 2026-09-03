---
clicks: 3
layout: default
---

# Lesson 2 of 3 · Two audiences, two files, one subject

<VizLayout />

<div class="bi">
  <span class="en"><code>README.md</code> helps a person decide whether to trust the data. <code>AGENTS.md</code> helps an agent that already committed to using it get the query right the first time. Both generated from one source.</span>
</div>

<!--
[Say] (1:00)
"Second lesson. Every catalog and collection carries two documents, and the spec requires both. The README is for the person deciding whether to trust the data. AGENTS dot md is for the agent that has already decided and now needs to get the query right on the first try. Same subject, different job."

[Click 1]
"Software reads collection dot json: structure, links, extents, providers."

[Click 2]
"People read the README: what it is, where it came from, the license, a schema table."

[Click 3]
"Agents read AGENTS dot md: the join key, the CRS, the sentinel values, a working query. A schema table orients a reader. Naming the join key saves an agent a failed query. Duplication between the two is fine. Drift is not, so both are generated from one source of truth, and the validator checks that they exist at every level."

[Sources]
- https://github.com/portolan-sdi/portolan-spec/tree/main/examples/catalog/portolan-reference/boundaries/netherlands-provinces
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md
- https://www.portolan-sdi.org/blog/introducing-portolan ("All Portolan catalogs must include READMEs and AGENTS.md files")
-->
