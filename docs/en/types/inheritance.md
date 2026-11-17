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

## Rules for overriding

A method marked `✒️` is called in place of the superclass's method, even through a variable of the superclass's type. So that code written to call the superclass's method keeps working, the subclass's method must follow a few rules.

The number and types of the arguments must be the same as in the superclass. If the count or a type differs, the compiler can't find the method being overridden, and you get the error `was declared ✒️ but does not override anything.` Only when you make a type narrower than the superclass's (`🐕` where the superclass has `🐾`) is the method found, but an argument of that type can't accept everything the superclass's method accepts, so that is an error too.

```emojicode error
🐇 🐾 🍇
  🆕 🍇🍉
🍉

🐇 🐕 🐾 🍇
🍉

🐇 🏠 🍇
  🆕 🍇🍉
  ❗️ 📥 a 🐾 🍇
    😀 🔤Welcome🔤❗️
  🍉
🍉

🐇 🏡 🏠 🍇
  ✒️ ❗️ 📥 a 🐕 🍇
    😀 🔤Dogs only🔤❗️
  🍉
🍉

🏁 🍇
  📥 🆕🏡❗️ 🆕🐕❗️❗️
🍉
```

```text
of argument 1 is not compatible
```

If you change the argument types without `✒️`, what happens depends on how you change them. A method whose argument type is wider than the superclass's, or unrelated to it, is not an override but a separate method with the same name ([Methods with the same name and different arguments](classes.md)). A method whose argument type is narrower does find a method to override, so it causes the error `If you want to override 📥 add ✒️.`

The return type can be the same as the superclass's or narrower. If the superclass returns `🐾`, the subclass may return `🐕`. When called on an instance of the subclass, the result can be used as the narrower type.

```emojicode
🐇 🐾 🍇
  🆕 🍇🍉
🍉

🐇 🐕 🐾 🍇
  ❗️ 🦴 🍇
    😀 🔤Chewing a bone🔤❗️
  🍉
🍉

🐇 🏠 🍇
  🆕 🍇🍉
  ❗️ 🐣 ➡️ 🐾 🍇
    ↩️ 🆕🐾❗️
  🍉
🍉

🐇 🏡 🏠 🍇
  ✒️ ❗️ 🐣 ➡️ 🐕 🍇
    ↩️ 🆕🐕❗️
  🍉
🍉

🏁 🍇
  🦴 🐣 🆕🏡❗️❗️❗️
🍉
```

```output
Chewing a bone
```

`🦴` is a method only `🐕` has, but you can call it because `🏡`'s `🐣` returns a `🐕`. If the return type doesn't fit into the superclass's (such as `🔢` where the superclass has `🐾`), you get the error `is not compatible to the return type defined in`.

The access level must be the same as the superclass's or wider. If the superclass's method is `❗️` (callable from anywhere) and the subclass makes it `🔐❗️` or `🔒❗️`, you get the error `Overriding method must be as accessible or more accessible than the overridden method.` If you mark nothing in the subclass, it gets the same access level as the superclass's method.

Finally, if the superclass's method doesn't let `👇` or an argument escape the method, the subclass's method must not let them escape either. Escaping means making a value outlive the method, for example by storing it in an instance variable or a list. Values passed to arguments that don't escape are compiled so that the caller can handle them more cheaply, for example by putting them on the stack. The other way round is fine: you can override a method that lets a value escape with one that doesn't.

```emojicode error
🐇 📝 🍇
  🖍🆕 items 🍨🐚🔡🍆
  🆕 🍇
    🆕🍨🐚🔡🍆❗️ ➡️ 🖍items
  🍉
  ❗️ 📥 s 🔡 🍇
    😀 s❗️
  🍉
🍉

🐇 🗂 📝 🍇
  ✒️ ❗️ 📥 s 🔡 🍇
    🐻 items s❗️
  🍉
🍉

🏁 🍇
  📥 🆕🗂❗️ 🔤note🔤❗️
🍉
```

```text
Function lets parameter "s" escape
```

If `👇` escapes, the error is `Function lets this context escape`. A superclass method marked `🔏` can't be overridden at all ([More on Classes](../advanced/classes.md)).

```keywords
override rules
overriding rules
covariant return type
Liskov substitution principle
does not override anything
not compatible to the return type
as accessible or more accessible
escape
escaping
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
