/*
另一个需要注意的地方是，在子类的构造函数中，只有调用 super之后，才可以使用 this关键字，否则会报错。
这是因为子类实例的构建，是基于对父类实例加工，只有 super方法才能返回父类实例。
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
/*
上面代码中，子类的 constructor方法没有调用 super之前，就使用 this关键字，结果报错，
而放在 super方法之后就是正确的。
 
下面是生成子类实例的代码。
 */
let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint // true
cp instanceof Point // true
/*
上面代码中，实例对象 cp同时是 ColorPoint和 Point两个类的实例，这与 ES5 的行为完全一致。
 */


