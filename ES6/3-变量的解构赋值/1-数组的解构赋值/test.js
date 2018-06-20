/*
    从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
 */
// 以前，为变量赋值，只能直接指定值
// let a = 1;
// let b = 2;
// let c = 3;
// console.log('a----->', a);
// console.log('b----->', b);
// console.log('c----->', c);

// ES6 允许写成下面这样
let [a, b, c] = [4, 5, 6]; 
console.log('a----->', a);
console.log('b----->', b);
console.log('c----->', c);

