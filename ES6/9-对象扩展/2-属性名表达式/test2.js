/*
    如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。
 */
var obj = {
  foo: true,
  abc: 123
};

/*
    ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在 方括号 内。
 */
// eg1:
let propKey = 'foo';
let a = {
    [propKey] : true,
    ['a'+'bc']: 123
};

console.log( 'a[propKey]----------->', a[propKey] );
console.log( 'a[propKey]----------->', a.foo );
console.log( 'a[abc]----------->', a['a'+'bc'] );
console.log( 'a[abc]----------->', a.abc);

// eg2:
let lastWord = 'last word';
const b = {
        'first word': 'Hello',
        [lastWord]: 'word'
};
console.log( "b['first word']------->", b['first word'] );
console.log( "b[lastWord]------->", b[lastWord] );
console.log( "b['last word']------->", b['last word'] );




