/*
    ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
 */
const foo = 'bar';
const baz = {foo};
console.log('baz------------>', baz);

// 等同于
const baz = {foo: foo};