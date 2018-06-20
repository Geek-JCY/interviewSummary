/*
    (2). 扩展运算符
    扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
 */
let z = {a: 3, b: 4};
let n = { ...z };
console.log( n );

// 这等同于使用Object.assign方法。
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);