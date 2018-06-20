/*
5.原生构造函数的继承

原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。

    - Boolean()
    - Number()
    - String()
    - Array()
    - Date()
    - Function()
    - RegExp()
    - Error()
    - Object()

以前，这些原生构造函数是无法继承的，比如，不能自己定义一个Array的子类。
 */
function MyArray() {
    Array.apply(this, arguments);
}
MyArray.prototype = Object.create(Array.prototype, {
    constructor: {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
/*
上面代码定义了一个继承 Array 的 MyArray类。但是，这个类的行为与 Array完全不一致。
 */
var colors = new MyArray();
colors[0] = "red";
colors.length  // 0

colors.length = 0;
colors[0]  // "red"
/*
之所以会发生这种情况，是因为子类无法获得原生构造函数的内部属性，通过 Array.apply()或者分配给原型对象都不行。
原生构造函数会忽略 apply方法传入的this，也就是说，原生构造函数的 this无法绑定，导致拿不到内部属性。
 */





