/*
    (3). 与解构赋值结合
    扩展运算符可以与解构赋值结合起来，用于生成数组。
 */
// ES5
a = list[0], rest = list.slice(1);
// ES6
[a, ...rest] = list;

// * 下面是另外一些例子。
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []

// * 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [...butLast, last] = [1, 2, 3, 4, 5]; // 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];   // 报错
