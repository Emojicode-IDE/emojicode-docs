# C++ との対応表

Emojicode のコンパイラは C++ で書かれていて、言語の考え方も C++ や Swift に近いところがあります。C++ を知っている人向けに、よく使うものの対応をまとめました。左の C++ の名前（`std::map` など）や、「連想配列」のような呼び方で検索しても、ここが出てきます。

## プログラムの形

| C++ | Emojicode | 章 |
|---|---|---|
| `int main() { … }` | `🏁 🍇 … 🍉` | [Hello World](../intro/hello.md) |
| `std::cout << x << std::endl;` | `😀 x❗️` | [Hello World](../intro/hello.md) |
| `std::cout << x;`（改行なし） | `👄 x❗️` | [Hello World](../intro/hello.md) |
| `// コメント` | `💭 コメント` | [Hello World](../intro/hello.md) |
| `/* … */` | `💭🔜 … 🔚💭` | [Hello World](../intro/hello.md) |
| `std::getline(std::cin, line);` | `🆕🔡▶️👂🏼❗️ ➡️ line` | [標準入力](../basics/input.md) |
| `#include` / `import` | `📦 名前 🏠` | |
| `return x;` | `↩️ x` | [クラス](../types/classes.md) |

```keywords
main
エントリーポイント
cout
std::cout
printf
puts
print
endl
標準出力
表示
コメント
cin
getline
std::getline
標準入力
入力
include
import
return
```

## 型と変数

| C++ | Emojicode | 章 |
|---|---|---|
| `int64_t` / `long long` | `🔢` | [値と変数](../basics/values.md) |
| `double` | `💯` | [値と変数](../basics/values.md) |
| `bool`、`true`、`false` | `👌`、`👍`、`👎` | [値と変数](../basics/values.md) |
| `std::string` | `🔡` | [文字列](../basics/strings.md) |
| `const auto x = 42;` | `42 ➡️ x` | [値と変数](../basics/values.md) |
| `auto x = 0;` | `0 ➡️ 🖍🆕 x` | [値と変数](../basics/values.md) |
| `x = 5;` | `5 ➡️ 🖍x` | [値と変数](../basics/values.md) |
| `x += 5;` | `x ⬅️➕ 5` | [値と変数](../basics/values.md) |
| `std::string s;`（宣言だけ） | `🖍🆕 s 🔡` | [値と変数](../basics/values.md) |
| `static_cast<double>(n)` | `💯 n❗️` | [値と変数](../basics/values.md) |

```keywords
int
int64_t
long long
整数
double
float
実数
浮動小数点数
bool
true
false
真偽値
string
std::string
文字列型
const
auto
定数
変数
代入
+=
-=
宣言
static_cast
キャスト
型変換
```

## 演算子

| C++ | Emojicode | 章 |
|---|---|---|
| `+` `-` `*` `/` | `➕` `➖` `✖️` `➗` | [値と変数](../basics/values.md) |
| `%` | `🚮` | [値と変数](../basics/values.md) |
| `( … )` | `🤜 … 🤛` | [値と変数](../basics/values.md) |
| `==` | `🙌` | [条件分岐](../basics/control.md) |
| `<` `>` `<=` `>=` | `◀️` `▶️` `◀️🙌` `▶️🙌` | [条件分岐](../basics/control.md) |
| `&&` `\|\|` | `🤝` `👐` | [条件分岐](../basics/control.md) |
| `!x` | `❎ x❗️` | [条件分岐](../basics/control.md) |

```keywords
演算子
四則演算
足し算
引き算
掛け算
割り算
余り
剰余
modulo
%
括弧
==
等しい
比較
<
>
<=
>=
&&
||
and
or
not
否定
論理演算
```

## 文字列

| C++ | Emojicode | 章 |
|---|---|---|
| `std::to_string(n)` | `🔡 n❗️` | [文字列](../basics/strings.md) |
| `std::stoll(s)` | `🔢 s 10❗️`（結果は `🍬🔢`） | [文字列](../basics/strings.md) |
| `"a" + s + "b"` | `🔤a🧲s🧲b🔤` | [文字列](../basics/strings.md) |
| `"\n"` `"\t"` | `❌n` `❌t` | [文字列](../basics/strings.md) |
| `s.substr(pos, len)` | `🔪 s pos len❗️` | [文字列](../basics/strings.md) |
| `s.find(t)` | `🔍 s t❗️` | [文字列](../basics/strings.md) |
| `toupper` | `📫 s❗️` | [文字列](../basics/strings.md) |
| `s.size()` | `📐 s❗️`（バイト数） | [文字列](../basics/strings.md) |
| `for (char c : s)` | `🔂 c s 🍇 … 🍉`（`c` は `🔡`） | [文字列](../basics/strings.md) |

```keywords
to_string
std::to_string
stoi
stoll
std::stoi
atoi
数値変換
文字列連結
連結
結合
concat
フォーマット
format
sprintf
エスケープ
改行
substr
部分文字列
find
検索
toupper
tolower
大文字
小文字
size
length
長さ
```

## 制御構文

| C++ | Emojicode | 章 |
|---|---|---|
| `if (c) { … }` | `↪️ c 🍇 … 🍉` | [条件分岐](../basics/control.md) |
| `else if (c) { … }` | `🙅↪️ c 🍇 … 🍉` | [条件分岐](../basics/control.md) |
| `else { … }` | `🙅 🍇 … 🍉` | [条件分岐](../basics/control.md) |
| `for (int i = 0; i < 10; i++)` | `🔂 i 🆕⏩ 0 10❗️ 🍇 … 🍉` | [繰り返し](../basics/loops.md) |
| `for (auto x : v)` | `🔂 x v 🍇 … 🍉` | [繰り返し](../basics/loops.md) |
| `while (c)` | `🔁 c 🍇 … 🍉` | [繰り返し](../basics/loops.md) |
| `break` / `continue` | ない | [繰り返し](../basics/loops.md) |

```keywords
if
else
else if
条件分岐
for
range-based for
範囲for
ループ
繰り返し
while
```

## コンテナ

| C++ | Emojicode | 章 |
|---|---|---|
| `std::vector<int64_t>` | `🍨🐚🔢🍆`（リスト） | [リストと辞書](../basics/collections.md) |
| `std::vector<int64_t> v{1, 2, 3};` | `🍿 1 2 3 🍆 ➡️ v` | [リストと辞書](../basics/collections.md) |
| `std::vector<int64_t> v(n, x);` | `🆕🍨🐚🔢🍆 x n❗️ ➡️ v` | [リストと辞書](../basics/collections.md) |
| `v[i]` | `🐽 v i❗️` | [リストと辞書](../basics/collections.md) |
| `v.size()` | `📏 v❓` | [リストと辞書](../basics/collections.md) |
| `std::map<std::string, int64_t>` / `std::unordered_map` | `🍯🐚🔢🍆`（辞書。キーは `🔡`） | [リストと辞書](../basics/collections.md) |
| `std::map<…> m{{"a", 1}};` | `🍿 🔤a🔤 ➡️ 1 🍆 ➡️ m` | [リストと辞書](../basics/collections.md) |
| `m.find(key)` | `🐽 m key❗️`（結果は `🍬`） | [リストと辞書](../basics/collections.md) |
| `std::optional<T>` | `🍬T` | [オプショナル](../basics/optionals.md) |
| `std::nullopt` | `🤷‍♀️` | [オプショナル](../basics/optionals.md) |
| `v.push_back(x)` | `🐻 v x❗️` | [リストと辞書](../basics/collections.md) |
| `std::sort` | `🦁 v 比べ方❗️` | [リストと辞書](../basics/collections.md) |

```keywords
vector
std::vector
配列
リスト
動的配列
array
list
map
std::map
unordered_map
std::unordered_map
連想配列
辞書
ハッシュマップ
dict
dictionary
hashmap
[]
添字
インデックス
size
要素数
optional
std::optional
nullopt
null
nullptr
値なし
オプショナル
```

## クラスと型

| C++ | Emojicode | 章 |
|---|---|---|
| `class` | `🐇` | [クラス](../types/classes.md) |
| `struct`（値として扱う型） | `🕊`（値型） | [値型と列挙型](../types/valuetypes.md) |
| `enum class` | `🔘` | [値型と列挙型](../types/valuetypes.md) |
| コンストラクタ | `🆕` | [クラス](../types/classes.md) |
| メンバー関数 | `❗️ 名前 🍇 … 🍉` | [クラス](../types/classes.md) |
| `static` メンバー関数 | `🐇❗️ 名前 🍇 … 🍉` | [クラス](../types/classes.md) |
| `override` | `✒️` | [継承](../types/inheritance.md) |
| `Base::method()`（親の呼び出し） | `⤴️method❗️` | [継承](../types/inheritance.md) |
| `private` | `🔒` | [クラス](../types/classes.md) |
| インターフェース / 純粋仮想クラス | `🐊`（プロトコル） | [プロトコル](../types/protocols.md) |
| `template <typename T>` | `🐚T⚪️🍆` | [ジェネリクス](../types/generics.md) |
| `this` | `👇` | [クラス](../types/classes.md) |

```keywords
class
struct
クラス
構造体
enum
enum class
列挙型
constructor
コンストラクタ
メソッド
メンバー関数
static
静的メソッド
override
virtual
継承
private
protected
interface
抽象クラス
純粋仮想関数
protocol
プロトコル
template
typename
ジェネリクス
generics
テンプレート
```

## エラー処理

| C++ | Emojicode | 章 |
|---|---|---|
| `throw` | `🚨🆕🚧 メッセージ❗️` | [エラー処理](../types/errors.md) |
| `try { … } catch (e) { … }` | `🆗 名前 呼び出し 🍇 … 🍉 🙅 e 🍇 … 🍉` | [エラー処理](../types/errors.md) |
| `e.what()` | `💬 e❗️` | [エラー処理](../types/errors.md) |

```keywords
throw
try
catch
例外
exception
what
エラー処理
```

## 関数とラムダ

| C++ | Emojicode | 章 |
|---|---|---|
| `[](int64_t x) { return x * 2; }` | `🍇 x 🔢 ➡️ 🔢 ↩️ x ✖️ 2 🍉` | [クロージャ](../types/closures.md) |
| `std::function<int64_t(int64_t)>` | `🍇🔢➡️🔢🍉` | [クロージャ](../types/closures.md) |
| `f(21)` | `⁉️ f 21❗️` | [クロージャ](../types/closures.md) |

```keywords
lambda
ラムダ
ラムダ式
無名関数
クロージャ
closure
std::function
関数オブジェクト
関数ポインタ
コールバック
callback
```
