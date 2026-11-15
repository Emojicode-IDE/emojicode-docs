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

Assignments with an operation such as `⬅️➕` ([Values and Variables](values.md)) can't be used on list elements. Calculate first and store the result back with `➡️` (`🐽 list 1❗️ ➕ 10 ➡️ 🐽list 1❗️`).

```emojicode error
🏁 🍇
  🍿 1 2 3 🍆 ➡️ 🖍🆕 list
  🐽 list 1❗️ ⬅️➕ 10
🍉
```

```text
Unexpected token LeftProductionOperator
```

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

### Repeating a value

`🆕🍨🐚element type🍆 value count❗️` creates a list with the same value repeated count times. Use it to create a table of a fixed size.

```emojicode
🏁 🍇
  🆕🍨🐚🔢🍆 0 5❗️ ➡️ 🖍🆕 counts
  3 ➡️ 🐽counts 2❗️
  😀 🆕🔡 🐰 counts 🍇 n 🔢 ➡️ 🔡 ↩️ 🔡 n❗️ 🍉❗️ 🔤 🔤❗️❗️
  🆕🍨🐚🔡🍆 🔤x🔤 3❗️ ➡️ marks
  😀 🆕🔡 marks 🔤,🔤❗️❗️
🍉
```

```output
0 0 3 0 0
x,x,x
```

The value comes first and the count second. There is no way to pass only the count (`🆕🍨🐚🔢🍆 5❗️`).

```keywords
vector(n, x)
fill
initialize
same value
n copies
table
```

### Lists are copied

A list is a value type ([Value Types and Enumerations](../types/valuetypes.md)). Its contents are copied when you assign it, pass it to a method or initializer, or store it in an instance variable. The same goes for dictionaries.

```emojicode
🐇 📦 🍇
  🖍🆕 items 🍨🐚🔢🍆
  🆕 🍼 items 🍨🐚🔢🍆 🍇🍉
  ❗️ 📏 ➡️ 🔢 🍇
    ↩️ 📏 items❓
  🍉
🍉

🏁 🍇
  🍿 1 2 🍆 ➡️ 🖍🆕 a
  a ➡️ 🖍🆕 b
  🐻 b 3❗️
  😀 🔤a: 🧲🔡 📏 a❓❗️🧲, b: 🧲🔡 📏 b❓❗️🧲🔤❗️
  🆕📦 a❗️ ➡️ box
  🐻 a 4❗️
  😀 🔡 📏 box❗️❗️❗️
🍉
```

```output
a: 2, b: 3
2
```

Adding to `b` doesn't change `a`. Even if you add to `a` after storing it in `box`, `box` still holds 2 elements.

A method's arguments are constants, so you can't even `🐻` to a list you receive. If you want to modify a list inside a method, either return the modified list with `↩️`, or make the list an instance variable and modify it from that class's methods.

```emojicode error
🐇 🧰 🍇
  🐇❗️ 🖊 list 🍨🐚🔢🍆 🍇
    🐻 list 5❗️
  🍉
🍉

🏁 🍇
  🆕🍨🐚🔢🍆❗️ ➡️ a
  🖊🐇🧰 a❗️
🍉
```

```text
Cannot modify constant variable "list".
```

```keywords
copy
pass by value
pass by reference
reference
value type
```

### Lists of lists

You can also create a list whose elements are lists, such as `🍨🐚🍨🐚🔢🍆🍆`. You can modify an inner list in place by calling `🐻` directly on the result of `🐽`, or by storing a value with `➡️` into a position given by two nested `🐽`.

```emojicode
🏁 🍇
  🍿 🍿 1 2 🍆 🍿 3 🍆 🍆 ➡️ 🖍🆕 grid
  🐻 🐽 grid 1❗️ 4❗️
  9 ➡️ 🐽🐽 grid 0❗️ 1❗️
  🔂 row grid 🍇
    😀 🆕🔡 🐰 row 🍇 n 🔢 ➡️ 🔡 ↩️ 🔡 n❗️ 🍉❗️ 🔤 🔤❗️❗️
  🍉
🍉
```

```output
1 9
3 4
```

```keywords
2D array
two-dimensional array
multidimensional array
vector<vector>
adjacency list
grid
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
