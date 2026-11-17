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
| `🐼 list❗️` | Take out the last element and remove it (`🍬`; no value if the list is empty) |
| `🐵 list index value❗️` | Insert before that index (returns whether it was inserted as `👌`) |
| `🐥 list other list❗️` | Add all elements of the other list to the end |
| `🐗 list❗️` | Remove all elements |
| `🦔 list❗️` | Reverse the order |
| `🐹 list❗️` | Shuffle into a random order |

```emojicode
🏁 🍇
  🍿 1 2 3 🍆 ➡️ 🖍🆕 list
  ↪️ 🐵 list 0 9❗️ 🍇
    😀 🔤Inserted at the front🔤❗️
  🍉
  🐥 list 🍿 4 5 🍆❗️
  🦔 list❗️
  😀 🆕🔡 🐰 list 🍇 n 🔢 ➡️ 🔡 ↩️ 🔡 n❗️ 🍉❗️ 🔤 🔤❗️❗️
  ↪️ ❎ 🐵 list 6 0❗️❗️ 🍇
    😀 🔤Cannot insert at the end🔤❗️
  🍉
  🐗 list❗️
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output
Inserted at the front
5 4 3 2 1 9
Cannot insert at the end
0
```

The index you pass to `🐵` must be the index of an existing element. If you pass the same number as the element count (just past the last element), it does nothing and returns `👎`. To add to the end, use `🐻`.

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
insert
extend
clear
reverse
std::reverse
shuffle
std::shuffle
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

### Reserving capacity

When a list grows beyond its current capacity, it moves its elements to a larger place. If you know roughly how many elements it will end up with, reserving the capacity in advance reduces these moves. Capacity is separate from the element count; reserving it does not add elements.

```emojicode
🏁 🍇
  🆕🍨🐚🔢🍆▶️🐴 1000❗️ ➡️ 🖍🆕 list
  😀 🔤🧲🔡 📏 list❓❗️🧲 elements, capacity 🧲🔡 🐴 list❓❗️🧲🔤❗️
  🐴 list 5000❗️
  😀 🔤🧲🔡 📏 list❓❗️🧲 elements, capacity 🧲🔡 🐴 list❓❗️🧲🔤❗️
🍉
```

```output
0 elements, capacity 1000
0 elements, capacity 5000
```

| Syntax | Meaning |
|---|---|
| `🆕🍨🐚element type🍆▶️🐴 capacity❗️` | Create an empty list with that capacity reserved |
| `🐴 list capacity❗️` | Make the capacity at least that number |
| `🐴 list❓` | The current capacity |

```keywords
reserve
capacity
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

### Passing by reference (🍦)

`🍦🐚element type🍆` is a class that holds a single list. Because it's a class, passing it to a method refers to the same single `🍦`, and elements added inside a method that received it are visible to the caller too.

```emojicode
🐇 🧰 🍇
  🐇❗️ 🖊 list 🍦🐚🔢🍆 🍇
    🐻 list 5❗️
  🍉
🍉

🏁 🍇
  🆕🍦🐚🔢🍆❗️ ➡️ box
  🐻 box 1❗️
  🖊🐇🧰 box❗️
  🥄 box❗️ ➡️ 🖍🆕 copy
  🐻 copy 9❗️
  🔂 n box 🍇
    👄 🔤🧲🔡 n❗️🧲 🔤❗️
  🍉
  😀 🔤🔤❗️
  😀 🔡 📏 copy❓❗️❗️
🍉
```

```output
1 5 
3
```

| Syntax | Meaning |
|---|---|
| `🆕🍦🐚element type🍆❗️` | Create an empty `🍦` |
| `🐻 🍦 value❗️` | Add to the end |
| `🥄 🍦❗️` | A copy of the list inside (`🍨`) |

Apart from these and going through it with `🔂`, there is nothing else: no `🐽` and no `📏`. To use those, take out a copy of the list with `🥄`. Adding to that copy doesn't change what's inside the `🍦`.

The standard library source says that `🍦` is kept for compatibility with earlier versions and may be removed in a future version.

```keywords
pass by reference
reference
std::vector&
wrapper
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

There are also methods that combine the elements into one value, and methods that examine the elements.

```emojicode
🏁 🍇
  🍿 3 1 4 1 5 🍆 ➡️ list
  ↪️ 🐧 list 🍇 a 🔢 b 🔢 ➡️ 🔢 ↩️ a ➕ b 🍉❗️ ➡️ sum 🍇
    😀 🔡 sum❗️❗️
  🍉
  🐤 list 🔤🔤 🍇 text 🔡 n 🔢 ➡️ 🔡 ↩️ 🔤🧲text🧲🧲🔡 n❗️🧲🔤 🍉❗️ ➡️ digits
  😀 digits❗️
  ↪️ 🐦 list 4❓ 🍇
    😀 🔤There is a 4🔤❗️
  🍉
  ↪️ 🐯 list 🍇 n 🔢 ➡️ 👌 ↩️ n ▶️ 0 🍉❗️ 🍇
    😀 🔤All greater than 0🔤❗️
  🍉
🍉
```

```output
14
31415
There is a 4
All greater than 0
```

| Syntax | Meaning |
|---|---|
| `🐧 list combine❗️` | The result of combining the elements two at a time from the front (reduce; an empty list gives no value, as a `🍬`) |
| `🐤 list initial value combine❗️` | The result of combining the elements in order, starting from the initial value (fold) |
| `🐦 list value❓` | Whether there is an element equal to the value |
| `🐯 list condition❗️` | Whether all elements match the condition |

`🐧` uses the first element as its starting value, so the result has the same type as the elements. To combine into a different type (for example, building a string from a list of numbers), use `🐤`.

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
reduce
fold
accumulate
std::accumulate
sum
contains
std::find
all_of
std::all_of
```

### Removing while iterating (🌱)

`🆕🌱🐚element type🍆 list❗️` creates an iterator ([Iterating Your Own Types with 🔂](../types/iteration.md)) that takes the elements of a list one at a time from the front. Each element it returns is still wrapped in an optional (`🍬`). Calling `🚯` removes the element it returned last.

```emojicode
🏁 🍇
  🍿 1 2 3 4 5 🍆 ➡️ list
  🆕🌱🐚🔢🍆 list❗️ ➡️ it
  🔁 🔽 it❓ 🍇
    ↪️ 🔽 it❗️ ➡️ n 🍇
      ↪️ n 🚮 2 🙌 0 🍇
        🚯 it❗️
      🍉
      🙅 🍇
        👄 🔤🧲🔡 n❗️🧲 🔤❗️
      🍉
    🍉
  🍉
  😀 🔤🔤❗️
  😀 🔡 📏 list❓❗️❗️
🍉
```

```output
1 3 5 
5
```

| Syntax | Meaning |
|---|---|
| `🆕🌱🐚element type🍆 list❗️` | Create the iterator |
| `🔽 iterator❓` | Whether there are elements left to take |
| `🔽 iterator❗️` | Take the next element (`🍬`) |
| `🚯 iterator❗️` | Remove the element taken last |

However, `🌱` copies the list when it's created (lists are value types). `🚯` removes elements from that copy, so, as in the example above, the original list still has 5 elements. There is also no way to get the copy out, so you can't use the result of the removals afterwards. When you want a list without the elements that match a condition, use `🐭`.

What happens if you call `🚯` before taking any element with `🔽` is undefined.

```keywords
iterator
erase
remove_if
remove
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

### Reserving capacity

A dictionary sorts keys into a number of slots by their hash value from `⚗️` ([Strings](strings.md)). When the number of entries is over three quarters of the number of slots, the next time a new key is added it increases the slots and puts everything in again. If you know how many entries you'll add, `🆕🍯🐚value type🍆▶️🐴 count❗️` prepares more slots from the start.

```emojicode
🏁 🍇
  🆕🍯🐚🔢🍆▶️🐴 1000❗️ ➡️ 🖍🆕 squares
  🔂 i 🆕⏩ 0 1000❗️ 🍇
    i ✖️ i ➡️ 🐽squares 🔡 i❗️❗️
  🍉
  😀 🔡 📏 squares❓❗️❗️
  😀 🔡 🛷🕊🍯🐚🔢🍆 1000❗️❗️❗️
  😀 🔡 🛷🕊🍯🐚🔢🍆 7❗️❗️❗️
🍉
```

```output
1000
1423
17
```

| Syntax | Meaning |
|---|---|
| `🆕🍯🐚value type🍆▶️🐴 count❗️` | Create an empty dictionary with extra slots prepared |
| `🛷🕊🍯🐚value type🍆 count❗️` | The number of slots prepared for that count |

`🛷` is a type method. From the fixed table 7, 17, 29, 47, 167, 229, 331, 599, 1423, 3221, 7159, it returns the first number greater than the one you pass. For 7159 or more, it returns double. A dictionary made with `▶️🐴 1000` starts with 1423 slots, so adding 1000 entries never puts them in again. A dictionary made with `🆕🍯🐚value type🍆❗️` starts with 7, and each time it grows it passes the current number to `🛷`, going 7, 17, 29, and so on.

Dictionaries have no method that returns the current capacity, like `🐴` on lists.

```keywords
reserve
rehash
bucket
capacity
```

## Creating from memory (🍪)

Lists and dictionaries also have an initializer `▶️🍪` that can only be called inside `☣️ 🍇 … 🍉`. For lists it's `🆕🍨🐚element type🍆▶️🍪 value-memory count❗️`, and for dictionaries `🆕🍯🐚value type🍆▶️🍪 key-memory value-memory count❗️`; they create a list or dictionary from values laid out in memory (`🧠`). When you write a `🍿 … 🍆` literal, the compiler turns it into a call to this initializer. How to lay out the values, with an example, is in [Creating lists and dictionaries from literals (🍪)](../advanced/misc.md#Creating-lists-and-dictionaries-from-literals-🍪).

```keywords
initializer_list
std::initializer_list
literal
unsafe
```
