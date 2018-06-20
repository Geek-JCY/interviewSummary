/*
2. ES6 模块与 CommonJS 模块的差异
 
讨论 Node 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。

它们有两个重大差异。
    - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 */

/*
第二个差异是因为 CommonJS 加载的是一个对象（即 module.exports属性），该对象只有在脚本运行完才会生成。
而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
 */

/*
下面重点解释第一个差异。

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
请看下面这个模块文件lib.js的例子。
 */
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
    counter: counter,
    incCounter: incCounter,
}
/*
上面代码输出内部变量 counter和改写这个变量的内部方法 incCounter。然后，在 main.js里面加载这个模块。
 */
// main.js
var mod = require('./lib.js');
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
/*
上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的 mod.counter了。
这是因为 mod.counter是一个原始类型的值，会被缓存。
除非写成一个函数，才能得到内部变动后的值。如下：
 */
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
/*
上面代码中，输出的 counter属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量counter的变动了。
 */
$ node main.js
3
4



