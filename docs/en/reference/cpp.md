# Comparison with C++

The Emojicode compiler is written in C++, and the ideas behind the language are close to C++ and Swift in places. For people who know C++, here is how commonly used features correspond. Searching for the C++ name on the left (such as `std::map`) or a common term such as “associative array” also brings you here.

## Program structure

| C++ | Emojicode | Chapter |
|---|---|---|
| `int main() { … }` | `🏁 🍇 … 🍉` | [Hello World](../intro/hello.md) |
| `std::cout << x << std::endl;` | `😀 x❗️` | [Hello World](../intro/hello.md) |
| `std::cout << x;` (no newline) | `👄 x❗️` | [Hello World](../intro/hello.md) |
| `// comment` | `💭 comment` | [Hello World](../intro/hello.md) |
| `/* … */` | `💭🔜 … 🔚💭` | [Hello World](../intro/hello.md) |
| `std::getline(std::cin, line);` | `🆕🔡▶️👂🏼❗️ ➡️ line` | [Standard Input](../basics/input.md) |
| `#include` / `import` | `📦 name 🏠` | |
| `return x;` | `↩️ x` | [Classes](../types/classes.md) |

```keywords
main
entry point
cout
std::cout
printf
puts
print
endl
standard output
display
comment
cin
getline
std::getline
standard input
input
include
import
return
```

## Types and variables

| C++ | Emojicode | Chapter |
|---|---|---|
| `int64_t` / `long long` | `🔢` | [Values and Variables](../basics/values.md) |
| `double` | `💯` | [Values and Variables](../basics/values.md) |
| `bool`, `true`, `false` | `👌`, `👍`, `👎` | [Values and Variables](../basics/values.md) |
| `std::string` | `🔡` | [Strings](../basics/strings.md) |
| `const auto x = 42;` | `42 ➡️ x` | [Values and Variables](../basics/values.md) |
| `auto x = 0;` | `0 ➡️ 🖍🆕 x` | [Values and Variables](../basics/values.md) |
| `x = 5;` | `5 ➡️ 🖍x` | [Values and Variables](../basics/values.md) |
| `x += 5;` | `x ⬅️➕ 5` | [Values and Variables](../basics/values.md) |
| `std::string s;` (declaration only) | `🖍🆕 s 🔡` | [Values and Variables](../basics/values.md) |
| `static_cast<double>(n)` | `💯 n❗️` | [Values and Variables](../basics/values.md) |

```keywords
int
int64_t
long long
integer
double
float
real number
floating point
bool
true
false
Boolean
string
std::string
string type
const
auto
constant
variable
assignment
+=
-=
declaration
static_cast
cast
type conversion
```

## Operators

| C++ | Emojicode | Chapter |
|---|---|---|
| `+` `-` `*` `/` | `➕` `➖` `✖️` `➗` | [Values and Variables](../basics/values.md) |
| `%` | `🚮` | [Values and Variables](../basics/values.md) |
| `( … )` | `🤜 … 🤛` | [Values and Variables](../basics/values.md) |
| `==` | `🙌` | [Conditionals](../basics/control.md) |
| `<` `>` `<=` `>=` | `◀️` `▶️` `◀️🙌` `▶️🙌` | [Conditionals](../basics/control.md) |
| `&&` `\|\|` | `🤝` `👐` | [Conditionals](../basics/control.md) |
| `!x` | `❎ x❗️` | [Conditionals](../basics/control.md) |

```keywords
operator
arithmetic
addition
subtraction
multiplication
division
remainder
modulus
modulo
%
parentheses
==
equal
comparison
<
>
<=
>=
&&
||
and
or
not
negation
logical operators
```

## Strings

| C++ | Emojicode | Chapter |
|---|---|---|
| `std::to_string(n)` | `🔡 n❗️` | [Strings](../basics/strings.md) |
| `std::stoll(s)` | `🔢 s 10❗️` (the result is `🍬🔢`) | [Strings](../basics/strings.md) |
| `"a" + s + "b"` | `🔤a🧲s🧲b🔤` | [Strings](../basics/strings.md) |
| `"\n"` `"\t"` | `❌n` `❌t` | [Strings](../basics/strings.md) |
| `s.substr(pos, len)` | `🔪 s pos len❗️` | [Strings](../basics/strings.md) |
| `s.find(t)` | `🔍 s t❗️` | [Strings](../basics/strings.md) |
| `toupper` | `📫 s❗️` | [Strings](../basics/strings.md) |
| `s.size()` | `📐 s❗️` (number of bytes) | [Strings](../basics/strings.md) |
| `for (char c : s)` | `🔂 c s 🍇 … 🍉` (`c` is a `🔡`) | [Strings](../basics/strings.md) |

```keywords
to_string
std::to_string
stoi
stoll
std::stoi
atoi
number conversion
string concatenation
concatenate
join
concat
formatting
format
sprintf
escape
newline
substr
substring
find
search
toupper
tolower
uppercase
lowercase
size
length
string length
```

## Control flow

| C++ | Emojicode | Chapter |
|---|---|---|
| `if (c) { … }` | `↪️ c 🍇 … 🍉` | [Conditionals](../basics/control.md) |
| `else if (c) { … }` | `🙅↪️ c 🍇 … 🍉` | [Conditionals](../basics/control.md) |
| `else { … }` | `🙅 🍇 … 🍉` | [Conditionals](../basics/control.md) |
| `for (int i = 0; i < 10; i++)` | `🔂 i 🆕⏩ 0 10❗️ 🍇 … 🍉` | [Loops](../basics/loops.md) |
| `for (auto x : v)` | `🔂 x v 🍇 … 🍉` | [Loops](../basics/loops.md) |
| `while (c)` | `🔁 c 🍇 … 🍉` | [Loops](../basics/loops.md) |
| `break` / `continue` | None | [Loops](../basics/loops.md) |

```keywords
if
else
else if
conditional
for
range-based for
for-each
loop
iteration
while
```

## Containers

| C++ | Emojicode | Chapter |
|---|---|---|
| `std::vector<int64_t>` | `🍨🐚🔢🍆` (list) | [Lists and Dictionaries](../basics/collections.md) |
| `std::vector<int64_t> v{1, 2, 3};` | `🍿 1 2 3 🍆 ➡️ v` | [Lists and Dictionaries](../basics/collections.md) |
| `std::vector<int64_t> v(n, x);` | `🆕🍨🐚🔢🍆 x n❗️ ➡️ v` | [Lists and Dictionaries](../basics/collections.md) |
| `v[i]` | `🐽 v i❗️` | [Lists and Dictionaries](../basics/collections.md) |
| `v.size()` | `📏 v❓` | [Lists and Dictionaries](../basics/collections.md) |
| `std::map<std::string, int64_t>` / `std::unordered_map` | `🍯🐚🔢🍆` (dictionary; keys are `🔡`) | [Lists and Dictionaries](../basics/collections.md) |
| `std::map<…> m{{"a", 1}};` | `🍿 🔤a🔤 ➡️ 1 🍆 ➡️ m` | [Lists and Dictionaries](../basics/collections.md) |
| `m.find(key)` | `🐽 m key❗️` (the result is `🍬`) | [Lists and Dictionaries](../basics/collections.md) |
| `std::optional<T>` | `🍬T` | [Optionals](../basics/optionals.md) |
| `std::nullopt` | `🤷‍♀️` | [Optionals](../basics/optionals.md) |
| `v.push_back(x)` | `🐻 v x❗️` | [Lists and Dictionaries](../basics/collections.md) |
| `std::sort` | `🦁 v compare❗️` | [Lists and Dictionaries](../basics/collections.md) |

```keywords
vector
std::vector
array
list
dynamic array
map
std::map
unordered_map
std::unordered_map
associative array
dictionary
hash map
dict
hashmap
[]
subscript
index
size
number of elements
optional
std::optional
nullopt
null
nullptr
no value
```

## Classes and types

| C++ | Emojicode | Chapter |
|---|---|---|
| `class` | `🐇` | [Classes](../types/classes.md) |
| `struct` (a type treated as a value) | `🕊` (value type) | [Value Types and Enumerations](../types/valuetypes.md) |
| `enum class` | `🔘` | [Value Types and Enumerations](../types/valuetypes.md) |
| Constructor | `🆕` | [Classes](../types/classes.md) |
| Member function | `❗️ name 🍇 … 🍉` | [Classes](../types/classes.md) |
| `static` member function | `🐇❗️ name 🍇 … 🍉` | [Classes](../types/classes.md) |
| `override` | `✒️` | [Inheritance](../types/inheritance.md) |
| `Base::method()` (calling the superclass) | `⤴️method❗️` | [Inheritance](../types/inheritance.md) |
| `private` | `🔒` | [Classes](../types/classes.md) |
| Interface / pure virtual class | `🐊` (protocol) | [Protocols](../types/protocols.md) |
| `template <typename T>` | `🐚T⚪️🍆` | [Generics](../types/generics.md) |
| `this` | `👇` | [Classes](../types/classes.md) |

```keywords
class
struct
structure
enum
enum class
enumeration
constructor
method
member function
static
static method
override
virtual
inheritance
private
protected
interface
abstract class
pure virtual function
protocol
template
typename
generics
```

## Error handling

| C++ | Emojicode | Chapter |
|---|---|---|
| `throw` | `🚨🆕🚧 message❗️` | [Error Handling](../types/errors.md) |
| `try { … } catch (e) { … }` | `🆗 name call 🍇 … 🍉 🙅 e 🍇 … 🍉` | [Error Handling](../types/errors.md) |
| `e.what()` | `💬 e❗️` | [Error Handling](../types/errors.md) |

```keywords
throw
try
catch
exception
what
error handling
```

## Functions and lambdas

| C++ | Emojicode | Chapter |
|---|---|---|
| `[](int64_t x) { return x * 2; }` | `🍇 x 🔢 ➡️ 🔢 ↩️ x ✖️ 2 🍉` | [Closures](../types/closures.md) |
| `std::function<int64_t(int64_t)>` | `🍇🔢➡️🔢🍉` | [Closures](../types/closures.md) |
| `f(21)` | `⁉️ f 21❗️` | [Closures](../types/closures.md) |

```keywords
lambda
lambda expression
anonymous function
closure
std::function
function object
function pointer
callback
```
