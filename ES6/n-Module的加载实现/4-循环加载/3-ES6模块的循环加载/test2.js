/*
我们再来看 ES6 模块加载器SystemJS给出的一个例子。
 */
// even.js
import { odd } from './odd';
export var counter = 0;
export function even(n){
    counter++;
    return n === 0 || odd(n - 1);
}

// odd.js
import { even } from './even';
export function odd(n) {
    return n !== 0 && even(n - 1);
}
/*
上面代码中，even.js里面的函数even有一个参数n，只要不等于 0，就会减去 1，传入加载的odd()。odd.js也会做类似操作。

运行上面这段代码，结果如下。
 */
$ babel-node
> import * as m from './even.js';
> m.even(10);
true
> m.counter
6
> m.even(20)
true
> m.counter
17
/*
上面代码中，参数n从 10 变为 0 的过程中，even()一共会执行 6 次，所以变量counter等于 6。
第二次调用even()时，参数n从 20 变为 0，even()一共会执行 11 次，加上前面的 6 次，所以变量counter等于 17。
 */

/*
这个例子要是改写成 CommonJS，就根本无法执行，会报错。
 */
// even.js
var odd = require('./odd');
var counter = 0;
exports.counter = counter;
exports.even = function (n) {
  counter++;
  return n == 0 || odd(n - 1);
}

// odd.js
var even = require('./even').even;
module.exports = function (n) {
  return n != 0 && even(n - 1);
}
/*
上面代码中，even.js加载odd.js，而odd.js又去加载even.js，形成“循环加载”。
这时，执行引擎就会输出even.js已经执行的部分（不存在任何结果），
所以在odd.js之中，变量even等于null，等到后面调用even(n-1)就会报错。
 */
$ node
> var m = require('./even');
> m.even(10)
TypeError: even is not a function


