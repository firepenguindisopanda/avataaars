// Smoke test: proves the built package's `Piece` named export renders real SVG.
//
// The demo UI only exercises the default `Avatar` export, but `Piece` is what
// apps/web's /UpdateAvatar2 grid depends on, and the two fail independently --
// a broken `Piece` renders an empty grid while /profile still looks fine.
//
// Run it against a REAL tarball install, not the demo's `file:..` link. Under a
// file: link, dist/index.js resolves `react` upward from this repo rather than
// from the consumer, so you get two Reacts and a misleading "Invalid hook call".
// A published/packed install has no such problem.
//
//   npm run build && npm pack --pack-destination /tmp
//   mkdir /tmp/c && cd /tmp/c && npm init -y && npm pkg set type=module
//   npm i react@19 react-dom@19 /tmp/firepenguindisopanda-avataaars-2.5.0.tgz
//   cp <repo>/scripts/smoke-test.mjs . && node smoke-test.mjs
//
// Note: ids render as `error-*` here. That is gschoppe's deliberate SSR-safe
// placeholder (useState('error') replaced by a useEffect on the client), not a
// defect -- effects do not run under renderToStaticMarkup.
import { createElement as h } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Avatar, { Piece } from '@firepenguindisopanda/avataaars'

const cases = [
  ['Avatar', h(Avatar, { topType: 'LongHairFro', skinColor: 'Brown', clotheType: 'Hoodie' })],
  ['Piece:mouth', h(Piece, { pieceType: 'mouth', pieceSize: '100', mouthType: 'Eating' })],
  ['Piece:eyes', h(Piece, { pieceType: 'eyes', pieceSize: '100', eyeType: 'Dizzy' })],
  ['Piece:top', h(Piece, { pieceType: 'top', pieceSize: '100', topType: 'LongHairFro', hairColor: 'Red' })],
  ['Piece:clothe', h(Piece, { pieceType: 'clothe', pieceSize: '100', clotheType: 'Hoodie', clotheColor: 'Red' })],
  ['Piece:skin', h(Piece, { pieceType: 'skin', pieceSize: '100', skinColor: 'Brown' })],
]

let failed = 0
for (const [name, el] of cases) {
  let html = ''
  try {
    html = renderToStaticMarkup(el)
  } catch (err) {
    console.log(`FAIL  ${name}: threw ${err.message}`)
    failed++
    continue
  }
  // A blank or near-blank render is the actual failure mode here: a broken
  // Piece renders an empty grid rather than throwing.
  const hasSvg = html.includes('<svg')
  const hasPath = html.includes('<path') || html.includes('<circle') || html.includes('<g ')
  const ok = hasSvg && hasPath && html.length > 250
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: ${html.length} bytes, svg=${hasSvg} shapes=${hasPath}`)
  if (!ok) failed++
}

console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`)
process.exit(failed === 0 ? 0 : 1)
