# Type Values and Casting

## Types that hold anything (⚪️ and 🔵)

`⚪️` is a type that can hold any value. `🔵` is a type that can hold an instance of any class (value types and numbers do not fit).

```emojicode
🏁 🍇
  🆕🍨🐚⚪️🍆❗️ ➡️ 🖍🆕 things
  🐻 things 42❗️
  🐻 things 🔤string🔤❗️
  🐻 things 👍❗️
  😀 🔡 📏 things❓❗️❗️
🍉
```

```output
3
```

```keywords
any
std::any
void*
Object
anything
```

## Casting (🔲)

To use a value stored in something like `⚪️` as its original type, cast it with `🔲 value type`. The result is an optional; if the value is not of that type, you get no value.

```emojicode
🏁 🍇
  🍿 42 🔤abc🔤 7 🍆 ➡️ things
  🔂 thing things 🍇
    ↪️ 🔲 thing 🔢 ➡️ n 🍇
      😀 🔤Integer 🧲🔡 n❗️🧲🔤❗️
    🍉
    🙅↪️ 🔲 thing 🔡 ➡️ s 🍇
      😀 🔤String 🧲s🧲🔤❗️
    🍉
  🍉
🍉
```

```output
Integer 42
String abc
Integer 7
```

A `🍿 … 🍆` of literals becomes a `🍨🐚⚪️🍆` when the elements have different types.

```keywords
cast
casting
dynamic_cast
std::any_cast
type conversion
instanceof
is
as
downcast
```

## Using types as values

The name of a class, value type, or enumeration can be used as a value by putting a marker in front of it. The `🐇Type` you write when calling a type method ([Classes](classes.md)) is exactly that.

```emojicode
🐇 🌷 🍇
  🐇❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤Tulip🔤
  🍉
🍉

🐇 🌹 🌷 🍇
  ✒️ 🐇❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤Rose🔤
  🍉
🍉

🏁 🍇
  😀 🏷🐇🌷❗️❗️
  😀 🏷🐇🌹❗️❗️
🍉
```

```output
Tulip
Rose
```

Type methods can also be overridden in a subclass with `✒️`.

The marker depends on the kind of type, and using a different one causes a compile error.

| Syntax | Kind of type |
|---|---|
| `🐇Type` | class |
| `🕊Type` | value type |
| `🔘Type` | enumeration |
| `🐊Type` | protocol |

```emojicode
🕊 📐 🍇
  🐇❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤value type🔤
  🍉
🍉

🔘 🚦 🍇
  🆕▶️🔴
  🆕▶️🍏
  🐇❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤enumeration🔤
  🍉
🍉

🏁 🍇
  😀 🏷🕊📐❗️❗️
  😀 🏷🔘🚦❗️❗️
🍉
```

```output
value type
enumeration
```

The marker for an enumeration is `🔘`, the same emoji used to define one. However, when the compiler prints the type of a type value, for example in an error message, the marker for an enumeration becomes `🦃` (classes get `🐇`, value types `🕊`, and protocols `🐊`, the same as when you write them). `🦃` only appears in messages; you cannot write it in a program. If you write `🦃🚦`, `🦃` is not read as a marker, and you get an unrelated error such as `Unexpected token RightProductionOperator.`

```emojicode error
🔘 🚦 🍇
  🆕▶️🔴
🍉

🏁 🍇
  🖍🆕 n 🔢
  🔘🚦 ➡️ 🖍n
🍉
```

```text
🦃_🚦 is not compatible to s🔢.
```

When you use the wrong marker, the error tells you the right one.

```emojicode error
🔘 🚦 🍇
  🆕▶️🔴
🍉

🏁 🍇
  🐇🚦 ➡️ t
🍉
```

```text
Enumeration type must be prefixed with 🔘: 🔘🚦
```

`🐊Type` is in the compiler's list of markers, but as far as we tried, writing `🐊Protocol` as a value inside a method causes the error `Unexpected type.`, and we found no situation where it works. Writing it as an argument type gives the same error. The only uses in the official tests are cases that write it as an argument type and check that it fails (`tests/reject/typeAsValueIncompatibleClToProtocol.emojic` and others), and the standard library does not use it.

```keywords
type
class object
metaclass
typeid
🔘
🦃
type value marker
```

## Creating instances from a type value (⬛️)

You can store a type in a variable and create an instance of that type with `🆕⬛️ variable❗️`. So that subclasses can be created this way too, mark the initializer with `🔑` ([More on Classes](../advanced/classes.md)).

```emojicode
🐇 🐾 🍇
  🔑 🆕 🍇🍉
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤animal🔤
  🍉
🍉

🐇 🐕 🐾 🍇
  🔑 🆕 🍇 ⤴️🆕❗️ 🍉
  ✒️ ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤dog🔤
  🍉
🍉

🏁 🍇
  🍿 🐇🐾 🐇🐕 🍆 ➡️ kinds
  🔂 kind kinds 🍇
    🆕⬛️ kind❗️ ➡️ animal
    😀 🏷 animal❗️❗️
  🍉
🍉
```

```output
animal
dog
```

When you treat types as values, the compiler warns that runtime type information for type values is not yet complete, but this example works correctly.

```keywords
factory
type value
dynamic creation
⬛
```

## Is it the same instance? (😜)

`🙌` checks whether values are equal, but `😜` checks whether two things are the very same instance.

```emojicode
🐇 🐟 🍇
  🆕 🍇🍉
🍉

🏁 🍇
  🆕🐟❗️ ➡️ a
  a ➡️ b
  🆕🐟❗️ ➡️ c
  ↪️ a 😜 b 🍇
    😀 🔤a and b are the same🔤❗️
  🍉
  ↪️ ❎ a 😜 c❗️ 🍇
    😀 🔤a and c are different🔤❗️
  🍉
🍉
```

```output
a and b are the same
a and c are different
```

```keywords
identity
===
pointer comparison
address comparison
```

## A type combining several protocols (🍱)

`🍱Protocol Protocol🍱` represents “a type that conforms to both protocols.”

```emojicode
🐊 🔊 🍇
  ❗️ 🗣 ➡️ 🔡
🍉

🐊 🏃 🍇
  ❗️ 🦵 ➡️ 🔡
🍉

🐇 🐕 🍇
  🐊 🔊
  🐊 🏃
  🆕 🍇🍉
  ❗️ 🗣 ➡️ 🔡 🍇
    ↩️ 🔤Woof🔤
  🍉
  ❗️ 🦵 ➡️ 🔡 🍇
    ↩️ 🔤Tap tap tap🔤
  🍉
🍉

🐇 🎪 🍇
  🐇❗️ 🎤 pet 🍱🔊🏃🍱 🍇
    😀 🗣 pet❗️❗️
    😀 🦵 pet❗️❗️
  🍉
🍉

🏁 🍇
  🎤🐇🎪 🆕🐕❗️❗️
🍉
```

```output
Woof
Tap tap tap
```

```keywords
multiple interfaces
multiple inheritance
protocol composition
&
```

## Saving effort when writing types (📣 and ⚫)

`📣 value type` specifies the type of a literal. For example, `🍿 🍆` alone does not tell the compiler the type of the empty list, so you write the type with `📣`.

```emojicode
🏁 🍇
  📣 🍿🍆 🍨🐚🔡🍆 ➡️ 🖍🆕 names
  🐻 names 🔤Emoji🔤❗️
  😀 🔡 📏 names❓❗️❗️
🍉
```

```output
1
```

```keywords
type annotation
type inference
empty list
auto
```

### Letting the compiler infer the type (⚫️)

The compiler has a mechanism where you write `⚫️` in place of a type to have it inferred. However, everywhere we tried (assigning to a variable, arguments, return values), it gave the error `Cannot infer ⚫️.`, and we could not find any situation where it works. Neither the official tests nor the standard library use it anywhere.

```emojicode error
🏁 🍇
  🖍🆕 names 🍨🐚🔡🍆
  🆕⚫️❗️ ➡️ 🖍names
🍉
```

```text
Cannot infer ⚫️.
```

```keywords
type inference
auto
⚫
```
