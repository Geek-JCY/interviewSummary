/*
    undefined就会触发函数参数的默认值。
 */
let arr = [1, undefined, 3].map((x = 'yes') => x);
console.log('arr------>', arr);