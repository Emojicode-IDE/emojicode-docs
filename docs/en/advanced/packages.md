# Packages and Documentation Comments

## Importing a package (📦)

`📦 name 🏠` imports a package. The standard library `s` is imported from the start, even if you don't write it. In this IDE, besides `s`, you can use `files`, `json`, and `testtube`.

```emojicode
📦 json 🏠

🏁 🍇
  🍺 ⚪️🕊🌸 🔤{"name": "Emoji", "age": 3}🔤❗️ ➡️ value
  ↪️ 🔲 value 🍯🐚⚪️🍆 ➡️ object 🍇
    ↪️ 🐽 object 🔤name🔤❗️ ➡️ name 🍇
      ↪️ 🔲 name 🔡 ➡️ text 🍇
        😀 text❗️
      🍉
    🍉
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

```keywords
file
files
fstream
ofstream
ifstream
read file
write file
file I/O
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
