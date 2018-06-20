/*
最后，父类的静态方法，也会被子类继承。
 */
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello(); // hello world

/*
上面代码中，hello()是 A类的静态方法，B继承A，也继承了A的静态方法。
 */


