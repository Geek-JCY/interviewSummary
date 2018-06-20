/*
Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

它会返回五种值。

参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。
 */
Math.sign(-5);  // -1
Math.sign(5);   // 1
Math.sign(0);   // +0
Math.sign(-0);  // -0
Math.sign(NaN); // NAN

// 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN
Math.sign('')  // 0
Math.sign(true)  // +1
Math.sign(false)  // 0
Math.sign(null)  // 0
Math.sign('9')  // +1
Math.sign('foo')  // NAN
Math.sign()  // NAN
Math.sign(undefined)  // NAN

// 对于没有部署这个方法的环境，可以用下面的代码模拟。
Math.sign = Math.sign || function(x) {
    x =+x;  // conver to a number
    if ( x === 0 || isNaN(x) ) {
        return x;
    }
    return x > 0 ? 1 : -1;
}