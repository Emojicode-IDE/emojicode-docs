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
