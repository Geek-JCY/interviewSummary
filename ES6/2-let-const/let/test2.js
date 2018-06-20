/*
    2. 不存在变量提升
 */
// var 的情况
console.log(foo);   // 输出 undefined
var foo = 2;
//-----------------------------------
// let 情况
console.log(bar);   // 报错ReferenceError
let bar = 2;