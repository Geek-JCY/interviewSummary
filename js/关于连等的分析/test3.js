/*
简单快速得到 a = b = c 最后 a,b 指向的方法：

　　先创建了 一个 c, c可以是 基本数据类型值，也可以是 引用数据类型值(一个对象);

　　然后,从左往右 分别把 c 赋值给前面的两个变量：a=c　　b=c 顺序执行；

　　最后可得到正确结果；

如：
var a  = {n:1};
var b = a;
a.x = a = {n:2};

这段代码 可做如下快速分析；
 */

// 快速分析法
var a = {n:1};
var b = a;
a.x = {n:2};
a = {n:2};

console.log(a);
console.log(b);
console.log(a.x);
console.log(b.x);

