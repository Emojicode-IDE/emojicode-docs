# Protocols

## Defining only a promise (🐊)

A **protocol**, made with `🐊`, is a type that only defines a promise: “this type has these methods.” It does not contain any implementation.

When you write `🐊 ProtocolName` inside a class or value type, that type conforms to the protocol (it provides all of its methods).

```emojicode
🐊 🔊 🍇
  ❗️ 🗣 ➡️ 🔡
🍉

🐇 🐕 🍇
  🐊 🔊
  🆕 🍇🍉
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Woof🔤
  🍉
🍉

🕊 🔔 🍇
  🐊 🔊
  🆕 🍇🍉
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Ding🔤
  🍉
🍉

🏁 🍇
  🆕🍨🐚🔊🍆❗️ ➡️ 🖍🆕 things
  🐻 things 🆕🐕❗️❗️
  🐻 things 🆕🔔❗️❗️
  🔂 t things 🍇
    😀 🗣 t❗️❗️
  🍉
🍉
```

```output
Woof
Ding
```

`🐕` is a class and `🔔` is a value type, but both conform to `🔊`, so you can put both into the same `🍨🐚🔊🍆`.

If you forget to provide one of the promised methods, you get a compile error.

```emojicode error
🐊 🔊 🍇
  ❗️ 🗣 ➡️ 🔡
🍉

🐇 🐕 🍇
  🐊 🔊
  🆕 🍇🍉
🍉

🏁 🍇
  🆕🐕❗️ ➡️ dog
🍉
```

An example of conforming to a standard library protocol so you can loop over your own type with `🔂` is in [Iterating Your Own Types with 🔂](iteration.md).

```keywords
interface
protocol
abstract class
pure virtual function
pure virtual
trait
concept
```

## Types that can be compared for equality (😛)

The standard library's `😛🐚T⚪️🍆` is a protocol promising "can be compared for equality with T using `🙌`". It declares just one method, `🙌 other T ➡️ 👌`. `🔢`, `💯`, `🔡`, `👌`, `💧`, and `📇` all conform to it, passing their own type to `😛`.

A list's `🐦` (whether an equal element exists) and `🙌` between lists can only be used when the type of the value you pass (for `🙌`, the element type of the other list) conforms to `😛🐚ElementType🍆`. Usually the element type itself conforms to `😛🐚ItsOwnType🍆`, so passing a value of the same type works. Your own types can be used with them too, if you write `🐊 😛🐚YourType🍆` and provide `🙌`.

```emojicode
🕊 🧺 🍇
  🐊 😛🐚🧺🍆
  🖍🆕 apples 🔢
  🖍🆕 oranges 🔢

  🆕 🍼 apples 🔢 🍼 oranges 🔢 🍇🍉

  ❗️ 🍎 ➡️ 🔢 🍇
    ↩️ apples
  🍉

  ❗️ 🍊 ➡️ 🔢 🍇
    ↩️ oranges
  🍉

  🙌 other 🧺 ➡️ 👌 🍇
    ↩️ apples 🙌 🍎 other❗️ 🤝 oranges 🙌 🍊 other❗️
  🍉
🍉

🏁 🍇
  🆕🧺 1 2❗️ ➡️ a
  🆕🧺 1 2❗️ ➡️ b
  ↪️ a 🙌 b 🍇
    😀 🔤equal🔤❗️
  🍉
  🍿 🆕🧺 0 3❗️ a 🍆 ➡️ baskets
  ↪️ 🐦 baskets 🆕🧺 1 2❗️❓ 🍇
    😀 🔤found🔤❗️
  🍉
  ↪️ baskets 🙌 🍿 🆕🧺 0 3❗️ b 🍆 🍇
    😀 🔤lists are equal too🔤❗️
  🍉
🍉
```

```output
equal
found
lists are equal too
```

If the type of the value you pass does not conform to `😛🐚ElementType🍆`, `🐦` is a compile error.

```emojicode error
🕊 🧺 🍇
  🖍🆕 apples 🔢
  🆕 🍼 apples 🔢 🍇🍉
🍉

🏁 🍇
  🍿 🆕🧺 0❗️ 🍆 ➡️ baskets
  ↪️ 🐦 baskets 🆕🧺 1❗️❓ 🍇
    😀 🔤found🔤❗️
  🍉
🍉
```

```text
has no suitable 🐦
```

```keywords
Equatable
operator==
==
equality
Eq
```
