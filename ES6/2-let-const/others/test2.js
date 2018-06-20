/*
    1. ES6 为了保持兼容，var  和 function 命令声明的全局变量，依旧是顶层对象的属性

    2. 规定 let、const、class 命令声明的全局变量，不属于顶层对象的属性
 */

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
// 浏览器环境下，写成 window.a

console.log(window.a);  // 1

let b = 2;
console.log(window.b);  //undefined