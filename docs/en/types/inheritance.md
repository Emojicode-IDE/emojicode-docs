# Inheritance

## Choosing a superclass

If you write another class name after the class name, the class **inherits** from that class. You can use the superclass's instance variables and methods as they are.

```emojicode
🐇 🐾 🍇
  🖍🆕 name 🔡
  🆕 🍼 name 🔡 🍇🍉

  ❗️ 🗣 🍇
    😀 🔤🧲name🧲 made a sound🔤❗️
  🍉

  ❗️ 🚶 🍇
    😀 🔤🧲name🧲 walked🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  ✒️ ❗️ 🗣 🍇
    😀 🔤🧲name🧲: Woof!🔤❗️
  🍉
🍉

🏁 🍇
  🆕🐕 🔤Rex🔤❗️ ➡️ rex
  🗣 rex❗️
  🚶 rex❗️
🍉
```

```output
Rex: Woof!
Rex walked
```

`🐇 🐕 🐾` means “`🐕`, which inherits from `🐾`.” `🐕` has no `🆕` of its own, so the superclass's `🆕` is used as is.

```keywords
inheritance
extends
superclass
parent class
base class
derived class
subclass
child class
```

## Overriding (✒️)

When you redefine a superclass method in a subclass, put `✒️` in front of it. If you forget it, you get a compile error, so you can never override a method by accident.

```emojicode error
🐇 🐾 🍇
  🆕 🍇🍉
  ❗️ 🗣 🍇
    😀 🔤…🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  ❗️ 🗣 🍇
    😀 🔤Woof🔤❗️
  🍉
🍉

🏁 🍇
  🗣 🆕🐕❗️❗️
🍉
```

```keywords
override
virtual
overriding
```

## Calling the superclass's method (⤴️)

To call the superclass's method from inside an overriding method, use `⤴️`.

```emojicode
🐇 🐾 🍇
  🆕 🍇🍉
  ❗️ 🗣 🍇
    😀 🔤(animal sound)🔤❗️
  🍉
🍉

🐇 🐕 🐾 🍇
  ✒️ ❗️ 🗣 🍇
    ⤴️🗣❗️
    😀 🔤Woof!🔤❗️
  🍉
🍉

🏁 🍇
  🗣 🆕🐕❗️❗️
🍉
```

```output
(animal sound)
Woof!
```

When you write an initializer in a subclass, call the superclass's initializer inside it with `⤴️🆕 …❗️`.

```emojicode
🐇 🐾 🍇
  🖍🆕 name 🔡
  🆕 🍼 name 🔡 🍇🍉
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ name
  🍉
🍉

🐇 🐈 🐾 🍇
  🖍🆕 lives 🔢
  🆕 name 🔡 🍇
    9 ➡️ 🖍lives
    ⤴️🆕 name❗️
  🍉
  ❗️ 📋 🍇
    😀 🔤🧲🏷👇❗️🧲 has 🧲🔡 lives❗️🧲 lives🔤❗️
  🍉
🍉

🏁 🍇
  📋 🆕🐈 🔤Tama🔤❗️❗️
🍉
```

```output
Tama has 9 lives
```

Store values in the subclass's instance variables first, and then call the superclass's initializer.

```keywords
super
superclass method
base class call
parent method
```

## Treating instances as the superclass type

You can put instances of a subclass into variables or lists of the superclass type. When you call a method, each subclass's own method runs.

```emojicode
🐇 🐾 🍇
  🆕 🍇🍉
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤…🔤
  🍉
🍉

🐇 🐕 🐾 🍇
  ✒️ ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Woof🔤
  🍉
🍉

🐇 🐈 🐾 🍇
  ✒️ ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Meow🔤
  🍉
🍉

🏁 🍇
  🆕🍨🐚🐾🍆❗️ ➡️ 🖍🆕 animals
  🐻 animals 🆕🐕❗️❗️
  🐻 animals 🆕🐈❗️❗️
  🔂 a animals 🍇
    😀 🗣 a❗️❗️
  🍉
🍉
```

```output
Woof
Meow
```

```keywords
polymorphism
virtual function
dynamic dispatch
```
