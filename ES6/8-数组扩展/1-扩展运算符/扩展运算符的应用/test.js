/*
    (1). 复制数组
    数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。
 */
// 1. 直接复制 数组
// const a1 = [1, 2];
// const a2 = a1;
// a2[0] = 2;
// console.log( a1 );  // 并没有达到 复制数组 的效果


// 2. ES5 只能用变通方法来复制数组
// const a1 = [1, 2];
// const a2 = a1.concat();
// a2[0] = 2;
// a1 // [1, 2]
// console.log( a1 );

// 3. ES6 提供了复制数组的简便写法
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
// const [...a2] = a1;

a2[0] = 3;
console.log(a1);
console.log(a2);