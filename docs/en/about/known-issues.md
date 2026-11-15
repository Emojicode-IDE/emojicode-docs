# Emojicode Language Bugs

These are bugs found in the official Emojicode compiler ([`master`](https://github.com/emojicode/emojicode/tree/master), commit [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)) that have not been fixed yet. The compiler in this IDE behaves the same way.

Bugs that this IDE fixes with a patch are listed in [Fixed Bugs](patched.md).

## Converting a real number to a string truncates instead of rounding

`🔡 realNumber digits❗️` cuts off everything below the given digit. On top of that, because of floating-point error, the result can be 1 smaller than you expect.

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

The correct results are `3.05` and `3.141590`. `🔡 realNumber❗️` without the number of digits uses 6 decimal places, so the same thing happens.

```keywords
real number
float
double
decimal
rounding
round
truncation
floating-point error
```

## `📤`, `📥`, and `📯` in `📦 files` do not work

The `files` package declares `📤`, `📥`, and `📯` for standard output, standard input, and standard error, but they are not implemented. Using them causes a link error.

```keywords
files
stdout
stdin
stderr
link error
```

## Newer emoji cannot be used in names

Because the compiler's list of known emoji is outdated, relatively new emoji such as `🟢` and `🟡` cannot be used in type or method names. You get the compile error `Expected Identifier`.

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
emoji
identifier
name
Expected Identifier
Unicode
```
