# エラー処理

## エラーを投げるかもしれないメソッド（🚧）

戻り値の後ろに `🚧 エラーの型` と書いたメソッドは、エラーを投げることがあります。エラーの型には、標準ライブラリの `🚧`（メッセージを持つエラー）が使えます。エラーは `🚨` で投げます。

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤0 で割ろうとした🔤❗️
    🍉
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  🆗 result 🍰🐇🧮 10 2❗️ 🍇
    😀 🔡 result❗️❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉

  🆗 result 🍰🐇🧮 1 0❗️ 🍇
    😀 🔡 result❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤エラー: 🧲💬 error❗️🧲🔤❗️
  🍉
🍉
```

```output
5
エラー: 0 で割ろうとした
```

`🚧🚧` は「`🚧` 型のエラーを投げることがある」という意味です（1 つ目の `🚧` が目印、2 つ目がエラーの型）。

```keywords
throw
例外
exception
エラー
error
raise
```

## 受け止める（🆗 / 🙅）

`🆗 名前 呼び出し 🍇 … 🍉 🙅 エラーの名前 🍇 … 🍉` で、成功したときと、エラーになったときの処理を分けます。上の例のように、エラーのメッセージは `💬 エラー❗️` で取り出せます。

エラーを投げるかもしれないメソッドを、受け止めずにそのまま呼ぶことはできません。

```emojicode error
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  😀 🔡 🍰🐇🧮 10 2❗️❗️❗️
🍉
```

```keywords
try
catch
try-catch
例外処理
エラーを受け止める
```

## 呼び出し元に任せる（🔺）

エラーを投げるメソッドの中では、`🔺` をつけて呼ぶと、エラーをそのまま呼び出し元に投げ直せます。

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤0 で割ろうとした🔤❗️
    🍉
    ↩️ a ➗ b
  🍉

  🐇❗️ 📊 total 🔢 count 🔢 ➡️ 🔡 🚧🚧 🍇
    🔺🍰🐇🧮 total count❗️ ➡️ average
    ↩️ 🔤平均 🧲🔡 average❗️🧲🔤
  🍉
🍉

🏁 🍇
  🆗 text 📊🐇🧮 0 0❗️ 🍇
    😀 text❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
0 で割ろうとした
```

```keywords
rethrow
再送出
伝播
throws
```

## 必ず成功するとわかっているとき（🍺）

`🍺` をつけて呼ぶと、エラーを受け止めずに結果だけを取り出します。**エラーになったら、プログラムはそこで止まります。**

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤0 で割ろうとした🔤❗️
    🍉
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  😀 🔡 🍺🍰🐇🧮 9 3❗️❗️❗️
🍉
```

```output
3
```

## エラーを投げるかもしれない初期化子

初期化子にも、引数の後ろに `🚧 エラーの型` を書けます。値を確かめて、使えない値ならインスタンスを作らずにエラーを投げる、という書き方ができます。

呼ぶ側は、メソッドと同じように `🆗`・`🔺`・`🍺` のどれかで受け止めます。

```emojicode
🐇 🎫 🍇
  🖍🆕 number 🔢

  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🚨🆕🚧 🔤番号は 1 以上🔤❗️
    🍉
    n ➡️ 🖍number
  🍉

  ❗️ 📛 ➡️ 🔢 🍇
    ↩️ number
  🍉
🍉

🐇 🏪 🍇
  🐇❗️ 🎟 n 🔢 ➡️ 🔡 🚧🚧 🍇
    🔺🆕🎫 n❗️ ➡️ ticket
    ↩️ 🔤券 🧲🔡 📛 ticket❗️❗️🧲🔤
  🍉
🍉

🏁 🍇
  🆗 ticket 🆕🎫 3❗️ 🍇
    😀 🔡 📛 ticket❗️❗️❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉

  🆗 ticket 🆕🎫 0❗️ 🍇
    😀 🔡 📛 ticket❗️❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤エラー: 🧲💬 error❗️🧲🔤❗️
  🍉

  🍺🆕🎫 7❗️ ➡️ seven
  😀 🔡 📛 seven❗️❗️❗️

  🆗 text 🎟🐇🏪 0❗️ 🍇
    😀 text❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
3
エラー: 番号は 1 以上
7
番号は 1 以上
```

受け止めずに呼ぶと、`Call can raise s🚧 but error is not handled.` というエラーになります。

```emojicode error
🐇 🎫 🍇
  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🚨🆕🚧 🔤番号は 1 以上🔤❗️
    🍉
  🍉
🍉

🏁 🍇
  🆕🎫 3❗️ ➡️ ticket
🍉
```

```text
but error is not handled.
```

エラーを投げるかもしれない初期化子を持てるのはクラスだけです。値型（`🕊`）の初期化子に `🚧` を書くと、`Only classes can have error-prone initializers.` というエラーになります。

エラーを投げると、それまでに値を入れたインスタンス変数は片付けられます。そのため、`🚨` の時点で、どのインスタンス変数も「どの道筋でも入っている」か「どの道筋でも入っていない」かのどちらかでなければなりません。条件によって入ったり入らなかったりする変数があると、コンパイルエラーになります。

```emojicode error
🐇 🎫 🍇
  🖍🆕 a 🔡
  🖍🆕 b 🔡
  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🔤A🔤 ➡️ 🖍a
    🍉
    🚨🆕🚧 🔤x🔤❗️
  🍉
🍉

🏁 🍇
🍉
```

```text
Initialization cannot be aborted: Variable a must either be initialized on all paths or not at all.
```

```keywords
失敗する初期化子
failable initializer
throwing initializer
init throws
コンストラクタの例外
constructor exception
```

### 親の初期化子がエラーを投げるとき

子クラスの初期化子から、エラーを投げるかもしれない親の初期化子を `⤴️🆕 …❗️` で呼ぶときは、`🔺` も `🆗` も書きません。親がエラーを投げると、子の初期化子はそこで止まり、同じエラーがそのまま子の初期化子を呼んだ側に届きます。そのため、子の初期化子にも `🚧` が要ります。

親と子のどちらの初期化子で値を入れたインスタンス変数も片付けられますが、まだできあがっていないインスタンスなので、親の `♻️` も子の `♻️` も実行されません。

```emojicode
🐇 🏷 🍇
  🖍🆕 text 🔡
  🆕 🍼 text 🔡 🍇🍉
  ♻️ 🍇
    😀 🔤🧲text🧲 を片付けた🔤❗️
  🍉
🍉

🐇 🐾 🍇
  🖍🆕 name 🏷
  🆕 n 🔡 🚧🚧 🍇
    🆕🏷 🔤親の名札🔤❗️ ➡️ 🖍name
    ↪️ n 🙌 🔤🔤 🍇
      🚨🆕🚧 🔤名前が空🔤❗️
    🍉
  🍉
  ♻️ 🍇
    😀 🔤🐾 の ♻️🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  🖍🆕 tag 🏷
  🆕 n 🔡 🚧🚧 🍇
    🆕🏷 🔤子の名札🔤❗️ ➡️ 🖍tag
    ⤴️🆕 n❗️
    😀 🔤子の初期化子の続き🔤❗️
  🍉
  ♻️ 🍇
    😀 🔤🐕 の ♻️🔤❗️
  🍉
🍉

🏁 🍇
  🆗 dog 🆕🐕 🔤🔤❗️ 🍇
    😀 🔤できた🔤❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
親の名札 を片付けた
子の名札 を片付けた
名前が空
```

子の初期化子に `🚧` がないと、`Cannot call an error-prone super initializer in a non error-prone initializer.` というエラーになります。

```emojicode error
🐇 🐾 🍇
  🆕 🚧🚧 🍇🍉
🍉

🐇 🐕 🐾 🍇
  🆕 🍇
    ⤴️🆕❗️
  🍉
🍉

🏁 🍇
🍉
```

```text
Cannot call an error-prone super initializer in a non error-prone initializer.
```

子の初期化子のエラーの型は、親が投げるエラーを受け入れられる型でなければなりません。親が `🚧` を投げるのに、子が `🚧` を継承した別のクラスだけを投げると宣言すると、`Super initializer may raise s🚧 which cannot be reraised from this initializer as it is not compatible to _⚡.` のようなエラーになります。`⤴️🆕` の前に `🔺` を書くと `Provided value is not an error-prone call.` というエラーになります。

子クラスが初期化子を書かずに親の初期化子をそのまま受け継ぐときは、エラーを投げることもそのまま受け継がれ、`🆕子❗️` を呼ぶ側で受け止めます。

```keywords
super
親の初期化子
super initializer
継承
⤴️
```
