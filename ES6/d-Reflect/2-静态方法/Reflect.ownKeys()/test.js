/*
Reflect.ownKeys (target)
Reflect.ownKeys方法用于返回对象的所有属性，
基本等同于 Object.getOwnPropertyNames与 Object.getOwnPropertySymbols之和。
 */
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};
// 旧写法
Object.getOwnPropertyNames(myObject)    // [ 'foo', 'bar' ]
console.log( Object.getOwnPropertyNames(myObject) );

Object.getOwnPropertySymbols(myObject)  // [ Symbol(baz), Symbol(bing) ]
console.log( Object.getOwnPropertySymbols(myObject) );

// 新写法
Reflect.ownKeys(myObject)   // [ 'foo', 'bar', Symbol(baz), Symbol(bing) ]
console.log( Reflect.ownKeys(myObject) );