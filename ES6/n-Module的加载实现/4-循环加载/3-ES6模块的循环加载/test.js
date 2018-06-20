/*
ES6 模块的循环加载

ES6 处理“循环加载”与 CommonJS 有本质的不同。
ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），
那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
*/
/*
请看下面这个例子。
 */
// a.mjs
import {bar} from './b';
console.log('a.mjs');
console.log(bar);
export let foo = 'foo';

// b.mjs
import {foo} from './a';
console.log('b.mjs');
console.log(foo);
export let bar = 'bar';

/*
上面代码中，a.mjs加载b.mjs，b.mjs又加载a.mjs，构成循环加载。执行a.mjs，结果如下。
 */
$ node --experimental-modules a.mjs
b.mjs
ReferenceError: foo is not defined
/*
上面代码中，执行a.mjs以后会报错，foo变量未定义，这是为什么？

让我们一行行来看，ES6 循环加载是怎么处理的。
首先，执行a.mjs以后，引擎发现它加载了b.mjs，因此会优先执行b.mjs，然后再执行a.js。
接着，执行b.mjs的时候，已知它从a.mjs输入了foo接口，这时不会去执行a.mjs，而是认为这个接口已经存在了，继续往下执行。
执行到第三行console.log(foo)的时候，才发现这个接口根本没定义，因此报错。

解决这个问题的方法，就是让b.mjs运行的时候，foo已经有定义了。这可以通过将foo写成函数来解决。
 */
// a.mjs
import {bar} from './b';
console.log('a.mjs');
console.log(bar());
function foo() { return 'foo' }
export {foo};

// b.mjs
import {foo} from './a';
console.log('b.mjs');
console.log(foo());
function bar() { return 'bar' }
export {bar};
/*
这时再执行a.mjs就可以得到预期结果。
 */
$ node --experimental-modules a.mjs
b.mjs
foo
a.mjs
bar
/*
这是因为函数具有提升作用，
在执行import {bar} from './b'时，函数foo就已经有定义了，所以b.mjs加载的时候不会报错。

这也意味着，如果把函数foo改写成函数表达式，也会报错。
 */
// a.mjs
import {bar} from './b';
console.log('a.mjs');
console.log(bar());
const foo = () => 'foo';
export {foo};
/*
上面代码的第四行，改成了函数表达式，就不具有提升作用，执行就会报错。
 */


