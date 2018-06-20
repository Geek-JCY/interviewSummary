/*
6. export default 命令

从前面的例子可以看出，使用 import命令的时候，用户需要知道所要加载的 变量名 或 函数名，否则无法加载。
但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到 export default命令，为模块指定默认输出。
 */
// export-default.js
export default function () {
    console.log('foo');
} 
/*
上面代码是一个模块文件 export-default.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
 */
// import-default.js
import customName from './export-default';
customName(); // 'foo'
/*
上面代码的 import命令，可以用任意名称指向 export-default.js输出的方法，这时就不需要知道原模块输出的函数名。
需要注意的是，这时 import命令后面，不使用大括号。
 */

