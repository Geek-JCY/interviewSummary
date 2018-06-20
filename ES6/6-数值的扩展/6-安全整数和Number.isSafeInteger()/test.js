/*
    JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
 */
Math.pow(2, 53) // 9007199254740992
console.log( Math.pow(2, 53) );

9007199254740992  // 9007199254740992
9007199254740993  // 9007199254740992
console.log('9007199254740993---->', 9007199254740993 );

Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

/*
    ES6 引入了 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 这两个常量，用来表示这个范围的上下限。
 */
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 // true
Number.MAX_SAFE_INTEGER === 9007199254740991 // true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER // true
Number.MIN_SAFE_INTEGER === -9007199254740991  // true

console.log('Number.MAX_SAFE_INTEGER------->', Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER------->', Number.MIN_SAFE_INTEGER);