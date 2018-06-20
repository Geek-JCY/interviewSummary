/*
    Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
 */
let s1 = Symbol.for('foo');
console.log( Symbol.keyFor(s1)  );  // "foo"

let s2 = Symbol('foo');
console.log( Symbol.keyFor(s2) );   // undefined
// 上面代码中，变量s2属于未登记的 Symbol 值，所以返回undefined。