// 原稿の形を確かめる（依存なし。node scripts/check.mjs）。PR ごとに CI で動く。
// Checks the structure of the manuscripts (no dependencies). Runs on every PR.
//   - docs/（日本語）と docs/<言語>/：_toc.json の全ページがあり、目次にないページがない、最初の行が「# タイトル」
//   - ページ間の相対リンク（../basics/strings.md）が同じ言語のページを指している
//   - コードブロックの種類（```emojicode など）が、サイトのビルドが知っているものだけ
//   - ほかの言語のページは、日本語に同じ slug がある
//   - ui/<言語>.json：文字列だけ、{name} などの差し込みが原文（キー）と同じ
// コード例を実際にコンパイル・実行して出力を確かめるのは、サイトのビルド（Emojicode-IDE/emojicode-ide）で行う。
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const docs = path.join(root, 'docs');
const FENCES = new Set(['emojicode', 'output', 'stdin', 'official', 'text', 'cpp', 'keywords', 'patch', '']);
const MODES = new Set(['', 'error', 'norun']);
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const langDirs = [['ja', docs], ...fs.readdirSync(docs, { withFileTypes: true })
  .filter(d => d.isDirectory() && fs.existsSync(path.join(docs, d.name, '_toc.json')))
  .map(d => [d.name, path.join(docs, d.name)])];
const slugsOf = new Map();

for (const [lang, dir] of langDirs) {
  const rel = p => path.relative(root, p);
  let toc;
  try { toc = JSON.parse(fs.readFileSync(path.join(dir, '_toc.json'), 'utf8')); } catch (e) { err(rel(path.join(dir, '_toc.json')), `JSON として読めない (${e.message})`); continue; }
  const slugs = toc.flatMap(s => s.pages);
  slugsOf.set(lang, new Set(slugs));
  for (const s of toc) if (typeof s.title !== 'string' || !Array.isArray(s.pages)) err(rel(path.join(dir, '_toc.json')), '各節には title と pages がいる');
  // 目次にないページ（ほかの言語のディレクトリは除く）
  const otherLangs = new Set(langDirs.filter(([l]) => l !== 'ja').map(([l]) => l));
  const walk = (d, prefix = '') => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    if (e.isDirectory()) return lang === 'ja' && !prefix && otherLangs.has(e.name) ? [] : walk(path.join(d, e.name), `${prefix}${e.name}/`);
    return e.name.endsWith('.md') ? [`${prefix}${e.name.slice(0, -3)}`] : [];
  });
  for (const slug of walk(dir)) if (!slugs.includes(slug)) err(rel(path.join(dir, `${slug}.md`)), '_toc.json にない');

  for (const slug of slugs) {
    const file = path.join(dir, `${slug}.md`);
    if (!fs.existsSync(file)) { err(rel(file), '_toc.json にあるがファイルがない'); continue; }
    const src = fs.readFileSync(file, 'utf8');
    if (!/^# \S/.test(src)) err(rel(file), '最初の行は「# タイトル」');
    src.split('\n').forEach((line, i) => {
      const m = /^```(\S*)(?:\s+(\S*))?/.exec(line);
      if (!m) return;
      if (!FENCES.has(m[1])) err(`${rel(file)}:${i + 1}`, `知らないコードブロック \`\`\`${m[1]}`);
      if (m[1] === 'emojicode' && !MODES.has(m[2] ?? '')) err(`${rel(file)}:${i + 1}`, `\`\`\`emojicode のあとは error か norun だけ`);
    });
    for (const [, target] of src.matchAll(/\]\(([^)#:\s]+)\.md(?:#[^)]*)?\)/g)) {
      const to = path.posix.normalize(path.posix.join(path.posix.dirname(slug), target));
      if (!slugs.includes(to)) err(rel(file), `リンク先 ${target}.md（${to}）がこの言語の目次にない`);
    }
  }
}
for (const [lang, slugs] of slugsOf) {
  if (lang === 'ja') continue;
  for (const slug of slugs) if (!slugsOf.get('ja')?.has(slug)) err(`docs/${lang}/${slug}.md`, '日本語の原稿に同じ slug のページがない');
}

const params = s => [...s.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join();
for (const f of fs.readdirSync(path.join(root, 'ui')).filter(f => f.endsWith('.json'))) {
  let dict;
  try { dict = JSON.parse(fs.readFileSync(path.join(root, 'ui', f), 'utf8')); } catch (e) { err(`ui/${f}`, `JSON として読めない (${e.message})`); continue; }
  for (const [k, v] of Object.entries(dict)) {
    if (typeof v !== 'string') err(`ui/${f}`, `「${k}」の訳が文字列でない`);
    else if (params(k) !== params(v)) err(`ui/${f}`, `「${k}」の訳の {…} が原文と違う`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n${errors.length} 件の問題 / ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`✓ ${langDirs.map(([l]) => `${l} ${slugsOf.get(l)?.size ?? 0} pages`).join(', ')}, ui OK`);
