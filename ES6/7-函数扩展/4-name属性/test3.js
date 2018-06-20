/*
    如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。
 */ 
const bar = function baz() {};

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"