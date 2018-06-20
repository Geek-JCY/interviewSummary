/*
    在 ES5 中，RegExp 构造函数的参数 有两种情况：
 */
// 1. 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
// var regex = new RegExp('xyz', 'i');
// 等价于
// var regex = /xyz/i;

// 2.第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
// var regex = new RegExp(/xyz/i);
// 等价于
// var regex = /xyz/i;

//  注： 如果第一个参数 是一个正则表达式，不能指定第二个 修饰符 的参数
// eg:
// var regex = new RegExp(/xyz/ig, 'i');


/*
    ES6 如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。

    而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符
 */
console.log( new RegExp(/abc/ig, 'i').flags );
