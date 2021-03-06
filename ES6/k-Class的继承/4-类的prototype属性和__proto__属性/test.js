/*
4.类的 prototype 属性和__proto__属性

大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的 prototype属性。
Class 作为构造函数的语法糖，同时有 prototype属性和__proto__属性，因此同时存在两条继承链。

（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

（2）子类 prototype属性的__proto__属性，表示方法的继承，总是指向父类的 prototype属性。
 */
class A {}
class B extends A {}

B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
console.log( B.__proto__ === A );
console.log( B.prototype.__proto__ === A.prototype );
/*
上面代码中，子类 B的__proto__属性指向父类A，子类B 的 prototype属性的__proto__属性指向父类A 的 prototype属性。

这样的结果是因为，类的继承是按照下面的模式实现的。
 */
class A {}
class B {}
// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);
// B 的实例继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();


/*
《对象的扩展》一章给出过 Object.setPrototypeOf方法的实现。
 */
Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;
/*
这两条继承链，可以这样理解：作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例。
 */



