/*
简介

前面介绍过，import命令会被 JavaScript 引擎静态分析，先于模块内的其他模块执行（叫做”连接“更合适）。
所以，下面的代码会报错。
 */
// 报错
if (x === 2) {
  import MyModual from './myModual';
}
/*
上面代码中，引擎处理 import语句是在编译时，这时不会去分析或执行 if语句，
所以 import语句放在i f代码块之中毫无意义，因此会报句法错误，而不是执行时错误。
也就是说，import和 export命令只能在模块的顶层，不能在代码块之中（比如，在 if代码块之中，或在函数之中）。
 */
/*
这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。
如果 import命令要取代 Node 的r equire方法，这就形成了一个障碍。
因为 require是运行时加载模块，import命令无法取代 require的动态加载功能。
 */
const path = './' + fileName;
const myModual = require(path);
/*
上面的语句就是动态加载，require到底加载哪一个模块，只有运行时才知道。import语句做不到这一点。
 */







