/*
    传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。

    ES6 又提供了三种新方法:

    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
 */

let s = 'Hello world!';

console.log( s.startsWith('Hello') );
console.log( s.includes('o') );
console.log( s.endsWith('d!') );


// 这三个方法都支持第二个参数，表示开始搜索的位置。
// let s = 'Hello world!';

// s.startsWith('world', 6) // true
// s.endsWith('Hello', 5) // true
// s.includes('Hello', 6) // false
