/*
const 也用来声明变量，但是 声明的是常量，一旦声明，常量的值就不能改变；

当尝试去改变 const声明的常量时，浏览器就会报错；

所以，const 有一个很好的应用场景，就是当我们引用第三方库时 声明的变量，
用const来声明可以避免未来不小心重命名而出现的bug;
 */

// 如下：
const a = 1;

a = 2; // TypeError: Assignment to constant variable.
