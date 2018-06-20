/*
    Array.of():
    Array.of方法用于将一组值，转换为数组。
    这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
 */
// eg:
Array.of(3, 11, 8); // [3, 11, 8]
console.log( Array.of(3, 11, 8) ); 

Array.of(3);    // [3]
Array.of(3).length; // 1
