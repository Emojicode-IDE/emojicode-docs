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
