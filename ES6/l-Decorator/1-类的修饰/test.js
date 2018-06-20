/*
1.类的修饰
 
 许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。
 目前，有一个提案将这项功能，引入了 ECMAScript。
 */
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
console.log(MyTestableClass.isTestable);
/*
上面代码中，@testable就是一个修饰器。它修改了 MyTestableClass这个类的行为，为它加上了静态属性 isTestable。
testable函数的参数 target是 MyTestableClass类本身。
 */

/*
基本上，修饰器的行为就是下面这样。
 */
@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A;
/*
也就是说，修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类。
 */

function testable(target) {
  // ...
}
/*
上面代码中，testable函数的参数target，就是会被修饰的类。
 */


