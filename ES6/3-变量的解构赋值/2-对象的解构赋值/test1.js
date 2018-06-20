/*
    对象的解构赋值是下面形式的简写
 */
let {foo: foo, bar: bar} = {foo:"aaa", bar: "bbb"};

// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// eg:
// let {foo: foo2, bar: bar2} = {foo:"aaa", bar: "bbb"};
// // console.log('foo----->', foo);    // ReferenceError: foo is not defined
// console.log('foo2----->', foo2);
// // console.log('bar----->', bar);   // ReferenceError: bar is not defined
// console.log('bar2----->', bar2);