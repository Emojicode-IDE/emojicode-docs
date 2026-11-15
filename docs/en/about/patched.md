# Fixed Bugs

These are bugs in the official Emojicode compiler ([`master`](https://github.com/emojicode/emojicode/tree/master), commit [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)) that this IDE fixes with a patch, so they work correctly here. If you run the same code with the official compiler, the result may be different.

Bugs that are not fixed are listed in [Emojicode Language Bugs](known-issues.md). You can see the whole patch in [emojicode-wasm32.patch](/docs/patches/emojicode-wasm32.patch.txt).

## `🔧` breaks Japanese text or emoji at the end of a string

In the official compiler, `🔧` (remove surrounding whitespace) breaks the last character of a string when that character is Japanese or an emoji. This happens in every environment.

The example below keeps its Japanese text on purpose, because multi-byte characters are what trigger the bug.

```emojicode
🏁 🍇
  😀 🔧 🔤  まわりの空白  🔤❗️❗️
🍉
```

```output Result in this IDE
まわりの空白
```

```official
まわりの空�
```

In the official compiler, the last character is broken and you get `まわりの空�`. The position of the last character is counted as “the first byte of that character,” so everything from the second byte onward is cut off. The patch keeps everything up to the end of the last character.

```patch s/String.cpp sStringTrim
```

```keywords
trim
remove whitespace
strip
garbled text
mojibake
multi-byte
multibyte
UTF-8
```

## Expressions that compare with `🤷‍♀️` can crash the compiler

In the official compiler, when you compile an expression containing `value 🙌 🤷‍♀️` (a comparison with no value), the compiler tries to create a value it never uses, which causes undefined behavior inside the compiler. On an ordinary computer (x86-64) this happens not to cause a problem, but on WebAssembly the compiler crashes.

```emojicode
🏁 🍇
  🖍🆕 thing ⚪️
  🔤abc🔤 ➡️ 🖍thing
  ↪️ 🔲 thing 🔢 🙌 🤷‍♀️ 🍇
    😀 🔤Not a number🔤❗️
  🍉
🍉
```

```output Result in this IDE
Not a number
```

```official
(compilation never finishes)
```

This compares `🔲 thing 🔢` (the result of casting `⚪️` to `🔢`; no value if the cast fails) with `🤷‍♀️`. If you build the official compiler for WebAssembly without the patch, compiling this example never finishes (the official compiler running on an ordinary computer may happen not to show a problem).

The patch does not create the value on the `🤷‍♀️` side (it is not needed in the first place).

```patch Compiler/AST/ASTBinaryOperator_CG.cpp
```

```keywords
no value
nullopt
comparison
compiler crash
crash
```

## With `📦 files`, a failed write to a file does not raise an error

In the official compiler, `✏️` (write to a file) in the `files` package is declared as a method that may throw an error, but its implementation (in C++) has no parameter for receiving the error. Because of this, a failed write does not raise an error. On WebAssembly, a mismatched number of arguments stops the program right there, so writing does not work at all. The patch adds the parameter and throws an error when the write fails.

```patch files/File.cpp
```

```keywords
files
file
writing
write
```

## The compiler and runtime disagree on the layout of class information

In the official compiler, the layout of the first part of the “class information” that each class instance holds differs between the compiler (which creates it) and the runtime (which reads it). On 64-bit environments the sizes happen to be the same, so it causes no problem, but on 32-bit WebAssembly the layout gets out of sync, and the program crashes when an instance is deinitialized. The patch changes the runtime's layout to match the compiler's.

```patch runtime/Runtime.h
```

```keywords
class
destructor
crash
32-bit
```

## Stops when deinitializing a variable of a `🍱` type

In the official compiler, if you put a class instance into a **variable** of a type that combines several protocols (`🍱Protocol Protocol🍱`, see [Type Values and Casting](../types/casting.md)), then when that variable is cleaned up, the program calls an unrelated location as if it were a function.

```emojicode
🐊 🔊 🍇
  ❗️ 🗣 ➡️ 🔡
🍉

🐊 🏃 🍇
  ❗️ 🦵 ➡️ 🔡
🍉

🐇 🐕 🍇
  🐊 🔊
  🐊 🏃
  🆕 🍇🍉
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Woof🔤
  🍉
  ❗️ 🦵 ➡️ 🔡 🍇
    ↩️ 🔤Tap tap tap🔤
  🍉
🍉

🏁 🍇
  🖍🆕 pet 🍱🔊🏃🍱
  🆕🐕❗️ ➡️ 🖍pet
  😀 🗣 pet❗️❗️
  😀 🦵 pet❗️❗️
🍉
```

```output Result in this IDE
Woof
Tap tap tap
```

```official
Woof
Tap tap tap
(then stops with null function or function signature mismatch)
```

The start of the box holding a `🍱` value contains not “information about the box” but “a list of lookup tables, one per protocol.” Only when cleaning up does the official compiler read it as “information about the box,” so it reads past the end of the list and calls whatever value is there as a function (the result above is for a build for WebAssembly without the patch). The patch takes the cleanup function from the first lookup table in the list.

```patch Compiler/Generation/FunctionCodeGenerator.cpp
```

```keywords
🍱
multiprotocol
multiple protocols
signature mismatch
```

## Mutating a list inside a copied list also changes the copy

A list is copied, contents and all, when you assign it ([Lists and Dictionaries](../basics/collections.md)). In the official compiler, however, mutating an element in place through `🐽` after copying also changes the copy. This happens when you append to an inner list with `🐻 🐽 a 0❗️ 2❗️`, or call a `🖍❗️` method of a value type on `🐽 a 0❗️`. Assigning to an element directly, as in `9 ➡️ 🐽 a 0❗️`, is not affected.

```emojicode
🏁 🍇
  🍿 🍿 1 🍆 🍆 ➡️ 🖍🆕 a
  a ➡️ b
  🐻 🐽 a 0❗️ 2❗️
  9 ➡️ 🐽🐽 a 0❗️ 0❗️
  😀 🔤a: length 🧲🔡 📏 🐽 a 0❗️❓❗️🧲, first is 🧲🔡 🐽🐽 a 0❗️ 0❗️❗️🧲🔤❗️
  😀 🔤b: length 🧲🔡 📏 🐽 b 0❗️❓❗️🧲, first is 🧲🔡 🐽🐽 b 0❗️ 0❗️❗️🧲🔤❗️
🍉
```

```output Result in this IDE
a: length 2, first is 9
b: length 1, first is 1
```

```official
a: length 2, first is 9
b: length 2, first is 9
```

Copying a list does not duplicate its contents right away; they are duplicated the first time the list is mutated (copy-on-write). `🐽` returns a reference (`✴️`) to the element itself rather than a copy, and the mutation goes through that reference. The official compiler does not duplicate the outer list at that point, so it mutates the element that the original and the copy still share.

The patch duplicates the outer list first whenever an element returned with `✴️` is mutated (the list's `📝` does the duplication).

```patch Compiler/AST/ASTMethod.cpp
```

```patch Compiler/AST/ASTMethod_CG.cpp
```

```keywords
list
copy
copy-on-write
nested list
2D array
vector
reference
```

## Converting the smallest integer to a string breaks it

In the official compiler, converting the smallest `🔢` value (-9223372036854775808) to a string with `🔡` prints 18 NUL characters followed by `-8`. When it is interpolated into a string, unrelated memory can show up too.

```emojicode
🏁 🍇
  -9223372036854775807 ➖ 1 ➡️ smallest
  😀 🔡 smallest❗️❗️
  😀 🔡 smallest 16❗️❗️
🍉
```

```output Result in this IDE
-9223372036854775808
-8000000000000000
```

```official
(18 NUL characters followed by -8)
(15 NUL characters followed by -0)
```

The sign is removed before the digits are produced, but negating the smallest value overflows the range of `🔢`. The patch negates it as an unsigned integer.

The official compiler's digit table is also missing `w`, so with a base above 32, digits of 32 or more come out shifted. For example, `🔡 32 33❗️` gives `x` instead of `w`, and `🔡 35 36❗️` gives `0` instead of `z`. The patch fixes the table as well.

```patch s/Integer.cpp
```

```keywords
integer
minimum
INT64_MIN
LLONG_MIN
to string
to_string
base
radix
base 36
```

## `🔫` never finishes with an empty separator

In the official compiler, passing an empty string to `🔫` (split a string) never finishes.

```emojicode
🏁 🍇
  🔂 part 🔫 🔤abc🔤 🔤🔤❗️ 🍇
    😀 part❗️
  🍉
🍉
```

```output Result in this IDE
abc
```

```official
(never finishes)
```

An empty string is “found” at every position, so the position where the next search starts never moves forward. With the patch, an empty separator returns a list that holds only the original string. To take a string apart one character at a time, loop over it with `🔂` ([Strings](../basics/strings.md)).

```patch s/🔡.🍇
```

```keywords
split
empty string
infinite loop
```

## Changes for running on WebAssembly

These are not bugs, but places where this IDE changes the official compiler so that it can run inside the browser.

### Adapting to a 32-bit environment

The official compiler passes a 64-bit size to `malloc`, which allocates memory. On 32-bit WebAssembly the types do not match, so a small function is placed in between.

```patch Compiler/Generation/RunTimeHelper.cpp
```

```patch runtime/main.cpp
```

The official compiler also relies on x86-64 conventions for the way it passes closures to C++. Only for WebAssembly, the way they are received is changed.

```patch s/String.cpp sStringCodepoints
```

### Not starting processes

The compiler starts external commands for linking, but that is not possible inside the browser. Linking is done by a separately prepared WebAssembly linker, and `💻` (running a command) is made to do nothing.

```patch Compiler/Compiler.cpp
```

```patch s/System.cpp
```

### No threads

Threads are not used inside the browser, so `🧵` just runs the closure you pass to it immediately ([Thread_wasi.cpp](/docs/patches/Thread_wasi.cpp.txt)).

### Building the compiler itself for WebAssembly

The Emojicode compiler uses LLVM 8. The changes for building LLVM 8 for WebAssembly are in [llvm-8.0.1-wasi.patch](/docs/patches/llvm-8.0.1-wasi.patch.txt).
