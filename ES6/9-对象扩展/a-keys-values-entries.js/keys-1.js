/*
    Object.keys()
    ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
 */
var obj = { foo: 'bar', baz: 42 };
//console.log( Object.getOwnPropertyDescriptors(obj) );

Object.keys(obj);   // ["foo", "baz"]
console.log( Object.keys(obj) );

