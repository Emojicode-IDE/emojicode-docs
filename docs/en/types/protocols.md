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
