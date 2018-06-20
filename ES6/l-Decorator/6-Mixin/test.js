/*
6. Mixin

在修饰器的基础上，可以实现 Mixin模式。
所谓 Mixin模式，就是对象继承的一种替代方案，中文译为“混入”（mix in）,意为在一个对象之中混入另外一个对象的方法。

请看下面的例子。
 */
const Foo = {
  foo() { console.log('foo') }
};

class MyClass {}

Object.assign(MyClass.prototype, Foo);

let obj = new MyClass();
obj.foo() // 'foo'
/*
上面代码之中，对象 Foo有一个 foo方法，通过 Object.assign方法，可以将 foo方法“混入” MyClass类，
导致 MyClass的实例 obj对象都具有 foo方法。这就是“混入”模式的一个简单实现。
 */



