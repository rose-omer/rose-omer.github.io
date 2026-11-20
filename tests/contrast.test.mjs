// Tasarım tokenlerinin WCAG AA kontrastını denetler (açık ve koyu tema).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

/** Bir CSS bloğundaki `--ad: #hex` tanımlarını okur. */
function tokens(block) {
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1], m[2]]));
}

const light = tokens(css.slice(css.indexOf(':root {'), css.indexOf('}', css.indexOf(':root {'))));
const darkStart = css.indexOf(":root[data-theme='dark'] {");
const dark = { ...light, ...tokens(css.slice(darkStart, css.indexOf('}', darkStart))) };

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function ratio(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

// [ön plan, arka plan, en düşük oran]
const pairs = [
  ['ink', 'paper', 4.5],
  ['ink', 'surface', 4.5],
  ['ink', 'tag-bg', 4.5],
  ['muted', 'paper', 4.5],
  ['muted', 'surface', 4.5],
  ['muted', 'sunk', 4.5],
  ['accent', 'paper', 4.5],
  ['accent', 'surface', 4.5],
  ['accent-ink', 'accent', 4.5],
  ['paper', 'ink', 4.5],
  ['box', 'paper', 3], // metin dışı öğe (çerçeve, kutu): 3:1
  ['box', 'surface', 3],
];

for (const [name, theme] of [
  ['açık', light],
  ['koyu', dark],
]) {
  test(`${name} tema token kontrastı WCAG AA`, () => {
    for (const [fg, bg, min] of pairs) {
      assert.ok(theme[fg] && theme[bg], `${fg} ya da ${bg} tokeni yok`);
      const r = ratio(theme[fg], theme[bg]);
      assert.ok(r >= min, `${name}: --${fg} / --${bg} = ${r.toFixed(2)} (en az ${min})`);
    }
  });
}

test('koyu tema medya sorgusu ve data-theme bloğu aynı değerleri taşır', () => {
  const mStart = css.indexOf(":root:not([data-theme='light']) {");
  const media = tokens(css.slice(mStart, css.indexOf('}', mStart)));
  const explicit = tokens(css.slice(darkStart, css.indexOf('}', darkStart)));
  assert.deepEqual(media, explicit);
});
