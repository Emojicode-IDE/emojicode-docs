# Lists and Dictionaries

## Lists (🍿, 🍨)

A list is a sequence of values of the same type, in order. You create one with `🍿 value value … 🍆`. Its type is written `🍨🐚element type🍆` (for example, a list of integers is `🍨🐚🔢🍆`).

```emojicode
🏁 🍇
  🍿 10 20 30 🍆 ➡️ numbers
  😀 🔡 🐽 numbers 0❗️❗️❗️
  😀 🔡 📏 numbers❓❗️❗️
🍉
```

```output
10
3
```

| Syntax | Meaning |
|---|---|
| `🐽 list index❗️` | The element at that index (indexes start at 0) |
| `📏 list❓` | The number of elements |

Only `📏` is closed with `❓` instead of `❗️`. The rule is that methods that “query” a value are called with `❓`.

If you try to get an element outside the range with `🐽`, the program stops there.

```keywords
vector
std::vector
array
list
index
subscript
[]
size
length
element count
```

### Changing a list

To change a list, create its variable with `🖍🆕`.

```emojicode
🏁 🍇
  🍿 🔤a🔤 🔤b🔤 🍆 ➡️ 🖍🆕 letters
  🐻 letters 🔤c🔤❗️
  🔤B🔤 ➡️ 🐽letters 1❗️
  🔂 l letters 🍇
    👄 l❗️
  🍉
  😀 🔤🔤❗️
🍉
```

```output
aBc
```

| Syntax | Meaning |
|---|---|
| `🐻 list value❗️` | Add to the end |
| `value ➡️ 🐽list index❗️` | Replace the element at that index |
| `🐨 list index❗️` | Remove the element at that index |
| `🐼 list❗️` | Take out the last element and remove it (`🍬`) |

```keywords
push_back
append
push
add
pop
pop_back
erase
remove
delete
```

### Empty lists

You create an empty list with `🆕🍨🐚element type🍆❗️`.

```emojicode
🏁 🍇
  🆕🍨🐚🔢🍆❗️ ➡️ 🖍🆕 squares
  🔂 i 🆕⏩ 1 6❗️ 🍇
    🐻 squares i ✖️ i❗️
  🍉
  🔂 s squares 🍇
    👄 🔤🧲🔡 s❗️🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
🍉
```

```output
1 4 9 16 25 
```

### Sorting, mapping, and filtering

Lists also have methods that take a closure ([Closures](../types/closures.md)).

```emojicode
🏁 🍇
  🍿 5 3 8 1 🍆 ➡️ 🖍🆕 list
  🦁 list 🍇 a 🔢 b 🔢 ➡️ 🔢 ↩️ a ➖ b 🍉❗️
  🐰 list 🍇 n 🔢 ➡️ 🔡 ↩️ 🔡 n❗️ 🍉❗️ ➡️ texts
  😀 🆕🔡 texts 🔤, 🔤❗️❗️
  🐭 list 🍇 n 🔢 ➡️ 👌 ↩️ n ▶️ 2 🍉❗️ ➡️ big
  😀 🔡 📏 big❓❗️❗️
🍉
```

```output
1, 3, 5, 8
3
```

| Syntax | Meaning |
|---|---|
| `🦁 list comparator❗️` | Sort (the comparator is a closure that returns a negative number if `a` comes first, 0 if they are equal, and a positive number if `a` comes after) |
| `🐰 list transform❗️` | A new list with each element transformed (map) |
| `🐭 list condition❗️` | A new list with only the elements that match the condition (filter) |
| `🆕🔡 list of strings separator❗️` | One string joined with the separator (join) |

```keywords
sort
std::sort
map
transform
std::transform
filter
copy_if
join
concatenate
```

## Dictionaries (🍯)

A dictionary links string keys to values (keys can only be `🔡`). You create one with `🍿 key ➡️ value … 🍆`. Its type is `🍯🐚value type🍆`.

```emojicode
🏁 🍇
  🍿 🔤apple🔤 ➡️ 120 🔤orange🔤 ➡️ 80 🍆 ➡️ 🖍🆕 prices
  ↪️ 🐽 prices 🔤orange🔤❗️ ➡️ price 🍇
    😀 🔤An orange costs 🧲🔡 price❗️🧲 yen🔤❗️
  🍉
  150 ➡️ 🐽prices 🔤grape🔤❗️
  😀 🔡 📏 prices❓❗️❗️
  ↪️ 🐣 prices 🔤banana🔤❗️ 🍇
    😀 🔤There are bananas🔤❗️
  🍉
  🙅 🍇
    😀 🔤There are no bananas🔤❗️
  🍉
🍉
```

```output
An orange costs 80 yen
3
There are no bananas
```

`🐽 dictionary key❗️` returns an optional (`🍬`), because the key might not be there. You unwrap it with `↪️ … ➡️ name` ([Optionals](optionals.md)).

| Syntax | Meaning |
|---|---|
| `🐽 dictionary key❗️` | The value (`🍬`; no value if the key is missing) |
| `value ➡️ 🐽dictionary key❗️` | Store a value for the key (overwrites it if it exists) |
| `🐣 dictionary key❗️` | Whether the key exists (`👌`) |
| `🐨 dictionary key❗️` | Remove the key |
| `🐙 dictionary❗️` | A list of the keys |
| `📏 dictionary❓` | The number of entries |

```keywords
map
std::map
unordered_map
std::unordered_map
associative array
dict
dictionary
hash map
hashmap
find
count
contains
key
```
