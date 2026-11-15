# More on Classes

## Initializers every subclass must provide (🔑)

If you put `🔑` on an initializer, every subclass must also provide that initializer. In the subclass, you write it with `🔑` too.

```emojicode
🐇 🐾 🍇
  🖍🆕 name 🔡
  🔑 🆕 🍼 name 🔡 🍇🍉
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ name
  🍉
🍉

🐇 🐕 🐾 🍇
  🔑 🆕 name 🔡 🍇
    ⤴️🆕 name❗️
  🍉
🍉

🏁 🍇
  😀 🏷 🆕🐕 🔤Buddy🔤❗️❗️❗️
🍉
```

```output
Buddy
```

```keywords
required
required initializer
inheriting constructors
constructor inheritance
```

## Methods that cannot be overridden (🔏)

If you put `🔏` on a method, subclasses can no longer override it.

```emojicode error
🐇 🐾 🍇
  🆕 🍇🍉
  🔏❗️ 🗣 🍇
    😀 🔤…🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  ✒️ ❗️ 🗣 🍇
    😀 🔤Woof🔤❗️
  🍉
🍉

🏁 🍇
  🗣 🆕🐕❗️❗️
🍉
```

```keywords
final
sealed
prevent override
```

## Visibility (🔓, 🔒, 🔐)

Write one of these before a method to decide where it can be called from.

| Syntax | Can be called from |
|---|---|
| `🔓` (or nothing) | anywhere |
| `🔐` | inside the class and its subclasses |
| `🔒` | only inside the class itself |

```emojicode
🐇 🐾 🍇
  🆕 🍇🍉
  🔐❗️ 💓 ➡️ 🔡 🍇
    ↩️ 🔤Thump thump🔤
  🍉
🍉

🐇 🐕 🐾 🍇
  ❗️ 🎧 🍇
    😀 💓👇❗️❗️
  🍉
🍉

🏁 🍇
  🎧 🆕🐕❗️❗️
🍉
```

```output
Thump thump
```

```keywords
public
protected
private
access modifier
access control
visibility
```

## Code that runs on cleanup (♻️)

`♻️ 🍇 … 🍉` runs when an instance is no longer used and gets cleaned up (a destructor).

```emojicode
🐇 🎈 🍇
  🖍🆕 color 🔡
  🆕 🍼 color 🔡 🍇
    😀 🔤Blew up the 🧲color🧲 balloon🔤❗️
  🍉
  ♻️ 🍇
    😀 🔤The 🧲color🧲 balloon deflated🔤❗️
  🍉
🍉

🏁 🍇
  🆕🎈 🔤red🔤❗️ ➡️ red
  😀 🔤---🔤❗️
🍉
```

```output
Blew up the red balloon
---
The red balloon deflated
```

Emojicode manages memory with reference counting, and cleans an instance up as soon as its last reference goes away ([Memory and References](memory.md)).

```keywords
destructor
~
deinit
deinitializer
finalize
cleanup
```

## Generics on a single method

If you write `🐚Name Constraint🍆` after a method name, that method alone can take a type to use.

```emojicode
🐇 🧰 🍇
  🐇❗️ 👯 🐚T ⚪️🍆 value T count 🔢 ➡️ 🍨🐚T🍆 🍇
    🆕🍨🐚T🍆❗️ ➡️ 🖍🆕 list
    🔂 i 🆕⏩ 0 count❗️ 🍇
      🐻 list value❗️
    🍉
    ↩️ list
  🍉
🍉

🏁 🍇
  👯🐇🧰 🔤hi🔤 3❗️ ➡️ greetings
  😀 🆕🔡 greetings 🔤 🔤❗️❗️
  👯🐇🧰 7 2❗️ ➡️ sevens
  😀 🔡 📏 sevens❓❗️❗️
🍉
```

```output
hi hi hi
2
```

You don't have to write the type; it is inferred from the arguments.

```keywords
function template
template function
generic method
type inference
```
