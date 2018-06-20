/*
    注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
 */
// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}

/*
上面三种super的用法都会报错，因为对于 JavaScript 引擎来说，这里的super都没有用在对象的方法之中。
    第一种写法是super用在属性里面，
    第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。
目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。

JavaScript 引擎内部，super.foo等同于Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。
 */