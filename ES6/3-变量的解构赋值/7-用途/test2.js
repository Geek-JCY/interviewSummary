/*
    2.从函数返回多个值
 */

// 1.返回一个数组
// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// console.log('arr------->', [a, b, c]  );

// 2.返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    }
}
let { foo, bar } = example();
console.log('foo---------->', foo);
console.log('bar---------->', bar);