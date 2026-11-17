# Miscellaneous Syntax

This is syntax for advanced users that you won't use very often.

## Returning nothing (◼️)

Writing `◼️` where the return type goes states explicitly that nothing is returned. It is mostly used in closure types.

```emojicode
🏁 🍇
  🍇 ➡️ ◼️
    😀 🔤Returns nothing🔤❗️
  🍉 ➡️ f
  ⁉️ f❗️
🍉
```

```output
Returns nothing
```

```keywords
void
no return value
return nothing
◼
```

## Size of a type (⚖️)

`⚖️Type` returns how many bytes one value of that type takes.

```emojicode
🏁 🍇
  😀 🔡 ⚖️🔢❗️❗️
  😀 🔡 ⚖️💯❗️❗️
  😀 🔡 ⚖️👌❗️❗️
🍉
```

```output
8
8
1
```

```keywords
sizeof
size
byte size
number of bytes
⚖
```

## Deprecation (⚠️)

If you put `⚠️` on a method, a warning is shown wherever that method is used. Its behavior does not change.

```emojicode
🐇 🧓 🍇
  ⚠️🐇❗️ 📠 🍇
    😀 🔤Old method🔤❗️
  🍉
🍉

🏁 🍇
  📠🐇🧓❗️
🍉
```

```output
Old method
```

When you compile it, you get the warning `⚠️ warning: 📠 is deprecated.`

```keywords
deprecated
[[deprecated]]
deprecation
warning
⚠
```

## Inlining (🥯)

If you put `🥯` on a method, you ask the compiler to expand its body where it is called. Its behavior does not change.

```emojicode
🐇 ➰ 🍇
  🥯🐇❗️ ✌️ n 🔢 ➡️ 🔢 🍇
    ↩️ n ✖️ 2
  🍉
🍉

🏁 🍇
  😀 🔡 ✌️🐇➰ 21❗️❗️❗️
🍉
```

```output
42
```

```keywords
inline
inlining
optimization
```

## Unsafe code (☣️)

Inside `☣️ 🍇 … 🍉` you can write unsafe code, such as code that works with memory directly. It is used inside the standard library, but you won't use it in ordinary programs.

```emojicode
🏁 🍇
  ☣️ 🍇
    😀 🔤Inside unsafe🔤❗️
  🍉
🍉
```

```output
Inside unsafe
```

Putting `☣️` before a method or initializer makes it an "unsafe function". Inside it you can write unsafe code without `☣️ 🍇 … 🍉`, but callers must call it inside `☣️ 🍇 … 🍉`. All the methods and initializers of `🧠`, described below, are unsafe functions.

```emojicode
🐇 🧰 🍇
  🆕 🍇🍉
  ☣️❗️ 🔨 ➡️ 🔢 🍇
    🆕🧠 8❗️ ➡️ m
    5 ➡️ 🐽🐚🔢🍆 m 0❗️
    ↩️ 🐽🐚🔢🍆 m 0❗️
  🍉
🍉

🏁 🍇
  🆕🧰❗️ ➡️ t
  ☣️ 🍇
    😀 🔡 🔨 t❗️❗️❗️
  🍉
🍉
```

```output
5
```

Calling one outside `☣️ 🍇 … 🍉` is a compile error.

```emojicode error
🏁 🍇
  🆕🧠 8❗️ ➡️ m
🍉
```

```text
requires ☣️  block.
```

```keywords
unsafe
unsafe block
unsafe function
☣
```

### Memory regions (🧠)

`🧠` is a value type that represents the location of an allocated memory region. The region is an untyped sequence of bytes; you read and write values of any type by giving a byte offset from the start. You have to keep track yourself of which type of value you placed at which offset. Reading or writing outside the region, or reading with the wrong type, does not raise an error: the behavior is undefined.

| Syntax | Meaning |
|---|---|
| `🆕🧠 bytes❗️` | Allocates a region of that size. Its contents are unspecified (not necessarily 0) |
| `value ➡️ 🐽🐚Type🍆 memory offset❗️` | Writes a value of that type starting `offset` bytes from the start |
| `🐽🐚Type🍆 memory offset❗️` | Reads the value of that type at byte `offset` |
| `♻️🐚Type🍆 memory offset❗️` | Releases the value placed at byte `offset` |
| `🏗 memory bytes❗️` | Resizes the region. The existing contents are kept |
| `🚜 memory destOffset source sourceOffset bytes❗️` | Copies `bytes` bytes from `sourceOffset` in `source` to `destOffset` in this region |
| `✍️ memory 💧value❗️ offset bytes❗️` | Fills `bytes` bytes from `offset` with that one byte value |
| `↔️ memory other bytes❗️` | Compares the first `bytes` bytes. 0 if they are equal |

`⚖️🔢` is 8, so integers placed side by side go at bytes 0, 8, 16, and so on. `🏗` may move the region, and when it does, the value representing the location is rewritten, so declare the variable with `🖍🆕`. With `🚜`, the source and destination may be the same region, and the copied ranges may overlap (like C's `memmove`).

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 16❗️ ➡️ 🖍🆕 m
    10 ➡️ 🐽🐚🔢🍆 m 0❗️
    20 ➡️ 🐽🐚🔢🍆 m 8❗️
    😀 🔡 🐽🐚🔢🍆 m 8❗️❗️❗️
    🏗 m 32❗️
    🚜 m 16 m 0 16❗️
    😀 🔤🧲🔡 🐽🐚🔢🍆 m 16❗️❗️🧲 🧲🔡 🐽🐚🔢🍆 m 24❗️❗️🧲🔤❗️
    ✍️ m 💧0❗️ 0 8❗️
    😀 🔡 🐽🐚🔢🍆 m 0❗️❗️❗️
  🍉
🍉
```

```output
20
10 20
0
```

`↔️` works like C's `memcmp`: it returns a negative number if the first differing byte is smaller in this region, and a positive number if it is larger. When the result is not 0, the value itself means nothing, so look only at its sign.

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 4❗️ ➡️ a
    🆕🧠 4❗️ ➡️ b
    ✍️ a 💧1❗️ 0 4❗️
    ✍️ b 💧1❗️ 0 4❗️
    ↪️ ↔️ a b 4❗️ 🙌 0 🍇
      😀 🔤Equal🔤❗️
    🍉
    ✍️ b 💧2❗️ 3 1❗️
    ↪️ ↔️ a b 4❗️ ◀️ 0 🍇
      😀 🔤a is smaller🔤❗️
    🍉
  🍉
🍉
```

```output
Equal
a is smaller
```

A `🧠` value represents a location, not the region itself. Putting it in another variable only makes one more value pointing to the same region; the contents are not copied. The region is cleaned up once no `🧠` points to it anymore. When `🏗` moves the region, an old location kept in another variable may become unusable, so use `🏗` only when a single `🧠` points to the region.

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 8❗️ ➡️ a
    a ➡️ b
    42 ➡️ 🐽🐚🔢🍆 b 0❗️
    😀 🔡 🐽🐚🔢🍆 a 0❗️❗️❗️
  🍉
🍉
```

```output
42
```

Take care when placing values whose references are counted, such as strings and class instances ([Memory and References](memory.md)). Writing with `🐽` adds one reference, but when the region is cleaned up, the values inside are not released. Once you no longer need a value you placed, release it with `♻️🐚Type🍆` before overwriting it or abandoning the region. For the same reason, do not copy such values as bytes with `🚜`; read and write them one by one with `🐽`.

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 ⚖️🔡❗️ ➡️ m
    🔤apple🔤 ➡️ 🐽🐚🔡🍆 m 0❗️
    🐽🐚🔡🍆 m 0❗️ ➡️ s
    😀 s❗️
    ♻️🐚🔡🍆 m 0❗️
  🍉
🍉
```

```output
apple
```

```keywords
🧠
memory
pointer
raw memory
malloc
realloc
memcpy
memmove
memset
memcmp
reinterpret_cast
```

### The contents of strings and byte sequences (🧠)

`🔡`, `📇`, and `🔠` keep their contents in a `🧠`. `🧠 value❗️` returns that `🧠` without copying it. In `🔡` and `📇`, the UTF-8 bytes are laid out from the start; in `🔠`, what has been appended so far is. You can get the number of bytes with `📐 string❗️`, `📏 data❓`, and `📐 builder❗️`.

Conversely, you can create a `🔡` or `📇` by copying a given number of bytes from the start of a `🧠`. Whether the bytes are valid UTF-8 is not checked.

| Syntax | Meaning |
|---|---|
| `🧠 string❗️` | The `🧠` holding the contents of a `🔡` |
| `🧠 data❗️` | The `🧠` holding the contents of a `📇` |
| `🧠 builder❗️` | The `🧠` holding the contents of a `🔠` |
| `🆕🔡 memory bytes❗️` | Creates a string by copying `bytes` bytes from the start |
| `🆕📇 memory bytes❗️` | Creates a byte sequence by copying `bytes` bytes from the start |

`🔡` and `📇` are immutable values, so only read from the region you get with `🧠`. What happens if you write to it is undefined (the comments in the standard library source say so).

```emojicode
🏁 🍇
  ☣️ 🍇
    🔤Hi!🔤 ➡️ s
    🧠 s❗️ ➡️ m
    🔂 i 🆕⏩ 0 📐 s❗️❗️ 🍇
      😀 🔡 🐽🐚💧🍆 m i❗️❗️❗️
    🍉
    😀 🆕🔡 m 2❗️❗️

    🆕🧠 3❗️ ➡️ w
    💧65❗️ ➡️ 🐽🐚💧🍆 w 0❗️
    ✍️ w 💧66❗️ 1 2❗️
    😀 🆕🔡 w 3❗️❗️
  🍉
🍉
```

```output
72
105
33
Hi
ABB
```

```keywords
data
c_str
bytes
UTF-8
std::string::data
```

### Creating lists and dictionaries from literals (🍪)

When you write a `🍿 … 🍆` or `🍯 … 🍆` literal, the compiler lays the values out in memory and generates a call to the `🍪` initializer of `🍨` or `🍯`. `🍪` is an unsafe initializer, and you can call it yourself too.

| Syntax | Meaning |
|---|---|
| `🆕🍨🐚ElementType🍆 ▶️🍪 values count❗️` | Creates a list containing `count` values laid out in memory |
| `🆕🍯🐚ValueType🍆 ▶️🍪 keys values count❗️` | Creates a dictionary containing `count` pairs of the key and value at the same position |

In the value memory, lay out the elements as `⚪️`, every `⚖️⚪️` bytes, not every size-of-the-element-type bytes. Inside lists and dictionaries, elements of any type are handled in the same form as `⚪️`. Lay out dictionary keys as plain `🔡`, every `⚖️🔡` bytes. The value of `⚖️⚪️` differs between environments, so compute it with `⚖️` instead of writing the number.

The values are copied into the list or dictionary, so after creating it, release the values in the memory you used with `♻️`.

```emojicode
🏁 🍇
  ☣️ 🍇
    ⚖️⚪️ ➡️ v
    🆕🧠 3 ✖️ v❗️ ➡️ values
    10 ➡️ 🐽🐚⚪️🍆 values 0❗️
    20 ➡️ 🐽🐚⚪️🍆 values v❗️
    30 ➡️ 🐽🐚⚪️🍆 values 2 ✖️ v❗️
    🆕🍨🐚🔢🍆 ▶️🍪 values 3❗️ ➡️ list
    🔂 i 🆕⏩ 0 3❗️ 🍇
      ♻️🐚⚪️🍆 values i ✖️ v❗️
    🍉
    🔂 x list 🍇
      😀 🔡 x❗️❗️
    🍉

    ⚖️🔡 ➡️ k
    🆕🧠 2 ✖️ k❗️ ➡️ keys
    🆕🧠 2 ✖️ v❗️ ➡️ prices
    🔤apple🔤 ➡️ 🐽🐚🔡🍆 keys 0❗️
    🔤orange🔤 ➡️ 🐽🐚🔡🍆 keys k❗️
    100 ➡️ 🐽🐚⚪️🍆 prices 0❗️
    250 ➡️ 🐽🐚⚪️🍆 prices v❗️
    🆕🍯🐚🔢🍆 ▶️🍪 keys prices 2❗️ ➡️ dict
    🔂 i 🆕⏩ 0 2❗️ 🍇
      ♻️🐚🔡🍆 keys i ✖️ k❗️
      ♻️🐚⚪️🍆 prices i ✖️ v❗️
    🍉
    ↪️ 🐽 dict 🔤orange🔤❗️ ➡️ p 🍇
      😀 🔡 p❗️❗️
    🍉
  🍉
🍉
```

```output
10
20
30
250
```

```keywords
🍪
initializer_list
std::initializer_list
literal
```

## Skipping per-type generic information (🎍🛢)

If you put `🎍🛢` on a generic value type, no runtime information is created for each type argument. It is used inside the standard library's lists and dictionaries.

```emojicode
🎍🛢 🕊 📦🐚T ⚪️🍆 🍇
  🖍🆕 v T
  🆕 🍼 v T 🍇🍉
  ❗️ 📤 ➡️ T 🍇
    ↩️ v
  🍉
🍉

🏁 🍇
  😀 📤 🆕📦🐚🔡🍆 🔤ok🔤❗️❗️❗️
🍉
```

```output
ok
```

```keywords
🛢
generic dynamism
```

## Removed syntax (🔟)

“Symbol literals” starting with `🔟` existed in older versions of Emojicode and can no longer be used. Writing one causes a compile error. When you want to work with a single character, use a string (`🔤`).

```emojicode error
🏁 🍇
  🔟🍎 ➡️ s
🍉
```

```text
🔣 has been removed.
```

```keywords
symbol
symbol literal
char
character
🔟
🔣
```
