/*
Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
 */
const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

[...map.keys()] // [1, 2, 3]
console.log( [...map.keys()] );

[...map.values()] // ['one', 'two', 'three']
console.log( [...map.values()] );

[...map.entries()] // [[1,'one'], [2, 'two'], [3, 'three']]
console.log( [...map.entries()] );

[...map] // [[1,'one'], [2, 'two'], [3, 'three']]
console.log( [...map] );
