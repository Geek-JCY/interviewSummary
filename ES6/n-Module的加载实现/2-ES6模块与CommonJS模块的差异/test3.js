/*
再举一个出现在export一节中的例子。
 */
// m1.js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

// m2.js
import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);
/*
上面代码中，m1.js的变量foo，在刚加载时等于bar，过了 500 毫秒，又变为等于baz。
 */

/*
让我们看看，m2.js能否正确读取这个变化。
 */
$ babel-node m2.js

bar
baz
/*
上面代码表明，ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
 */






