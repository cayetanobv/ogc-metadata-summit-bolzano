---
clicks: 3
layout: default
---

# Where the metadata comes from: measured, harvested, asserted

<VizMetadataSources />

<!--
[Say] (0:50)
"Before the second story, one slide on where all that metadata actually came from, because this is the part metadata maintainers ask about. Two things reach the record: what the publisher declares in a YAML file, and what the tool measures from the data. And a third kind of value gets into the YAML by a shortcut."

[Click 1]
"Measured, in green: what the tool reads from the file itself. Extent, coordinate system, row count, columns and types, checksums. Re-read on every run, so the record cannot drift from the data. Harvested, in orange: what the source already published. Abstract, keywords, the dataset page, pulled from the WFS and the portal by portolan extract, or drafted by an agent. It is written into the collection's YAML for review, never straight into the record; where the service had nothing, the tool writes a TODO marker, so the reviewer opens a checklist and not a blank. Asserted, in blue: what only the publisher can say. Who is accountable, the licence, the providers, the known issues."

[Click 2]
"And the declared part is written once. Every level of the tree carries a metadata file; a child inherits everything from its ancestors. Eighty-one files in this catalog; one of them carries the licence, the contact and the providers for all sixty-nine collections. Only title and description stay local."

[Click 3]
"portolan add merges the YAML tree and the measurements into the STAC record, the README and the AGENTS file. So the working rule is: drafted by a tool, approved by a person, gated by the validator in CI on every push. Drafting is where tools help. The reading and the accountability stay human."

[Sources]
- https://github.com/cayetanobv/south-tyrol-geodata-portolan-mirror (81 metadata.yaml files, 11 themes, 69 collections; CI runs rashid check on every push; counted 4 Sep 2026)
- https://cli.portolan-sdi.org/ (portolan add, portolan extract, metadata.yaml inheritance, --merge-strategy smart; portolan-cli 0.8.0)
- https://github.com/portolan-sdi/portolan-spec/blob/main/specs/portolan/core.md
- Portolan AI policy: "drafting is where tools help; the reading and the accountability stay human"
-->
