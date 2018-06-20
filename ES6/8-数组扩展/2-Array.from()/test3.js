/*
    任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
 */
let arr = Array.from({ length: 3 });
console.log( 'arr---->', arr ); // [ undefined, undefined, undefined ]