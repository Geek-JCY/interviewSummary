/*
ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。

Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

@@@ 浮点数计算是不精确的, 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。
 */
Number.EPSILON === Math.pow(2, -52)
// true
Number.EPSILON
// 2.220446049250313e-16
Number.EPSILON.toFixed(20)
// "0.00000000000000022204"


/*
Number.EPSILON可以用来设置“能够接受的误差范围”。
比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），
即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。
 */
0.1 + 0.2 === 0.3 // false
5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2) // true