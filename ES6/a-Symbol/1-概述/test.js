/*
JavaScript 语言的数据类型：
    undefined
    null
    布尔值（Boolean）
    字符串（String）
    数值（Number）
    对象（Object）
    Symbol （ES6 引入的新的原始数据类型，表示独一无二的值）
 */
/*
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，
    一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
    凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
 */
let s = Symbol();
console.log(typeof s);  // "symbol"

// 注意，Symbol函数前不能使用new命令，否则会报错。

// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
// 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
let s3 = Symbol('foo');
let s4 = Symbol('bar');
console.log( s3 );  // Symbol(foo)
console.log( s4 );  // Symbol(bar) 
console.log( s3.toString() );   // "Symbol(foo)"
console.log( s4.toString() );   // "Symbol(bar)"
/*
上面代码中，s1和s2是两个 Symbol 值。如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。
有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
 */

// 每个 Symbol() 声明的类型 都是独一无二的
// 无参数情况
let s1 = Symbol();
let s2 = Symbol();
console.log( s1===s2 ); // false
// 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 有参数的情况
let s5 = Symbol('foo');
let s6 = Symbol('foo');
console.log( s5 === s6) // false

// Symbol 值不能与其他类型的值进行运算，会报错
let sym = Symbol('My symbol');
console.log( "your symbol is " + sym ); // TypeError: can't convert symbol to string
console.log( `your symbol is ${sym}` ); // TypeError: can't convert symbol to string 

// Symbol 可以显示的转为字符串
let sym2 = Symbol('My symbol');
String( sym2 ); // 'Symbol(My symbol)'
sym2.toString();    // 'Symbol(My symbol)'

// Symbol 值也可以转为布尔值，但是不能转为数值
let sym3 = Symbol();
console.log( Boolean(sym3) );   // true
console.log( !sym3 );

if (sym3) {
  // ...
}
Number(sym3) // TypeError
sym3 + 2 // TypeError