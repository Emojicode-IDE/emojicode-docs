# Classes

## Creating a class (🐇)

You create a class with `🐇 name 🍇 … 🍉`. The name is a single emoji. Inside, you write instance variables, initializers (`🆕`), and methods.

```emojicode
🐇 🐕 🍇
  🖍🆕 name 🔡

  🆕 🍼 name 🔡 🍇🍉

  ❗️ 🗣 🍇
    😀 🔤🧲name🧲: Woof!🔤❗️
  🍉
🍉

🏁 🍇
  🆕🐕 🔤Rex🔤❗️ ➡️ rex
  🗣 rex❗️
🍉
```

```output
Rex: Woof!
```

Let's look at each part.

- `🖍🆕 name 🔡` … An instance variable (member variable). Each instance has its own value.
- `🆕 🍼 name 🔡 🍇🍉` … An initializer (constructor). An argument marked with `🍼` is stored directly in the instance variable with the same name.
- `❗️ 🗣 🍇 … 🍉` … A method. Inside it, you can use instance variables by name alone.
- `🆕🐕 🔤Rex🔤❗️` … Creates an instance.
- `🗣 rex❗️` … Calls a method. The method's emoji comes first, and the object comes after.

```keywords
class
object
instance
new
member variable
field
member
constructor
initializer
```

## Arguments and return values

Write a method's arguments as a series of `name type`. If it returns a value, write `➡️ type` and return the value with `↩️`.

```emojicode
🐇 🧮 🍇
  🖍🆕 total 🔢

  🆕 🍇
    0 ➡️ 🖍total
  🍉

  ❗️ 📥 n 🔢 🍇
    total ⬅️➕ n
  🍉

  ❗️ 🧾 ➡️ 🔢 🍇
    ↩️ total
  🍉
🍉

🏁 🍇
  🆕🧮❗️ ➡️ calc
  📥 calc 3❗️
  📥 calc 4❗️
  😀 🔡 🧾 calc❗️❗️❗️
🍉
```

```output
7
```

Inside an initializer, you store a value in an instance variable with `➡️ 🖍name`. You can also give the initial value in the declaration with `⬅️` (`🖍🆕 total 🔢 ⬅️ 0`).

Instance variables cannot be seen from outside the class. If you want to show a value to the outside, provide a method that returns it, like `🧾` above.

```keywords
method
member function
argument
parameter
return value
return
getter
private
encapsulation
```

## Named initializers

With `🆕 ▶️name`, you can create a named initializer. This is handy when there are several ways to create an instance.

```emojicode
🐇 ⏱ 🍇
  🖍🆕 seconds 🔢

  🆕 ▶️⏲ minutes 🔢 🍇
    minutes ✖️ 60 ➡️ 🖍seconds
  🍉

  🆕 ▶️⏳ 🍼 seconds 🔢 🍇🍉

  ❗️ 🔡 ➡️ 🔡 🍇
    ↩️ 🔤🧲🔡 seconds❗️🧲 seconds🔤
  🍉
🍉

🏁 🍇
  😀 🔡 🆕⏱▶️⏲ 2❗️❗️❗️
  😀 🔡 🆕⏱▶️⏳ 90❗️❗️❗️
🍉
```

```output
120 seconds
90 seconds
```

If you create a method named `🔡`, like `❗️ 🔡 ➡️ 🔡`, you can turn a value into a string with `🔡 value❗️`.

```keywords
overload
multiple constructors
named constructor
factory
toString
to_string
```

## This instance (👇)

Inside a method, the instance itself is `👇`. You use it to call another method of the same instance.

```emojicode
🐇 🐈 🍇
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Meow🔤
  🍉

  ❗️ 📢 🍇
    😀 🔤🧲🗣👇❗️🧲 🧲🗣👇❗️🧲🔤❗️
  🍉

  🆕 🍇🍉
🍉

🏁 🍇
  📢 🆕🐈❗️❗️
🍉
```

```output
Meow Meow
```

```keywords
this
self
```

## Type methods (🐇❗️)

A method created with `🐇❗️` is called on the type itself, not on an instance. You call it with `method 🐇type arguments❗️`.

```emojicode
🐇 🎲 🍇
  🐇❗️ 🔢 sides 🔢 ➡️ 🔡 🍇
    ↩️ 🔤A 🧲🔡 sides❗️🧲-sided die🔤
  🍉
🍉

🏁 🍇
  😀 🔢🐇🎲 6❗️❗️
🍉
```

```output
A 6-sided die
```

```keywords
static
static method
class method
static member function
```

## Methods that cannot be called from outside (🔒)

If you put `🔒` before a method, it can be called only from inside that class.

```emojicode error
🐇 🏦 🍇
  🆕 🍇🍉
  🔒❗️ 🔑 ➡️ 🔡 🍇
    ↩️ 🔤secret🔤
  🍉
🍉

🏁 🍇
  😀 🔑 🆕🏦❗️❗️❗️
🍉
```

Other access levels, such as `🔐`, which can also be called from subclasses, are covered in [More on Classes](../advanced/classes.md).

```keywords
private
access modifier
access control
```

## Emoji you cannot use as names

You can use most emoji as names for methods and types, but you cannot use these:

- Emoji reserved as operators or keywords, such as `➕` `✖️` `🔁` `↩️`
- Relatively new emoji, such as `🟢` `🟡` (because the compiler's list of known emoji is old; see [Emojicode Language Bugs](../about/known-issues.md))

If you use one of them, you get the compile error `Expected Identifier`.

```emojicode error
🐇 🧮 🍇
  🆕 🍇🍉
  ❗️ ➕ n 🔢 🍇
  🍉
🍉

🏁 🍇
  🆕🧮❗️ ➡️ calc
🍉
```

```text
Expected Identifier
```

```keywords
naming
name
identifier
reserved word
keyword
```
