/*
Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。
 */
// symbol的应用 Node应用环境下 eg:
// mod.js
const FOO_KEY = Symbol('foo');

function A() {
    this.foo = 'hello';
}

if ( !global[FOO_KEY] ){
    global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];


// 模块应用
const a = require('./mod.js');

/*
如果键名使用Symbol方法生成，那么外部将无法引用这个值，当然也就无法改写。
上面代码将导致其他脚本都无法引用FOO_KEY。但这样也有一个问题，就是如果多次执行这个脚本，每次得到的FOO_KEY都是不一样的。
虽然 Node 会将脚本的执行结果缓存，一般情况下，不会多次执行同一个脚本，但是用户可以手动清除缓存，所以也不是完全可靠。
 */

