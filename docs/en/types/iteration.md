# Iterating Your Own Types with 🔂

You can loop with `🔂` over any type that conforms to the protocol `🔂`. Lists and ranges (`⏩`) do. Your own types can be looped over with `🔂` too, if they conform to this protocol.

| Protocol | Methods to provide |
|---|---|
| `🔂🐚Element🍆` | `❗️ 🍡 ➡️ 🍡🐚Element🍆`: returns an iterator |
| `🍡🐚Element🍆` | `❓ 🔽 ➡️ 👌`: whether there is a next element / `❗️ 🔽 ➡️ Element`: the next element |

```emojicode
🐇 🎢 🍇
  🐊 🍡🐚🔢🍆
  🖍🆕 current 🔢
  🖍🆕 last 🔢

  🆕 🍼 current 🔢 🍼 last 🔢 🍇🍉

  ❓ 🔽 ➡️ 👌 🍇
    ↩️ current ◀️🙌 last
  🍉

  ❗️ 🔽 ➡️ 🔢 🍇
    current ➡️ value
    current ⬅️✖️ 2
    ↩️ value
  🍉
🍉

🐇 📈 🍇
  🐊 🔂🐚🔢🍆
  🖍🆕 limit 🔢
  🆕 🍼 limit 🔢 🍇🍉

  ❗️ 🍡 ➡️ 🍡🐚🔢🍆 🍇
    ↩️ 🆕🎢 1 limit❗️
  🍉
🍉

🏁 🍇
  🔂 n 🆕📈 100❗️ 🍇
    👄 🔤🧲🔡 n❗️🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
🍉
```

```output
1 2 4 8 16 32 64 
```

`📈` is a type that represents “the powers of 2 up to 100,” and `🎢` is the iterator that takes them out one at a time. A type name is a single emoji, so you cannot use two in a row like `🔢🔁`.

```keywords
iterator
begin
end
range-based for
for-each
Iterable
Iterator
```
