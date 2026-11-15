# Emojicode Unofficial Reference

An unofficial reference for learning Emojicode by running code. The language is fully documented in the official [Language Reference](https://www.emojicode.org/docs/reference), and this site is a companion to it. It is not affiliated with the Emojicode developers; it is written by an individual alongside this IDE.

[Emojicode](https://www.emojicode.org/) is a programming language in which almost every keyword and operator is an emoji. It is a statically typed language with classes, generics, closures, and error handling.

You can run the code examples on this site right on the page. Press **▶ Run** at the top right of an example to run it, and rewrite it with **✎ Edit** and run it again to see the output below change to the new result.

```emojicode
🏁 🍇
  😀 🔤Welcome!🔤❗️
🍉
```

```output
Welcome!
```

There is also a [Comparison with C++](reference/cpp.md), a summary of bugs found in the official compiler and their fixes ([Emojicode Language Bugs](about/known-issues.md), [Fixed Bugs](about/patched.md)), and [Docs for LLMs](intro/llm.md) to give to an LLM.

## How to read

If you are new, start with [Hello World](intro/hello.md). How to use the IDE is covered in [Using this IDE](about/ide.md).

## Supported version

The Emojicode in this IDE is the official compiler's [`master`](https://github.com/emojicode/emojicode/tree/master) (commit [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)) with changes to make it run on WebAssembly. It is 21 commits after 1.0 beta 2 (February 2020), the version the official Language Reference covers. Known bugs in the official compiler are listed in [Emojicode Language Bugs](about/known-issues.md), and the limitations of this IDE at the end of [Using this IDE](about/ide.md).
