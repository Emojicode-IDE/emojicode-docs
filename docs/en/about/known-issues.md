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

The source of the `files` package (`files.🍇`) contains `📤`, `📥`, and `📯` for standard output, standard input, and standard error, but they are commented out, so they are not declared, and there is no C++ implementation either. Using them causes a compile error such as `has no suitable 📤`.

```keywords
files
stdout
stdin
stderr
has no suitable
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

## Two methods with the same parameter types do not cause an error

If you write two methods with the same name and exactly the same parameter types, you do not get a compile error. When you call it, the one written later is used without any warning. The same happens when the two differ only in their return type ([Classes](../types/classes.md)).

```emojicode
🐇 🖨 🍇
  🆕 🍇🍉

  ❗️ 📢 n 🔢 🍇
    😀 🔤First🔤❗️
  🍉

  ❗️ 📢 n 🔢 🍇
    😀 🔤Second🔤❗️
  🍉
🍉

🏁 🍇
  📢 🆕🖨❗️ 5❗️
🍉
```

```output
Second
```

The compiler has a function that checks for overlapping declarations (`FunctionResolver::duplicateDeclarationCheck`), but nothing calls it.

```keywords
overload
duplicate declaration
same signature
redefinition
```

## `🚯` of `🌱` does not remove the element from the original list

According to the standard library's documentation comment, `🚯` of `🌱` (a list iterator) removes the element last taken out from the list, but the original list does not change. A list (`🍨`) is a value type, so `🌱` holds a copy of the list when it is created, and `🚯` removes the element from that copy ([Lists and Dictionaries](../basics/collections.md)).

```emojicode
🏁 🍇
  🍿 1 2 3 🍆 ➡️ list
  🆕🌱🐚🔢🍆 list❗️ ➡️ it
  🔽 it❗️
  🚯 it❗️
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output
3
```

To get a list without some elements, use `🐭`. It keeps only the elements that match the condition, so pass a condition that returns 👎 for the elements you want to remove.

```keywords
iterator
remove element
remove
erase
```

## Reading more than what is left with `📓` in `📦 files` returns nothing

If you ask `📓` (read a given number of bytes) in the `files` package for more bytes than are left in the file, it raises an error without returning even the bytes it managed to read. After that, every read fails, even if you move back with `🔛` ([Packages and Documentation Comments](../advanced/packages.md)).

```emojicode
📦 files 🏠

🏁 🍇
  🍺 📻🐇📄 🔤a.txt🔤 📇 🔤abc🔤❗️❗️
  🍺 🆕📄▶️📜 🔤a.txt🔤❗️ ➡️ file
  🆗 data 📓 file 5❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Cannot read 5 bytes🔤❗️
  🍉
  🔛 file 0❗️
  🆗 data 📓 file 1❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Still cannot read after moving back🔤❗️
  🍉
🍉
```

```output
Cannot read 5 bytes
Still cannot read after moving back
```

The C++ function behind it raises an error if the file stream is in a failed state after reading. Reading more than what is left puts the stream in a failed state, and nothing resets it, so every later read fails too. The error message (`💬`) is built from whatever error number (C's `errno`) happens to be left at that point, so it is a sentence unrelated to reading, such as `Not a tty`.

If you do not know how much to read, check the size first with `📏🕊📑`, or read the whole file with `📇🐇📄`.

```keywords
files
file
read
fread
EOF
errno
```
