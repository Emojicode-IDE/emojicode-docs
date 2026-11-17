# Optionals

## There might be a value, or there might not

When you turn a string into a number, or look up a value in a dictionary by key, the operation “might fail” or the value “might not be found.” Results like these are represented by **optionals**. You write the type by putting `🍬` in front, like `🍬🔢`.

No value is represented by `🤷‍♀️`.

```emojicode
🏁 🍇
  🔢 🔤123🔤 10❗️ ➡️ a
  🔢 🔤abc🔤 10❗️ ➡️ b
  ↪️ a 🙌 🤷‍♀️ 🍇
    😀 🔤a has no value🔤❗️
  🍉
  ↪️ b 🙌 🤷‍♀️ 🍇
    😀 🔤b has no value🔤❗️
  🍉
🍉
```

```output
b has no value
```

```keywords
optional
std::optional
nullopt
null
nullptr
nil
None
no value
Maybe
```

### 🤷‍♂️ and 🤷 work too

No value can also be written as `🤷‍♂️`, or as the gender-neutral `🤷`. They all mean exactly the same as `🤷‍♀️`. During lexing, the compiler treats any emoji starting with `🤷` as “no value” and ignores whatever follows it, such as a ZWJ, ♂ or ♀, or a skin tone modifier. The standard library also uses `🤷‍♂️`.

```emojicode
🏁 🍇
  🖍🆕 a 🍬🔢
  🤷 ➡️ 🖍a
  ↪️ a 🙌 🤷‍♂️ 🍇
    😀 🔤same as 🤷‍♂️🔤❗️
  🍉
  ↪️ a 🙌 🤷‍♀️ 🍇
    😀 🔤same as 🤷‍♀️🔤❗️
  🍉
🍉
```

```output
same as 🤷‍♂️
same as 🤷‍♀️
```

Whichever form you use, it can only appear where an optional is expected. Assigning it directly to a variable whose type is unknown causes the error `🤷‍ can only be used when an optional is expected.`

```emojicode error
🏁 🍇
  🤷 ➡️ x
🍉
```

```text
can only be used when an optional is expected.
```

```keywords
🤷‍♂️
🤷
shrug
```

## Unwrapping (↪️ … ➡️)

You cannot use an optional in calculations as it is. If you write `↪️ optional ➡️ name 🍇 … 🍉`, the block runs only when there is a value, with the value given that name.

```emojicode
🏁 🍇
  ↪️ 🔢 🔤123🔤 10❗️ ➡️ n 🍇
    😀 🔡 n ✖️ 2❗️❗️
  🍉
  🙅 🍇
    😀 🔤Not a number🔤❗️
  🍉
🍉
```

```output
246
```

This is the safest way. Even if you forget to write what happens when there is no value in `🙅`, the program will not stop.

```keywords
if let
has_value
value_or
unwrap
```

## When you know there is a value (🍺)

`🍺 optional` takes the value out directly. However, **if there is no value, the program stops there.** Use it only when you can be sure there is a value.

```emojicode
🏁 🍇
  🍺 🔢 🔤42🔤 10❗️ ➡️ n
  😀 🔡 n ➕ 1❗️❗️
🍉
```

```output
43
```

```keywords
force unwrap
value()
*opt
!
```

## Making your own

If you give a function's (method's) return value or a variable a type with `🍬`, it can hold no value.

```emojicode
🏁 🍇
  🖍🆕 best 🍬🔢
  🤷‍♀️ ➡️ 🖍best
  🔂 n 🍿 3 9 4 🍆 🍇
    ↪️ best ➡️ b 🍇
      ↪️ n ▶️ b 🍇
        n ➡️ 🖍best
      🍉
    🍉
    🙅 🍇
      n ➡️ 🖍best
    🍉
  🍉
  ↪️ best ➡️ b 🍇
    😀 🔤The largest is 🧲🔡 b❗️🧲🔤❗️
  🍉
🍉
```

```output
The largest is 9
```
