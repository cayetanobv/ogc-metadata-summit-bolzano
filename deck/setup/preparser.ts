import { definePreparserSetup } from '@slidev/types'

// The speaking script does not travel with the published deck. `slidev build`
// writes every note into the client bundle, where a reader of the page source
// finds the full script. This drops the note at build time only.
//
// `slidev` (dev) and `slidev export` keep the notes, so rehearsal in the
// presenter view still shows them, the exported PDF is unchanged, and
// `pnpm validate` still reads them from the source markdown. The markdown in
// `slides/` is not touched.
export default definePreparserSetup(({ mode }) => {
  if (mode !== 'build') return []
  return [
    {
      name: 'strip-speaker-notes',
      transformNote: async () => '',
    },
  ]
})
