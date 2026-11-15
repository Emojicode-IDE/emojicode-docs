# Bitwise Operations and Numbers

## Bitwise operations

| Syntax | Meaning |
|---|---|
| `a ⭕ b` | bitwise AND |
| `a 💢 b` | bitwise OR |
| `a ❌ b` | bitwise XOR |
| `a 👈 n` | shift left by n bits |
| `a 👉 n` | shift right by n bits (0s come in at the top) |
| `❎ a❗️` | invert the bits (NOT) |

```emojicode
🏁 🍇
  12 ➡️ a  💭 1100 in binary
  10 ➡️ b  💭 1010 in binary
  😀 🔡 a ⭕ b 2❗️❗️
  😀 🔡 a 💢 b 2❗️❗️
  😀 🔡 a ❌ b 2❗️❗️
  😀 🔡 1 👈 4❗️❗️
  😀 🔡 256 👉 2❗️❗️
🍉
```

```output
1000
1110
110
16
64
```

`👉` puts 0s into the vacated top bits even for negative numbers. Unlike `>>` on C++'s `int64_t`, `-16 👉 2` is not -4 but a large positive number.

```emojicode
🏁 🍇
  😀 🔡 -16 👉 2❗️❗️
  😀 🔡 -1 👉 60❗️❗️
🍉
```

```output
4611686018427387900
15
```

```keywords
&
|
^
<<
>>
~
bitwise
bit operations
bit shift
logical shift
arithmetic shift
unsigned
AND
OR
XOR
```

## Operator precedence

Operators higher in the following table are calculated first. Operators on the same row are calculated from left to right. This order is the same as in C and C++.

| Order | Operators |
|---|---|
| 1 | `✖️` `➗` `🚮` |
| 2 | `➕` `➖` |
| 3 | `👈` `👉` |
| 4 | `◀️` `▶️` `◀️🙌` `▶️🙌` |
| 5 | `🙌` `😜` |
| 6 | `⭕` |
| 7 | `❌` |
| 8 | `💢` |
| 9 | `🤝` |
| 10 | `👐` |

Bitwise operators come after comparison operators, so wrap a bitwise operation in `🤜` `🤛` when you compare its result. `6 ⭕ 2 ▶️ 0` is read as `6 ⭕ 🤜2 ▶️ 0🤛`, which is a `⭕` of an integer and a Boolean, and so an error.

```emojicode error
🏁 🍇
  ↪️ 6 ⭕ 2 ▶️ 0 🍇
    😀 🔤The 2 bit is set🔤❗️
  🍉
🍉
```

```text
has no suitable ⭕
```

```emojicode
🏁 🍇
  ↪️ 🤜6 ⭕ 2🤛 ▶️ 0 🍇
    😀 🔤The 2 bit is set🔤❗️
  🍉
  😀 🔡 1 👈 2 ➕ 1❗️❗️  💭 1 👈 3
  😀 🔡 5 ❌ 1 ⭕ 3❗️❗️  💭 5 ❌ 1
🍉
```

```output
The 2 bit is set
8
4
```

```keywords
precedence
operator precedence
order of operations
associativity
parentheses
```

## Integer overflow

`🔢` is 64 bits, so its maximum value is 9223372036854775807 (2^63 − 1). If a result goes beyond this range, it is not an error; it wraps around to the other end.

```emojicode
🏁 🍇
  9223372036854775807 ➡️ max
  😀 🔡 max ➕ 2❗️❗️
  😀 🔡 max ✖️ 2❗️❗️
🍉
```

```output
-9223372036854775807
-2
```

```keywords
overflow
integer overflow
wraparound
INT64_MAX
LLONG_MAX
maximum value
```

## Negating a number (🔋)

`🔋 number❗️` gives the value with its sign flipped (`-x`).

```emojicode
🏁 🍇
  5 ➡️ n
  😀 🔡 🔋 n❗️❗️❗️
  😀 🔡 🔋 2.5❗️ 1❗️❗️
🍉
```

```output
-5
-2.5
```

```keywords
minus
negative number
negate
-x
unary minus
```

## Math functions

Real numbers (`💯`) have math functions available as methods.

| Syntax | Meaning |
|---|---|
| `⛷ x❗️` | square root |
| `🏂 x y❗️` | x to the power of y |
| `🏧 x❗️` | absolute value (integers have it too) |
| `📓 x❗️` `📕 x❗️` `📐 x❗️` | sin, cos, tan |
| `🔢 x❗️` | convert to an integer (drops the fractional part) |

```emojicode
🏁 🍇
  😀 🔡 ⛷ 2.0❗️ 4❗️❗️
  😀 🔡 🏂 2.0 10.0❗️ 0❗️❗️
  😀 🔡 🏧 -7❗️❗️❗️
  😀 🔡 🔢 3.9❗️❗️❗️
🍉
```

```output
1.4142
1024
7
3
```

```keywords
sqrt
pow
abs
sin
cos
tan
cmath
math
square root
power
exponent
absolute value
```
