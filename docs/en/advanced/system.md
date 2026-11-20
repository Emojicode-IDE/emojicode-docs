# System and Threads

This page covers `💻`, which talks to the world outside the program (command-line arguments, environment variables, the time and so on), threads with `🧵`, and mutexes with `🔐`. Because this IDE runs inside the browser, some of them behave differently from upstream Emojicode running natively.

## Talking to the outside of the program (💻)

`💻` is a class that only has type methods, and it cannot be instantiated. All of them are called in the form `method🐇💻 arguments❗️`.

| Syntax | Meaning |
|---|---|
| `🎞🐇💻❗️` | List of command-line arguments (`🍨🐚🔡🍆`) |
| `🌳🐇💻 name❗️` | Value of an environment variable (`🍬🔡`). No value if it is not set |
| `🚪🐇💻 exitCode❗️` | Ends the program immediately with that exit code |
| `🕰🐇💻❗️` | The current time, in seconds since 00:00 on January 1, 1970 (UTC) |
| `🕴🐇💻 command❗️` | Runs a command in the shell. Does nothing in this IDE |
| `🤯🐇💻 message❗️` | Prints the message and makes the program crash |

```keywords
💻
system
OS
operating system
```

### Command-line arguments (🎞)

`🎞🐇💻❗️` returns the arguments passed to the program as a list, including the program's name. This IDE has no way to pass arguments, so the list always contains just one item, the program name `main`.

```emojicode
🏁 🍇
  🎞🐇💻❗️ ➡️ args
  😀 🔤🧲🔡 📏 args❓❗️🧲 argument(s)🔤❗️
  🔂 arg args 🍇
    😀 arg❗️
  🍉
🍉
```

```output
1 argument(s)
main
```

```keywords
argv
argc
command-line arguments
arguments
```

### Environment variables (🌳)

`🌳🐇💻 name❗️` returns the value of the environment variable with that name. The return value is an optional, and has no value if the variable is not set. In this IDE no environment variables are set at all, so it always has no value.

```emojicode
🏁 🍇
  ↪️ 🌳🐇💻 🔤HOME🔤❗️ ➡️ home 🍇
    😀 home❗️
  🍉
  🙅 🍇
    😀 🔤HOME is not set🔤❗️
  🍉
🍉
```

```output
HOME is not set
```

```keywords
getenv
environment variable
env
```

### Exiting early (🚪)

`🚪🐇💻 exitCode❗️` ends the program on the spot. Nothing after it runs. In this IDE, the exit code you pass is shown after the run.

```emojicode
🏁 🍇
  😀 🔤This runs🔤❗️
  🚪🐇💻 0❗️
  😀 🔤This does not run🔤❗️
🍉
```

```output
This runs
```

As the comment in upstream `💻.🍇` says, most operating systems only allow exit codes up to 255. In this IDE, passing 256 or -1 shows that number as it is.

```keywords
exit
std::exit
exit code
terminate
```

### Time (🕰)

`🕰🐇💻❗️` returns the number of seconds since 00:00 on January 1, 1970 (UTC) as an integer. It is the same as C's `time(0)`. This IDE also returns the actual current time.

```emojicode
🏁 🍇
  🕰🐇💻❗️ ➡️ now
  ↪️ now ▶️ 1700000000 🍇
    😀 🔤Later than November 2023🔤❗️
  🍉
🍉
```

```output
Later than November 2023
```

There is no method that gives the time more precisely than in seconds.

```keywords
time
current time
timestamp
Unix time
epoch
```

### Shell commands (🕴)

When upstream Emojicode runs natively, `🕴🐇💻 command❗️` runs the command in the shell (C's `system`). The command's output is mixed directly into the program's output. The comment in `💻.🍇` says it "returns the standard output", but the declaration has no return value and it returns nothing.

This IDE cannot run commands, so it does nothing.

```emojicode
🏁 🍇
  🕴🐇💻 🔤echo hello🔤❗️
  😀 🔤After the command🔤❗️
🍉
```

```output Result in this IDE
After the command
```

```keywords
system
shell
command
```

### Panic (🤯)

`🤯🐇💻 message❗️` prints `🤯 Program panicked: message` and makes the program crash. In this IDE, "Crashed" is shown instead of an exit code. It is meant for situations so wrong that the program cannot go on. For failures the program can recover from, use errors ([Error handling](../types/errors.md)).

```emojicode norun
🏁 🍇
  😀 🔤Start🔤❗️
  🤯🐇💻 🔤Impossible state🔤❗️
  😀 🔤This does not run🔤❗️
🍉
```

Running this example prints the following and then crashes.

```text
Start
🤯 Program panicked: Impossible state
```

```keywords
panic
abort
crash
```

## Unhandled errors (🤯 of 🚧)

`🚧` also has a method `🤯 location❗️`. When a method called with `🍺` throws an error, the runtime calls it, which stops the program ([When you know it will succeed](../types/errors.md)). It just calls `💻`'s `🤯`, with the message `Unhandled error at location: error message`. In this IDE, the location has the form `/work/main.🍇:line:column`.

It is marked `🔏`, so subclasses cannot override it. You can call it yourself, but normally you don't.

```keywords
unhandled error
🍺
```

## Threads (🧵)

When upstream Emojicode runs natively, `🆕🧵 closure❗️` creates a new thread and runs the closure on it. The code that created it moves on without waiting for the closure to finish. The closure is used for longer than the place where it was created, so you write it as `🍇🎍🥡` ([Closures that escape](../types/closures.md)).

| Syntax | Meaning |
|---|---|
| `🆕🧵 closure❗️` | Runs the closure on a new thread |
| `🛂 thread❗️` | Waits until that thread finishes (join) |
| `⏲🐇🧵 microseconds❗️` | Suspends the current thread for at least that many microseconds |

This IDE has no threads. `🆕🧵` runs the closure to the end on the spot and then returns, so `🛂` does nothing. Natively, it is not determined whether "After creating" or "Inside the thread" is printed first in the example below, but in this IDE the order is always this one.

```emojicode
🏁 🍇
  🆕🧵 🍇🎍🥡
    😀 🔤Inside the thread🔤❗️
  🍉❗️ ➡️ thread
  😀 🔤After creating🔤❗️
  🛂 thread❗️
  😀 🔤Done🔤❗️
🍉
```

```output Result in this IDE
Inside the thread
After creating
Done
```

`⏲` really does pause in this IDE too. The next example pauses for 1.5 seconds and checks that the times before and after differ by at least 1 second. Note that this IDE stops a run after 10 seconds, and time spent paused counts too.

```emojicode
🏁 🍇
  🕰🐇💻❗️ ➡️ before
  ⏲🐇🧵 1500000❗️
  ↪️ 🕰🐇💻❗️ ➖ before ▶️🙌 1 🍇
    😀 🔤At least 1 second passed🔤❗️
  🍉
🍉
```

```output
At least 1 second passed
```

```keywords
thread
std::thread
join
sleep
std::this_thread::sleep_for
concurrency
wait
```

## Mutexes (🔐)

A mutex makes sure that, when several threads touch the same data, only one thread touches it at a time. When upstream Emojicode runs natively, `🔒` waits while another thread holds the lock, and `🔐` does not wait: it returns 👍 if it could lock and 👎 if it could not.

| Syntax | Meaning |
|---|---|
| `🆕🔐❗️` | Creates a mutex |
| `🔒 mutex❗️` | Locks it. If another thread holds the lock, waits until it is released |
| `🔓 mutex❗️` | Releases the lock |
| `🔐 mutex❗️` | Tries to lock it. Returns whether it succeeded as a `👌` |

In the next example, three threads add to one counter. Surrounding the addition with `🔒` and `🔓` keeps the additions from interfering with each other, even natively.

```emojicode
🐇 🧮 🍇
  🖍🆕 total 🔢 ⬅️ 0
  🆕 🍇🍉
  ❗️ 🎒 n 🔢 🍇
    total ⬅️➕ n
  🍉
  ❗️ 📤 ➡️ 🔢 🍇
    ↩️ total
  🍉
🍉

🏁 🍇
  🆕🧮❗️ ➡️ counter
  🆕🔐❗️ ➡️ lock
  🆕🍨🐚🧵🍆❗️ ➡️ 🖍🆕 threads
  🔂 i 🆕⏩ 1 4❗️ 🍇
    🐻 threads 🆕🧵 🍇🎍🥡
      🔒 lock❗️
      🎒 counter i❗️
      🔓 lock❗️
    🍉❗️❗️
  🍉
  🔂 thread threads 🍇
    🛂 thread❗️
  🍉
  😀 🔡 📤 counter❗️❗️❗️
🍉
```

```output
6
```

In this IDE threads never compete, so `🔒` and `🔓` do nothing, and `🔐` always returns 👍, even when the mutex is already locked with `🔒`.

```emojicode
🏁 🍇
  🆕🔐❗️ ➡️ lock
  🔒 lock❗️
  ↪️ 🔐 lock❗️ 🍇
    😀 🔤Locked🔤❗️
  🍉
  🙅 🍇
    😀 🔤Could not lock🔤❗️
  🍉
  🔓 lock❗️
🍉
```

```output Result in this IDE
Locked
```

Natively, it should return 👎 while another thread holds the lock, but the official compiler's `🔐` is missing the code that returns whether it could lock, so the result is not guaranteed ([EJ030](../about/known-issues.md#EJ030)).

```keywords
mutex
std::mutex
lock
unlock
try_lock
mutual exclusion
```
