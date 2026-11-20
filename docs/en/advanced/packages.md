# Packages and Documentation Comments

## Importing a package (📦)

`📦 name 🏠` imports a package. The standard library `s` is imported from the start, even if you don't write it. In this IDE, besides `s`, you can use `files`, `json`, and `testtube`.

```emojicode
📦 json 🏠

🏁 🍇
  ↪️ 🔲 🍺 ⚪️🕊🌸 🔤"Emoji"🔤❗️ 🔡 ➡️ text 🍇
    😀 text❗️
  🍉
🍉
```

```output
Emoji
```

`🏠` means “put the imported types into the same namespace as my own file.” If you write a namespace emoji instead of `🏠`, the types go into that namespace. You then use a type in that namespace by writing `🔶NamespaceType`.

```keywords
import
include
#include
using
package
library
module
namespace
JSON
```

## Reading and writing files (📦 files)

In this IDE, files exist in memory only while the program is running.

```emojicode
📦 files 🏠

🏁 🍇
  🍺 📻🐇📄 🔤memo.txt🔤 📇 🔤Hello🔤❗️❗️
  🍺 📇🐇📄 🔤memo.txt🔤❗️ ➡️ data
  😀 🍺 🔡 data❗️❗️
🍉
```

```output
Hello
```

| Syntax | Meaning |
|---|---|
| `📻🐇📄 path data❗️` | Writes data (`📇`) to a file. If the file exists, its contents are replaced |
| `📇🐇📄 path❗️` | Reads the whole file and returns it as data (`📇`) |

Both raise `🚧🔸↕️` (an input/output error) when they fail (see [Errors](../types/errors.md)). The error message is the text returned by C's `strerror` (such as `No such file or directory`). Every other method in this section that raises an error also raises `🚧🔸↕️`.

```keywords
file
files
fstream
ofstream
ifstream
read file
write file
file I/O
IOError
I/O error
```

### Opening a file and reading or writing piece by piece (📄)

`📻` and `📇` handle the whole file at once. When you want to keep a file open, write at a chosen position, or read a fixed number of bytes, create an instance of `📄`. You cannot read from a file opened for writing, and you cannot write to a file opened for reading.

```emojicode
📦 files 🏠

🏁 🍇
  🍺 🆕📄▶️📝 🔤log.txt🔤❗️ ➡️ out
  🍺 ✏️ out 📇 🔤abcdef🔤❗️❗️
  🔛 out 2❗️
  🍺 ✏️ out 📇 🔤XY🔤❗️❗️
  🚪 out❗️

  🍺 🆕📄▶️📜 🔤log.txt🔤❗️ ➡️ in
  🍺 📓 in 3❗️ ➡️ head
  😀 🍺 🔡 head❗️❗️
  🔛 in 4❗️
  🍺 📓 in 2❗️ ➡️ tail
  😀 🍺 🔡 tail❗️❗️
  🚪 in❗️
🍉
```

```output
abX
ef
```

| Syntax | Meaning |
|---|---|
| `🆕📄▶️📝 path❗️` | Opens for writing. Creates the file if it doesn't exist, and empties it if it does |
| `🆕📄▶️📜 path❗️` | Opens for reading |
| `✏️ file data❗️` | Writes data at the current position |
| `📓 file byteCount❗️` | Reads that many bytes from the current position and returns them as data |
| `🔛 file position❗️` | Moves to the given byte position, counted from the start |
| `🔚 file❗️` | Moves to the end |
| `💧 file❗️` | Writes out buffered data to the file |
| `🚪 file❗️` | Closes the file. You must not read or write after closing |

The methods that open, write, and read can raise errors, so call them with `🍺` or `🆗`. `📓` counts bytes, not characters. In UTF-8 a character such as `é` takes 2 bytes and most Japanese characters take 3, so a read can stop in the middle of a character.

What you write does not go into the file right away. It is written out when you call `💧` or `🚪`. When a `📄` instance is no longer needed and goes away, `🚪` is also called automatically (see [Code that runs on cleanup](classes.md)).

```emojicode
📦 files 🏠

🏁 🍇
  🍺 🆕📄▶️📝 🔤memo.txt🔤❗️ ➡️ out
  🍺 ✏️ out 📇 🔤Hello🔤❗️❗️
  😀 🔤[🧲🍺 🔡 🍺📇🐇📄 🔤memo.txt🔤❗️❗️🧲]🔤❗️
  💧 out❗️
  😀 🔤[🧲🍺 🔡 🍺📇🐇📄 🔤memo.txt🔤❗️❗️🧲]🔤❗️
  🚪 out❗️
🍉
```

```output
[]
[Hello]
```

If you ask `📓` for more bytes than remain, it raises an error and does not return even the part it could read. Once a read has failed on a file, every later read fails too, even if you move back with `🔛`. When you don't know how much to read, check the size first with `📏🕊📑` (next section), or read the whole file with `📇🐇📄`.

```emojicode
📦 files 🏠

🏁 🍇
  🍺 📻🐇📄 🔤a.txt🔤 📇 🔤hello🔤❗️❗️
  🍺 🆕📄▶️📜 🔤a.txt🔤❗️ ➡️ in
  🆗 data 📓 in 10❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Cannot read 10 bytes🔤❗️
  🍉
  🔛 in 0❗️
  🆗 data 📓 in 1❗️ 🍇
    😀 🍺 🔡 data❗️❗️
  🍉
  🙅 error 🍇
    😀 🔤Still cannot read after moving back🔤❗️
  🍉
🍉
```

```output
Cannot read 10 bytes
Still cannot read after moving back
```

If you move back with `🔛` and write, you overwrite what was there. `🔚` (move to the end) moves 2 bytes from the start (to the third byte) instead of to the end ([EJ027](../about/known-issues.md#EJ027)).

```emojicode
📦 files 🏠

🏁 🍇
  🍺 🆕📄▶️📝 🔤a.txt🔤❗️ ➡️ out
  🍺 ✏️ out 📇 🔤abcdef🔤❗️❗️
  🔛 out 0❗️
  🍺 ✏️ out 📇 🔤X🔤❗️❗️
  🔚 out❗️
  🍺 ✏️ out 📇 🔤Z🔤❗️❗️
  🚪 out❗️
  😀 🍺 🔡 🍺📇🐇📄 🔤a.txt🔤❗️❗️❗️
🍉
```

```output
XbZdef
```

`files.🍇` also contains `📤`, `📥`, and `📯`, which would return standard output, standard input, and standard error as a `📄`, but they are commented out, so you cannot use them ([EJ029](../about/known-issues.md#EJ029)).

```keywords
fopen
fclose
fwrite
fread
fseek
fflush
seekp
seekg
std::fstream
open
close
read
write
seek
flush
open file
close file
bytes
```

### Creating, deleting, and inspecting directories (📑)

`📑` is a type that collects type methods for creating directories, checking whether a file exists, and so on. It is a value type (`🕊`), so you call its methods with `🕊📑`, as in `📁🕊📑 path❗️`.

```emojicode
📦 files 🏠

🏁 🍇
  🍺 📁🕊📑 🔤data🔤❗️
  🍺 📻🐇📄 🔤data/a.txt🔤 📇 🔤12345🔤❗️❗️
  ↪️ 📃🕊📑 🔤data/a.txt🔤❗️ 🍇
    😀 🔤exists🔤❗️
  🍉
  😀 🔡 🍺📏🕊📑 🔤data/a.txt🔤❗️❗️❗️
  🆗 🔥🕊📑 🔤data🔤❗️ 🍇
    😀 🔤deleted🔤❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
  🍺 💣🕊📑 🔤data🔤❗️
  ↪️ ❎ 📃🕊📑 🔤data🔤❗️❗️ 🍇
    😀 🔤gone with its contents🔤❗️
  🍉
🍉
```

```output
exists
5
Directory not empty
gone with its contents
```

When you catch a method that returns no value, such as `🔥`, with `🆗`, write no name after `🆗`.

| Syntax | Meaning |
|---|---|
| `📁🕊📑 path❗️` | Creates a directory. Its parent directory must already exist |
| `🔫🕊📑 path❗️` | Deletes a file (its documentation comment says not to use it on directories, but it also deletes an empty directory) |
| `🔥🕊📑 path❗️` | Deletes an empty directory |
| `💣🕊📑 path❗️` | Deletes a directory together with the files and directories inside it |
| `🔗🕊📑 originalPath linkPath❗️` | Creates a symbolic link |
| `📃🕊📑 path❗️` | Whether a file or directory exists (`👌`) |
| `📜🕊📑 path❗️` | Whether it exists and is readable (`👌`) |
| `📝🕊📑 path❗️` | Whether it exists and is writable (`👌`) |
| `👟🕊📑 path❗️` | Whether it exists and is executable (`👌`) |
| `📏🕊📑 path❗️` | The size of a file in bytes |
| `⛓🕊📑 path❗️` | The absolute path, with `.`, `..`, and symbolic links resolved |

All except `📃`, `📜`, `📝`, and `👟` can raise errors. The comment in `files.🍇` says `📏` returns -1 when the file is not found, but it actually raises an error.

The virtual file system in this IDE behaves differently from a real OS in these ways. The directory at program start is `/`, and there are no files at first. `📁` raises no error when given a directory that already exists. `📜` and `📝` always return `👎`, and `👟` returns `👍` for anything that exists. `🔗` always fails, and `⛓` fails for any path that does not point to `/` (such as `.` or `/`), both with a `Not supported` error. When given a file, `💣` deletes that file.

```keywords
mkdir
rmdir
remove
unlink
symlink
access
stat
realpath
std::filesystem
directory
folder
delete file
file exists
file size
absolute path
```

## Reading JSON (📦 json)

The `json` package reads a JSON string and turns it into Emojicode values (it cannot write JSON). The result is a `⚪️` (a value of any type), so you check its type with `🔲` and take it out (see [Casting](../types/casting.md)).

Pass the value to `🔲` as an expression, without storing it in a variable first. If you cast a string or list held in a variable and store the result in another variable with `➡️`, the same object is freed twice when it is cleaned up ([EJ031](../about/known-issues.md#EJ031)). As in the example below, compare with `🙌 🤷‍♀️` when you only need to check, and use `🍺🔲` directly when you use the value.

```emojicode
📦 json 🏠

🏁 🍇
  🍺 🔲 🍺 ⚪️🕊🌸 🔤[1, 2.5, "a", true, null, [], {}]🔤❗️ 🍨🐚⚪️🍆 ➡️ list
  🔂 item list 🍇
    ↪️ 🔲 item 🔢 ➡️ n 🍇
      😀 🔤🔢 🧲🔡 n❗️🧲🔤❗️
    🍉
    🙅↪️ 🔲 item 💯 ➡️ r 🍇
      😀 🔤💯 🧲🔡 r 1❗️🧲🔤❗️
    🍉
    🙅↪️ ❎ 🔲 item 🔡 🙌 🤷‍♀️❗️ 🍇
      😀 🔤🔡 🧲🍺🔲 item 🔡🧲🔤❗️
    🍉
    🙅↪️ 🔲 item 👌 ➡️ b 🍇
      😀 🔤👌🔤❗️
    🍉
    🙅↪️ ❎ 🔲 item 🍨🐚⚪️🍆 🙌 🤷‍♀️❗️ 🍇
      😀 🔤🍨🔤❗️
    🍉
    🙅↪️ ❎ 🔲 item 🍯🐚⚪️🍆 🙌 🤷‍♀️❗️ 🍇
      😀 🔤🍯🔤❗️
    🍉
    🙅 🍇
      😀 🔤null🔤❗️
    🍉
  🍉
🍉
```

```output
🔢 1
💯 2.5
🔡 a
👌
null
🍨
🍯
```

| JSON | Emojicode value |
|---|---|
| String | `🔡` |
| Number with no decimal point and no `e` or `E` | `🔢` (numbers that do not fit in `🔢` are read incorrectly, [EJ022](../about/known-issues.md#EJ022)) |
| Number with a decimal point or `e` / `E` | `💯` |
| `true`, `false` | `👌` |
| `null` | No value (`🤷‍♂️`). It matches no type in `🔲` |
| Array | `🍨🐚⚪️🍆` |
| Object | `🍯🐚⚪️🍆` |

If you try to take a value out of an object (`🍯🐚⚪️🍆`) with `🐽`, the official compiler stops on an internal check ([EJ032](../about/known-issues.md#EJ032)). All you can get is the list of keys (`🐙`).

| Syntax | Meaning |
|---|---|
| `⚪️🕊🌸 string❗️` | Reads a string and returns the value it represents |
| `🆕🌸 string❗️` | Creates a parser that reads a string |
| `🆕🌸▶️📇 data❗️` | Creates a parser that reads UTF-8 data (`📇`) |
| `⚪️ parser❗️` | Reads the parser's input and returns the value it represents |

The parser's `⚪️` advances its reading position, so keep the parser in a variable made with `🖍🆕`. Data read from a file can be passed directly to `🆕🌸▶️📇`.

```emojicode
📦 json 🏠

🏁 🍇
  🆕🌸▶️📇 📇 🔤"data"🔤❗️❗️ ➡️ 🖍🆕 parser
  🆗 value ⚪️ parser❗️ 🍇
    😀 🍺🔲 value 🔡❗️
  🍉
  🙅 error 🍇
    😀 💬 error❗️❗️
  🍉
🍉
```

```output
data
```

```keywords
JSON
parse
JSON.parse
json.loads
nlohmann::json
parser
null
```

### When the input cannot be read (🚧🔸🌸)

If you pass a string that is not valid JSON, `⚪️` raises `🚧🔸🌸`. It is a subclass of `🚧`, so you can get the message with `💬`.

```emojicode
📦 json 🏠

🏁 🍇
  🍿 🔤{"a": 1,}🔤 🔤[1 2]🔤 🔤"abc🔤 🔤1 2🔤 🍆 ➡️ inputs
  🔂 text inputs 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      😀 🔤parsed🔤❗️
    🍉
    🙅 error 🍇
      😀 💬 error❗️❗️
    🍉
  🍉
🍉
```

```output
Invalid JSON.
Expected ].
Unexpected end of input.
Unexpected input after end of value.
```

| Message | When it is raised |
|---|---|
| `Unexpected end of input.` | The input ended before the value did (an empty string, an unclosed `"`, `tru`, and so on) |
| `Unexpected input after end of value.` | Something other than whitespace follows the value (`1 2`, `012`, and so on) |
| `Invalid JSON.` | A character that cannot start a value is where a value should start (`'a'`, a key without `"`, a `,` after the last element, and so on) |
| `Expected }.` | An object value is followed by neither `,` nor `}` |
| `Expected ].` | An array element is followed by neither `,` nor `]` |
| `Expected digit after decimal point` | The character after the decimal point is not a digit (`1.x` and so on; for input that ends with `1.`, see [EJ010](../about/known-issues.md#EJ010)) |
| `Unrecognized escape sequence.` | The character after `\` is not a JSON escape (`\x` and so on) |
| `\u must be followed by four characters in range 0-9, A-F, a-f` | The four characters after `\u` include one that is not a hexadecimal digit (`\u00G1` and so on) |
| `\u sequence is begin of surrogate pair but not followed by another \u sequence` | The first half of a surrogate pair (such as `\ud83d`) is not followed by a `\u` for the second half |

```emojicode
📦 json 🏠

🏁 🍇
  🍿 🔤tru🔤 🔤"\x"🔤 🔤"\u00e9"🔤 🍆 ➡️ inputs
  🔂 text inputs 🍇
    🆗 value ⚪️🕊🌸 text❗️ 🍇
      😀 🍺🔲 value 🔡❗️
    🍉
    🙅 error 🍇
      😀 💬 error❗️❗️
    🍉
  🍉
🍉
```

```output
Unexpected end of input.
Unrecognized escape sequence.
é
```

`json` has bugs where it reads `-` alone, `1e`, or `G` through `Z` after `\u` without an error, and bugs where it misreads numbers (a `0` right after the decimal point is lost, so `0.05` becomes `0.5`, and so on) ([EJ022](../about/known-issues.md#EJ022)–[EJ025](../about/known-issues.md#EJ025)).

```keywords
JSON error
parse error
SyntaxError
JSONDecodeError
syntax error
```

## Writing tests (📦 testtube)

`testtube` is a package for writing tests.

```emojicode
📦 testtube 🏠

🐇 🔬 🧪 🍇
  ✒️ ❗️ 🏁 🍇
    ⛔👇 1 ➕ 1 🙌 2 🔤addition🔤❗️
    🔢👇 📐 🔤abc🔤❗️ 3 🔤length🔤❗️
  🍉
🍉

🏁 ➡️ 🔢 🍇
  ↩️ 👔🆕🔬❗️❗️
🍉
```

```output
2 assertions, 0 failures
```

```keywords
test
testing
unit test
assert
googletest
gtest
```

### Assertion methods

Make a subclass of `🧪`, override `🏁` with `✒️`, and call the following methods on `👇` inside it. All of them except `👔` are `🔐` (callable only from inside a subclass), so you cannot call them from outside `🧪`. `👔` is called from outside to run the tests.

| Syntax | Meaning |
|---|---|
| `⛔👇 value description❗️` | Whether the value is `👍` |
| `❎👇 value description❗️` | Whether the value is `👎` |
| `🔡👇 value expected description❗️` | Whether two strings are equal |
| `🔢👇 value expected description❗️` | Whether two integers are equal |
| `💧👇 value expected description❗️` | Whether two bytes are equal |
| `💯👇 value expected description❗️` | Whether two real numbers are equal (compared with `🙌`, so any rounding error makes it fail) |
| `✅👇 description❗️` | Counts one success |
| `🙁👇 description❗️` | Counts one failure and prints a message |
| `👔 test❗️` | Runs `🏁`, prints the result, and returns `1` if anything failed, `0` otherwise |

A failure prints a line `❌ Failed description`. For a failure in `🔡`, `🔢`, `💧`, or `💯`, the actual value follows, and for `❎`, `but expected 👎` follows. The expected value is not printed. Every line ends with one space. Use `✅` and `🙁` when you check a condition yourself that none of the methods above covers.

```emojicode
📦 testtube 🏠

🐇 🔬 🧪 🍇
  ✒️ ❗️ 🏁 🍇
    🔡👇 🔤ab🔤 🔤abc🔤 🔤string🔤❗️
    💯👇 0.1 ➕ 0.2 0.3 🔤real🔤❗️
    ❎👇 👍 🔤true🔤❗️
    ↪️ 📐 🔤abc🔤❗️ 🙌 3 🍇
      ✅👇 🔤length🔤❗️
    🍉
    🙅 🍇
      🙁👇 🔤length🔤❗️
    🍉
    🙁👇 🔤not written yet🔤❗️
  🍉
🍉

🏁 🍇
  👔🆕🔬❗️❗️ ➡️ code
  😀 🔤exit code 🧲🔡 code❗️🧲🔤❗️
🍉
```

```output
❌ Failed string but it is ab 
❌ Failed real but it is 0.300000 
❌ Failed true but expected 👎  
❌ Failed not written yet 
5 assertions, 4 failures
exit code 1
```

If you return the value of `👔` from `🏁` with `↩️` (as in the first example), the program's exit code becomes 1 when something failed. If you call `👔` without overriding `🏁`, it prints `You might want to implement the 🏁 method.`

```keywords
assert_eq
assertEqual
EXPECT_EQ
ASSERT_TRUE
EXPECT_FALSE
fail
test failure
exit code
```

## Documentation comments (📗, 📘)

Apart from ordinary comments (`💭`), there are comments for describing types and packages (for `💭`, see [Hello World](../intro/hello.md)).

| Syntax | Meaning |
|---|---|
| `📗 … 📗` | Describes a type or method. It becomes the description of the type or method right after it |
| `📘 … 📘` | Describes the whole package |

```emojicode
📗 A type that greets people 📗
🐇 👋 🍇
  🆕 🍇🍉
  📗 Takes a name and returns a greeting 📗
  ❗️ 💬 name 🔡 ➡️ 🔡 🍇
    ↩️ 🔤Hello, 🧲name🧲🔤
  🍉
🍉

🏁 🍇
  😀 💬 🆕👋❗️ 🔤Emoji🔤❗️❗️
🍉
```

```output
Hello, Emoji
```

```keywords
comment
documentation comment
doc comment
doxygen
javadoc
///
/** */
```

## Things you cannot use in this IDE

- `📜 🔤filename🔤` … includes another file. This IDE compiles only one file, so you cannot use it.
- `🌍` … exports a type outside the package. You use it when you make a package.
- `📻`, `🔗` … connect to functions written in C++ or other languages. You cannot use them in this IDE.

A package consists of two parts: its compiled code (`libname.a`) and an interface file named `🏛`. `🏛` is Emojicode text that the compiler writes out when it builds a package. It holds the declarations of the types and methods exported with `🌍`, along with their `📗` comments. When you import a package with `📦`, the compiler reads this `🏛` instead of the source to learn which types and methods are available. You cannot make packages in this IDE, so no `🏛` is ever produced here, but `files`, `json`, and `testtube`, which you can import, each have one, and it shows up as a location such as `/packages/testtube/🏛:39:6` in error messages when you call a package method the wrong way.

```keywords
🏛
interface
interface file
interface.emojii
header file
.h
```
