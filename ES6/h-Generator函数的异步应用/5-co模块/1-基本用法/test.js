/*
基本用法

co 模块是著名程序员 TJ Holowaychuk 于 2013 年 6 月发布的一个小工具，用于 Generator 函数的自动执行。

下面是一个 Generator 函数，用于依次读取两个文件。
 */
var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
/*
co 模块可以让你不用编写 Generator 函数的执行器。
 */
var co = require('co');
co(gen);
/*
上面代码中，Generator 函数只要传入 co函数，就会自动执行。

co函数返回一个 Promise对象，因此可以用 then方法添加回调函数。
 */
co(gen).then(function (){
  console.log('Generator 函数执行完成');
});
/*
上面代码中，等到 Generator 函数执行结束，就会输出一行提示。
 */




