import { isDark } from '@slidev/client/logic/dark.ts'

// Dark is the starting appearance, but only as a preference: the toolbar toggle still switches to light,
// and a viewer's choice is remembered in this browser. A fixed `colorSchema` would hide the toggle.
// The marker key makes this a one-time default; Slidev's own key holds the viewer's later choice.
const MARKER = 'ogc-bolzano-deck-appearance-initialised'

export default function setup() {
  if (typeof window === 'undefined') return
  try {
    if (window.localStorage.getItem(MARKER) === null) {
      isDark.value = true
      window.localStorage.setItem(MARKER, '1')
    }
  } catch {
    isDark.value = true
  }
}
