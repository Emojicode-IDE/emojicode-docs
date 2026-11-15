# Emojicode 非公式リファレンス

Emojicode を動かしながら学ぶための、非公式のリファレンスです。言語仕様は公式の [Language Reference](https://www.emojicode.org/docs/reference) にまとまっていて、このサイトはそれを補うものです。Emojicode の開発元とは関係なく、この IDE といっしょに個人で書いています。

[Emojicode](https://www.emojicode.org/) は、キーワードも演算子もほとんどが絵文字でできたプログラミング言語です。クラス、ジェネリクス、クロージャ、エラー処理をそなえた、静的型付けの言語です。

このサイトのコード例は、ページの中でそのまま実行できます。右上の **▶ 実行** を押すと実行され、**✎ 編集** で書き換えて実行すると、下の出力がその結果に変わります。

```emojicode
🏁 🍇
  😀 🔤ようこそ！🔤❗️
🍉
```

```output
ようこそ！
```

ほかに、[C++ との対応表](reference/cpp.md)、公式コンパイラで見つかっているバグとその修正のまとめ（[Emojicode言語のバグ](about/known-issues.md)・[修正済みのバグ](about/patched.md)）、LLM に読ませるための [LLM 向けドキュメント](intro/llm.md) もあります。

## 読み方

はじめての人は、[Hello World](intro/hello.md) から読み始めてください。IDE の操作は [この IDE の使い方](about/ide.md) にまとめています。

## 対応しているバージョン

この IDE に入っている Emojicode は、公式コンパイラの [`master`](https://github.com/emojicode/emojicode/tree/master)（コミット [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)）に、WebAssembly で動かすための修正を加えたものです。公式の Language Reference が対象にしている 1.0 beta 2（2020 年 2 月）より、21 コミットあとの版です。公式コンパイラで見つかっているバグは [Emojicode言語のバグ](about/known-issues.md) に、この IDE の制限は [この IDE の使い方](about/ide.md) の最後にまとめています。
