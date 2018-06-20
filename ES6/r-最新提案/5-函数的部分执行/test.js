/*
5.函数的部分表达式
 */
/*
语法

多参数的函数有时需要绑定其中的一个或多个参数，然后返回一个新函数。
 */
function add(x, y) { return x + y; }
function add7(x) { return x + 7; }
/*
上面代码中，add7函数其实是add函数的一个特殊版本，通过将一个参数绑定为7，就可以从add得到add7。
*/
// bind 方法
const add7 = add.bind(null, 7);

// 箭头函数
const add7 = x => add(x, 7);
/*
上面两种写法都有些冗余。
其中，bind方法的局限更加明显，它必须提供this，并且只能从前到后一个个绑定参数，无法只绑定非头部的参数。
*/

/*
现在有一个提案，使得绑定参数并返回一个新函数更加容易。这叫做函数的部分执行（partial application）。
*/
const add = (x, y) => x + y;
const addOne = add(1, ?);

const maxGreaterThanZero = Math.max(0, ...);

/*
根据新提案，?是单个参数的占位符，...是多个参数的占位符。以下的形式都属于函数的部分执行。
*/
f(x, ?)
f(x, ...)
f(?, x)
f(..., x)
f(?, x, ?)
f(..., x, ...)
/*
?和...只能出现在函数的调用之中，并且会返回一个新函数。
*/
const g = f(?, 1, ...);
// 等同于
const g = (x, ...y) => f(x, 1, ...y);

/*
函数的部分执行，也可以用于对象的方法。
*/
let obj = {
  f(x, y) { return x + y; },
};

const g = obj.f(?, 3);
g(1) // 4