/*
子类必须在 constructor方法中调用 super方法，否则新建实例时会报错。
这是因为子类没有自己的 this对象，而是继承父类的 this对象，然后对其进行加工。
如果不调用 super方法，子类就得不到 this对象。
 */
class Point { /* ... */ }

class ColorPoint extends Point {
    constructor(){
    }
}

let cp = new ColorPoint(); // ReferenceError: this is not defined
/*
上面代码中，ColorPoint继承了父类 Point，但是它的构造函数没有调用 super方法，导致新建实例时报错。
 */

/*
ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this上面（Parent.apply(this)）。
ES6 的继承机制完全不同，实质是先创造父类的实例对象 this（所以必须先调用 super方法），
然后再用子类的构造函数修改 this。

如果子类没有定义 constructor方法，这个方法会被默认添加，代码如下。
也就是说，不管有没有显式定义，任何一个子类都有 constructor方法。
 */
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}






