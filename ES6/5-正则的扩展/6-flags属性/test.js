/*
ES6 为正则表达式新增了flags属性，会返回正则表达式的修饰符
 */

// ES5 的 source 属性
console.log( /abc/ig.source );  // abc

// ES6 的 flags 属性
// 返回正则表达式的修饰符
console.log( /abc/ig.flags );  // 'gi'