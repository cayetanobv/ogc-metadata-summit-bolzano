// Render every main slide at its final click state for visual QA.
// Usage: node scripts/render-slides.mjs <baseUrl> <outdir> [count]
import { chromium } from 'playwright-chromium'
const [base, out, count = '11'] = process.argv.slice(2)
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 })
for (let n = 1; n <= Number(count); n++) {
  await p.goto(`${base}/#/${n}?clicks=99`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(900)
  await p.screenshot({ path: `${out}/slide-${String(n).padStart(2, '0')}.png` })
}
await b.close()
console.log('rendered', count)
