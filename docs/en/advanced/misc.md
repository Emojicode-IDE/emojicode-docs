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

```keywords
unsafe
unsafe block
☣
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
