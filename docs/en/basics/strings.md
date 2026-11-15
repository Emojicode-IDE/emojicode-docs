# Strings

You write a string between two `🔤`. Its type is `🔡`.

## Interpolating values (🧲)

Inside a string, whatever you put between `🧲` and `🧲` is replaced by the value of a variable or expression.

```emojicode
🏁 🍇
  🔤Emoji🔤 ➡️ name
  😀 🔤Hello, 🧲name🧲!🔤❗️
  😀 🔤1 ➕ 2 is 🧲1 ➕ 2🧲🔤❗️
  😀 🔤Half is 🧲1.5🧲🔤❗️
🍉
```

```output
Hello, Emoji!
1 ➕ 2 is 3
Half is 1.500000
```

What goes inside `🧲` must be a value of a type that can be turned into a string. Strings, integers, and real numbers work, but Booleans, lists, and optionals can't go in as they are. Real numbers are shown with 6 decimal places, so if you want to choose the number of digits, turn the number into a string first with `🔡 real digits❗️` from “Converting to and from numbers” below.

```emojicode error
🏁 🍇
  🔢 🔤12🔤 10❗️ ➡️ n
  😀 🔤n is 🧲n🧲🔤❗️
🍉
```

```text
is not compatible to
```

Unwrap an optional before putting it in ([Optionals](optionals.md)). Your own types can go inside `🧲` too, if they provide `❗️ 🔡 ➡️ 🔡` and conform to the protocol `↘️🔸🔡` ([Protocols](../types/protocols.md)).

```keywords
string concatenation
concatenation
join
concat
+
format
std::format
sprintf
printf
template string
template literal
interpolation
string interpolation
```

## Special characters (❌)

To write a newline, a tab, `🔤` itself, and so on inside a string, put `❌` in front of it.

```keywords
escape
escape sequence
\n
\t
newline
tab
```

| Syntax | Meaning |
|---|---|
| `❌n` | Newline |
| `❌t` | Tab |
| `❌🔤` | The character `🔤` |
| `❌🧲` | The character `🧲` |
| `❌❌` | The character `❌` |

```emojicode
🏁 🍇
  😀 🔤Line 1❌nLine 2🔤❗️
  😀 🔤❌🔤 for strings, ❌🧲 for interpolation🔤❗️
🍉
```

```output
Line 1
Line 2
🔤 for strings, 🧲 for interpolation
```

## Converting to and from numbers

### Number → string

`🔡 number❗️` turns an integer into a decimal string. A second argument lets you choose the base (radix).

```keywords
to_string
std::to_string
number to string
binary
hexadecimal
```

```emojicode
🏁 🍇
  😀 🔡 255❗️❗️
  😀 🔡 255 16❗️❗️
  😀 🔡 255 2❗️❗️
🍉
```

```output
255
ff
11111111
```

For a real number, `🔡 number digits❗️` lets you choose how many digits after the decimal point to output.

```emojicode
🏁 🍇
  😀 🔡 2.5 1❗️❗️
  😀 🔡 2.5 3❗️❗️
🍉
```

```output
2.5
2.500
```

> When a real number is turned into a string, digits beyond the ones you asked for are **truncated, not rounded** (`🔡 3.05 2❗️` can even become `3.04`). This is a bug in the official compiler. See [Emojicode Language Bugs](../about/known-issues.md) for details.

### String → number

`🔢 string base❗️` turns a string into an integer.

```keywords
stoi
stoll
std::stoi
atoi
parseInt
string to number
```

A string can't always be read as a number, so the result is `🍬🔢` (an optional), which means “an integer, or no value.” To unwrap it, use `↪️ … ➡️ name`.

```emojicode
🏁 🍇
  ↪️ 🔢 🔤42🔤 10❗️ ➡️ n 🍇
    😀 🔡 n ➕ 1❗️❗️
  🍉
  ↪️ 🔢 🔤forty-two🔤 10❗️ ➡️ n 🍇
    😀 🔤Never gets here🔤❗️
  🍉
  🙅 🍇
    😀 🔤Not a number🔤❗️
  🍉
🍉
```

```output
43
Not a number
```

`↪️` and `🙅` are conditionals (if and else). Optionals are covered in detail in a later chapter.

### Character → character code

`📇 string❗️` turns a string into its UTF-8 byte sequence (`📇`). `🐽 bytes index❗️` takes out the byte at that index (`💧`), and `🔢 byte❗️` turns it into an integer. ASCII characters such as letters, digits, and symbols are 1 byte each, so this is their character code.

```emojicode
🏁 🍇
  😀 🔡 🔢 🐽 📇 🔤A🔤❗️ 0❗️❗️❗️❗️
  🔂 c 🔤hello🔤 🍇
    💭 a number with a as 0, b as 1, …
    👄 🔤🧲🔢 🐽 📇 c❗️ 0❗️❗️ ➖ 97🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
🍉
```

```output
65
7 4 11 11 14 
```

`🔂 c 🔤hello🔤` is a loop that takes the characters out of a string one by one (see “Going through characters” below).

A byte of 128 or more becomes a negative number when turned into `🔢`. Japanese characters and emoji are 2 bytes or more, and every one of those bytes is 128 or more, so use this only for ASCII characters.

To go from a number back to a character, take it out of a string that lists the characters, as in `🔪 🔤abcdefghijklmnopqrstuvwxyz🔤 number 1❗️`.

```keywords
character code
ASCII
ord
chr
char
c - 'a'
code point
byte
```

## Common methods

```keywords
substr
substring
find
toupper
tolower
uppercase
lowercase
trim
strip whitespace
split
starts_with
ends_with
```

| Syntax | Result |
|---|---|
| `📫 string❗️` | Convert to uppercase |
| `📪 string❗️` | Convert to lowercase |
| `🔪 string start length❗️` | Take out part of it (position and length count visible characters) |
| `🔧 string❗️` | Remove whitespace at both ends |
| `🔫 string separator❗️` | Split at the separator into a list (`🍨🐚🔡🍆`) |
| `🔍 string search❗️` | The position where it was found (`🍬🔢`) |
| `🎼 string prefix❗️` / `⛳️ string suffix❗️` | Whether it starts / ends with that string (`👌`) |

```emojicode
🏁 🍇
  😀 📫 🔤emojicode🔤❗️❗️
  😀 🔪 🔤🍎🍌🍇🍑🔤 1 2❗️❗️
  😀 🔧 🔤  surrounding spaces  🔤❗️❗️
  ↪️ 🎼 🔤🍇🍉🔤 🔤🍇🔤❗️ 🍇
    😀 🔤Starts with 🍇🔤❗️
  🍉
🍉
```

```output
EMOJICODE
🍌🍇
surrounding spaces
Starts with 🍇
```

Positions in `🔪` count from 0. It takes 2 characters starting at position 1 of `🍎🍌🍇🍑`, so the result is `🍌🍇`. Even if an emoji is made of several code points, it counts as one visible character.

> `📐 string❗️` returns the number of **bytes** in UTF-8, not the number of characters. `📐 🔤えもじ🔤❗️` is 9.

```keywords
size
length
string length
character count
byte count
```

## Going through characters

`🔂 name string` takes the visible characters out of a string one by one ([Loops](loops.md)). Each character is itself a string (`🔡`), so compare it with a one-character string using `🙌`.

```emojicode
🏁 🍇
  🔂 c 🔤a🍎え👨‍👩‍👧🔤 🍇
    😀 🔤[🧲c🧲]🔤❗️
  🍉
  0 ➡️ 🖍🆕 ones
  🔂 c 🔤10110🔤 🍇
    ↪️ c 🙌 🔤1🔤 🍇
      ones ⬅️➕ 1
    🍉
  🍉
  😀 🔡 ones❗️❗️
🍉
```

```output
[a]
[🍎]
[え]
[👨‍👩‍👧]
3
```

Strings have no `🐽` method for taking the i-th character, as lists do.

```emojicode error
🏁 🍇
  😀 🐽 🔤abcde🔤 2❗️❗️
🍉
```

```text
has no suitable 🐽
```

If you use the i-th character many times, first turn the string into a list of its characters (`🍨🐚🔡🍆`) with `🎶 string❗️`, then take them out with `🐽`.

```emojicode
🏁 🍇
  🎶 🔤abc🔤❗️ ➡️ chars
  😀 🐽 chars 1❗️❗️
  😀 🔡 📏 chars❓❗️❗️
🍉
```

```output
b
3
```

`🔪 string i 1❗️` also gives you the i-th character, but `🔪` counts the characters from the start every time, so the later the position, the longer it takes. Taking the characters of a long string out one by one with `🔪` takes time proportional to the square of its length in total, about 5 seconds for 40,000 characters. With `🔂` or `🎶`, even 500,000 characters take about 0.2 seconds.

```keywords
character by character
character
char
s[i]
at
for (char c : s)
graphemes
slow
```

## Comparing strings

`🙌` checks whether two strings are the same.

```keywords
==
compare
equal
same
```

```emojicode
🏁 🍇
  🔤abc🔤 ➡️ a
  ↪️ a 🙌 🔤abc🔤 🍇
    😀 🔤Same🔤❗️
  🍉
🍉
```

```output
Same
```
