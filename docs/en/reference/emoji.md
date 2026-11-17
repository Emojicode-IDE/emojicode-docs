# Emoji Quick Reference

This is a list of the emoji that the Emojicode compiler treats specially as “keywords.” Any emoji not listed here can be used as the name of a type, method, or variable (though [newer emoji may not work](../about/known-issues.md)).

Types such as `🔢` `🔡` `🍨` are not keywords; they are types defined in the standard library `s`. The main ones are collected at the end. You can't create a type with the same name as a type in the standard library. Emoji such as `🌳`, which aren't in that last table, can't be used either, so if you get the error `is already defined`, pick another emoji ([Classes](../types/classes.md)).

## Program structure

| Emoji | Meaning | Chapter |
|---|---|---|
| `🏁` | Start of the program (entry point) | [Hello World](../intro/hello.md) |
| `🍇` `🍉` | Start and end of a block | [Hello World](../intro/hello.md) |
| `❗️` | End of a method call | [Hello World](../intro/hello.md) |
| `❓` | End of a query method call (such as `📏 list❓`) | [Lists and Dictionaries](../basics/collections.md) |
| `🤜` `🤛` | Parentheses (compute first) | [Values and Variables](../basics/values.md) |
| `💭` | Single-line comment | [Hello World](../intro/hello.md) |
| `💭🔜` `🔚💭` | Multi-line comment | [Hello World](../intro/hello.md) |
| `📗` | Documentation comment | [Packages and Documentation Comments](../advanced/packages.md) |
| `📘` | Package documentation comment | [Packages and Documentation Comments](../advanced/packages.md) |

## Values and variables

| Emoji | Meaning | Chapter |
|---|---|---|
| `➡️` | Name a value, assign, return type | [Values and Variables](../basics/values.md) |
| `🖍` | Mutable (variables and methods) | [Values and Variables](../basics/values.md) |
| `🆕` | Create something new (variable, instance, initializer) | [Values and Variables](../basics/values.md) |
| `⬅️` | Compound assignment (such as `⬅️➕`), initial value of an instance variable | [Values and Variables](../basics/values.md) |
| `👍` `👎` | True and false | [Values and Variables](../basics/values.md) |
| `🤷‍♀️` | No value (`🤷‍♂️` and `🤷` mean the same) | [Optionals](../basics/optionals.md) |
| `🔤` | String | [Strings](../basics/strings.md) |
| `🧲` | Interpolate a value into a string | [Strings](../basics/strings.md) |
| `❌` | Escape inside a string (such as `❌n`) | [Strings](../basics/strings.md) |
| `🍿` `🍆` | List and dictionary literals | [Lists and Dictionaries](../basics/collections.md) |
| `🍺` | Unwrap an optional or an error (stops if there is nothing) | [Optionals](../basics/optionals.md) |

## Operators

| Emoji | Meaning | Chapter |
|---|---|---|
| `➕` `➖` `✖️` `➗` | Addition, subtraction, multiplication, division | [Values and Variables](../basics/values.md) |
| `🚮` | Remainder | [Values and Variables](../basics/values.md) |
| `🙌` | Equal | [Conditionals](../basics/control.md) |
| `◀️` `▶️` `◀️🙌` `▶️🙌` | Less than, greater than, less than or equal, greater than or equal | [Conditionals](../basics/control.md) |
| `🤝` `👐` | And, or | [Conditionals](../basics/control.md) |
| `❎` | Not (Boolean), bitwise NOT (integer) | [Conditionals](../basics/control.md) |
| `😜` | Same instance? | [Type Values and Casting](../types/casting.md) |
| `⭕` `💢` `❌` | Bitwise AND, OR, XOR | [Bitwise Operations and Numbers](../advanced/numbers.md) |
| `👈` `👉` | Left shift, right shift | [Bitwise Operations and Numbers](../advanced/numbers.md) |
| `🔋` | Negate (flip the sign) | [Bitwise Operations and Numbers](../advanced/numbers.md) |
| `💯` | Convert an integer to a real number | [Values and Variables](../basics/values.md) |

## Control flow

| Emoji | Meaning | Chapter |
|---|---|---|
| `↪️` | If (if) | [Conditionals](../basics/control.md) |
| `🙅↪️` | Otherwise if (else if) | [Conditionals](../basics/control.md) |
| `🙅` | Otherwise (else) | [Conditionals](../basics/control.md) |
| `🔂` | Go through a range or list in order (for) | [Loops](../basics/loops.md) |
| `🔁` | While a condition holds (while) | [Loops](../basics/loops.md) |
| `↩️` | Return a value (return). To return from a method that doesn't return a value, `↩️↩️` | [Classes](../types/classes.md) |
| `🎍🐌` `🎍🏎` | Tell the compiler a branch is unlikely or likely (behavior does not change) | [Conditionals](../basics/control.md) |

## Defining types

| Emoji | Meaning | Chapter |
|---|---|---|
| `🐇` | Class, type method (`🐇❗️`), using a type as a value | [Classes](../types/classes.md) |
| `🕊` | Value type | [Value Types and Enumerations](../types/valuetypes.md) |
| `🔘` | Enumeration; using an enumeration as a value (`🔘enumeration`) | [Value Types and Enumerations](../types/valuetypes.md) |
| `🐊` | Protocol, conforming to a protocol | [Protocols](../types/protocols.md) |
| `🐚` | Generic type arguments | [Generics](../types/generics.md) |
| `🍼` | Store an argument directly in an instance variable | [Classes](../types/classes.md) |
| `👇` | This instance (this) | [Classes](../types/classes.md) |
| `⤴️` | Call a superclass method or initializer | [Inheritance](../types/inheritance.md) |
| `✒️` | Override a superclass method | [Inheritance](../types/inheritance.md) |
| `🔑` | Initializer that every subclass must also provide | [More on Classes](../advanced/classes.md) |
| `🔏` | Cannot be overridden in a subclass | [More on Classes](../advanced/classes.md) |
| `🔓` `🔐` `🔒` | Visibility (public, up to subclasses, this class only) | [More on Classes](../advanced/classes.md) |
| `♻️` | Code run when deinitializing (destructor) | [More on Classes](../advanced/classes.md) |

## Closures

| Emoji | Meaning | Chapter |
|---|---|---|
| `⁉️` | Call a closure | [Closures](../types/closures.md) |
| `🎍🥡` | Closure that is taken outside (escaping) | [Closures](../types/closures.md) |

## Error handling

| Emoji | Meaning | Chapter |
|---|---|---|
| `🚧` | May throw an error (`🚧 ErrorType`) | [Error Handling](../types/errors.md) |
| `🚨` | Throw an error | [Error Handling](../types/errors.md) |
| `🆗` | Catch an error (used together with `🙅`) | [Error Handling](../types/errors.md) |
| `🔺` | Rethrow the error to the caller as is | [Error Handling](../types/errors.md) |

## Writing types

| Emoji | Meaning | Chapter |
|---|---|---|
| `🍬` | Optional (`🍬🔢`) | [Optionals](../basics/optionals.md) |
| `⚪️` | Type that can hold any value | [Type Values and Casting](../types/casting.md) |
| `🔵` | Type that can hold an instance of any class | [Type Values and Casting](../types/casting.md) |
| `🍱` | Type combining several protocols (`🍱P Q🍱`) | [Type Values and Casting](../types/casting.md) |
| `🔲` | Cast | [Type Values and Casting](../types/casting.md) |
| `📣` | Specify the type of a literal | [Type Values and Casting](../types/casting.md) |
| `🔶` | Type in a namespace (`🔶NamespaceType`) | [Packages and Documentation Comments](../advanced/packages.md) |
| `⚫️` | Let the type be inferred (no situation where it works was found in our tests) | [Type Values and Casting](../types/casting.md) |
| `⬛️` | Create an instance from a variable holding a type (`🆕⬛️ variable❗️`) | [Type Values and Casting](../types/casting.md) |
| `◼️` | Returns no value (written where the return type goes) | [Miscellaneous Syntax](../advanced/misc.md) |
| `✴️` | Return a reference to the contents of a value type | [Memory and References](../advanced/memory.md) |
| `⚖️` | Size of a type (in bytes) | [Miscellaneous Syntax](../advanced/misc.md) |
| `🔸` | Join two emoji into one name (such as `🚧🔸↕️`) | [Classes](../types/classes.md) |

## Packages

| Emoji | Meaning | Chapter |
|---|---|---|
| `📦` | Import a package | [Packages and Documentation Comments](../advanced/packages.md) |
| `🏠` | Put the imported types into your own namespace | [Packages and Documentation Comments](../advanced/packages.md) |
| `🌍` | Export a type outside the package | [Packages and Documentation Comments](../advanced/packages.md) |
| `📜` | Include another file (not available in this IDE) | [Packages and Documentation Comments](../advanced/packages.md) |
| `📻` | Connect to a function written in C++ or similar (not available in this IDE) | [Packages and Documentation Comments](../advanced/packages.md) |
| `🔗` | Specify a library to link (not available in this IDE) | |

## Advanced

| Emoji | Meaning | Chapter |
|---|---|---|
| `🏮` | Whether you hold the only reference to that instance | [Memory and References](../advanced/memory.md) |
| `☣️` | Block for writing unsafe code (unsafe) | [Miscellaneous Syntax](../advanced/misc.md) |
| `🎍` | Attribute (`🎍🥡` `🎍🛢` on declarations, `🎍🐌` `🎍🏎` after a condition) | [Closures](../types/closures.md), [Conditionals](../basics/control.md) |
| `🥯` | Inline | [Miscellaneous Syntax](../advanced/misc.md) |
| `🛢` | Skip generating per-type code for generics (`🎍🛢`) | [Miscellaneous Syntax](../advanced/misc.md) |
| `⚠️` | Deprecated (warns when used) | [Miscellaneous Syntax](../advanced/misc.md) |
| `🔟` | Removed symbol literal (using it gives the error `🔣 has been removed.`) | [Miscellaneous Syntax](../advanced/misc.md) |

## Main types in the standard library

These are not keywords, but they are commonly used types.

| Emoji | Type | Chapter |
|---|---|---|
| `🔢` | Integer | [Values and Variables](../basics/values.md) |
| `💯` | Real number | [Values and Variables](../basics/values.md) |
| `👌` | Boolean | [Values and Variables](../basics/values.md) |
| `🔡` | String | [Strings](../basics/strings.md) |
| `💧` | Byte | [Strings](../basics/strings.md) |
| `🍨` | List | [Lists and Dictionaries](../basics/collections.md) |
| `🍯` | Dictionary | [Lists and Dictionaries](../basics/collections.md) |
| `⏩` | Range | [Loops](../basics/loops.md) |
| `📇` | Byte sequence (data) | [Strings](../basics/strings.md) |
| `📶` | Weak reference | [Memory and References](../advanced/memory.md) |
| `🍡` `🔂` | Iterator, and the protocol for types you can loop over | [Iterating Your Own Types with 🔂](../types/iteration.md) |
| `🚧` | Error with a message | [Error Handling](../types/errors.md) |
| `🔠` | Builds a string (string builder) | [Strings](../basics/strings.md) |
| `🌱` | Iterator over a list | [Lists and Dictionaries](../basics/collections.md) |
| `🍦` | Class for passing a list by reference | [Lists and Dictionaries](../basics/collections.md) |
| `😛` | Protocol for types that can be compared for equality with `🙌` | [Protocols](../types/protocols.md) |
| `🎰` | Random numbers | [Bitwise Operations and Numbers](../advanced/numbers.md) |
| `🧠` | Memory area (used in unsafe code) | [Miscellaneous Syntax](../advanced/misc.md) |
| `💻` | Command-line arguments, environment variables, exiting, and more | [System and Threads](../advanced/system.md) |
| `🧵` | Thread (in this IDE, it just runs immediately) | [System and Threads](../advanced/system.md) |
| `🔐` | Mutex (not the `🔐` access level) | [System and Threads](../advanced/system.md) |

```keywords
keyword
keywords
reserved word
list
quick reference
cheat sheet
symbol
emoji
```
