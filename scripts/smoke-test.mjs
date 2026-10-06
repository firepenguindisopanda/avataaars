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
  const hasSvg = html.includes('<svg')
  const hasPath = html.includes('<path') || html.includes('<circle') || html.includes('<g ')
  const ok = hasSvg && hasPath && html.length > 250
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: ${html.length} bytes, svg=${hasSvg} shapes=${hasPath}`)
  if (!ok) failed++
}

console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`)
process.exit(failed === 0 ? 0 : 1)
