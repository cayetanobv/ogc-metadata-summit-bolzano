#!/usr/bin/env node
// Validate the split-file deck: order from slides.md, budget from deck.config.mjs,
// and a short list of claims this talk must not make on screen.
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DECK } from '../deck.config.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const FM = /^---\n([\s\S]*?)\n---/

const rootSource = readFileSync(join(ROOT, 'slides.md'), 'utf8')
const slideFiles = [...rootSource.matchAll(/^src:\s*\.\/(.+?)\s*$/gm)].map((m) => m[1])

export const SLIDES = slideFiles.map((file, index) => {
  const source = readFileSync(join(ROOT, file), 'utf8')
  const frontmatter = source.match(FM)?.[1] ?? ''
  return {
    n: index + 1,
    file,
    comp: source.match(/<(Viz[A-Za-z]+)\b/)?.[1] ?? null,
    clicks: Number(frontmatter.match(/^clicks:\s*(\d+)\s*$/m)?.[1] ?? 0),
    appendix: index >= DECK.mainSlides,
  }
})

// Components from the CNG Japan source deck that this talk does not use.
export const RETIRED = ['VizJapanPilot', 'VizJapanCatalog', 'VizTsukubaAnswer', 'VizBio', 'VizCover', 'VizCartoControlPlane', 'VizCartoExtensions', 'VizCartoCatalogBrowser']

// Claims the talk must not make on screen (positioning and fact-checking rules).
export const FORBIDDEN = [
  [/serverless/i, 'say "no server to operate" (VOICE.md)'],
  [/\bzero servers?\b/i, 'say "no server to operate"'],
  [/AI-first(?!\.?\s*(Agents|agents))/i, 'Portolan is AI-ready, not AI-first'],
  [/\b106\b(?![\d,.])/, 'stale validator count; regenerate from the spec requirements.yaml'],
  [/\b22\b (stay|publisher|judg)/i, 'stale process count; regenerate from the spec requirements.yaml'],
  [/registered STAC extension/i, 'not a registered extension'],
  [/GeoParquet 2\.0 (is )?released/i, 'GeoParquet 2.0 is not released'],
  [/replaces? ISO 19115|instead of ISO/i, 'Portolan does not replace ISO records'],
  [/STAC.{0,20}GeoDCAT.{0,20}(link|practice)/i, 'STAC↔GeoDCAT linking is not established practice'],
  [/CARTO\s+(SDI|platform|Builder|Workflows|product)/i, 'product names stay off the slides'],
  [/Finland|Helsinki|Espoo/i, 'retired example; the talk uses spec v0.2.0 catalogs only'],
  [/v0\.1\.[0-9]/, 'stale spec version on screen; the demo is spec v0.2.0'],
  [/SEAL-?4 (certified|achieved)/i, 'work toward, not achieved'],
  [/low flood risk/i, 'never infer flood risk from elevation alone'],
  [/cheap grid|excellent grid/i, 'favorable proximity, subject to capacity and permitting'],
]

function bodyOf(src) { return src.replace(FM, '') }
function stripNotes(s) { return s.replace(/<!--[\s\S]*?-->/g, '') }

export function checkSource(src, label, warnings = []) {
  const errors = []
  const body = bodyOf(src)
  const spoken = stripNotes(body)
  const notes = (body.match(/<!--[\s\S]*?-->/g) ?? []).join('\n')

  for (const [re, why] of FORBIDDEN) {
    const onScreen = spoken.match(re)
    if (onScreen) { errors.push(`${label}: forbidden claim on screen, "${onScreen[0]}", ${why}`); continue }
    const inNotes = notes.match(re)
    if (inNotes) warnings.push(`${label}: notes mention "${inNotes[0].replace(/\s+/g, ' ')}", ${why}`)
  }
  for (const name of RETIRED) {
    if (new RegExp(`<${name}\\b`).test(src)) errors.push(`${label}: references retired component <${name} />`)
  }
  if (!/\[Sources\]/.test(notes)) warnings.push(`${label}: speaker notes carry no [Sources] block`)
  if (/CARTO/.test(spoken) && !/cover-slide|bio-slide/.test(src)) {
    errors.push(`${label}: CARTO appears on a slide other than the cover or the bio`)
  }
  return errors
}

function checkSlide(spec, errors, warnings) {
  const path = join(ROOT, spec.file)
  if (!existsSync(path)) { errors.push(`slide ${spec.n}: missing file ${spec.file}`); return }
  errors.push(...checkSource(readFileSync(path, 'utf8'), `slide ${spec.n} (${spec.file})`, warnings))
}

const errors = []
const warnings = []
for (const spec of SLIDES) checkSlide(spec, errors, warnings)

const mainClicks = SLIDES.filter((s) => !s.appendix).reduce((a, s) => a + s.clicks, 0)
if (mainClicks > DECK.clickBudget) errors.push(`main talk uses ${mainClicks} clicks, budget is ${DECK.clickBudget}`)
if (SLIDES.length < DECK.mainSlides) errors.push(`slides.md lists ${SLIDES.length} slides, mainSlides is ${DECK.mainSlides}`)

for (const w of warnings) console.warn(`warn: ${w}`)
if (errors.length) { for (const e of errors) console.error(`error: ${e}`); process.exit(1) }
console.log(`ok: ${SLIDES.length} slides, ${mainClicks}/${DECK.clickBudget} main-talk clicks`)
