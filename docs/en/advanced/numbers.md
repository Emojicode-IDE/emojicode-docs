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

`🔋 number❗️` gives the value with its sign flipped (`-x`). It works on integers (`🔢`), reals (`💯`), and bytes (`💧`).

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

### Rounding

| Syntax | Meaning |
|---|---|
| `🚴 x❗️` | round up (the smallest integer greater than or equal to x) |
| `🚵 x❗️` | round down (the largest integer less than or equal to x) |
| `🏇 x❗️` | round to the nearest integer (exactly .5 goes away from 0) |

All of these return a real number. To get an integer, convert the result with `🔢`. `🔢` only drops the fractional part, so negative numbers move toward 0, which differs from `🚵`.

```emojicode
🏁 🍇
  😀 🔡 🔢 🚴 2.3❗️❗️❗️❗️
  😀 🔡 🔢 🚵 2.7❗️❗️❗️❗️
  😀 🔡 🔢 🏇 2.5❗️❗️❗️❗️
  😀 🔡 🔢 🏇 -2.5❗️❗️❗️❗️
  😀 🔡 🔢 🚵 -2.3❗️❗️❗️❗️
  😀 🔡 🔢 -2.3❗️❗️❗️
🍉
```

```output
3
2
3
-3
-3
-2
```

```keywords
ceil
floor
round
std::ceil
std::floor
std::round
round up
round down
rounding
truncate
```

### Logarithms

| Syntax | Meaning |
|---|---|
| `🚣 x❗️` | base-2 logarithm |
| `🏄 x❗️` | natural logarithm (base e) |
| `🥏 x❗️` | base-10 logarithm |

```emojicode
🏁 🍇
  😀 🔡 🚣 8.0❗️ 1❗️❗️
  😀 🔡 🏄 🛎🕊💯❗️❗️ 1❗️❗️
  😀 🔡 🥏 1000.0❗️ 1❗️❗️
🍉
```

```output
3.0
1.0
3.0
```

The logarithm of 0 is −∞, and the logarithm of a negative number is NaN ([Infinity and NaN](#Infinity-and-NaN)).

```keywords
log
log2
log10
std::log
std::log2
std::log10
logarithm
natural logarithm
common logarithm
```

### Inverse trigonometric functions

| Syntax | Meaning |
|---|---|
| `📔 x❗️` | arcsin |
| `📙 x❗️` | arccos |
| `📒 x❗️` | arctan |

All angles are in radians.

```emojicode
🏁 🍇
  😀 🔡 📔 1.0❗️ 2❗️❗️
  😀 🔡 📙 -1.0❗️ 2❗️❗️
  😀 🔡 📒 1.0❗️ 3❗️❗️
🍉
```

```output
1.57
3.14
0.785
```

In the official compiler, `📒` has a bug where it returns tan; this IDE fixes it (see [Fixed Bugs](../about/patched.md)).

```keywords
asin
acos
atan
arcsin
arccos
arctan
std::asin
std::acos
std::atan
inverse trigonometric
radian
```

### Pi and e (🥧, 🛎)

`🥧` returns π and `🛎` returns e. They are type methods. Since `💯` is a value type, call them with `🕊`, as in `🥧🕊💯❗️`.

```emojicode
🏁 🍇
  😀 🔡 🥧🕊💯❗️ 5❗️❗️
  😀 🔡 🛎🕊💯❗️ 5❗️❗️
  2.0 ➡️ r
  😀 🔡 🥧🕊💯❗️ ✖️ r ✖️ r 3❗️❗️
🍉
```

```output
3.14159
2.71828
12.566
```

```keywords
pi
π
M_PI
e
M_E
Euler's number
constant
```

## Infinity and NaN

Dividing a real number by 0.0 gives infinity, and `0.0 ➗ 0.0`, or the square root or logarithm of a negative number, gives NaN (a value meaning "not a number"). Neither is an error. When turned into a string with `🔡`, infinity becomes `inf`, negative infinity `-inf`, and NaN `nan` (or `-nan` if its sign is negative), with no digits after a decimal point even if you ask for them.

Every comparison with NaN, whether `🙌`, `◀️`, `▶️`, `◀️🙌`, or `▶️🙌`, gives 👎. Even `n 🙌 n` is 👎, so if `❎ n 🙌 n❗️` is 👍, `n` is NaN.

```emojicode
🏁 🍇
  😀 🔡 1.0 ➗ 0.0 2❗️❗️
  😀 🔡 -1.0 ➗ 0.0 2❗️❗️
  0.0 ➗ 0.0 ➡️ n
  😀 🔡 n 2❗️❗️
  ↪️ n 🙌 n 🍇 😀 🔤equal🔤❗️ 🍉 🙅 🍇 😀 🔤not equal🔤❗️ 🍉
  ↪️ n ◀️ 1.0 🍇 😀 🔤less🔤❗️ 🍉 🙅 🍇 😀 🔤not less🔤❗️ 🍉
  ↪️ n ▶️🙌 1.0 🍇 😀 🔤greater or equal🔤❗️ 🍉 🙅 🍇 😀 🔤not greater or equal🔤❗️ 🍉
🍉
```

```output
inf
-inf
nan
not equal
not less
not greater or equal
```

Real numbers too large to fit in `🔢` are also turned into strings by `🔡` without losing digits. `🔡 100000000000000000000.0 1❗️` is `100000000000000000000.0`.

In the official compiler, every comparison involving NaN gives 👍, and `🔡` on infinity, NaN, or large values produces broken numbers. This IDE fixes these (see [Fixed Bugs](../about/patched.md)).

```keywords
inf
infinity
NaN
isnan
std::isnan
std::isinf
HUGE_VAL
division by zero
not a number
```

## Random numbers (🎰)

`🎰` is a random number generator. Create one with `🆕🎰❗️`. `🔢 generator a b❗️` makes an integer from a to b, and `💯 generator❗️` makes a real number from 0 up to but not including 1.

| Syntax | Meaning |
|---|---|
| `🆕🎰❗️` | create a generator |
| `🔢 generator a b❗️` | an integer from a to b (both ends included) |
| `💯 generator❗️` | a real number at least 0 and less than 1 |

```emojicode
🏁 🍇
  🆕🎰❗️ ➡️ dice
  🔢 dice 1 6❗️ ➡️ n
  ↪️ n ▶️🙌 1 🤝 n ◀️🙌 6 🍇
    😀 🔤one of 1 to 6🔤❗️
  🍉
  💯 dice❗️ ➡️ x
  ↪️ x ▶️🙌 0.0 🤝 x ◀️ 1.0 🍇
    😀 🔤at least 0 and less than 1🔤❗️
  🍉
  😀 🔡 🔢 dice 7 7❗️❗️❗️
🍉
```

```output
one of 1 to 6
at least 0 and less than 1
7
```

Each generator starts from a different seed, and there is no way to set the seed. You get different values every run. Internally it is C++'s `std::mt19937_64`. If `a` is greater than `b`, you get a large number unrelated to the range.

To shuffle a list, use the list's `🐹` ([Lists and Dictionaries](../basics/collections.md)).

```keywords
random
rand
random number
std::mt19937_64
mt19937
Mersenne Twister
uniform_int_distribution
uniform_real_distribution
dice
```
