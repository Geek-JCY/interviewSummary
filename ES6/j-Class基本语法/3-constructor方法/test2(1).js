/*
constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 */
class Foo {
    constructor() {
        return Object.create(null);
    }
}

new Foo() instanceof Foo; // false
/*
上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是 Foo类的实例。
 */

/*
类必须使用 new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new也可以执行。
 */
class Foo {
  constructor() {
    return Object.create(null);
  }
}

Foo()
// TypeError: Class constructor Foo cannot be invoked without 'new'



