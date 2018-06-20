/*
3. export 命令

模块功能主要由两个命令构成：export 和 import。
export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
如果你希望外部能够读取模块内部的某个变量，就必须使用 export关键字输出该变量。
下面是一个 JS 文件，里面使用 export命令输出变量。
 */
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1985;
/*
上面代码是 profile.js文件，保存了用户信息。ES6 将其视为一个模块，里面用 export命令对外部输出了三个变量。
 */

/*
export的写法，除了像上面这样，还有另外一种。
 */
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
/*
上面代码在 export命令后面，使用大括号指定所要输出的一组变量。
它与前一种写法（直接放置在 var语句前）是等价的，但是应该优先考虑使用这种写法。
因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
 */


