# Values and Variables

## Basic types

Emojicode is a statically typed language: every value has a type. These four are the ones you will use most.

| Type | Meaning | Example values |
|---|---|---|
| `🔢` | Integer (64-bit) | `42`, `-7`, `1,000,000`, `0x1F` |
| `💯` | Real number (floating point) | `3.14`, `-0.5` |
| `👌` | Boolean | `👍` (true), `👎` (false) |
| `🔡` | String | `🔤Hello🔤` |

You can separate the digits of an integer with `,`. A number starting with `0x` is hexadecimal.

```keywords
int
int64_t
long long
integer
double
float
real number
decimal
bool
true
false
Boolean
type
hexadecimal
hex
```

## Variables (constants)

`value ➡️ name` gives a value a name. A variable created this way is a **constant**: it cannot be changed later.

```emojicode
🏁 🍇
  42 ➡️ answer
  😀 🔡 answer❗️❗️
🍉
```

```output
42
```

```keywords
const
constant
variable
auto
```

Variable names are ordinary alphanumeric names. `😀` can only print strings, so the integer is first turned into a string with `🔡 answer❗️` and then printed (this is covered in detail in [Strings](strings.md)).

Trying to put a different value into a constant causes a compile error.

```emojicode error
🏁 🍇
  42 ➡️ answer
  43 ➡️ 🖍answer
🍉
```

```text
Cannot modify constant variable "answer".
```

## Mutable variables

When you want to change a value later, create a **mutable variable** with `➡️ 🖍🆕 name`. To put a new value into it, use `➡️ 🖍name`.

```emojicode
🏁 🍇
  0 ➡️ 🖍🆕 count
  😀 🔡 count❗️❗️
  5 ➡️ 🖍count
  😀 🔡 count❗️❗️
🍉
```

```output
0
5
```

```keywords
variable
assignment
reassignment
mutable
var
let
```

It is easier to read if you remember `🖍` as the “rewrite” mark. `🖍🆕` means “create a new variable that can be rewritten,” and `🖍` alone means “rewrite.”

> If you create a variable with `🖍🆕` and never rewrite it, you get a warning suggesting you make it a constant. It still works, but create things that don't change with `➡️ name`.

### Calculating and reassigning

Combining `⬅️` with an operator gives you a short way to write “calculate with the current value and store the result back.”

```emojicode
🏁 🍇
  10 ➡️ 🖍🆕 score
  score ⬅️➕ 5
  score ⬅️✖️ 2
  😀 🔡 score❗️❗️
🍉
```

```output
30
```

`score ⬅️➕ 5` means the same as `score ➕ 5 ➡️ 🖍score`. Note that `⬅️` on its own cannot be used for assignment.

```keywords
+=
-=
*=
/=
compound assignment
increment
++
```

### Declaring first, assigning later

You can also declare a variable first by writing its type, and put a value in it later.

```emojicode
🏁 🍇
  🖍🆕 message 🔡
  🔤Assigned later🔤 ➡️ 🖍message
  😀 message❗️
🍉
```

```output
Assigned later
```

## Arithmetic

| Operator | Meaning |
|---|---|
| `➕` `➖` `✖️` `➗` | Add, subtract, multiply, divide |
| `🚮` | Remainder of division |

`➗` between two integers drops everything after the decimal point. To calculate with real numbers, make one side a `💯`.

```keywords
arithmetic
addition
subtraction
multiplication
division
remainder
modulo
%
mod
static_cast
type conversion
```

```emojicode
🏁 🍇
  😀 🔡 7 ➗ 2❗️❗️
  😀 🔡 7 🚮 2❗️❗️
  😀 🔡 7.0 ➗ 2.0 1❗️❗️
  😀 🔡 💯 7❗️ ➗ 2.0 1❗️❗️
🍉
```

```output
3
1
3.5
3.5
```

The `💯 7❗️` in the last line is a call to the method that turns the integer `7` into a real number. The `1` in `🔡 … 1❗️` is how many digits after the decimal point to include in the string.

`✖️` and `➗` are calculated before `➕` and `➖`. To calculate something first, wrap it in `🤜` and `🤛` (the `(` `)` of other languages).

```keywords
parentheses
()
precedence
order of operations
```

```emojicode
🏁 🍇
  😀 🔡 1 ➕ 2 ✖️ 3❗️❗️
  😀 🔡 🤜1 ➕ 2🤛 ✖️ 3❗️❗️
🍉
```

```output
7
9
```
