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

## Initializers that may throw an error

Initializers can also have `🚧 error type` after their parameters. This lets an initializer check its arguments and throw an error instead of creating an instance when a value cannot be used.

The caller handles it with `🆗`, `🔺`, or `🍺`, just like a method.

```emojicode
🐇 🎫 🍇
  🖍🆕 number 🔢

  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🚨🆕🚧 🔤The number must be at least 1🔤❗️
    🍉
    n ➡️ 🖍number
  🍉

  ❗️ 📛 ➡️ 🔢 🍇
    ↩️ number
  🍉
🍉

🐇 🏪 🍇
  🐇❗️ 🎟 n 🔢 ➡️ 🔡 🚧🚧 🍇
    🔺🆕🎫 n❗️ ➡️ ticket
    ↩️ 🔤Ticket 🧲🔡 📛 ticket❗️❗️🧲🔤
  🍉
🍉

🏁 🍇
  🆗 ticket 🆕🎫 3❗️ 🍇
    😀 🔡 📛 ticket❗️❗️❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉

  🆗 ticket 🆕🎫 0❗️ 🍇
    😀 🔡 📛 ticket❗️❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Error: 🧲💬 error❗️🧲🔤❗️
  🍉

  🍺🆕🎫 7❗️ ➡️ seven
  😀 🔡 📛 seven❗️❗️❗️

  🆗 text 🎟🐇🏪 0❗️ 🍇
    😀 text❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
3
Error: The number must be at least 1
7
The number must be at least 1
```

Calling it without handling the error causes the error `Call can raise s🚧 but error is not handled.`

```emojicode error
🐇 🎫 🍇
  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🚨🆕🚧 🔤The number must be at least 1🔤❗️
    🍉
  🍉
🍉

🏁 🍇
  🆕🎫 3❗️ ➡️ ticket
🍉
```

```text
but error is not handled.
```

Only classes can have initializers that may throw. Writing `🚧` on an initializer of a value type (`🕊`) causes the error `Only classes can have error-prone initializers.`

When an error is thrown, the instance variables that already have values are cleaned up. For this reason, at the point of `🚨`, every instance variable must be either initialized on all paths or not initialized on any path. A variable that may or may not be initialized depending on a condition causes a compile error.

```emojicode error
🐇 🎫 🍇
  🖍🆕 a 🔡
  🖍🆕 b 🔡
  🆕 n 🔢 🚧🚧 🍇
    ↪️ n ◀️ 1 🍇
      🔤A🔤 ➡️ 🖍a
    🍉
    🚨🆕🚧 🔤x🔤❗️
  🍉
🍉

🏁 🍇
🍉
```

```text
Initialization cannot be aborted: Variable a must either be initialized on all paths or not at all.
```

```keywords
failable initializer
throwing initializer
init throws
constructor exception
```

### When the superclass initializer throws

When a subclass initializer calls a superclass initializer that may throw with `⤴️🆕 …❗️`, you write neither `🔺` nor `🆗`. If the superclass initializer throws, the subclass initializer stops there, and the same error goes straight to whoever called the subclass initializer. The subclass initializer therefore needs `🚧` too.

Instance variables given values in either the superclass or the subclass initializer are cleaned up, but since the instance was never finished, neither the superclass's `♻️` nor the subclass's `♻️` runs.

```emojicode
🐇 🏷 🍇
  🖍🆕 text 🔡
  🆕 🍼 text 🔡 🍇🍉
  ♻️ 🍇
    😀 🔤cleaned up 🧲text🧲🔤❗️
  🍉
🍉

🐇 🐾 🍇
  🖍🆕 name 🏷
  🆕 n 🔡 🚧🚧 🍇
    🆕🏷 🔤parent tag🔤❗️ ➡️ 🖍name
    ↪️ n 🙌 🔤🔤 🍇
      🚨🆕🚧 🔤Empty name🔤❗️
    🍉
  🍉
  ♻️ 🍇
    😀 🔤♻️ of 🐾🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  🖍🆕 tag 🏷
  🆕 n 🔡 🚧🚧 🍇
    🆕🏷 🔤child tag🔤❗️ ➡️ 🖍tag
    ⤴️🆕 n❗️
    😀 🔤rest of the subclass initializer🔤❗️
  🍉
  ♻️ 🍇
    😀 🔤♻️ of 🐕🔤❗️
  🍉
🍉

🏁 🍇
  🆗 dog 🆕🐕 🔤🔤❗️ 🍇
    😀 🔤created🔤❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
cleaned up parent tag
cleaned up child tag
Empty name
```

If the subclass initializer has no `🚧`, you get the error `Cannot call an error-prone super initializer in a non error-prone initializer.`

```emojicode error
🐇 🐾 🍇
  🆕 🚧🚧 🍇🍉
🍉

🐇 🐕 🐾 🍇
  🆕 🍇
    ⤴️🆕❗️
  🍉
🍉

🏁 🍇
🍉
```

```text
Cannot call an error-prone super initializer in a non error-prone initializer.
```

The error type of the subclass initializer must be able to accept the error the superclass throws. If the superclass throws `🚧` but the subclass declares that it only throws another class that inherits from `🚧`, you get an error such as `Super initializer may raise s🚧 which cannot be reraised from this initializer as it is not compatible to _⚡.` Writing `🔺` before `⤴️🆕` causes the error `Provided value is not an error-prone call.`

When a subclass does not write its own initializer and inherits the superclass's as is, the possibility of throwing is inherited too, and the caller of `🆕Subclass❗️` handles it.

```keywords
super
superclass initializer
super initializer
inheritance
⤴️
```
