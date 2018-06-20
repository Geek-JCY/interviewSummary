/*
父类的静态方法，可以被子类继承。
 */
class Foo {
  static classMethod() {
    return console.log('hello');
  }
}

class Bar extends Foo {}

Bar.classMethod();
/*
上面代码中，父类 Foo有一个静态方法，子类 Bar可以调用这个方法。
 */

