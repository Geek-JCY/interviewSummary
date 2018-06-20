/*
1.简介
Class 可以通过 extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
 */
class Point {
}

class ColorPoint extends Point {
}
/*
上面代码定义了一个 ColorPoint类，该类通过 extends关键字，继承了 Point类的所有属性和方法。
但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个 Point类。

下面，我们在 ColorPoint内部加上代码。
 */
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的 constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
/*
上面代码中，constructor方法和 toString方法之中，都出现了 super关键字，
它在这里表示父类的构造函数，用来新建父类的 this对象。
 */



