# Closures

## Treating functions as values

With `🍇 arguments ➡️ return type … 🍉` you can make a function without a name (a **closure**). You can store it in a variable or pass it as an argument. To call it, write `⁉️ closure arguments❗️`.

```emojicode
🏁 🍇
  🍇 x 🔢 ➡️ 🔢
    ↩️ x ✖️ 2
  🍉 ➡️ double

  😀 🔡 ⁉️ double 21❗️❗️❗️
🍉
```

```output
42
```

The type of a closure is written `🍇argument types ➡️ return type🍉`. The type of `double` above is `🍇🔢➡️🔢🍉`.

```keywords
lambda
lambda expression
anonymous function
closure
function object
std::function
function pointer
```

## Passing as an argument

If you write a method that takes a closure, the caller can decide “what to do.”

```emojicode
🐇 🧮 🍇
  🐇❗️ 🎡 f 🍇🔢➡️🔢🍉 times 🔢 start 🔢 ➡️ 🔢 🍇
    start ➡️ 🖍🆕 value
    🔂 i 🆕⏩ 0 times❗️ 🍇
      ⁉️ f value❗️ ➡️ 🖍value
    🍉
    ↩️ value
  🍉
🍉

🏁 🍇
  😀 🔡 🎡🐇🧮 🍇 x 🔢 ➡️ 🔢 ↩️ x ✖️ 2 🍉 10 1❗️❗️❗️
  😀 🔡 🎡🐇🧮 🍇 x 🔢 ➡️ 🔢 ↩️ x ➕ 3 🍉 4 0❗️❗️❗️
🍉
```

```output
1024
12
```

Sorting (`🦁`) and transforming (`🐰`) a list also take closures in this way ([Lists and Dictionaries](../basics/collections.md)).

```keywords
callback
higher-order function
function as argument
```

## Using outside variables (capture)

Inside a closure, you can use the variables from the place where it was made.

```emojicode
🏁 🍇
  🔤Hello🔤 ➡️ greeting
  🍇 name 🔡 ➡️ 🔡
    ↩️ 🔤🧲greeting🧲, 🧲name🧲!🔤
  🍉 ➡️ greet

  😀 ⁉️ greet 🔤Emoji🔤❗️❗️
🍉
```

```output
Hello, Emoji!
```

```keywords
capture
[=]
[&]
```

## Closures that escape (🎍🥡)

When a closure is used for longer than the place where it was made, for example when you return it or store it in an instance variable, add `🎍🥡`, as in `🍇🎍🥡`.

```emojicode
🐇 🏭 🍇
  🐇❗️ 🎛 factor 🔢 ➡️ 🍇🔢➡️🔢🍉 🍇
    ↩️ 🍇🎍🥡 x 🔢 ➡️ 🔢
      ↩️ x ✖️ factor
    🍉
  🍉
🍉

🏁 🍇
  🎛🐇🏭 3❗️ ➡️ triple
  😀 🔡 ⁉️ triple 5❗️❗️❗️
🍉
```

```output
15
```

The same goes for storing a closure in an instance variable: create the closure you pass with `🍇🎍🥡`. You can call the stored closure later with `⁉️`.

```emojicode
🐇 🔔 🍇
  🖍🆕 onRing 🍇🍉

  🆕 callback 🍇🍉 🍇
    callback ➡️ 🖍onRing
  🍉

  ❗️ 🛎 🍇
    ⁉️ onRing❗️
  🍉
🍉

🏁 🍇
  🆕🔔 🍇🎍🥡
    😀 🔤Ding🔤❗️
  🍉❗️ ➡️ bell
  🛎 bell❗️
  🛎 bell❗️
🍉
```

```output
Ding
Ding
```

If you forget `🎍🥡` and try to let the closure escape, you get a compile error.

```emojicode error
🐇 🏭 🍇
  🐇❗️ 🎛 factor 🔢 ➡️ 🍇🔢➡️🔢🍉 🍇
    ↩️ 🍇 x 🔢 ➡️ 🔢
      ↩️ x ✖️ factor
    🍉
  🍉
🍉

🏁 🍇
  🎛🐇🏭 3❗️ ➡️ triple
🍉
```

```keywords
escaping
@escaping
return a closure
return a function
```
