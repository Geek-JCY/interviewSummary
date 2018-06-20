/*
ES6 规定，通过 super调用父类的方法时，方法内部的 this指向子类。
 */
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m(); // 2
/*
上面代码中，super.print()虽然调用的是 A.prototype.print()，但是 A.prototype.print()内部的 this指向子类 B，
导致输出的是 2，而不是 1。也就是说，实际上执行的是 super.print.call(this)。
 */

/*
由于 this指向子类，所以如果通过 super对某个属性赋值，这时 super就是 this，
赋值的属性会变成子类实例的属性。
 */
class A {
  constructor() {
    this.x = 1;
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
/*
上面代码中，super.x 赋值为3，这时等同于对 this.x赋值为 3。
而当读取 super.x的时候，读的是 A.prototype.x，所以返回 undefined。
 */



