/*
    Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
 */
let arrayLike = [1, 2, 3];
let arr1 = Array.from(arrayLike, x => x * x);
console.log( arr1 );

// 等同于
Array.from(arrayLike).map(x => x * x);

// 等同于
Array.from([1, 2, 3], (x) => x * x);