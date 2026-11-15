# Error Handling

## Methods that may throw an error (🚧)

A method with `🚧 ErrorType` after its return type may throw an error. For the error type, you can use the standard library's `🚧` (an error that carries a message). You throw an error with `🚨`.

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤Tried to divide by 0🔤❗️
    🍉
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  🆗 result 🍰🐇🧮 10 2❗️ 🍇
    😀 🔡 result❗️❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉

  🆗 result 🍰🐇🧮 1 0❗️ 🍇
    😀 🔡 result❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Error: 🧲💬 error❗️🧲🔤❗️
  🍉
🍉
```

```output
5
Error: Tried to divide by 0
```

`🚧🚧` means “may throw an error of type `🚧`” (the first `🚧` is the marker, the second is the error type).

```keywords
throw
exception
error
raise
```

## Catching (🆗 / 🙅)

With `🆗 name call 🍇 … 🍉 🙅 errorName 🍇 … 🍉` you handle success and error separately. As in the example above, you get the error's message with `💬 error❗️`.

You cannot call a method that may throw an error without catching it.

```emojicode error
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  😀 🔡 🍰🐇🧮 10 2❗️❗️❗️
🍉
```

```keywords
try
catch
try-catch
exception handling
catch an error
```

## Leaving it to the caller (🔺)

Inside a method that throws errors, calling with `🔺` passes the error straight on to the caller.

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤Tried to divide by 0🔤❗️
    🍉
    ↩️ a ➗ b
  🍉

  🐇❗️ 📊 total 🔢 count 🔢 ➡️ 🔡 🚧🚧 🍇
    🔺🍰🐇🧮 total count❗️ ➡️ average
    ↩️ 🔤Average 🧲🔡 average❗️🧲🔤
  🍉
🍉

🏁 🍇
  🆗 text 📊🐇🧮 0 0❗️ 🍇
    😀 text❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
Tried to divide by 0
```

```keywords
rethrow
propagate
propagation
throws
```

## When you know it will succeed (🍺)

Calling with `🍺` takes out just the result without catching the error. **If an error occurs, the program stops there.**

```emojicode
🐇 🧮 🍇
  🐇❗️ 🍰 a 🔢 b 🔢 ➡️ 🔢 🚧🚧 🍇
    ↪️ b 🙌 0 🍇
      🚨🆕🚧 🔤Tried to divide by 0🔤❗️
    🍉
    ↩️ a ➗ b
  🍉
🍉

🏁 🍇
  😀 🔡 🍺🍰🐇🧮 9 3❗️❗️❗️
🍉
```

```output
3
```
