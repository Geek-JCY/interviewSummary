/*
    dotAll模式，即点（dot）代表一切字符。
    所以，正则表达式还引入了一个dotAll属性，返回一个布尔值，表示该正则表达式是否处在dotAll模式。
 */
// const re = /foo.bar/s;
// 另一种写法
const re = new RegExp('foo.bar', 's');

const bl1 = re.test('foo\nbar');
const at1 = re.dotAll;
const flg =re.flags;

console.log( 'bl1------->', bl1 );
console.log( 'at1------->', at1 );
console.log( 'flg------->', flg );