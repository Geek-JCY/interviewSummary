/*
6.管道运算符

Unix 操作系统有一个管道机制（pipeline），可以把前一个操作的值传给后一个操作。
这个机制非常有用，使得简单的操作可以组合成为复杂的操作。
许多语言都有管道的实现，现在有一个提案，让 JavaScript 也拥有管道机制。

JavaScript 的管道是一个运算符，写作|>。
它的左边是一个表达式，右边是一个函数。
管道运算符把左边表达式的值，传入右边的函数进行求值。
*/
x |> f
// 等同于
f(x)

/*
管道运算符最大的好处，就是可以把嵌套的函数，写成从左到右的链式表达式。
*/
function doubleSay (str) {
  return str + ", " + str;
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim (str) {
  return str + '!';
}
/*
上面是三个简单的函数。如果要嵌套执行，传统的写法和管道的写法分别如下。
*/
// 传统的写法
exclaim(capitalize(doubleSay('hello')))
// "Hello, hello!"

// 管道的写法
'hello'
  |> doubleSay
  |> capitalize
  |> exclaim
// "Hello, hello!"

/*
管道运算符只能传递一个值，这意味着它右边的函数必须是一个单参数函数。
如果是多参数函数，就必须进行柯里化，改成单参数的版本。
*/
function double (x) { return x + x; }
function add (x, y) { return x + y; }

let person = { score: 25 };
person.score
  |> double
  |> (_ => add(7, _))
// 57
/*
上面代码中，add函数需要两个参数。
但是，管道运算符只能传入一个值，因此需要事先提供另一个参数，并将其改成单参数的箭头函数_ => add(7, _)。
这个函数里面的下划线并没有特别的含义，可以用其他符号代替，使用下划线只是因为，它能够形象地表示这里是占位符。
*/

/*
管道运算符对于await函数也适用。
*/
x |> await f
// 等同于
await f(x)

const userAge = userId |> await fetchUserById |> getAgeFromUser;
// 等同于
const userAge = getAgeFromUser(await fetchUserById(userId));
