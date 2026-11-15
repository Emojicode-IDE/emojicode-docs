# Loops

## 🔂 Looping a set number of times or over a range

`🔂 name range 🍇 … 🍉` repeats the block, putting each value in the range into the name in turn. You create a range with `🆕⏩ start end❗️`. **The end value is not included.**

```emojicode
🏁 🍇
  🔂 i 🆕⏩ 0 5❗️ 🍇
    😀 🔡 i❗️❗️
  🍉
🍉
```

```output
0
1
2
3
4
```

If you pass a third value, the loop advances by that step. You can also count down with a negative step.

```emojicode
🏁 🍇
  🔂 i 🆕⏩ 0 10 3❗️ 🍇
    👄 🔤🧲🔡 i❗️🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
  🔂 i 🆕⏩ 3 0 -1❗️ 🍇
    👄 🔤🧲🔡 i❗️🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
🍉
```

```output
0 3 6 9 
3 2 1 
```

```keywords
for
for loop
range
counter
```

## 🔂 Going through a list

You can also pass a list ([Lists and Dictionaries](collections.md)) to `🔂`. If you pass a string, it takes out the characters one by one ([Strings](strings.md)).

```emojicode
🏁 🍇
  🍿 🔤apples🔤 🔤oranges🔤 🔤grapes🔤 🍆 ➡️ fruits
  🔂 fruit fruits 🍇
    😀 🔤I like 🧲fruit🧲🔤❗️
  🍉
🍉
```

```output
I like apples
I like oranges
I like grapes
```

```keywords
foreach
for-in
range-based for
iteration
```

## 🔁 While a condition holds

`🔁 condition 🍇 … 🍉` repeats the block as long as the condition is `👍`.

```emojicode
🏁 🍇
  1 ➡️ 🖍🆕 n
  🔁 n ◀️ 100 🍇
    n ⬅️✖️ 2
  🍉
  😀 🔡 n❗️❗️
🍉
```

```output
128
```

```keywords
while
while loop
infinite loop
```

## Leaving a loop early

Emojicode has nothing like `break`, which leaves a loop early, or `continue`, which skips to the next iteration. Either put the exit condition into the loop's condition, or move the loop into a function (method) and return with `↩️`. To return from a method that doesn't return a value, write `↩️↩️` ([Classes](../types/classes.md)).

```emojicode
🏁 🍇
  💭 Find the first multiple of 7 greater than 50
  1 ➡️ 🖍🆕 n
  👎 ➡️ 🖍🆕 found
  🔁 ❎ found❗️ 🍇
    n ⬅️➕ 1
    ↪️ n 🚮 7 🙌 0 🤝 n ▶️ 50 🍇
      👍 ➡️ 🖍found
    🍉
  🍉
  😀 🔡 n❗️❗️
🍉
```

```output
56
```

```keywords
break
continue
exit loop
```
