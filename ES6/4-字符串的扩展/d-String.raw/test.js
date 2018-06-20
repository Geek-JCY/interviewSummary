/*
    String.raw方法，往往用来充当模板字符串的处理函数，
    返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
 */
console.log( String.raw`Hi\n${2+3}` );
console.log( String.raw`Hi\u000A!` );

// 如果原字符串的斜杠已经转义，那么String.raw不会做任何处理
console.log( String.raw`Hi\\n` );

// String.raw方法也可以作为正常的函数使用。
// 这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组
console.log( String.raw({raw: 'test'}, 0, 1, 2) );
//等同于
console.log( String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2) );



