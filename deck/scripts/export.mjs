#!/usr/bin/env node
// Export the deck. Usage: node scripts/export.mjs [pdf|pptx] [clicks]
//   pdf  → dist/ogc-metadata-summit-2026.pdf   (one page per slide, clicks collapsed)
//   pptx → dist/ogc-metadata-summit-2026.pptx  (Slidev renders each slide to an image and places it on a 16:9 page;
//          speaker notes are written into the PowerPoint notes pane so the presenter view still works)
import { spawnSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { DECK } from '../deck.config.mjs'

const args = process.argv.slice(2)
const format = args.includes('pptx') ? 'pptx' : 'pdf'
const output = format === 'pptx' ? (args.includes('clicks') ? DECK.exportPptx.replace(/\.pptx$/, '-with-clicks.pptx') : DECK.exportPptx) : DECK.exportFile

mkdirSync(dirname(output), { recursive: true })

const cli = ['exec', 'slidev', 'export', '--format', format, '--output', output, '--wait', '1500', '--timeout', '90000']
if (format === 'pdf') cli.push('--per-slide')
// Slidev's PPTX export turns click states on by default; state it explicitly either way.
cli.push(args.includes('clicks') ? '--with-clicks=true' : '--with-clicks=false')   // 51 pages vs 18

const result = spawnSync('pnpm', cli, { stdio: 'inherit', env: { ...process.env, VITE_DECK_LOCALE: 'en' } })
process.exit(result.status ?? 1)
