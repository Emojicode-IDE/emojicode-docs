# Emojicode言語のバグ

Emojicode の公式コンパイラ（[`master`](https://github.com/emojicode/emojicode/tree/master)、コミット [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)）で見つかっているバグのうち、まだ修正されていないものです。この IDE のコンパイラも同じ動きをします。

この IDE で修正パッチが当たっているものは [修正済みのバグ](patched.md) にあります。

## 実数を文字列にすると、四捨五入されずに切り捨てられる

`🔡 実数 桁数❗️` は、指定した桁より下を切り捨てます。さらに、実数の誤差のせいで、思ったより 1 小さい値になることがあります。

```emojicode
🏁 🍇
  😀 🔡 3.05 2❗️❗️
  😀 🔡 3.14159❗️❗️
🍉
```

```output
3.04
3.141589
```

正しくは `3.05`、`3.141590` です。桁数を省いた `🔡 実数❗️` は小数点以下 6 桁なので、同じことが起きます。

```keywords
実数
小数
丸め
四捨五入
切り捨て
誤差
```

## `📦 files` の `📤` `📥` `📯` が使えない

`files` パッケージには、標準出力・標準入力・標準エラーを表す `📤` `📥` `📯` が宣言されていますが、中身が実装されていません。使うとリンクエラーになります。

```keywords
files
stdout
stdin
stderr
リンクエラー
```

## 新しめの絵文字を名前に使えない

コンパイラが知っている絵文字の一覧が古いため、`🟢` `🟡` のような比較的新しい絵文字は、型やメソッドの名前に使えません。`Expected Identifier` というコンパイルエラーになります。

```emojicode error
🔘 🚦 🍇
  🆕▶️🔴
  🆕▶️🟢
🍉

🏁 🍇
  🆕🚦▶️🔴❗️ ➡️ light
🍉
```

```text
Expected Identifier
```

```keywords
絵文字
識別子
名前
Expected Identifier
Unicode
```
