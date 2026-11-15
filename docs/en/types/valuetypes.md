# Value Types and Enumerations

## Value types (🕊)

A type you make with `🕊` is a **value type**. The difference from a class (`🐇`) is that it is **copied** when you assign it or pass it as an argument. Value types are good for small bundles of data, such as coordinates or colors.

```emojicode
🕊 📍 🍇
  🖍🆕 x 🔢
  🖍🆕 y 🔢

  🆕 🍼 x 🔢 🍼 y 🔢 🍇🍉

  ❗️ 🔡 ➡️ 🔡 🍇
    ↩️ 🔤(🧲🔡 x❗️🧲, 🧲🔡 y❗️🧲)🔤
  🍉

  🖍❗️ 🚶 dx 🔢 dy 🔢 🍇
    x ⬅️➕ dx
    y ⬅️➕ dy
  🍉
🍉

🏁 🍇
  🆕📍 1 2❗️ ➡️ 🖍🆕 a
  a ➡️ 🖍🆕 b
  🚶 b 10 0❗️
  😀 🔡 a❗️❗️
  😀 🔡 b❗️❗️
🍉
```

```output
(1, 2)
(11, 2)
```

We copied `a` into `b` and then moved only `b`, so `a` did not change.

A method that changes instance variables gets a `🖍`, as in `🖍❗️`. You can only call such a method on a variable made with `🖍🆕` (a mutable variable).

```keywords
struct
value type
copy
pass by value
copy semantics
mutating
```

## Enumerations (🔘)

With `🔘` you make a type that represents one of a fixed set of values. List the values with `🆕▶️name`.

```emojicode
🔘 🚦 🍇
  🆕▶️🔴
  🆕▶️🍋
  🆕▶️🍏

  ❗️ 🔡 ➡️ 🔡 🍇
    ↪️ 👇 🙌 🆕🚦▶️🔴❗️ 🍇
      ↩️ 🔤Stop🔤
    🍉
    🙅↪️ 👇 🙌 🆕🚦▶️🍏❗️ 🍇
      ↩️ 🔤Go🔤
    🍉
    ↩️ 🔤Caution🔤
  🍉
🍉

🏁 🍇
  🆕🚦▶️🔴❗️ ➡️ light
  😀 🔡 light❗️❗️
  😀 🔡 🆕🚦▶️🍏❗️❗️❗️
🍉
```

```output
Stop
Go
```

You get a value with `🆕Type▶️name❗️` and compare values with `🙌`. Enumerations can have methods too.

```keywords
enum
enum class
enumeration
enumerated type
set of constants
```
