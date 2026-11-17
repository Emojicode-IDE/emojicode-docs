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

To get a real number, use `💯 string❗️`. The result is a `🍬💯`. It can read forms such as `2.5`, `-1e3`, and `.5`. If there are spaces or other characters before or after the number, you get no value.

```emojicode
🏁 🍇
  🍿 🔤2.5🔤 🔤-1e3🔤 🔤.5🔤 🔤 2.5🔤 🔤2.5kg🔤 🍆 ➡️ texts
  🔂 t texts 🍇
    ↪️ 💯 t❗️ ➡️ r 🍇
      😀 🔡 r 2❗️❗️
    🍉
    🙅 🍇
      😀 🔤-🔤❗️
    🍉
  🍉
🍉
```

```output
2.50
-1000.00
0.50
-
-
```

```keywords
stod
std::stod
atof
parseFloat
string to double
```

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
| `🔍 string search❗️` | The position of the first match (`🍬🔢`; counted in bytes) |
| `🕵️‍♀️ string search start❗️` | The position of the first match at or after the start position (`🍬🔢`; counted in bytes) |
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

### Searching (🔍, 🕵️‍♀️)

Unlike `🔪`, the positions returned by `🔍` and `🕵️‍♀️` count UTF-8 bytes. For ASCII-only text that is the same as the character position, but `🔍 🔤あいう🔤 🔤う🔤❗️` is 6, not 2.

`🕵️‍♀️` searches from the position given as its third argument (also in bytes). By searching again from just after each match, you can visit every place where the string occurs.

```emojicode
🏁 🍇
  🔤abcabcab🔤 ➡️ text
  0 ➡️ 🖍🆕 from
  👍 ➡️ 🖍🆕 more
  🔁 more 🍇
    ↪️ 🕵️‍♀️ text 🔤ab🔤 from❗️ ➡️ i 🍇
      👄 🔤🧲🔡 i❗️🧲 🔤❗️
      i ➕ 1 ➡️ 🖍from
    🍉
    🙅 🍇
      👎 ➡️ 🖍more
    🍉
  🍉
  😀 🔤🔤❗️
  ↪️ 🔍 🔤あいう🔤 🔤う🔤❗️ ➡️ i 🍇
    😀 🔡 i❗️❗️
  🍉
🍉
```

```output
0 3 6 
6
```

If the start position is equal to or greater than the string's byte count, it returns no value without searching.

Byte arrays (`📇`) also have `🔍`. You always pass a start position: `🔍 bytes search start❗️`. The position it returns counts bytes from the beginning, not from the start position. The start position works the same way as with `🕵️‍♀️`.

```emojicode
🏁 🍇
  📇 🔤abcabc🔤❗️ ➡️ bytes
  ↪️ 🔍 bytes 📇 🔤bc🔤❗️ 2❗️ ➡️ i 🍇
    😀 🔡 i❗️❗️
  🍉
🍉
```

```output
4
```

```keywords
find
std::string::find
find(s, pos)
indexOf
search
all occurrences
position
byte offset
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

### Ordering (↔️)

`↔️ string other❗️` returns the order of two strings as an integer: -1 means before, 0 means equal, and 1 means after. You can pass it straight to `🦁` for sorting ([Lists and Dictionaries](collections.md)).

This order is not dictionary order, though. It compares the byte counts first and puts **the longer string first**. Only when the byte counts are equal does it compare byte by byte from the start.

```emojicode
🏁 🍇
  🍿 🔤pear🔤 🔤fig🔤 🔤apple🔤 🔤kiwi🔤 🍆 ➡️ 🖍🆕 fruits
  🦁 fruits 🍇 a 🔡 b 🔡 ➡️ 🔢 ↩️ ↔️ a b❗️ 🍉❗️
  😀 🆕🔡 fruits 🔤 🔤❗️❗️
  ↪️ ↔️ 🔤abc🔤 🔤abd🔤❗️ ◀️ 0 🍇
    😀 🔤abc comes first🔤❗️
  🍉
🍉
```

```output
apple kiwi pear fig
abc comes first
```

The 5-byte `apple` comes first and the 3-byte `fig` comes last. `kiwi` and `pear` both have 4 bytes, and `k` is smaller than `p`, so `kiwi` comes first.

In the official compiler, `↔️` has a bug where it returns the result of C's `memcmp` as is instead of -1, 0, or 1 (on WebAssembly, the difference of the first differing bytes: -23 for `🔤abc🔤` and `🔤abz🔤`); this IDE fixes it (see [Fixed Bugs](../about/patched.md)).

```keywords
compare
std::string::compare
strcmp
<=>
ordering
less than
sort
```

### Hash values (⚗️)

`⚗️ string❗️` returns a hash value (`🔢`) of the string. Strings with the same contents always give the same value within one run of a program. Dictionaries (`🍯`) also use this value to decide where to store a key.

```emojicode
🏁 🍇
  🔤emo🔤 ➡️ head
  ↪️ ⚗️ 🔤emoji🔤❗️ 🙌 ⚗️ 🔤🧲head🧲ji🔤❗️ 🍇
    😀 🔤Same hash value🔤❗️
  🍉
🍉
```

```output
Same hash value
```

The value itself changes every time you run the program, because the calculation mixes in a number chosen at random at startup. You can't, for example, save it to a file and compare it in the next run.

```keywords
hash
std::hash
hashCode
```

## Building strings (🔠)

`🔠` is a container you can keep appending strings to (a StringBuilder in other languages). A `🔡` can't change after it's made, so appending with something like `🔤🧲s🧲x🔤 ➡️ 🖍s` creates a new string every time. `🔠` writes into a space with room to spare, so even many appends stay fast.

```emojicode
🏁 🍇
  🆕🔠❗️ ➡️ builder
  🔂 i 🆕⏩ 1 6❗️ 🍇
    🐻 builder 🔡 i❗️❗️
    ↪️ i ◀️ 5 🍇
      🐻 builder 🔤-🔤❗️
    🍉
  🍉
  😀 🔡 builder❗️❗️
  😀 🔡 📐 builder❗️❗️❗️
  🆕🔠▶️🔡 🔤emoji🔤❗️ ➡️ name
  🐻 name 🔤code🔤❗️
  😀 🔤[🧲name🧲]🔤❗️
🍉
```

```output
1-2-3-4-5
9
[emojicode]
```

| Syntax | Meaning |
|---|---|
| `🆕🔠❗️` | Create an empty `🔠` (capacity 16 bytes) |
| `🆕🔠 capacity❗️` | Create an empty `🔠` with the given capacity in bytes |
| `🆕🔠▶️🔡 string❗️` | Create a `🔠` that starts with the string |
| `🐻 🔠 string❗️` | Append a string at the end |
| `📐 🔠❗️` | The number of bytes of the contents in UTF-8 |
| `🔡 🔠❗️` | The contents as a string (`🔡`) |

The string made by `🔡` is a copy of the contents, so appending to the `🔠` afterwards doesn't change it. `🔠` conforms to the protocol `↘️🔸🔡`, so you can also put it directly into `🧲`.

When appending a one-character string over and over, creating a new string with `🧲` each time took about 0.6 seconds for 20,000 appends, about 3 seconds for 30,000, and didn't finish within 10 seconds for 40,000. With `🐻` on a `🔠`, even 1,000,000 appends take about 0.04 seconds (these are rough figures measured on one computer and vary by machine).

Unlike a list, `🔠` is a class ([Classes](../types/classes.md)). Assigning it or passing it to a method refers to the same single `🔠`. You can `🐻` to it even when it's in a variable that isn't `🖍🆕`, and strings appended inside a method that received it are visible to the caller too.

```emojicode
🐇 🖨 🍇
  🐇❗️ 🌟 out 🔠 n 🔢 🍇
    🔂 i 🆕⏩ 0 n❗️ 🍇
      🐻 out 🔤*🔤❗️
    🍉
  🍉
🍉

🏁 🍇
  🆕🔠❗️ ➡️ line
  🌟🐇🖨 line 3❗️
  🐻 line 🔤|🔤❗️
  🌟🐇🖨 line 2❗️
  😀 🔡 line❗️❗️
🍉
```

```output
***|**
```

```keywords
StringBuilder
std::ostringstream
stringstream
string builder
string concatenation
+=
append
slow
```

### Unsafe methods

`🔠` also has methods that can only be called inside `☣️ 🍇 … 🍉` ([Unsafe code (☣️)](../advanced/misc.md#Unsafe-code-☣️)).

| Syntax | Meaning |
|---|---|
| `🐺 🔠 memory position bytes❗️` | Append that many bytes of the memory (`🧠`), starting at the position |
| `🐻🔸💧 🔠 byte❗️` | Append a single byte (`💧`) |
| `🐻🔸🔣 🔠 code-point❗️` | Append the character for that code point (if it isn't a valid code point, do nothing and return `👎`) |

`🐺` and `🐻🔸💧` don't check that the contents are still valid UTF-8 afterwards. If the bytes become invalid, what happens next is undefined. `🐻🔸🔣` rejects negative numbers, surrogates (`0xD800`–`0xDFFF`), and numbers of `0x110000` or more. The official compiler has a bug where it accepts surrogates; this IDE fixes it (see [Fixed Bugs](../about/patched.md)).

Also, `🧠 string❗️` and `🧠 🔠❗️` return the memory (`🧠`) holding the contents without copying it. You can call them outside `☣️`, but every method that reads or writes the returned memory can only be used inside `☣️` ([The contents of strings and byte sequences (🧠)](../advanced/misc.md#The-contents-of-strings-and-byte-sequences-🧠)).

```keywords
code point
chr
unicode
byte
memory
```
