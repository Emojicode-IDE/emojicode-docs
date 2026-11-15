# 貢献のしかた / Contributing

ありがとうございます！ 誤字の修正から翻訳まで、どんな Pull Request も歓迎します。
Thank you! Every pull request is welcome, from typo fixes to translations.

## 原稿の書き方 / Writing manuscripts

- 1 行目はページのタイトル（`# タイトル`）。目次は `docs/_toc.json`（ほかの言語は `docs/<lang>/_toc.json`）。
  The first line is the page title (`# Title`). The table of contents is `docs/_toc.json` (`docs/<lang>/_toc.json` for other languages).
- ほかのページへのリンクは相対パスで書きます（`[文字列](../basics/strings.md)`）。
  Link to other pages with relative paths (`[Strings](../basics/strings.md)`).
- コードブロックの種類 / Code block kinds:

| 書き方 / Fence | 意味 / Meaning |
|---|---|
| ` ```emojicode ` | 実行できる例。サイトのビルド時に実際にコンパイル・実行され、直後の ` ```output ` と出力が完全に一致する必要があります / A runnable example. It is compiled and run when the site is built, and its output must exactly match the following ` ```output ` |
| ` ```output [見出し] ` | 期待する出力 / The expected output |
| ` ```stdin ` | その例に渡す標準入力（` ```emojicode ` と ` ```output ` の間）/ Standard input for the example (between ` ```emojicode ` and ` ```output `) |
| ` ```emojicode error ` | コンパイルエラーになる例（直後の ` ```text ` はエラーメッセージの一部）/ An example that must fail to compile (a following ` ```text ` is part of the error message) |
| ` ```emojicode norun ` | 断片（実行しない）/ A fragment (not run) |
| ` ```official ` | 公式コンパイラでの実行結果（固定）/ Output of the official compiler (fixed) |
| ` ```cpp ` | C++ での書き方 / The C++ equivalent |
| ` ```copy 見出し ` | コピーのボタンつきの枠（URL やプロンプトなど）/ A box with a copy button (URLs, prompts, etc.) |
| ` ```copyfile パス ` | そのファイルの中身をコピーするボタン（中身はボタンの文字）/ A button that copies the file's contents (the block's content is the button label) |
| ` ```keywords ` | 表示しない検索用の言い換え（1 行に 1 つ）/ Hidden search synonyms (one per line) |

`::: cards` の行と `:::` の行で囲んだ範囲は、h2 の節ごとにカードとして並びます。カードには見出しと最初の段落が出て、押すとその節の全体が右から出てきます。節が多くて長いページ（[修正済みのバグ](docs/about/patched.md) など）で使います。
Lines between `::: cards` and `:::` are shown as cards, one per h2 section. Each card shows the heading and the first paragraph, and tapping it slides the whole section in from the right. Use it on long pages with many sections (such as [Fixed Bugs](docs/en/about/patched.md)).

```markdown
::: cards

## 見出し / Heading

最初の段落はカードにも出る。/ The first paragraph also appears on the card.

## 次の見出し / Next heading

:::
```

コード例の出力は、[IDE](https://emojicode-ide.com/) で実行して確かめられます。
You can check the output of a code example by running it in the [IDE](https://emojicode-ide.com/).

## 翻訳 / Translating

- 日本語の原稿が原文です。訳は `docs/<lang>/` に同じ slug（同じパス）で置きます。
  The Japanese manuscripts are the originals. Put translations in `docs/<lang>/` with the same slug (same path).
- 原文の構成・段落・注意書きをそのまま保ってください。技術的な内容を足したり削ったりしないでください。
  Keep the original structure, paragraphs and caveats. Please don't add or drop technical content.
- コード例は、文字列（🔤…🔤）とコメント（💭）だけを訳し、` ```output ` などをそれに合わせて直します。
  In code examples, translate only strings (🔤…🔤) and comments (💭), and update ` ```output ` etc. to match.
- 画面の文言は `ui/<lang>.json` です。キーは日本語の原文で、`{name}` などの差し込みはそのまま残します。
  UI strings live in `ui/<lang>.json`. Keys are the original Japanese strings; keep placeholders like `{name}` as they are.
- 新しい言語を始めたいときは、まず Issue で相談してください（サイト側の設定も必要です）。
  If you want to start a new language, please open an issue first (the site needs some setup too).

## チェック / Checks

PR では `node scripts/check.mjs` が動き、目次・リンク・コードブロックの種類・`ui/*.json` の形を確かめます。コード例の実行結果は、マージ後のサイトのビルドで確かめます。
Each PR runs `node scripts/check.mjs`, which checks the table of contents, links, code block kinds, and the shape of `ui/*.json`. The output of code examples is verified by the site build after merging.

## ライセンス / License

Pull Request を送ると、その内容を [LICENSE.md](LICENSE.md) のライセンス（文章は CC BY-SA 4.0、コード例は CC0 1.0）で提供することに同意したものとします。
By submitting a pull request, you agree to license your contribution under the licenses in [LICENSE.md](LICENSE.md) (CC BY-SA 4.0 for prose, CC0 1.0 for code examples).
