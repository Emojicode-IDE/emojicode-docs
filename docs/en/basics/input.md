# Standard Input

In the IDE, you write what the program will read in the **Input** tab **before you run it**. The program reads it one line at a time. (In the examples in this documentation, the contents of the “Input” block below each example are passed in.)

## Reading a line (👂🏼)

`🆕🔡▶️👂🏼❗️` reads one line from standard input as a string. The newline at the end of the line is not included.

```emojicode
🏁 🍇
  🆕🔡▶️👂🏼❗️ ➡️ name
  😀 🔤Hello, 🧲name🧲!🔤❗️
🍉
```

```stdin
Emoji
```

```output
Hello, Emoji!
```

```keywords
cin
std::cin
getline
std::getline
scanf
input
readline
read line
read input
```

## Reading as a number

Turn the string you read into an integer with `🔢 … 10❗️`. The result is an optional (`🍬🔢`), so unwrap it with `↪️ … ➡️` ([Optionals](optionals.md)).

```emojicode
🏁 🍇
  🆕🔡▶️👂🏼❗️ ➡️ line
  ↪️ 🔢 line 10❗️ ➡️ n 🍇
    😀 🔤Twice 🧲line🧲 is 🧲🔡 n ✖️ 2❗️🧲🔤❗️
  🍉
  🙅 🍇
    😀 🔤Please enter a number🔤❗️
  🍉
🍉
```

```stdin
21
```

```output
Twice 21 is 42
```

## Reading several numbers on one line

For numbers separated by spaces, split them with `🔫` and then convert them one by one.

```emojicode
🏁 🍇
  🆕🔡▶️👂🏼❗️ ➡️ line
  0 ➡️ 🖍🆕 sum
  🔂 part 🔫 line 🔤 🔤❗️ 🍇
    ↪️ 🔢 part 10❗️ ➡️ n 🍇
      sum ⬅️➕ n
    🍉
  🍉
  😀 🔤Total 🧲🔡 sum❗️🧲🔤❗️
🍉
```

```stdin
3 1 4 1 5
```

```output
Total 14
```

```keywords
split
space-separated
whitespace
competitive programming
```

## Reading many lines

A common format has the count on the first line and the data on the following lines.

```emojicode
🏁 🍇
  🍺 🔢 🆕🔡▶️👂🏼❗️ 10❗️ ➡️ count
  🔂 i 🆕⏩ 0 count❗️ 🍇
    🆕🔡▶️👂🏼❗️ ➡️ name
    😀 🔤🧲🔡 i ➕ 1❗️🧲: 🧲name🧲🔤❗️
  🍉
🍉
```

```stdin
3
Alice
Bob
Carol
```

```output
1: Alice
2: Bob
3: Carol
```

We know the first line is always a number, so it is unwrapped with `🍺`. If you pass a line that is not a number, the program stops there.
