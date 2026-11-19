# Fixed Bugs

These are bugs in the official Emojicode compiler ([`master`](https://github.com/emojicode/emojicode/tree/master), commit [`4dec45b`](https://github.com/emojicode/emojicode/commit/4dec45b497e4f4dce7f5f5ae11a00d8e8e9af67c)) that this IDE fixes with a patch, so they work correctly here. If you run the same code with the official compiler, the result may be different.

Bugs that are not fixed are listed in [Emojicode Language Bugs](known-issues.md). You can see the whole patch in [emojicode-wasm32.patch](/docs/patches/emojicode-wasm32.patch.txt).

::: cards

## `🔧` breaks Japanese text or emoji at the end of a string

In the official compiler, `🔧` (remove surrounding whitespace) breaks the last character of a string when that character is Japanese or an emoji. This happens in every environment.

The example below keeps its Japanese text on purpose, because multi-byte characters are what trigger the bug.

```emojicode
🏁 🍇
  😀 🔧 🔤  まわりの空白  🔤❗️❗️
🍉
```

```output Result in this IDE
まわりの空白
```

```official
まわりの空�
```

In the official compiler, the last character is broken and you get `まわりの空�`. The position of the last character is counted as “the first byte of that character,” so everything from the second byte onward is cut off. The patch keeps everything up to the end of the last character.

```patch s/String.cpp sStringTrim
```

```keywords
trim
remove whitespace
strip
garbled text
mojibake
multi-byte
multibyte
UTF-8
```

## Expressions that compare with `🤷‍♀️` can crash the compiler

In the official compiler, when you compile an expression containing `value 🙌 🤷‍♀️` (a comparison with no value), the compiler tries to create a value it never uses, which causes undefined behavior inside the compiler. On an ordinary computer (x86-64) this happens not to cause a problem, but on WebAssembly the compiler crashes.

```emojicode
🏁 🍇
  🖍🆕 thing ⚪️
  🔤abc🔤 ➡️ 🖍thing
  ↪️ 🔲 thing 🔢 🙌 🤷‍♀️ 🍇
    😀 🔤Not a number🔤❗️
  🍉
🍉
```

```output Result in this IDE
Not a number
```

```official
(compilation never finishes)
```

This compares `🔲 thing 🔢` (the result of casting `⚪️` to `🔢`; no value if the cast fails) with `🤷‍♀️`. If you build the official compiler for WebAssembly without the patch, compiling this example never finishes (the official compiler running on an ordinary computer may happen not to show a problem).

The patch does not create the value on the `🤷‍♀️` side (it is not needed in the first place).

```patch Compiler/AST/ASTBinaryOperator_CG.cpp IsNoValue
```

```keywords
no value
nullopt
comparison
compiler crash
crash
```

## With `📦 files`, a failed write to a file does not raise an error

In the official compiler, `✏️` (write to a file) in the `files` package is declared as a method that may throw an error, but its implementation (in C++) has no parameter for receiving the error. Because of this, a failed write does not raise an error. On WebAssembly, a mismatched number of arguments stops the program right there, so writing does not work at all. The patch adds the parameter and throws an error when the write fails.

```patch files/File.cpp filesFileWrite
```

```keywords
files
file
writing
write
```

## The compiler and runtime disagree on the layout of class information

In the official compiler, the layout of the first part of the “class information” that each class instance holds differs between the compiler (which creates it) and the runtime (which reads it). On 64-bit environments the sizes happen to be the same, so it causes no problem, but on 32-bit WebAssembly the layout gets out of sync, and the program crashes when an instance is deinitialized. The patch changes the runtime's layout to match the compiler's.

```patch runtime/Runtime.h
```

```keywords
class
destructor
crash
32-bit
```

## Stops when deinitializing a variable of a `🍱` type

In the official compiler, if you put a class instance into a **variable** of a type that combines several protocols (`🍱Protocol Protocol🍱`, see [Type Values and Casting](../types/casting.md)), then when that variable is cleaned up, the program calls an unrelated location as if it were a function.

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

🏁 🍇
  🖍🆕 pet 🍱🔊🏃🍱
  🆕🐕❗️ ➡️ 🖍pet
  😀 🗣 pet❗️❗️
  😀 🦵 pet❗️❗️
🍉
```

```output Result in this IDE
Woof
Tap tap tap
```

```official
Woof
Tap tap tap
(then stops with null function or function signature mismatch)
```

The start of the box holding a `🍱` value contains not “information about the box” but “a list of lookup tables, one per protocol.” Only when cleaning up does the official compiler read it as “information about the box,” so it reads past the end of the list and calls whatever value is there as a function (the result above is for a build for WebAssembly without the patch). The patch takes the cleanup function from the first lookup table in the list.

```patch Compiler/Generation/FunctionCodeGenerator.cpp
```

```keywords
🍱
multiprotocol
multiple protocols
signature mismatch
```

## Mutating a list inside a copied list also changes the copy

A list is copied, contents and all, when you assign it ([Lists and Dictionaries](../basics/collections.md)). In the official compiler, however, mutating an element in place through `🐽` after copying also changes the copy. This happens when you append to an inner list with `🐻 🐽 a 0❗️ 2❗️`, or call a `🖍❗️` method of a value type on `🐽 a 0❗️`. Assigning to an element directly, as in `9 ➡️ 🐽 a 0❗️`, is not affected.

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

```output Result in this IDE
a: length 2, first is 9
b: length 1, first is 1
```

```official
a: length 2, first is 9
b: length 2, first is 9
```

Copying a list does not duplicate its contents right away; they are duplicated the first time the list is mutated (copy-on-write). `🐽` returns a reference (`✴️`) to the element itself rather than a copy, and the mutation goes through that reference. The official compiler does not duplicate the outer list at that point, so it mutates the element that the original and the copy still share.

The patch duplicates the outer list first whenever an element returned with `✴️` is mutated (the list's `📝` does the duplication).

```patch Compiler/AST/ASTMethod.cpp mutateReference
```

```patch Compiler/AST/ASTMethod_CG.cpp
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

## Converting the smallest integer to a string breaks it

In the official compiler, converting the smallest `🔢` value (-9223372036854775808) to a string with `🔡` prints 18 NUL characters followed by `-8`. When it is interpolated into a string, unrelated memory can show up too.

```emojicode
🏁 🍇
  -9223372036854775807 ➖ 1 ➡️ smallest
  😀 🔡 smallest❗️❗️
  😀 🔡 smallest 16❗️❗️
🍉
```

```output Result in this IDE
-9223372036854775808
-8000000000000000
```

```official
(18 NUL characters followed by -8)
(15 NUL characters followed by -0)
```

The sign is removed before the digits are produced, but negating the smallest value overflows the range of `🔢`. The patch negates it as an unsigned integer.

The official compiler's digit table is also missing `w`, so with a base above 32, digits of 32 or more come out shifted. For example, `🔡 32 33❗️` gives `x` instead of `w`, and `🔡 35 36❗️` gives `0` instead of `z`. The patch fixes the table as well.

```patch s/Integer.cpp std::abs(n)
```

```patch s/Integer.cpp uvwxyz
```

```keywords
integer
minimum
INT64_MIN
LLONG_MIN
to string
to_string
base
radix
base 36
```

## `🔫` never finishes with an empty separator

In the official compiler, passing an empty string to `🔫` (split a string) never finishes.

```emojicode
🏁 🍇
  🔂 part 🔫 🔤abc🔤 🔤🔤❗️ 🍇
    😀 part❗️
  🍉
🍉
```

```output Result in this IDE
abc
```

```official
(never finishes)
```

An empty string is “found” at every position, so the position where the next search starts never moves forward. With the patch, an empty separator returns a list that holds only the original string. To take a string apart one character at a time, loop over it with `🔂` ([Strings](../basics/strings.md)).

```patch s/🔡.🍇 🔫
```

```keywords
split
empty string
infinite loop
```

## `🔐` does not return whether the mutex was locked

In the official compiler, `🔐` (try to lock a mutex) does not return whether the lock succeeded.

```emojicode
🏁 🍇
  🆕🔐❗️ ➡️ lock
  ↪️ 🔐 lock❗️ 🍇
    😀 🔤Locked🔤❗️
    🔓 lock❗️
  🍉
🍉
```

```output Result in this IDE
Locked
```

```official
RuntimeError: unreachable
```

`🔐` is declared as a method that returns `👌`, but the C++ function behind it tries to lock and then returns nothing. In WebAssembly, calling a function whose return type does not match stops the program on the spot (the result above is from WebAssembly without the patch). On x86-64 the result of the lock attempt might happen to end up as the return value (we have not checked), but nothing guarantees it. With the patch, it returns whether the lock succeeded.

```patch s/Thread.cpp
```

```keywords
mutex
try_lock
lock
```

## `📒` returns tan instead of arctan

In the official compiler, `📒` (arctan) returns tan. This happens in every environment.

```emojicode
🏁 🍇
  😀 🔡 📒 1.0❗️ 6❗️❗️
🍉
```

```output Result in this IDE
0.785398
```

```official
1.557407
```

arctan 1 is π/4, so the result should be 0.785398, but the official compiler gives tan 1, which is 1.557407. The C++ function behind it calls `std::tan` instead of `std::atan`. The patch calls `std::atan` ([Bitwise Operations and Numbers](../advanced/numbers.md)).

```patch s/Real.cpp
```

```keywords
arctan
atan
std::atan
inverse tangent
inverse trigonometric functions
```

## Comparing with NaN makes `🙌`, `◀️`, and `▶️` all `👍`

In the official compiler, when one side of a real number comparison (`🙌`, `◀️`, `▶️`, `◀️🙌`, `▶️🙌`) is NaN (a value that is not a number, such as `0.0 ➗ 0.0`), every comparison is `👍`. `nan 🙌 nan`, `nan ◀️ 1.0`, and `nan ▶️🙌 1.0` all hold. This happens in every environment.

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

```output Result in this IDE
Done
```

```official
nan 🙌 nan
nan ◀️ 1.0
nan ▶️🙌 1.0
Done
```

The official compiler compares real numbers with the kind of comparison instruction that holds whenever NaN is involved (LLVM's `fcmp` with `ueq`, `ult`, and so on). The patch uses the kind that does not hold when NaN is involved (`oeq`, `olt`, and so on). As in C and C++, every comparison involving NaN is `👎`.

```patch Compiler/AST/ASTBinaryOperator_CG.cpp CreateFCmpOLT
```

```keywords
NaN
not a number
real number comparison
floating-point comparison
fcmp
unordered
```

## Converting infinity or a very large real number to a string breaks it

In the official compiler, converting infinity, NaN, or a real number too large to fit in `🔢` to a string with `🔡` does not give a correct string.

```emojicode
🏁 🍇
  1.0 ➗ 0.0 ➡️ infinity
  😀 🔡 infinity❗️❗️
  😀 🔡 🔋 infinity❗️ 2❗️❗️
  😀 🔡 100000000000000000000.0 1❗️❗️
🍉
```

```output Result in this IDE
inf
-inf
100000000000000000000.0
```

```official
9223372036854775807.000000
-9223372036854775808.00
9223372036854775807.0
```

When it converts a real number to a string, the official compiler first converts the integer part to a C++ `long long` and then produces the digits. Converting a value that does not fit in `long long` is undefined behavior, and on WebAssembly it becomes the value at the edge of the range (the result above is from WebAssembly without the patch). The patch converts such values with C's `snprintf`. Infinity becomes `inf` and `-inf`, and NaN becomes `nan` (or `-nan`) ([Strings](../basics/strings.md)).

The bug that truncates everything below the given digit is not fixed ([Emojicode Language Bugs](known-issues.md)).

```patch s/Integer.cpp isfinite
```

```keywords
real number to string
infinity
inf
NaN
long long
```

## String `↔️` does not always return -1, 0, or 1

In the official compiler, string `↔️` (compare order) returns whatever C's `memcmp` returned, not -1, 0, or 1. The standard library's documentation comment says it returns -1, 0, or 1.

```emojicode
🏁 🍇
  😀 🔡 ↔️ 🔤abc🔤 🔤abz🔤❗️❗️❗️
  😀 🔡 ↔️ 🔤abz🔤 🔤abc🔤❗️❗️❗️
  😀 🔡 ↔️ 🔤abc🔤 🔤abc🔤❗️❗️❗️
🍉
```

```output Result in this IDE
-1
1
0
```

```official
-23
23
0
```

If the byte counts differ, `↔️` returns -1 or 1 right away, but if they are the same, it returns the result of `🧠`'s `↔️` (C's `memcmp`) on the contents as is. `memcmp` only guarantees the sign of its result, and on WebAssembly it is the difference of the first differing bytes (-23 for `c` and `z`) (the result above is from WebAssembly without the patch). The patch returns -1, 0, or 1 according to the sign. The order itself is unchanged ([Strings](../basics/strings.md)).

```patch s/🔡.🍇 ↔️
```

```keywords
compare
memcmp
string comparison
order
```

## `🐻🔸🔣` of `🔠` accepts surrogates

In the official compiler, passing a surrogate (`0xD800` to `0xDFFF`) to `🐻🔸🔣` (append the character of a code point) of `🔠` (build a string) returns `👍` and appends it. Surrogates cannot be represented in UTF-8, so the string becomes invalid UTF-8. This happens in every environment.

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

```output Result in this IDE
Rejected
```

```official
Appended
```

`🐻🔸🔣` is meant to return `👎` when the code point is not valid, but the official compiler rejects only negative numbers and numbers of 0x110000 or more, without checking for surrogates (0xD800–0xDFFF). The patch returns `👎` for surrogates too ([Strings](../basics/strings.md)).

```patch s/🔡.🍇 0xD800
```

```keywords
surrogate
code point
UTF-8
```

## `🔚` in `📦 files` moves to the third byte instead of the end

In the official compiler, `🔚` (move to the end of the file) in the `files` package moves 2 bytes from the start (to the third byte). This happens in every environment.

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

```output Result in this IDE
abcdefZ
```

```official
abZdef
```

The C++ function behind it calls `seekp(std::ios_base::end)`, so the constant `end` (meaning “from the end,” value 2) is used as a position. The patch calls `seekp(0, std::ios_base::end)` ([Packages and Documentation Comments](../advanced/packages.md)).

```patch files/File.cpp seekp
```

```keywords
files
file
seek
seekp
move to end
append
```

## `📦 json` drops zeros right after the decimal point and breaks large numbers

In the official compiler, when the `json` package reads a real number, zeros right after the decimal point are ignored, so `0.05` becomes 0.5 and `1.05` becomes 1.5. Integers that do not fit in `🔢`, and numbers with 19 or more digits after the decimal point, are not read correctly either. This happens in every environment.

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

```output Result in this IDE
0.05 → 0.05
1.05 → 1.05
18446744073709551616.5 → 18446744073709551616.00
18446744073709551616 → 18446744073709551616.00
0.12345678901234567890123 → 0.12
```

```official
0.05 → 0.50
1.05 → 1.50
18446744073709551616.5 → 0.50
18446744073709551616 → 🔢 0
0.12345678901234567890123 → 0.48
```

The official compiler reads the digits after the decimal point as an integer (5 for `05`) and divides by a power of ten based on how many digits that integer has. Because it uses the number of digits of the value rather than the number of digits it read, leading zeros are lost. If only `0` follows the decimal point, as in `1.0`, it divides 0 by 0 and the result is NaN. The patch divides by the number of digits it read.

The official compiler also reads the integer part as `🔢` before turning it into a real number, so an integer part that does not fit in `🔢` overflows (`18446744073709551616` is 2^64, so it becomes 0). The digits after the decimal point are also read as `🔢`, so 19 or more of them overflow. The patch still uses `🔢` when the digits fit in it; when they do not, it reads them 18 digits at a time as `🔢` and combines them into a real number. An integer that does not fit in `🔢` is returned as `💯` instead of `🔢` ([Packages and Documentation Comments](../advanced/packages.md)).

The upstream test `jsonTest` includes a test that reads `18446744073709551616.0`, but it happens to pass with the official compiler too. The `.0` part produces NaN, and because of the NaN comparison bug above, it is judged “equal” to the expected value.

```patch json/json.🍇 digitsStart
```

```patch json/json.🍇 chunkStart
```

```keywords
JSON
real number
decimal
parse
```

## `📦 json` accepts `G` to `Z` after `\u`

In the official compiler, if the four characters after `\u` in the `json` package contain `G` to `Z` (or `g` to `z`), which are not hexadecimal digits, it does not raise an error and reads them as the wrong character. This happens in every environment.

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤"A"🔤 🔤"\u004G"🔤 🍆 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      ↪️ 🔲 value 🔡 ➡️ s 🍇
        😀 s❗️
      🍉
    🍉
    🙅 error 🍇
      😀 💬 error❗️❗️
    🍉
  🍉
🍉
```

```output Result in this IDE
A
\u must be followed by four characters in range 0-9, A-F, a-f
```

```official
A
P
```

The official compiler checks the letters of a hexadecimal number against the range `A` to `Z`, so it reads `G` as 16. `004G` is 4 × 16 + 16 = 80, which is `P`. The patch accepts only `A` to `F` (and `a` to `f`). The error message was already in the official compiler ([Packages and Documentation Comments](../advanced/packages.md)).

```patch json/json.🍇 0x46
```

```keywords
JSON
\u
escape
hexadecimal
```

## `📦 json` reads a lone `-` as 0 without an error

In the official compiler, passing just `-` (a `-` with no digits after it) to the `json` package does not raise an error and gives 0. This happens in every environment.

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

```output Result in this IDE
Expected digit after minus sign
```

```official
0
```

The official compiler starts reading digits without checking that a digit follows the minus sign. Even if there are no digits at all, the value it read stays 0 and is returned. The patch raises the error `Expected digit after minus sign` when the minus sign is not followed by a digit ([Packages and Documentation Comments](../advanced/packages.md)).

```patch json/json.🍇 minus
```

```keywords
JSON
minus
negative number
```

## `⤴️🆕` in a subclass of a generic class does not pass the generic arguments to the superclass

In the official compiler, when an initializer of a subclass of a generic class calls `⤴️🆕` (the superclass's initializer), the superclass's initializer is called with one argument missing. It compiles without errors.

```emojicode
🐇 🎁 🐚T ⚪️🍆 🍇
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

🐇 🧺🐚T ⚪️🍆 🎁🐚T🍆 🍇
  🆕 item T 🍇
    ⤴️🆕 item❗️
  🍉
🍉

🏁 🍇
  😀 📤 🆕🎀❗️❗️❗️
  😀 🔡 📤 🆕🧺🐚🔢🍆 7❗️❗️❗️❗️
🍉
```

```output Result in this IDE
Ribbon
7
```

```official
CompileError: WebAssembly.compile(): … not enough arguments on the stack for call
```

An initializer of a class that keeps its generic arguments receives them as an extra argument. The official compiler's `⤴️🆕` treats the superclass type without its generic arguments and does not pass this argument. On WebAssembly, a call with the wrong number of arguments makes loading fail, so not a single line of the program runs (the result above is from WebAssembly without the patch). The patch passes the generic arguments the subclass received straight on to the superclass's initializer. This works because the subclass keeps the same generic arguments as the superclass, with the superclass's ones first ([Generics](../types/generics.md), [Inheritance](../types/inheritance.md)).

```patch Compiler/AST/ASTSuper.cpp
```

```keywords
generics
inheritance
superclass initializer
super.init
not enough arguments on the stack
```

## Calling a method directly on an instance taken out with `🧠`'s `🐽` produces invalid code

In the official compiler, if you take a class instance (such as a string) out with `🐽` of `🧠` (a memory area) and call a method on it directly, without putting it in a variable first, the compiler produces invalid code (code that LLVM's checks reject with `Invalid indices for GEP pointer type!`).

```emojicode
🏁 🍇
  ☣️ 🍇
    🆕🧠 16❗️ ➡️ m
    🔤abc🔤 ➡️ 🐽🐚🔡🍆 m 0❗️
    😀 🐽🐚🔡🍆 m 0❗️❗️
  🍉
🍉
```

```output Result in this IDE
abc
```

```official
(the compiler exits without a message)
```

`🧠`'s `🐽` returns a reference (`✴️`) to the value, not a copy. When the receiver of a method call is a reference, the official compiler keeps it as a reference. A class instance, however, is already handled as “a pointer to the instance,” so keeping the reference means using “a pointer to the pointer” as the instance (the result above is from WebAssembly without the patch). The patch removes the reference before the call when the receiver is a class instance ([Miscellaneous Syntax](../advanced/misc.md)).

Even with the official compiler, this does not happen if you first put the value in a variable, as in `🐽🐚🔡🍆 m 0❗️ ➡️ s`, and then call the method. Elements taken out with a list's `🐽` are not affected either.

When the output is formatted as shown above on AtCoder, the execution result is returned as RE. The same issue occurs in the Custom Test, which returns exit code '139'.

```patch Compiler/AST/ASTMethod.cpp TypeType::Class
```

```keywords
🧠
✴️
reference
memory
compiler crash
GEP
```

## Using a list's `🐼` on an empty list makes its length -1

In the official compiler, using `🐼` (take out the last element) on an empty list does not return no value as its documentation comment says. Instead, it decreases the list's length by 1 and reads memory outside the list. This happens in every environment.

```emojicode
🏁 🍇
  🆕🍨🐚🔢🍆❗️ ➡️ 🖍🆕 list
  ↪️ 🐼 list❗️ ➡️ last 🍇
    😀 🔤took one out🔤❗️
  🍉
  😀 🔡 📏 list❓❗️❗️
  🐻 list 1❗️
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output Result in this IDE
0
1
```

```official
-1
0
```

The official `🐼` decreases the length by 1 without checking whether the list is empty, and returns the value at that position (index -1). After the length has become -1, adding one element only brings it to 0 (the result above is from WebAssembly without the patch). With the patch, it does nothing and returns no value when the list is empty ([Lists and Dictionaries](../basics/collections.md)).

```patch s/🍨.🍇
```

```keywords
🐼
pop
empty list
```

## Turning a real number into a string with 19 or more digits breaks it

In the official compiler, `🔡 real digits❗️` breaks the part after the decimal point when the number of digits is 19 or more. This happens in every environment.

```emojicode
🏁 🍇
  😀 🔡 0.05 25❗️❗️
  😀 🔡 -1.5 20❗️❗️
🍉
```

```output Result in this IDE
0.0500000000000000027755575
-1.50000000000000000000
```

```official
0.0000009223372036854775807
-1.09223372036854775807
```

The official compiler multiplies the fractional part by 10 to the power of the number of digits, converts it to `long long`, and makes the digits from that. With 19 or more digits, the value does not fit in `long long`, and on WebAssembly it becomes the edge of the range (the result above is from WebAssembly without the patch). With the patch, when there are 19 or more digits, it uses C's `snprintf` to print 1100 digits after the decimal point (enough to represent the fractional part of a real number exactly) and then cuts them at the requested number of digits. Behavior with 18 or fewer digits ([truncation](known-issues.md)) is unchanged ([Strings](../basics/strings.md)).

```patch s/Integer.cpp %.1100f
```

```keywords
real number
decimal
digits
precision
```

## `📦 json` accepts an `e` with no digits after it

In the official compiler, when the `json` package reads a number with no digits after `e` (`E`), such as `1e` or `1.5e+`, it does not raise an error and reads the exponent as 0. When the input ends with `e` or a decimal point, it reads memory outside the input. This happens in every environment.

```emojicode
📦 json 🏠

🏁 🍇
  🔂 text 🍿 🔤[1e2]🔤 🔤[1e]🔤 🔤[1.5e+]🔤 🍆 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      🍺 🔲 value 🍨🐚⚪️🍆 ➡️ list
      ↪️ 🔲 🐽 list 0❗️ 💯 ➡️ r 🍇
        😀 🔤🧲text🧲 → 🧲🔡 r 1❗️🧲🔤❗️
      🍉
    🍉
    🙅‍♀️ error 🍇
      😀 🔤🧲text🧲 → 🧲💬 error❗️🧲🔤❗️
    🍉
  🍉
🍉
```

```output Result in this IDE
[1e2] → 100.0
[1e] → Expected digit in exponent
[1.5e+] → Expected digit in exponent
```

```official
[1e2] → 100.0
[1e] → 1.0
[1.5e+] → 1.5
```

After reading the sign after `e`, the official compiler reads an integer without checking that a digit follows. If there is none, it reads 0. It also reads the next character after `e` or a decimal point without checking whether the input has ended (the result above is from WebAssembly without the patch). With the patch, it raises `Expected digit in exponent` when no digit follows `e` (and its sign, if any), and `Expected digit after decimal point` when the input ends at a decimal point ([Packages and Documentation Comments](../advanced/packages.md)).

```patch json/json.🍇 🔺🏂👇real❗️
```

```keywords
JSON
exponent
```

## Casting with `🔲` to a class with a generic superclass crashes the compiler

In the official compiler, casting with `🔲` to a class that inherits from a generic class makes the compiler crash or never finish.

```emojicode
🐇 🎁🐚T ⚪️🍆 🍇
  🆕 🍇🍉
🍉

🐇 🧺🐚B ⚪️ A ⚪️🍆 🎁🐚A🍆 🍇
  🆕 🍇
    ⤴️🆕❗️
  🍉
🍉

🏁 🍇
  🖍🆕 value ⚪️
  🆕🧺🐚🔢 🔡🍆❗️ ➡️ 🖍value
  ↪️ 🔲 value 🧺🐚🔢 🔡🍆 ➡️ basket 🍇
    😀 🔤it is a 🧺🐚🔢 🔡🍆🔤❗️
  🍉
  ↪️ 🔲 value 🎁🐚🔡🍆 ➡️ gift 🍇
    😀 🔤it is also a 🎁🐚🔡🍆🔤❗️
  🍉
  ↪️ 🔲 value 🎁🐚🔢🍆 ➡️ gift 🍇
    😀 🔤it is a 🎁🐚🔢🍆🔤❗️
  🍉
🍉
```

```output Result in this IDE
it is a 🧺🐚🔢 🔡🍆
it is also a 🎁🐚🔡🍆
```

```official
(the compiler crashes; LLVM's checks report Operand is null and loading unsized types is not allowed)
```

For a cast, the compiler builds information that describes the target type and its generic arguments (a type description). A subclass's generic arguments start with the superclass's (`A`, passed to `🎁`, for `🧺` above), written in terms of the subclass's own generic parameters (`A`). The official compiler does not replace them with the type's generic arguments; it looks for them among the generic arguments of the function being run, and reads something that is not there (the result above is from WebAssembly without the patch). With the patch, the subclass's own generic parameters inside the superclass's arguments are replaced with the target type's generic arguments (`🔡` in the example above) ([Generics](../types/generics.md), [Casting](../types/casting.md)).

```patch Compiler/Generation/TypeDescriptionGenerator.cpp
```

```keywords
generics
inheritance
cast
🔲
compiler crash
```

:::

## Changes for running on WebAssembly

These are not bugs, but places where this IDE changes the official compiler so that it can run inside the browser.

### Adapting to a 32-bit environment

The official compiler passes a 64-bit size to `malloc`, which allocates memory. On 32-bit WebAssembly the types do not match, so a small function is placed in between.

```patch Compiler/Generation/RunTimeHelper.cpp
```

```patch runtime/main.cpp
```

The official compiler also relies on x86-64 conventions for the way it passes closures to C++. Only for WebAssembly, the way they are received is changed.

```patch s/String.cpp sStringCodepoints
```

### Not starting processes

The compiler starts external commands for linking, but that is not possible inside the browser. Linking is done by a separately prepared WebAssembly linker, and `🕴🐇💻` (running a command) is made to do nothing.

```patch Compiler/Compiler.cpp
```

```patch s/System.cpp
```

### No threads

Threads are not used inside the browser, so `🧵` just runs the closure you pass to it immediately ([Thread_wasi.cpp](/docs/patches/Thread_wasi.cpp.txt)). Since no other thread ever competes for a mutex, `🔒` and `🔓` do nothing and `🔐` always returns `👍`.

### Building the compiler itself for WebAssembly

The Emojicode compiler uses LLVM 8. The changes for building LLVM 8 for WebAssembly are in [llvm-8.0.1-wasi.patch](/docs/patches/llvm-8.0.1-wasi.patch.txt).
