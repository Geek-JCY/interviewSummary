/*
BigInt 对象

JavaScript 原生提供BigInt对象，可以用作构造函数生成 BitInt 类型的数值。
转换规则基本与Number()一致，将别的类型的值转为 BigInt。
*/
BigInt(123) // 123n
BigInt('123') // 123n
BitInt(false) // 0n
BitInt(true) // 1n

/*
BitInt构造函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。
*/
new BitInt() // TypeError
BigInt(undefined) //TypeError
BigInt(null) // TypeError
BigInt('123n') // SyntaxError
BigInt('abc') // SyntaxError
/*
上面代码中，尤其值得注意字符串123n无法解析成 Number 类型，所以会报错。
*/

/*
BigInt 对象继承了 Object 提供的实例方法。
*/
    - BigInt.prototype.toLocaleString()
    - BigInt.prototype.toString()
    - BigInt.prototype.valueOf()

/*
此外，还提供了三个静态方法。

    - BigInt.asUintN(width, BigInt)： 对给定的大整数，返回 0 到 2width - 1 之间的大整数形式。
    - BigInt.asIntN(width, BigInt)：对给定的大整数，返回 -2width - 1 到 2width - 1 - 1 之间的大整数形式。
    - BigInt.parseInt(string[, radix])：近似于Number.parseInt，将一个字符串转换成指定进制的大整数。
*/
// 将一个大整数转为 64 位整数的形式
const int64a = BigInt.asUintN(64, 12345n);

// Number.parseInt 与 BigInt.parseInt 的对比
Number.parseInt('9007199254740993', 10)
// 9007199254740992

BigInt.parseInt('9007199254740993', 10)
// 9007199254740993n
/*
上面代码中，由于有效数字超出了最大限度，Number.parseInt方法返回的结果是不精确的，
而BigInt.parseInt方法正确返回了对应的大整数。

/*
对于二进制数组，BigInt 新增了两个类型 BigUint64Array 和 BigInt64Array，这两种数据类型返回的都是大整数。
DataView对象的实例方法DataView.prototype.getBigInt64 和 DataView.prototype.getBigUint64，返回的也是大整数。
 */