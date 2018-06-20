/*
字符串是一个类似数组的对象，也原生具有 Iterator 接口。
 */
var someString = "hi";

typeof someString[Symbol.iterator]  // function
console.log( typeof someString[Symbol.iterator] );

var iterator = someString[Symbol.iterator]();

console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );
/*
上面代码中，调用 Symbol.iterator方法返回一个遍历器对象，
在这个遍历器上可以调用 next 方法，实现对于字符串的遍历。
 */



