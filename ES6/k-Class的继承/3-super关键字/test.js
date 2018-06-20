/*
3.super 关键字

super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。
*/
/*
第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
 */
class A {}
class B extends A {
    constructor(){
        super();
    }
}
/*
上面代码中，子类 B的构造函数之中的 super()，代表调用父类的构造函数。
这是必须的，否则 JavaScript 引擎会报错。
 */

/*
注意，super虽然代表了父类 A的构造函数，但是返回的是子类 B的实例，即 super内部的 this指的是 B，
因此 super()在这里相当于 A.prototype.constructor.call(this)。
 */
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A(); // A
new B(); // B
/*
上面代码中，new.target指向当前正在执行的函数。可以看到，在 super()执行时，它指向的是子类 B的构造函数，
而不是父类 A的构造函数。也就是说，super()内部的 this指向的是 B。
 */

/*
作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
 */
class A {}
class B extends A {
    m() {
        super(); // 报错
    }
}
/*
上面代码中，super()用在 B类的 m方法之中，就会造成句法错误。
 */

