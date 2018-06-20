/*
不过，上面的方法会改写 MyClass类的 prototype对象，如果不喜欢这一点，也可以通过类的继承实现 Mixin。
 */
class MyClass extends MyBaseClass {
  /* ... */
}
/*
上面代码中，MyClass继承了 MyBaseClass。
如果我们想在 MyClass里面“混入”一个 foo方法，一个办法是在 MyClass和 MyBaseClass之间插入一个混入类，
这个类具有 foo方法，并且继承了 MyBaseClass的所有方法，然后 MyClass再继承这个类。
 */
let MyMixin = (superclass) => class extends superclass {
  foo() {
    console.log('foo from MyMixin');
  }
};
/*
上面代码中，MyMixin是一个混入类生成器，接受 superclass作为参数，
然后返回一个继承 superclass的子类，该子类包含一个 foo方法。
 */
/*
接着，目标类再去继承这个混入类，就达到了“混入”foo方法的目的。
 */
class MyClass extends MyMixin(MyBaseClass) {
  /* ... */
}

let c = new MyClass();
c.foo(); // "foo from MyMixin"

/*
如果需要“混入”多个方法，就生成多个混入类。
 */
class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
  /* ... */
}
/*
这种写法的一个好处，是可以调用 super，因此可以避免在“混入”过程中覆盖父类的同名方法。
 */
let Mixin1 = (superclass) => class extends superclass {
  foo() {
    console.log('foo from Mixin1');
    if (super.foo) super.foo();
  }
};

let Mixin2 = (superclass) => class extends superclass {
  foo() {
    console.log('foo from Mixin2');
    if (super.foo) super.foo();
  }
};

class S {
  foo() {
    console.log('foo from S');
  }
}

class C extends Mixin1(Mixin2(S)) {
  foo() {
    console.log('foo from C');
    super.foo();
  }
}
/*
上面代码中，每一次混入发生时，都调用了父类的 super.foo方法，导致父类的同名方法没有被覆盖，行为被保留了下来。
 */
new C().foo()
// foo from C
// foo from Mixin1
// foo from Mixin2
// foo from S

