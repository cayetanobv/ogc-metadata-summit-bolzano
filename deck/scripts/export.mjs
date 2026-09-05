#!/usr/bin/env node
// Export the deck as PDF: ../export/ogc-metadata-summit-2026.pdf, one page per slide, clicks collapsed, dark appearance.
import { spawnSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { DECK } from '../deck.config.mjs'

mkdirSync(dirname(DECK.exportFile), { recursive: true })
const cli = ['exec', 'slidev', 'export', '--format', 'pdf', '--output', DECK.exportFile, '--wait', '1500', '--timeout', '90000', '--per-slide', '--with-clicks=false', '--dark']
const result = spawnSync('pnpm', cli, { stdio: 'inherit', env: { ...process.env, VITE_DECK_LOCALE: 'en' } })
process.exit(result.status ?? 1)
