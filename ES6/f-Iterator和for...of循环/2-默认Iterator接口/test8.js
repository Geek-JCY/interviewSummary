/*
如果 Symbol.iterator方法对应的不是遍历器生成函数（即会返回一个遍历器对象），解释引擎将会报错。
 */
var obj = {};

obj[Symbol.iterator] = () => 1;

[...obj] // TypeError: [] is not a function

/*
上面代码中，变量 obj的 Symbol.iterator方法对应的不是遍历器生成函数，因此报错。
 */

