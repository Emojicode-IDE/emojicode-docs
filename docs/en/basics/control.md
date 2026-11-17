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

## Hinting how likely a branch is (🎍🐌 and 🎍🏎)

Writing `🎍🐌` after the condition of `↪️` or `🙅↪️`, just before `🍇`, tells the compiler that the condition rarely holds; writing `🎍🏎` tells it that the condition usually holds. You can also write them when unwrapping an optional with `↪️ … ➡️ name`.

```emojicode
🏁 🍇
  🍿 3 0 7 🍆 ➡️ list
  🔂 n list 🍇
    ↪️ n 🙌 0 🎍🐌 🍇
      😀 🔤zero🔤❗️
    🍉
    🙅↪️ n ▶️ 5 🎍🏎 🍇
      😀 🔤large🔤❗️
    🍉
    🙅 🍇
      😀 🔤small🔤❗️
    🍉
  🍉
  ↪️ 🔢 🔤12🔤 10❗️ ➡️ m 🎍🏎 🍇
    😀 🔡 m❗️❗️
  🍉
🍉
```

```output
small
zero
large
12
```

The result is the same as without the hint. The compiler only passes it on as LLVM branch weights (1 to 99 for the taken side with `🎍🐌`, 99 to 1 with `🎍🏎`) when generating machine code, which may change how the code is laid out so that the frequently taken side runs faster. In the standard library, `🎍🐌` is attached to the `↪️` checks for out-of-range list indices and insufficient capacity.

You can only write them after the condition of `↪️` and `🙅↪️`. Writing them after `🙅` or `🔁` causes the error `Expected BlockBegin but instead found Decorator(🐌).` Only `🐌` and `🏎` can follow `🎍`; any other emoji causes the same error.

```emojicode error
🏁 🍇
  1 ➡️ n
  🔁 n ◀️ 3 🎍🐌 🍇
    😀 🔤x🔤❗️
  🍉
🍉
```

```text
Expected BlockBegin but instead found Decorator(🐌).
```

```keywords
likely
unlikely
__builtin_expect
[[likely]]
[[unlikely]]
branch prediction
branch weights
optimization hint
```
