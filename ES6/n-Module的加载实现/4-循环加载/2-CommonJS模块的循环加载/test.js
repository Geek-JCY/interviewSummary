/*
CommonJS模块的循环加载

CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。
一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
 */
/*
让我们来看，Node 官方文档里面的例子。脚本文件a.js代码如下。
 */
exports.done = false;
var b = require('./b.js');
console.log('在 a.js 之中，b.done = %j', b.done);
exports.done = true;
console.log('a.js 执行完毕');
/*
上面代码之中，a.js脚本先输出一个done变量，然后加载另一个脚本文件b.js。
注意，此时a.js代码就停在这里，等待b.js执行完毕，再往下执行。
 */

/*
再看b.js的代码。
 */
exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');
/*
上面代码之中，b.js执行到第二行，就会去加载a.js，这时，就发生了“循环加载”。
系统会去a.js模块对应对象的exports属性取值，可是因为a.js还没有执行完，
从exports属性只能取回已经执行的部分，而不是最后的值。
 */
/*
a.js已经执行的部分，只有一行。
 */
exports.done = false;
/*
因此，对于b.js来说，它从a.js只输入一个变量done，值为false。

然后，b.js接着往下执行，等到全部执行完毕，再把执行权交还给a.js。
于是，a.js接着往下执行，直到执行完毕。我们写一个脚本main.js，验证这个过程。
 */
var a = require('./a.js');
var b = require('./b.js');
console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);
/*
执行main.js，运行结果如下。
 */
$ node main.js

在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
在 main.js 之中, a.done=true, b.done=true
/*
上面的代码证明了两件事。
一是，在b.js之中，a.js没有执行完毕，只执行了第一行。
二是，main.js执行到第二行时，不会再次执行b.js，而是输出缓存的b.js的执行结果，即它的第四行。
 */
exports.done = true;
/*
总之，CommonJS 输入的是被输出值的拷贝，不是引用。
 */
