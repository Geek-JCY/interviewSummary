/*
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
 */
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
 console.log(target);