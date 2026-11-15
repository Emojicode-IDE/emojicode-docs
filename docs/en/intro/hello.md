# Hello World

```emojicode
🏁 🍇
  😀 🔤Hello, World!🔤❗️
🍉
```

```output
Hello, World!
```

```keywords
hello world
first program
```

Let's go through it one line at a time.

## 🏁 and 🍇 🍉

`🏁` is where the program starts running (the entry point). Every program has exactly one.

`🍇` and `🍉` mark the start and end of a block. They correspond to `{` `}` in other languages. Whatever you write inside `🏁 🍇 … 🍉` runs in order, from top to bottom.

```keywords
main
int main
entry point
block
{}
curly braces
```

## 😀 and ❗️

`😀` is the “print” method. In Emojicode, a method call takes this form: **write the method's emoji first, then the argument (the value it acts on), and close it with `❗️`**.

```emojicode norun
😀 🔤Hello, World!🔤❗️
```

This means “call the `😀` method of the string `🔤Hello, World!🔤`.” In another language, it would look something like `"Hello, World!".print()`.

```keywords
cout
std::cout
printf
puts
print
display
output
method call
function call
```

## 🔤

Anything between two `🔤` is a string. You can write Japanese and emoji in it as is.

```emojicode
🏁 🍇
  😀 🔤こんにちは 👋🔤❗️
  😀 🔤Line 2🔤❗️
🍉
```

```output
こんにちは 👋
Line 2
```

`😀` prints a newline after the text. If you don't want a newline, use `👄`.

```keywords
endl
no newline
print without newline
```

```emojicode
🏁 🍇
  👄 🔤No newline, 🔤❗️
  😀 🔤newline here🔤❗️
🍉
```

```output
No newline, newline here
```

## Comments

Everything from `💭` to the end of the line is a comment. For a comment spanning several lines, wrap it in `💭🔜` and `🔚💭`.

```keywords
comment
//
/* */
comment out
```

```emojicode
🏁 🍇
  💭 This line does not run
  😀 🔤Outside the comment🔤❗️
  💭🔜
    This does not
    run either
  🔚💭
🍉
```

```output
Outside the comment
```
