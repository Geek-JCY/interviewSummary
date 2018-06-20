/*
   @@ Integer 数据类型 

    *JavaScript 所有数字都保存成 64 位浮点数，这决定了整数的精确程度只能到 53 个二进制位。
    大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。

    *整数类型的数据只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

    *为了与 Number 类型区别，Integer 类型的数据必须使用后缀n表示。
 */

1n + 2n // 3n
0b1101n // 二进制
0o777n // 八进制
0xFFn // 十六进制

typeof 123n // 'integer'

// JavaScript 原生提供Integer对象，用来生成 Integer 类型的数值。转换规则基本与Number()一致
Integer(123) // 123n
Integer('123') // 123n
Integer(false) // 0n
Integer(true) // 1n

// 以下的用法会报错。
new Integer() // TypeError
Integer(undefined) //TypeError
Integer(null) // TypeError
Integer('123n') // SyntaxError
Integer('abc') // SyntaxError