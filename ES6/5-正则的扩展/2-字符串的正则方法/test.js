/*
    字符串对象共有 4 个方法，
    可以使用正则表达式：match()、replace()、search()和split()。

 */

let str = 'abcdefg123abc';
let reg = new RegExp(/abc/g, 'g');

console.log( str.match(reg)  );

var str2 = str.replace(/abc/g, '666' );
console.log('str2------>', str2);