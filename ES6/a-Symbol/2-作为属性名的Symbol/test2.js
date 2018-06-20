// 注意，Symbol 值作为对象属性名时，不能用点运算符。
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined  （这个调用的 Symbol() 生成的属性）
a['mySymbol'] // "Hello!"   （这个是调用 a.mySymbol 生成的属性）
/*
上面代码中，因为点运算符后面总是字符串，
所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。
 */

// 同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
let s = Symbol();
let obj = {
    [s]: function (arg) { 
        // ....
    }
};
obj[s](123);
// 上面代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个 Symbol 值。
// 采用增强的对象写法，上面代码的obj对象可以写得更简洁一些。
let obj = {
    [s](arg) {
        // ...
    }
};