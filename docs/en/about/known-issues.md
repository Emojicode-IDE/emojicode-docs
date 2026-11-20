# Emojicode Language Bugs

These are bugs found in the official Emojicode compiler ([`master`](https://github.com/emojicode/emojicode/tree/master), commit [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)). The compiler in this IDE behaves the same way as the official compiler, so these bugs happen in this IDE too.

However, where the official compiler crashes or never finishes, this IDE stops with an error that carries an ID such as `[EJ001]`. Clicking the ID in the IDE's output opens the matching entry on this page.

::: cards

## `🔫` never finishes with an empty separator {#EJ001}

Passing an empty string to `🔫` (split a string) never finishes with the official compiler. This IDE stops with the `[EJ001]` error.

```emojicode panic
🏁 🍇
  🔂 part 🔫 🔤abc🔤 🔤🔤❗️ 🍇
    😀 part❗️
  🍉
🍉
```

```output Output in this IDE
🤯 Program panicked: [EJ001] 🔫 was called with an empty separator. With the official compiler, this never ends.
```

```official
(never ends)
```

An empty string is “found” at every position, so the position where the next search starts never moves forward.

To avoid it, make sure the separator is not empty before calling `🔫`. To take a string apart one character at a time, loop over it with `🔂` ([Strings](../basics/strings.md)).

```keywords
split
empty string
infinite loop
```

## Using a list's `🐼` on an empty list reads outside the list {#EJ002}

Using `🐼` (take out the last element) on an empty list makes the list's length -1 with the official compiler, and memory outside the list is read. The standard library's documentation comment says it returns no value when the list is empty, but that is not what happens.

```emojicode
🏁 🍇
  🆕🍨🐚🔢🍆❗️ ➡️ 🖍🆕 list
  ↪️ 🐼 list❗️ ➡️ last 🍇
    😀 🔤took one out🔤❗️
  🍉
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output
-1
```

The official `🐼` decreases the length by 1 without checking whether the list is empty, and returns the value at that position (index -1).

To avoid it, check with `📏` that the list is not empty before using `🐼` ([Lists and Dictionaries](../basics/collections.md)).

```keywords
🐼
pop
empty list
```

## `⤴️🆕` in a subclass of a generic class does not pass the generic arguments to the superclass {#EJ003}

When an initializer of a subclass of a generic class calls `⤴️🆕` (the superclass's initializer), the official compiler produces code that calls the superclass's initializer with one required argument missing. This IDE gives the `[EJ003]` compile error.

```emojicode error
🐇 🎁🐚T ⚪️🍆 🍇
  🖍🆕 content T
  🆕 🍼 content T 🍇🍉
  ❗️ 📤 ➡️ T 🍇
    ↩️ content
  🍉
🍉

🐇 🎀 🎁🐚🔡🍆 🍇
  🆕 🍇
    ⤴️🆕 🔤Ribbon🔤❗️
  🍉
🍉

🏁 🍇
  😀 📤 🆕🎀❗️❗️❗️
🍉
```

```text
[EJ003]
```

```official
(the compiler prints Incorrect number of arguments passed to called function!, but still produces an executable)
Ribbon
(then crashes)
```

An initializer of a class that keeps its generic arguments receives them as an extra argument. The official compiler's `⤴️🆕` treats the superclass type without its generic arguments and does not pass this argument ([Generics](../types/generics.md), [Inheritance](../types/inheritance.md)).

To avoid it, do not write an initializer in the subclass and use the superclass's initializer as is. If the subclass has no initializer, you can create it with the superclass's initializer.

```emojicode
🐇 🎁🐚T ⚪️🍆 🍇
  🖍🆕 content T
  🆕 🍼 content T 🍇🍉
  ❗️ 📤 ➡️ T 🍇
    ↩️ content
  🍉
🍉

🐇 🧺🐚T ⚪️🍆 🎁🐚T🍆 🍇
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤Basket🔤
  🍉
🍉

🏁 🍇
  🆕🧺🐚🔢🍆 7❗️ ➡️ basket
  😀 🏷 basket❗️❗️
  😀 🔡 📤 basket❗️❗️❗️
🍉
```

```output
Basket
7
```

```keywords
generics
inheritance
superclass initializer
super.init
not enough arguments on the stack
Incorrect number of arguments
```

## Calling a method directly on an instance taken out with `🧠`'s `🐽` crashes the compiler {#EJ004}

If you take a class instance (such as a string) out with `🐽` of `🧠` (a memory area) and call a method on it directly, without putting it in a variable first, the official compiler produces invalid code and crashes. This IDE gives the `[EJ004]` compile error.

```emojicode error
🏁 🍇
  ☣️ 🍇
    🆕🧠 16❗️ ➡️ m
    🔤abc🔤 ➡️ 🐽🐚🔡🍆 m 0❗️
    😀 🐽🐚🔡🍆 m 0❗️❗️
  🍉
🍉
```

```text
[EJ004]
```

```official
(the compiler crashes)
```

`🧠`'s `🐽` returns a reference (`✴️`) to the value, not a copy. A class instance is already handled as “a pointer to the instance,” so the official compiler ends up using “a pointer to the pointer” as the instance ([Miscellaneous Syntax](../advanced/misc.md)).

To avoid it, put the value in a variable first and then call the method.

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 16❗️ ➡️ m
    🔤abc🔤 ➡️ 🐽🐚🔡🍆 m 0❗️
    🐽🐚🔡🍆 m 0❗️ ➡️ text
    😀 text❗️
  🍉
🍉
```

```output
abc
```

```keywords
🧠
✴️
reference
memory
compiler crash
GEP
```

## Casting with `🔲` to a class with a generic superclass crashes the compiler {#EJ005}

Casting with `🔲` to a class that passes its own generic arguments to its superclass's generic arguments (`🧺` below passes `A` to `🎁`) makes the official compiler crash or never finish. The same happens where a type is used as a value, such as when calling a type method. This IDE gives the `[EJ005]` compile error.

```emojicode error
🐇 🎁🐚T ⚪️🍆 🍇
  🆕 🍇🍉
🍉

🐇 🧺🐚B ⚪️ A ⚪️🍆 🎁🐚A🍆 🍇
🍉

🏁 🍇
  🖍🆕 value ⚪️
  🆕🧺🐚🔢 🔡🍆❗️ ➡️ 🖍value
  ↪️ 🔲 value 🧺🐚🔢 🔡🍆 ➡️ basket 🍇
    😀 🔤it is a 🧺🔤❗️
  🍉
🍉
```

```text
[EJ005]
```

```official
(the compiler crashes with Assertion failed: … function typeDefinition)
```

For a cast, the compiler builds information that describes the target type and its generic arguments. A subclass's generic arguments start with the superclass's (`A`, passed to `🎁`, for `🧺` above), written in terms of the subclass's own generic parameters. The official compiler does not replace them with the target type's generic arguments; it looks for them among the generic arguments of the function being run ([Generics](../types/generics.md), [Type Values and Casting](../types/casting.md)).

To avoid it, don't put the value in a `⚪️` and cast it; keep it in a variable whose type is known.

```emojicode
🐇 🎁🐚T ⚪️🍆 🍇
  🆕 🍇🍉
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ 🔤gift🔤
  🍉
🍉

🐇 🧺🐚B ⚪️ A ⚪️🍆 🎁🐚A🍆 🍇
🍉

🏁 🍇
  🆕🧺🐚🔢 🔡🍆❗️ ➡️ basket
  😀 🏷 basket❗️❗️
🍉
```

```output
gift
```

```keywords
generics
inheritance
cast
🔲
compiler crash
```

## Crashes when cleaning up a variable of a `🍱` type {#EJ006}

If you put a class instance into a variable of a type that combines several protocols (`🍱Protocol Protocol🍱`, see [Type Values and Casting](../types/casting.md)), then with the official compiler, cleaning up that variable calls an unrelated location as if it were a function, and the program crashes. This IDE stops with the `[EJ006]` error.

```emojicode panic
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

🏁 🍇
  🖍🆕 pet 🍱🔊🏃🍱
  🆕🐕❗️ ➡️ 🖍pet
  😀 🗣 pet❗️❗️
  😀 🦵 pet❗️❗️
🍉
```

```output Output in this IDE
Woof
Tap tap tap
🤯 Program panicked: [EJ006] A value of a 🍱 type is retained or released. With the official compiler, this calls an invalid address and crashes.
```

```official
Woof
Tap tap tap
(then crashes)
```

The start of the box holding a `🍱` value contains not “information about the box” but “a list of lookup tables, one per protocol.” When cleaning up, the official compiler reads it as “information about the box,” so it reads past the end of the list and calls whatever value is there as a function.

To avoid it, do not create variables of a `🍱` type; keep the value in a variable of the class type. Use `🍱` types as parameter types.

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

🐇 🎤 🍇
  🐇❗️ 🎺 pet 🍱🔊🏃🍱 🍇
    😀 🗣 pet❗️❗️
    😀 🦵 pet❗️❗️
  🍉
🍉

🏁 🍇
  🆕🐕❗️ ➡️ dog
  🎺🐇🎤 dog❗️
🍉
```

```output
Woof
Tap tap tap
```

```keywords
🍱
multiprotocol
multiple protocols
signature mismatch
```

## Converting the smallest integer to a string with `🔡` reads unrelated memory {#EJ007}

Converting the smallest `🔢` value (-9223372036854775808) to a string with `🔡` prints a row of NUL characters followed by unrelated characters with the official compiler. Which character it is depends on the environment.

```emojicode norun
🏁 🍇
  -9223372036854775807 ➖ 1 ➡️ smallest
  😀 🔡 smallest❗️❗️
🍉
```

```official
(18 NUL characters followed by - and one unrelated byte; -8 in this IDE)
```

The sign is removed before the digits are produced, but negating the smallest value goes beyond the range of `🔢` and stays negative. A negative value is then used to look up the digit table, so memory outside the table is read.

To avoid it, when a value can be the smallest one, check it before `🔡` and write that value alone as a string yourself.

```keywords
integer
minimum
INT64_MIN
LLONG_MIN
to string
to_string
```

## Converting infinity, NaN, or a very large real number to a string with `🔡` breaks it {#EJ008}

Converting a real number whose integer part does not fit in `🔢` (infinity, NaN, 9223372036854775808.0 or more, and so on) to a string with `🔡` makes the official compiler do a conversion that is undefined behavior in C++. The result depends on the CPU, and memory outside the digit table can be read.

```emojicode
🏁 🍇
  1.0 ➗ 0.0 ➡️ infinity
  😀 🔡 infinity❗️❗️
🍉
```

```output
9223372036854775807.000000
```

When it converts a real number to a string, the official compiler first converts the integer part to a C++ `long long` and then produces the digits. Converting a value that does not fit in `long long` is undefined behavior. With the official compiler it becomes the value at the edge of the range, but for `-∞` the value stays negative after its sign is removed, and memory outside the digit table is read ([Strings](../basics/strings.md)).

To avoid it, check that the value is within the range before `🔡`. NaN is hard to detect because of [the NaN comparison bug](#EJ017), so avoid it in the calculation itself, for example by not dividing by 0.

```keywords
real number to string
infinity
inf
NaN
long long
```

## Too many digits after the decimal point in `🔡` of a real number break it {#EJ009}

With `🔡 real digits❗️`, when the fractional part multiplied by 10 to the power of the number of digits does not fit in `🔢` (for example, when the number of digits is 19 or more), the official compiler does a conversion that is undefined behavior in C++.

```emojicode
🏁 🍇
  😀 🔡 0.05 25❗️❗️
🍉
```

```output
0.0000009223372036854775807
```

To avoid it, use 18 digits or fewer ([Strings](../basics/strings.md)).

```keywords
real number
decimal
digits
precision
```

## `📦 json` reads past the end of the input when it ends with a decimal point or `e` {#EJ010}

When the `json` package reads input that ends with a decimal point or an `e` (`E`), such as `1.` or `1e`, the official compiler reads the byte after the end of the input. That byte is normally not a digit, so `1.` raises the `Expected digit after decimal point` error and `1e` becomes 1.0. This IDE gives the same results without reading past the end of the input.

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤1.🔤 🔤1e🔤 🍆 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      ↪️ 🔲 value 💯 ➡️ r 🍇
        😀 🔤🧲text🧲 → 🧲🔡 r 1❗️🧲🔤❗️
      🍉
    🍉
    🙅 error 🍇
      😀 🔤🧲text🧲 → 🧲💬 error❗️🧲🔤❗️
    🍉
  🍉
🍉
```

```output
1. → Expected digit after decimal point
1e → 1.0
```

`json` reads the bytes of its input in a way that does not check the range (`🐽` of `🧠`), and reads the character after a decimal point or `e` without checking whether the input has ended ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, check before reading that the last character of the input is not `.`, `e`, or `E`.

```keywords
JSON
exponent
decimal point
```

## Converting a real number to a string truncates instead of rounding {#EJ011}

`🔡 real digits❗️` cuts off everything below the given digit. On top of that, because of floating-point error, the result can be 1 smaller than you expect.

```emojicode
🏁 🍇
  😀 🔡 3.05 2❗️❗️
  😀 🔡 3.14159❗️❗️
🍉
```

```output
3.04
3.141589
```

The correct results are `3.05` and `3.141590`. `🔡 real❗️` without the number of digits uses 6 decimal places, so the same thing happens.

To avoid it, add 5 at the digit just below the last one shown (`0.005` for 2 digits) before `🔡`. For negative numbers, subtract it.

```emojicode
🏁 🍇
  😀 🔡 3.05 ➕ 0.005 2❗️❗️
  😀 🔡 3.14159 ➕ 0.0000005❗️❗️
🍉
```

```output
3.05
3.141590
```

```keywords
real number
decimal
rounding
round
truncation
floating-point error
```

## Digits are shifted with a base of 33 or more {#EJ012}

With `🔡 integer base❗️` and a base of 33 or more, the characters for digits of 32 or more come out shifted. This is because `w` is missing from the digit table.

```emojicode
🏁 🍇
  😀 🔡 32 33❗️❗️
  😀 🔡 35 36❗️❗️
🍉
```

```output
x
0
```

The correct results are `w` and `z`.

To avoid it, use a base of 32 or less.

```keywords
base
radix
base 36
to string
```

## `🔧` breaks Japanese text or emoji at the end of a string {#EJ013}

`🔧` (remove surrounding whitespace) breaks the last character of a string when that character is Japanese or an emoji.

```emojicode
🏁 🍇
  😀 🔧 🔤  まわりの空白  🔤❗️❗️
🍉
```

```output
まわりの空�
```

The position of the last character is counted as “the first byte of that character,” so everything from the second byte onward is cut off ([Strings](../basics/strings.md)).

To avoid it, do not use `🔧` on strings whose last character is not ASCII, and remove the surrounding whitespace yourself.

```keywords
trim
remove whitespace
garbled text
mojibake
multi-byte
UTF-8
```

## String `↔️` does not always return -1, 0, or 1 {#EJ014}

According to the standard library's documentation comment, string `↔️` (compare order) returns -1, 0, or 1, but when the byte counts are the same, it returns whatever C's `memcmp` returned.

```emojicode
🏁 🍇
  😀 🔡 ↔️ 🔤abc🔤 🔤abz🔤❗️❗️❗️
  😀 🔡 ↔️ 🔤abz🔤 🔤abc🔤❗️❗️❗️
  😀 🔡 ↔️ 🔤abc🔤 🔤abc🔤❗️❗️❗️
🍉
```

```output
-23
23
0
```

`memcmp` only guarantees the sign of its result, and the results above are the difference of the first differing bytes (-23 for `c` and `z`) ([Strings](../basics/strings.md)).

To avoid it, look only at the sign of the result (`◀️ 0`, `▶️ 0`, `🙌 0`).

```keywords
compare
memcmp
string comparison
order
```

## `🐻🔸🔣` of `🔠` accepts surrogates {#EJ015}

Passing a surrogate (`0xD800` to `0xDFFF`) to `🐻🔸🔣` (append the character of a code point) of `🔠` (build a string) returns `👍` and appends it. Surrogates cannot be represented in UTF-8, so the string becomes invalid UTF-8.

```emojicode
🏁 🍇
  🆕🔠❗️ ➡️ builder
  ☣️ 🍇
    ↪️ 🐻🔸🔣 builder 0xD800❗️ 🍇
      😀 🔤Appended🔤❗️
    🍉
    🙅 🍇
      😀 🔤Rejected🔤❗️
    🍉
  🍉
🍉
```

```output
Appended
```

`🐻🔸🔣` rejects negative numbers and numbers of 0x110000 or more, but does not check for surrogates ([Strings](../basics/strings.md)).

To avoid it, check that the value is not between 0xD800 and 0xDFFF before passing it.

```keywords
surrogate
code point
UTF-8
```

## `📒` returns tan instead of arctan {#EJ016}

`📒` (arctan) returns tan. The C++ function behind it calls `std::tan` instead of `std::atan`.

```emojicode
🏁 🍇
  😀 🔡 📒 1.0❗️ 6❗️❗️
🍉
```

```output
1.557407
```

arctan 1 is π/4, so the result should be 0.785398, but you get tan 1, which is 1.557407 ([Bitwise Operations and Numbers](../advanced/numbers.md)).

To avoid it, calculate arctan x with arcsin (`📔`). arctan x is the same as arcsin (x ÷ √(1 + x²)).

```emojicode
🏁 🍇
  1.0 ➡️ x
  😀 🔡 📔 🤜x ➗ ⛷ 🤜1.0 ➕ x ✖️ x🤛❗️🤛❗️ 6❗️❗️
🍉
```

```output
0.785398
```

```keywords
arctan
atan
std::atan
inverse tangent
inverse trigonometric functions
```

## Comparing with NaN makes `🙌`, `◀️`, and `▶️` all `👍` {#EJ017}

When one side of a real number comparison (`🙌`, `◀️`, `▶️`, `◀️🙌`, `▶️🙌`) is NaN (a value that is not a number, such as `0.0 ➗ 0.0`), every comparison is `👍`. `nan 🙌 nan`, `nan ◀️ 1.0`, and `nan ▶️🙌 1.0` all hold.

```emojicode
🏁 🍇
  0.0 ➗ 0.0 ➡️ nan
  ↪️ nan 🙌 nan 🍇
    😀 🔤nan 🙌 nan🔤❗️
  🍉
  ↪️ nan ◀️ 1.0 🍇
    😀 🔤nan ◀️ 1.0🔤❗️
  🍉
  ↪️ nan ▶️🙌 1.0 🍇
    😀 🔤nan ▶️🙌 1.0🔤❗️
  🍉
  😀 🔤Done🔤❗️
🍉
```

```output
nan 🙌 nan
nan ◀️ 1.0
nan ▶️🙌 1.0
Done
```

The official compiler compares real numbers with the kind of comparison instruction that holds whenever NaN is involved (LLVM's `fcmp` with `ueq`, `ult`, and so on). In C and C++, no comparison involving NaN holds ([Bitwise Operations and Numbers](../advanced/numbers.md)).

To check whether a value is NaN, use `x ◀️ x`. It is always `👎` for values that are not NaN, and `👍` only for NaN.

```emojicode
🏁 🍇
  0.0 ➗ 0.0 ➡️ nan
  ↪️ nan ◀️ nan 🍇
    😀 🔤It is NaN🔤❗️
  🍉
  ↪️ 1.0 ◀️ 1.0 🍇
    😀 🔤1.0 is NaN🔤❗️
  🍉
🍉
```

```output
It is NaN
```

```keywords
NaN
not a number
real number comparison
floating-point comparison
fcmp
unordered
isnan
```

## Mutating a list inside a copied list also changes the copy {#EJ018}

A list is copied, contents and all, when you assign it ([Lists and Dictionaries](../basics/collections.md)). However, mutating an element in place through `🐽` after copying also changes the copy. This happens when you append to an inner list with `🐻 🐽 a 0❗️ 2❗️`, or call a `🖍❗️` method of a value type on `🐽 a 0❗️`. Assigning to an element directly, as in `9 ➡️ 🐽 a 0❗️`, is not affected.

```emojicode
🏁 🍇
  🍿 🍿 1 🍆 🍆 ➡️ 🖍🆕 a
  a ➡️ b
  🐻 🐽 a 0❗️ 2❗️
  9 ➡️ 🐽🐽 a 0❗️ 0❗️
  😀 🔤a: length 🧲🔡 📏 🐽 a 0❗️❓❗️🧲, first is 🧲🔡 🐽🐽 a 0❗️ 0❗️❗️🧲🔤❗️
  😀 🔤b: length 🧲🔡 📏 🐽 b 0❗️❓❗️🧲, first is 🧲🔡 🐽🐽 b 0❗️ 0❗️❗️🧲🔤❗️
🍉
```

```output
a: length 2, first is 9
b: length 2, first is 9
```

Copying a list does not duplicate its contents right away; they are duplicated the first time the list is mutated (copy-on-write). `🐽` returns a reference (`✴️`) to the element itself rather than a copy, and the mutation goes through that reference. The outer list is not duplicated at that point, so the element that the original and the copy still share gets mutated.

To avoid it, take the inner list out into a variable, mutate it, and assign it back to the element.

```emojicode
🏁 🍇
  🍿 🍿 1 🍆 🍆 ➡️ 🖍🆕 a
  a ➡️ b
  🐽 a 0❗️ ➡️ 🖍🆕 inner
  🐻 inner 2❗️
  inner ➡️ 🐽 a 0❗️
  😀 🔤a: length 🧲🔡 📏 🐽 a 0❗️❓❗️🧲🔤❗️
  😀 🔤b: length 🧲🔡 📏 🐽 b 0❗️❓❗️🧲🔤❗️
🍉
```

```output
a: length 2
b: length 1
```

```keywords
list
copy
copy-on-write
nested list
2D array
vector
reference
```

## `🚯` of `🌱` does not remove the element from the original list {#EJ019}

According to the standard library's documentation comment, `🚯` of `🌱` (a list iterator) removes the element last taken out from the list, but the original list does not change. A list (`🍨`) is a value type, so `🌱` holds a copy of the list when it is created, and `🚯` removes the element from that copy ([Lists and Dictionaries](../basics/collections.md)).

```emojicode
🏁 🍇
  🍿 1 2 3 🍆 ➡️ list
  🆕🌱🐚🔢🍆 list❗️ ➡️ it
  🔽 it❗️
  🚯 it❗️
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output
3
```

To avoid it, use `🐭`. It keeps only the elements that match the condition, so pass a condition that returns 👎 for the elements you want to remove.

```keywords
iterator
remove element
remove
erase
```

## Two methods with the same parameter types do not cause an error {#EJ020}

If you write two methods with the same name and exactly the same parameter types, you do not get a compile error. When you call it, the one written later is used without any warning. The same happens when the two differ only in their return type ([Classes](../types/classes.md)).

```emojicode
🐇 🖨 🍇
  🆕 🍇🍉

  ❗️ 📢 n 🔢 🍇
    😀 🔤First🔤❗️
  🍉

  ❗️ 📢 n 🔢 🍇
    😀 🔤Second🔤❗️
  🍉
🍉

🏁 🍇
  📢 🆕🖨❗️ 5❗️
🍉
```

```output
Second
```

The compiler has a function that checks for overlapping declarations (`FunctionResolver::duplicateDeclarationCheck`), but nothing calls it.

To avoid it, give the methods different names.

```keywords
overload
duplicate declaration
same signature
redefinition
```

## Newer emoji cannot be used in names {#EJ021}

Because the compiler's list of known emoji is outdated, relatively new emoji such as `🟢` and `🟡` cannot be used in type or method names. You get the compile error `Expected Identifier`.

```emojicode error
🔘 🚦 🍇
  🆕▶️🔴
  🆕▶️🟢
🍉

🏁 🍇
  🆕🚦▶️🔴❗️ ➡️ light
🍉
```

```text
Expected Identifier
```

To avoid it, use emoji that have been around for a long time (such as `🍏` and `🍋`).

```keywords
emoji
identifier
name
Expected Identifier
Unicode
```

## `📦 json` drops zeros right after the decimal point and breaks large numbers {#EJ022}

When the `json` package reads a real number, zeros right after the decimal point are ignored, so `0.05` becomes 0.5 and `1.05` becomes 1.5. Integers that do not fit in `🔢`, and numbers with 19 or more digits after the decimal point, are not read correctly either.

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤0.05🔤 🔤1.05🔤 🔤18446744073709551616.5🔤 🔤18446744073709551616🔤 🔤0.12345678901234567890123🔤 🍆 🍇
    🍺 ⚪️🕊🌸 text❗️ ➡️ value
    ↪️ 🔲 value 💯 ➡️ r 🍇
      😀 🔤🧲text🧲 → 🧲🔡 r 2❗️🧲🔤❗️
    🍉
    🙅↪️ 🔲 value 🔢 ➡️ n 🍇
      😀 🔤🧲text🧲 → 🔢 🧲🔡 n 10❗️🧲🔤❗️
    🍉
  🍉
🍉
```

```output
0.05 → 0.50
1.05 → 1.50
18446744073709551616.5 → 0.50
18446744073709551616 → 🔢 0
0.12345678901234567890123 → 0.48
```

`json` reads the digits after the decimal point as an integer (5 for `05`) and divides by a power of ten based on how many digits that integer has. Because it uses the number of digits of the value rather than the number of digits it read, leading zeros are lost. If only `0` follows the decimal point, as in `1.0`, it divides 0 by 0 and the result is NaN. It also reads both the integer part and the digits after the decimal point as `🔢`, so numbers that do not fit overflow (`18446744073709551616` is 2^64, so it becomes 0) ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, if you can receive the number as a JSON string (`"0.05"`), take it out with `🔲 value 🔡` and then turn it into a real number with `💯`.

```keywords
JSON
real number
decimal
parse
```

## `📦 json` accepts `G` to `Z` after `\u` {#EJ023}

If the four characters after `\u` in the `json` package contain `G` to `Z` (or `g` to `z`), which are not hexadecimal digits, it does not raise an error and reads them as the wrong character.

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤"A"🔤 🔤"\u004G"🔤 🍆 🍇
    ↪️ 🔲 🍺 ⚪️🕊🌸 text❗️ 🔡 ➡️ s 🍇
      😀 s❗️
    🍉
  🍉
🍉
```

```output
A
P
```

`json` checks the letters of a hexadecimal number against the range `A` to `Z`, so it reads `G` as 16. `004G` is 4 × 16 + 16 = 80, which is `P` ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, check that what follows `\u` is hexadecimal before reading it.

```keywords
JSON
\u
escape
hexadecimal
```

## `📦 json` reads a lone `-` as 0 without an error {#EJ024}

Passing just `-` (a `-` with no digits after it) to the `json` package does not raise an error and gives 0.

```emojicode
📦 json 🏠

🏁 🍇
  🆗 value ⚪️🕊🌸 🔤-🔤❗️ 🍇
    ↪️ 🔲 value 🔢 ➡️ n 🍇
      😀 🔡 n❗️❗️
    🍉
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
0
```

`json` starts reading digits without checking that a digit follows the minus sign. Even if there are no digits at all, the value it read stays 0 and is returned ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, check that a digit follows the `-` before reading.

```keywords
JSON
minus
negative number
```

## `📦 json` accepts an `e` with no digits after it {#EJ025}

When the `json` package reads a number with no digits after `e` (`E`), such as `1e` or `1.5e+`, it does not raise an error and reads the exponent as 0. When the input ends with `e`, [it reads outside the input](#EJ010).

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤1e2 🔤 🔤1e 🔤 🔤1.5e+ 🔤 🍆 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      ↪️ 🔲 value 💯 ➡️ r 🍇
        😀 🔤🧲text🧲→ 🧲🔡 r 1❗️🧲🔤❗️
      🍉
    🍉
    🙅 error 🍇
      😀 🔤🧲text🧲→ 🧲💬 error❗️🧲🔤❗️
    🍉
  🍉
🍉
```

```output
1e2 → 100.0
1e → 1.0
1.5e+ → 1.5
```

After reading the sign after `e`, `json` reads an integer without checking that a digit follows. If there is none, it reads 0 ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, check that a digit follows `e` before reading.

```keywords
JSON
exponent
```

## With `📦 files`, a failed write to a file does not raise an error {#EJ026}

`✏️` (write to a file) in the `files` package is declared as a method that may throw an error, but its implementation (in C++) has no parameter for receiving the error. Because of this, a failed write does not raise an error ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, when you need to know whether the write succeeded, read the file again after closing it and compare.

```keywords
files
file
writing
write
```

## `🔚` in `📦 files` moves to the third byte instead of the end {#EJ027}

`🔚` (move to the end of the file) in the `files` package moves 2 bytes from the start (to the third byte).

```emojicode
📦 files 🏠

🏁 🍇
  🍺 🆕📄▶️📝 🔤a.txt🔤❗️ ➡️ out
  🍺 ✏️ out 📇 🔤abcdef🔤❗️❗️
  🔚 out❗️
  🍺 ✏️ out 📇 🔤Z🔤❗️❗️
  🚪 out❗️
  😀 🍺 🔡 🍺📇🐇📄 🔤a.txt🔤❗️❗️❗️
🍉
```

```output
abZdef
```

The C++ function behind it calls `seekp(std::ios_base::end)`, so the constant `end` (meaning “from the end,” value 2) is used as a position ([Packages and Documentation Comments](../advanced/packages.md)).

To avoid it, when you want to append to the end of a file, read the whole file with `📇🐇📄` and write the appended contents back with `📻🐇📄`.

```keywords
files
file
seek
seekp
move to end
append
```

## Reading more than what is left with `📓` in `📦 files` returns nothing {#EJ028}

If you ask `📓` (read a given number of bytes) in the `files` package for more bytes than are left in the file, it raises an error without returning even the bytes it managed to read. After that, every read fails, even if you move back with `🔛` ([Packages and Documentation Comments](../advanced/packages.md)).

```emojicode
📦 files 🏠

🏁 🍇
  🍺 📻🐇📄 🔤a.txt🔤 📇 🔤abc🔤❗️❗️
  🍺 🆕📄▶️📜 🔤a.txt🔤❗️ ➡️ file
  🆗 data 📓 file 5❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Cannot read 5 bytes🔤❗️
  🍉
  🔛 file 0❗️
  🆗 data 📓 file 1❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Still cannot read after moving back🔤❗️
  🍉
🍉
```

```output
Cannot read 5 bytes
Still cannot read after moving back
```

The C++ function behind it raises an error if the file stream is in a failed state after reading. Reading more than what is left puts the stream in a failed state, and nothing resets it, so every later read fails too. The error message (`💬`) is built from the error number (C's `errno`) left at that point, so it is a sentence unrelated to reading, such as `Not a tty`.

To avoid it, if you do not know how much to read, check the size first with `📏🕊📑`, or read the whole file with `📇🐇📄`.

```keywords
files
file
read
fread
EOF
errno
```

## `📤`, `📥`, and `📯` in `📦 files` do not work {#EJ029}

The source of the `files` package (`files.🍇`) contains `📤`, `📥`, and `📯` for standard output, standard input, and standard error, but they are commented out, so they are not declared, and there is no C++ implementation either. Using them causes a compile error such as `has no suitable 📤`.

To avoid it, use `😀` for standard output and `👂🏼` for standard input ([Standard Input](../basics/input.md)).

```keywords
files
stdout
stdin
stderr
has no suitable
```

## `🔐` does not return whether the mutex was locked {#EJ030}

`🔐` (try to lock a mutex) is declared as a method that returns `👌`, but the C++ function behind it tries to lock and then returns nothing. With the official compiler, the result of the lock attempt ends up as the return value, but nothing guarantees it. This IDE has no threads, so `🔐` always returns `👍` ([System and Threads](../advanced/system.md)).

```emojicode
🏁 🍇
  🆕🔐❗️ ➡️ lock
  ↪️ 🔐 lock❗️ 🍇
    😀 🔤Locked🔤❗️
    🔓 lock❗️
  🍉
🍉
```

```output
Locked
```

To avoid it, do not rely on the result of `🔐`; lock with `🔒`.

```keywords
mutex
try_lock
lock
mutual exclusion
```

## Storing a value cast with `🔲` in a variable reads freed memory when it is cleaned up {#EJ031}

If you cast a class instance (such as a string) or a list held in a variable with `🔲` and store the result in another variable with `➡️`, the official compiler tries to free the same object twice when cleaning up, and reads freed memory. It may crash, or it may finish without any visible problem.

```emojicode
📦 json 🏠

🏁 🍇
  🍺 ⚪️🕊🌸 🔤"abc"🔤❗️ ➡️ value
  ↪️ 🔲 value 🔡 ➡️ text 🍇
    😀 text❗️
  🍉
🍉
```

```output
abc
```

The official compiler does not count the reference held by the variable that stores the cast result, but decreases the count at the end of the block. Together with the original variable, the count is decreased twice, so the object is freed the first time and the second time reads freed memory ([Type Values and Casting](../types/casting.md)).

To avoid it, pass the value to `🔲` as an expression without storing it in a variable first.

```emojicode
📦 json 🏠

🏁 🍇
  ↪️ 🔲 🍺 ⚪️🕊🌸 🔤"abc"🔤❗️ 🔡 ➡️ text 🍇
    😀 text❗️
  🍉
🍉
```

```output
abc
```

```keywords
cast
🔲
JSON
free
use after free
double free
```

## Some code makes the official compiler stop on an internal check {#EJ032}

The official compiler is distributed with its internal checks (C++ `assert`) turned on. The following code fails one of those checks, and the compiler stops partway through compiling. This IDE also stops with the `[EJ032]` error.

- Writing a method whose argument type is `⚪️` (it stops even if you never call it)
- Writing a `🔑` initializer in a subclass ([More on Classes](../advanced/classes.md))
- Taking a value out of a dictionary whose values are `⚪️` (`🍯🐚⚪️🍆`, such as a JSON object) with `🐽` ([Packages and Documentation Comments](../advanced/packages.md))

```emojicode error
🐇 🔎 🍇
  🐇❗️ 📄 a ⚪️ 🍇
    😀 🔤anything🔤❗️
  🍉
🍉

🏁 🍇
  📄🐇🔎 1❗️
🍉
```

```text
[EJ032]
```

```official
(the compiler stops with Assertion failed: … function typeDefinition)
```

The error message shows which check failed. In the example above, it is the check in `typeDefinition` in `Type.cpp`.

To avoid it, use generics on the method instead of making the argument type `⚪️` ([More on Classes](../advanced/classes.md)). In a subclass, don't write the `🔑` initializer; create it with the superclass's initializer. The official compiler has no way to take a value out of a JSON object.

```emojicode
🐇 🔎 🍇
  🐇❗️ 📄 🐚T ⚪️🍆 a T 🍇
    😀 🔤anything🔤❗️
  🍉
🍉

🏁 🍇
  📄🐇🔎 1❗️
  📄🐇🔎 🔤x🔤❗️
🍉
```

```output
anything
anything
```

```keywords
assert
Assertion failed
compiler crash
⚪️
🔑
JSON object
```

:::
