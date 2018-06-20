/*
    Array.from方法用于将两类对象转为真正的数组：
    类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
 */
// eg:
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5 写法
let arr1 = [].slice.call(arrayLike);   // ['a', 'b', 'c']
console.log('arr1---->', arr1 );

// ES6 写法
let arr2 = Array.from( arrayLike );  // ['a', 'b', 'c']
console.log('arr2---->', arr2 );