/*
9. Math.signbit()

Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
*/
Math.sign(-0) // -0
/*
这导致对于判断符号位的正负，Math.sign()不是很有用。
JavaScript 内部使用 64 位浮点数（国际标准 IEEE 754）表示数值，IEEE 754 规定第一位是符号位，0表示正数，1表示负数。
所以会有两种零，+0是符号位为0时的零值，-0是符号位为1时的零值。
实际编程中，判断一个值是+0还是-0非常麻烦，因为它们是相等的。
*/
+0 === -0 // true

/*
目前，有一个提案，引入了Math.signbit()方法判断一个数的符号位是否设置了。
*/
Math.signbit(2) //false
Math.signbit(-2) //true
Math.signbit(0) //false
Math.signbit(-0) //true
/*
可以看到，该方法正确返回了-0的符号位是设置了的。
*/

/*
该方法的算法如下。

    - 如果参数是NaN，返回false
    - 如果参数是-0，返回true
    - 如果参数是负值，返回true
    - 其他情况返回false
 */