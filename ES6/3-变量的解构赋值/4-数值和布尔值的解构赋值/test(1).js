/*
    解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
 */
// eg1:
// let { toString: s } = 123;
// console.log('toString---->', toString);
// console.log('s------------>', s);
// console.log( s === Number.prototype.toString );  // true

// eg2:
let { toString: s } = true;
console.log('toString---->', toString);
console.log('s------------>', s);
console.log( s === Boolean.prototype.toString );  // true