/*
    fill() 方法 使用给定值，填充一个数组。
    fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
 */
var arr = ['a', 'b', 'c'].fill(7);  // [7, 7, 7]
console.log('arr----->', arr);

new Array(3).fill(7);   // [7, 7, 7]