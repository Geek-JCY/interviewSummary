/*
如果 super作为对象，用在静态方法之中，这时 super将指向父类，而不是父类的原型对象。
 */
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1
var child = new Child();
child.myMethod(2); // instance 2
/*
上面代码中，super在静态方法之中指向父类，在普通方法之中指向父类的原型对象。
 */


