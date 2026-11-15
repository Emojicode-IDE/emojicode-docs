# Conditionals

## ↪️ If

`↪️ condition 🍇 … 🍉` runs the block only when the condition is `👍` (true).

```emojicode
🏁 🍇
  18 ➡️ age
  ↪️ age ▶️🙌 18 🍇
    😀 🔤You are an adult🔤❗️
  🍉
🍉
```

```output
You are an adult
```

```keywords
if
if statement
condition
```

## 🙅 Otherwise

If you follow it with `🙅 🍇 … 🍉`, that block runs when the condition is `👎`. To chain more conditions, use `🙅↪️`.

```emojicode
🏁 🍇
  72 ➡️ score
  ↪️ score ▶️🙌 80 🍇
    😀 🔤A🔤❗️
  🍉
  🙅↪️ score ▶️🙌 60 🍇
    😀 🔤B🔤❗️
  🍉
  🙅 🍇
    😀 🔤C🔤❗️
  🍉
🍉
```

```output
B
```

The conditions are checked from top to bottom, and only the first block whose condition matches runs.

```keywords
else
else if
elif
otherwise
```

## Comparing

| Syntax | Meaning |
|---|---|
| `a 🙌 b` | Equal |
| `a ◀️ b` | Less than |
| `a ▶️ b` | Greater than |
| `a ◀️🙌 b` | Less than or equal |
| `a ▶️🙌 b` | Greater than or equal |

For “not equal,” negate the result of `🙌` with `❎`.

```emojicode
🏁 🍇
  3 ➡️ n
  ↪️ ❎ n 🙌 0❗️ 🍇
    😀 🔤Not 0🔤❗️
  🍉
🍉
```

```output
Not 0
```

`❎ … ❗️` is a call to the method that flips the truth value of what is inside.

```keywords
==
!=
not equal
<
>
<=
>=
comparison operators
not
negation
```

## Combining conditions

`🤝` means “and,” and `👐` means “or.”

```emojicode
🏁 🍇
  25 ➡️ temperature
  👍 ➡️ sunny
  ↪️ temperature ▶️🙌 20 🤝 sunny 🍇
    😀 🔤Perfect day for a walk🔤❗️
  🍉
  ↪️ temperature ◀️ 0 👐 temperature ▶️ 35 🍇
    😀 🔤Dangerous outside🔤❗️
  🍉
  🙅 🍇
    😀 🔤An ordinary day🔤❗️
  🍉
🍉
```

```output
Perfect day for a walk
An ordinary day
```

`🤝` does not look at the right side if the left side is `👎`. `👐` does not look at the right side if the left side is `👍`.

```keywords
&&
||
and
or
logical operators
short-circuit evaluation
```

## Conditions must be 👌

The condition of `↪️` must be a Boolean (`👌`). Writing a number or a string there directly causes a compile error.

```emojicode error
🏁 🍇
  1 ➡️ n
  ↪️ n 🍇
    😀 🔤1🔤❗️
  🍉
🍉
```
