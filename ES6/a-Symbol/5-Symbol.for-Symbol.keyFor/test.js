/*
    有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。
    它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
    如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
 */
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log( s1===s2 );    // true
 //上面代码中，s1和s2都是 Symbol 值，但是它们都是同样参数的Symbol.for方法生成的，所以实际上是同一个值。