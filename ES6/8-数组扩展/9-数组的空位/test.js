/*
    数组的空位指， 数组的某一个位置没有任何值。
 */
// eg:
Array(3);   // [ , , ,]
console.log( Array(3) );

/*
注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。

 */
0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false
console.log( 0 in [undefined, undefined, undefined] );
console.log( 0 in [, , ,]  );