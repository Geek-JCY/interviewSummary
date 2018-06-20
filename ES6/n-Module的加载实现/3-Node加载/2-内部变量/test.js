/*
内部变量

ES6 模块应该是通用的，同一个模块不用修改，就可以用在浏览器环境和服务器环境。
为了达到这个目标，Node 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量。
 */

/*
首先，就是this关键字。ES6 模块之中，顶层的 this指向 undefined；
CommonJS 模块的顶层 this指向当前模块，这是两者的一个重大差异。
 */

/*
其次，以下这些顶层变量在 ES6 模块之中都是不存在的。

    - arguments
    - require
    - module
    - exports
    - __filename
    - __dirname
 */

/*
如果你一定要使用这些变量，有一个变通方法，就是写一个 CommonJS 模块输出这些变量，
然后再用 ES6 模块加载这个 CommonJS 模块。
但是这样一来，该 ES6 模块就不能直接用于浏览器环境了，所以不推荐这样做。
 */
// expose.js
module.exports = {__dirname};

// use.mjs
import expose from './expose.js';
const {__dirname} = expose;
/*
上面代码中，expose.js是一个 CommonJS 模块，输出变量__dirname，该变量在 ES6 模块之中不存在。
ES6 模块加载expose.js，就可以得到__dirname。
 */



