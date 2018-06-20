/*
需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
 */
// 报错
export 1;

// 报错
var m = 1;
export m;
/*
上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量 m，还是直接输出 1。
1只是一个值，不是接口。

正确的写法是下面这样。
 */
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
/*
上面三种写法都是正确的，规定了对外的接口 m。其他脚本可以通过这个接口，取到值1。
它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。
 */


/*
同样的，function和 class的输出，也必须遵守这样的写法。
 */
// 报错
function f(){}
export f;

// 正确
export function f(){};

// 正确
function f(){}
export {f};




