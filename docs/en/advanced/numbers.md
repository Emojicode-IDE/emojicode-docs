# Bitwise Operations and Numbers

## Bitwise operations

| Syntax | Meaning |
|---|---|
| `a ⭕ b` | bitwise AND |
| `a 💢 b` | bitwise OR |
| `a ❌ b` | bitwise XOR |
| `a 👈 n` | shift left by n bits |
| `a 👉 n` | shift right by n bits |
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
AND
OR
XOR
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
