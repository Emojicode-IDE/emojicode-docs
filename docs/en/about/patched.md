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
