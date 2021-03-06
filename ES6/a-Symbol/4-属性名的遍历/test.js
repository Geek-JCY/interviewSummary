/*
    Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
    也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
    但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名
 */
// Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log( objectSymbols );   // [ Symbol(a), Symbol(b) ]