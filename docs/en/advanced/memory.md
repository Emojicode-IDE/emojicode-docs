# Memory and References

## Reference counting

Each class instance keeps count of how many variables and other things are using it (the number of references). When the count reaches 0, the instance is cleaned up, and its `♻️` runs if it has one ([More on Classes](classes.md)). There is no garbage collector.

```emojicode
🐇 🎈 🍇
  🆕 🍇🍉
  ♻️ 🍇
    😀 🔤Cleaned up🔤❗️
  🍉
🍉

🐇 🧒 🍇
  🖍🆕 balloon 🎈
  🆕 🍼 balloon 🎈 🍇🍉
🍉

🏁 🍇
  🆕🎈❗️ ➡️ balloon
  🆕🧒 balloon❗️ ➡️ child
  😀 🔤Still in use🔤❗️
🍉
```

```output
Still in use
Cleaned up
```

```keywords
reference counting
ARC
shared_ptr
std::shared_ptr
memory management
garbage collection
GC
```

## Is this the only reference? (🏮)

`🏮 instanceVariable` checks whether you are the only one referencing that instance.

```emojicode
🐇 🐟 🍇
  🆕 🍇🍉
🍉

🐇 🦍 🍇
  🖍🆕 fish 🐟
  🆕 🍇
    🆕🐟❗️ ➡️ 🖍fish
  🍉
  ❗️ 🔎 🍇
    ↪️ 🏮fish 🍇
      😀 🔤Only I reference it🔤❗️
    🍉
    🙅 🍇
      😀 🔤Others reference it too🔤❗️
    🍉
  🍉
  ❗️ 🐠 ➡️ 🐟 🍇
    ↩️ fish
  🍉
🍉

🏁 🍇
  🆕🦍❗️ ➡️ gorilla
  🔎 gorilla❗️
  🐠 gorilla❗️ ➡️ other
  🔎 gorilla❗️
🍉
```

```output
Only I reference it
Others reference it too
```

Use it when, before modifying something, you decide “if nobody else is using it, modify it as is; if someone is, copy it first” (copy-on-write).

```keywords
use_count
unique
copy on write
copy-on-write
COW
reference counting
🏮
```

## Weak references (📶)

When two instances reference each other, neither count ever reaches 0, so neither can be cleaned up (a reference cycle). If you make one side a `📶` (weak reference), it can refer to the instance without being counted. You get the instance out with `🐽 weakReference❗️`; if it has already been cleaned up, you get no value.

```emojicode
🐇 🐟 🍇
  🖍🆕 name 🔡
  🆕 🍼 name 🔡 🍇🍉
  ❗️ 🏷 ➡️ 🔡 🍇
    ↩️ name
  🍉
  ♻️ 🍇
    😀 🔤Cleaned up 🧲name🧲🔤❗️
  🍉
🍉

🏁 🍇
  🆕🐟 🔤Nemo🔤❗️ ➡️ fish
  🆕📶🐚🐟🍆 fish❗️ ➡️ weak
  ↪️ 🐽 weak❗️ ➡️ f 🍇
    😀 🔤Still here: 🧲🏷 f❗️🧲🔤❗️
  🍉
  🆕📶🐚🐟🍆 🆕🐟 🔤Dory🔤❗️❗️ ➡️ weak2
  ↪️ 🐽 weak2❗️ 🙌 🤷‍♀️ 🍇
    😀 🔤Dory is already gone🔤❗️
  🍉
🍉
```

```output
Still here: Nemo
Cleaned up Dory
Dory is already gone
Cleaned up Nemo
```

`🆕🐟 🔤Dory🔤❗️` is stored only in a weak reference, so it is cleaned up right away.

```keywords
weak
weak reference
weak_ptr
std::weak_ptr
reference cycle
retain cycle
memory leak
```

## Value types are copied, classes are referenced

A value type (`🕊`) is copied when you assign it ([Value Types and Enumerations](../types/valuetypes.md)), but a class still points to the same instance after assignment.

```emojicode
🐇 📦 🍇
  🖍🆕 count 🔢 ⬅️ 0
  🆕 🍇🍉
  ❗️ 🆙 🍇
    count ⬅️➕ 1
  🍉
  ❗️ 🔢 ➡️ 🔢 🍇
    ↩️ count
  🍉
🍉

🏁 🍇
  🆕📦❗️ ➡️ a
  a ➡️ b
  🆙 b❗️
  😀 🔡 🔢 a❗️❗️❗️
🍉
```

```output
1
```

We added to `b`, yet `a` also shows 1. That is because `a` and `b` point to the same instance.

```keywords
reference
pass by reference
pointer
&
copy
shallow copy
reference semantics
```

## Returning a reference to a value type's contents (✴️)

If a value type's method has the return type `✴️Type`, it returns a reference to the contents themselves instead of a copy. If you modify what it returns, the original value changes.

```emojicode
🕊 📊 🍇
  🖍🆕 value 🔢 ⬅️ 0
  🆕 🍇🍉
  🖍❗️ 🆙 🍇
    value ⬅️➕ 1
  🍉
  ❗️ 👀 ➡️ 🔢 🍇
    ↩️ value
  🍉
🍉

🕊 🗄 🍇
  🖍🆕 counter 📊 ⬅️ 🆕📊❗️
  🆕 🍇🍉
  ❗️ 🔍 ➡️ ✴️📊 🍇
    ↩️ counter
  🍉
  ❗️ 📤 ➡️ 📊 🍇
    ↩️ counter
  🍉
🍉

🏁 🍇
  🆕🗄❗️ ➡️ 🖍🆕 drawer
  🆙 🔍 drawer❗️❗️
  😀 🔡 👀 🔍 drawer❗️❗️❗️❗️
  📤 drawer❗️ ➡️ 🖍🆕 copy
  🆙 copy❗️
  😀 🔡 👀 🔍 drawer❗️❗️❗️❗️
🍉
```

```output
1
1
```

`🔍` returns a reference, so `🆙` makes the contents of `drawer` 1. `📤` returns a copy, so modifying `copy` leaves `drawer` at 1.

```keywords
return a reference
return by reference
reference
&
getter
✴
```
