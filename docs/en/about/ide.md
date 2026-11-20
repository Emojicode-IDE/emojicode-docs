# Using this IDE

Emojicode IDE compiles and runs Emojicode entirely inside your browser. The code you write is not sent to any server.

## The screen

| Area | What you can do |
|---|---|
| Editor | Write code. A line break after `🍇` indents the next line, and typing `🍉` at the start of a line moves it back |
| ▶ Run | Compile and run. While running, it becomes ■ Stop |
| ⌨️ | Emoji keyboard. Frequently used emoji are arranged by category |
| Output | What the program printed. Compile errors also appear here |
| Input | Write what the program reads with `👂🏼` here before running it |
| 📄 | Templates. Start writing from a sample or from code you saved yourself |

You can change the display language with the 🌐 menu in the header (on narrow screens, under ⚙︎ Settings → Language).

## The first time you open it

The first time only, the IDE downloads the compiler toolchain (about 35 MB). From the second time on, it starts right away without downloading, and it also works offline.

## When you get an error

A compile error appears in the output with its line and column, and the matching place in the code gets a red wavy underline. Click the error in the output to jump to that place. Press **▶ Run** on the example below to see the same thing right on this page.

```emojicode error
🏁 🍇
  😀 🔤forgot to close❗️
🍉
```

```text
Unexpected end of file.
```

In this example, the closing `🔤` of the string is missing, so the string continues all the way to the end of the file.

## Infinite loops

If a run has not finished after 10 seconds, it is stopped automatically. Output is also cut off once it exceeds 200,000 characters.

## Differences from the official compiler

The compiler in this IDE is the official Emojicode compiler ([`master`](https://github.com/emojicode/emojicode/tree/master), commit `4dec45b`) made to run inside the browser, and the same code gives the same results as with the official compiler. The official compiler's bugs are kept as they are ([Emojicode Language Bugs](known-issues.md)).

However, where the official compiler would crash or never finish, this IDE stops with an error that has an ID such as `[EJ001]`. Clicking the ID in the output opens the description of the bug and how to avoid it.

```emojicode panic
🏁 🍇
  🔂 part 🔫 🔤abc🔤 🔤🔤❗️ 🍇
    😀 part❗️
  🍉
🍉
```

```output
🤯 Program panicked: [EJ001] 🔫 was called with an empty separator. With the official compiler, this never ends.
```

```keywords
official compiler
bugs
EJ001
panicked
```

## Changes for running on WebAssembly

These are the places where this IDE changes the official compiler so that it can run inside the browser. The whole change is in [emojicode-wasm32.patch](/docs/patches/emojicode-wasm32.patch.txt).

### Places that crash on 32-bit WebAssembly

The official compiler has places that work on 64-bit systems but crash on 32-bit WebAssembly. Each is changed so that the result is the same as with the official compiler.

With `value 🙌 🤷‍♀️` (comparing with no value), the compiler tries to build a value it never uses, which is undefined behavior inside the compiler.

```patch Compiler/AST/ASTBinaryOperator_CG.cpp IsNoValue
```

The layout of the start of the class information that each instance holds differs between the compiler and the runtime. On 64-bit systems the sizes match, so it causes no problem, but on 32-bit systems they do not.

```patch runtime/Runtime.h
```

`✏️` in the `files` package takes the error argument as declared. That a failed write raises no error is the same as with the official compiler ([EJ026](known-issues.md#EJ026)).

```patch files/File.cpp filesFileWrite
```

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

The compiler starts external commands for linking, but that is not possible inside the browser. Linking is done by a separately prepared WebAssembly linker, and `🕴🐇💻` (running a command) is made to do nothing.

```patch Compiler/Compiler.cpp
```

```patch s/System.cpp
```

### No threads

Threads are not used inside the browser, so `🧵` just runs the closure you pass to it immediately ([Thread_wasi.cpp](/docs/patches/Thread_wasi.cpp.txt)). Since no other thread ever competes for a mutex, `🔒` and `🔓` do nothing and `🔐` always returns `👍`.

### Building the compiler itself for WebAssembly

The Emojicode compiler uses LLVM 8. The changes for building LLVM 8 for WebAssembly are in [llvm-8.0.1-wasi.patch](/docs/patches/llvm-8.0.1-wasi.patch.txt).

---

> **Limitations of this IDE** (because it runs inside the browser)
>
> - There are no threads. `🧵` just runs the closure on the spot, and `Mutex` does nothing.
> - `💻` (running a shell command) does nothing.
> - Standard input must be written before running. The program cannot wait for input while it is running.
> - `📦 sockets` cannot be used.
> - Memory is limited to 4 GB (it may be less on smartphones).

```keywords
limitations
threads
thread
std::thread
mutex
system
shell
sockets
memory
```
