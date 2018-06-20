/*
ES6 模块加载 CommonJS 模块

CommonJS 模块的输出都定义在 module.exports这个属性上面。
Node 的 import命令加载 CommonJS 模块，Node 会自动将 module.exports属性，当作模块的默认输出，
即等同于export default xxx。
 */
/*
下面是一个 CommonJS 模块。
 */
// a.js
module.exports = {
    foo: 'hello',
    bar: 'world'
}

// 等同于
export default {
    foo: 'hello',
    bar: 'world'
}
/*
import命令加载上面的模块，module.exports会被视为默认输出，
即import命令实际上输入的是这样一个对象{ default: module.exports }。

所以，一共有三种写法，可以拿到 CommonJS 模块的module.exports。
 */
// 写法一
import baz from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法二
import {default as baz} from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法三
import * as baz from './a';
// baz = {
//   get default() {return module.exports;},
//   get foo() {return this.default.foo}.bind(baz),
//   get bar() {return this.default.bar}.bind(baz)
// }
/*
上面代码的第三种写法，可以通过 baz.default拿到 module.exports。
foo属性和bar属性就是可以通过这种方法拿到了module.exports。
 */
