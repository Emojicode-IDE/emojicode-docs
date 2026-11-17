# Generics

## Deciding the type later (🐚)

If you write `🐚Name Constraint🍆` after a type's name, the type used inside can be decided when the type is used.

```emojicode
🐇 🎁 🐚T ⚪️🍆 🍇
  🖍🆕 content T

  🆕 🍼 content T 🍇🍉

  ❗️ 📤 ➡️ T 🍇
    ↩️ content
  🍉
🍉

🏁 🍇
  🆕🎁🐚🔡🍆 🔤secret🔤❗️ ➡️ textBox
  🆕🎁🐚🔢🍆 42❗️ ➡️ numberBox
  😀 📤 textBox❗️❗️
  😀 🔡 📤 numberBox❗️ ➕ 1❗️❗️
🍉
```

```output
secret
43
```

`🎁🐚🔡🍆` is “a box that holds a string,” and `🎁🐚🔢🍆` is “a box that holds an integer.” The return type of `📤` becomes `🔡` and `🔢` respectively. Lists (`🍨🐚🔢🍆`) and dictionaries are built with this same mechanism.

`⚪️` is the constraint, and it means “any type is fine.”

```keywords
template
typename
generics
generic type
type argument
type parameter
```

## Adding a constraint

If you write a protocol as the constraint, only types that conform to that protocol are accepted. In return, you can call that protocol's methods inside.

```emojicode
🐊 🏷 🍇
  ❗️ 🔡 ➡️ 🔡
🍉

🕊 🍎 🍇
  🐊 🏷
  🆕 🍇🍉
  ❗️ 🔡 ➡️ 🔡 🍇
    ↩️ 🔤apple🔤
  🍉
🍉

🐇 📦🐚T 🏷🍆 🍇
  🖍🆕 items 🍨🐚T🍆

  🆕 🍇
    🆕🍨🐚T🍆❗️ ➡️ 🖍items
  🍉

  ❗️ 📥 item T 🍇
    🐻 items item❗️
  🍉

  ❗️ 📋 🍇
    🔂 item items 🍇
      😀 🔤- 🧲🔡 item❗️🧲🔤❗️
    🍉
  🍉
🍉

🏁 🍇
  🆕📦🐚🍎🍆❗️ ➡️ box
  📥 box 🆕🍎❗️❗️
  📥 box 🆕🍎❗️❗️
  📋 box❗️
🍉
```

```output
- apple
- apple
```

How to make only a method take a type argument is covered in [More on Classes](../advanced/classes.md).

```keywords
constraint
concept
requires
where
bound
```

## Inheriting from a generic class

When the superclass is generic, write its type arguments after its name too. If you write a concrete type, you get a subclass fixed to that type. If you give the subclass its own `🐚…🍆` and pass that name on to the superclass, the subclass stays generic.

```emojicode
🐇 🎁 🐚T ⚪️🍆 🍇
  🖍🆕 content T

  🆕 🍼 content T 🍇🍉

  ❗️ 📤 ➡️ T 🍇
    ↩️ content
  🍉
🍉

🐇 🧮 🎁🐚🔢🍆 🍇
  ❗️ ⏫ ➡️ 🔢 🍇
    ↩️ content ✖️ 2
  🍉
🍉

🐇 🎀 🐚T ⚪️🍆 🎁🐚T🍆 🍇
  ❗️ 🎉 ➡️ 🍨🐚T🍆 🍇
    ↩️ 🍿 content content 🍆
  🍉
🍉

🏁 🍇
  🆕🧮 21❗️ ➡️ n
  😀 🔡 ⏫ n❗️❗️❗️
  🆕🎀🐚🔡🍆 🔤hi🔤❗️ ➡️ r
  😀 🆕🔡 🎉 r❗️ 🔤 🔤❗️❗️
  🖍🆕 box 🎁🐚🔡🍆
  r ➡️ 🖍box
  😀 📤 box❗️❗️
🍉
```

```output
42
hi hi
hi
```

`🧮` inherits from "a `🎁` that holds a `🔢`", so `content` can be used as a `🔢`. `🎀🐚🔡🍆` is a subclass of `🎁🐚🔡🍆`, so it can be stored in a `🎁🐚🔡🍆` variable. Neither defines an initializer, so both are created with the superclass's `🆕`.

When a subclass defines an initializer, it calls the superclass's initializer with `⤴️🆕`, just as with ordinary classes ([Inheritance](inheritance.md)). `🏷` is a subclass that stays generic, and `🎲` is one that fixes the type argument to `🔢`.

```emojicode
🐇 🎁 🐚T ⚪️🍆 🍇
  🖍🆕 content T

  🆕 🍼 content T 🍇🍉

  ❗️ 📤 ➡️ T 🍇
    ↩️ content
  🍉
🍉

🐇 🏷 🐚T ⚪️🍆 🎁🐚T🍆 🍇
  🖍🆕 label 🔡

  🆕 🍼 label 🔡 value T 🍇
    ⤴️🆕 value❗️
  🍉

  ❗️ 📛 ➡️ 🔡 🍇
    ↩️ label
  🍉
🍉

🐇 🎲 🎁🐚🔢🍆 🍇
  🆕 🍇
    ⤴️🆕 6❗️
  🍉
🍉

🏁 🍇
  🆕🏷🐚🔢🍆 🔤apple🔤 3❗️ ➡️ t
  😀 🔤🧲📛 t❗️🧲: 🧲🔡 📤 t❗️❗️🧲🔤❗️
  🆕🏷🐚🔡🍆 🔤color🔤 🔤red🔤❗️ ➡️ c
  😀 🔤🧲📛 c❗️🧲: 🧲📤 c❗️🧲🔤❗️
  😀 🔡 📤 🆕🎲❗️❗️❗️❗️
🍉
```

```output
apple: 3
color: red
6
```

When you pass a subclass's type argument on to the superclass, its constraint must satisfy the superclass's constraint. If the superclass has `🐚T 🔢🍆` but the subclass keeps `🐚T ⚪️🍆`, you get the error `is not compatible to constraint`.

In the official compiler, calling `⤴️🆕` in the initializer of a subclass of a generic class has a bug: the type arguments are not passed to the superclass's initializer, and the program does not work correctly. This IDE fixes it (see [Fixed Bugs](../about/patched.md)).

```keywords
generic subclass
inheriting a generic class
class template inheritance
passing type arguments
```

## Generic protocols

Protocols can take type arguments too, with `🐊 name🐚name constraint🍆`. A conforming type writes the type arguments it chooses, as in `🐊 🗃🐚🔢 🔡🍆`, and implements the methods with those types.

```emojicode
🐊 🗃 🐚K ⚪️ V ⚪️🍆 🍇
  ❗️ 🔍 key K ➡️ 🍬V
🍉

🐇 📒 🍇
  🖍🆕 names 🍨🐚🔡🍆

  🆕 🍇
    🍿 🔤zero🔤 🔤one🔤 🔤two🔤 🍆 ➡️ 🖍names
  🍉

  🐊 🗃🐚🔢 🔡🍆

  ❗️ 🔍 key 🔢 ➡️ 🍬🔡 🍇
    ↪️ key ◀️ 0 👐 key ▶️🙌 📏 names❓ 🍇
      ↩️ 🤷‍♀️
    🍉
    ↩️ 🐽 names key❗️
  🍉
🍉

🏁 🍇
  🖍🆕 store 🗃🐚🔢 🔡🍆
  🆕📒❗️ ➡️ 🖍store
  ↪️ 🔍 store 1❗️ ➡️ name 🍇
    😀 name❗️
  🍉
  ↪️ 🔍 store 5❗️ 🙌 🤷‍♀️ 🍇
    😀 🔤not found🔤❗️
  🍉
🍉
```

```output
one
not found
```

`📒` is "a `🗃` that you look up with a `🔢` and that returns a `🔡`". A `🗃🐚🔢 🔡🍆` variable can hold a value of any type that conforms to `🗃` with the same type arguments. A generic class can also conform using its own type argument, as in `🐊 🗃🐚🔡 T🍆`.

Protocols themselves are explained in [Protocols](protocols.md).

```keywords
generic protocol
generic interface
protocol with type arguments
```
