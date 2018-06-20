/*
注意，使用 super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。
 */
class A {}
class B extends A {
    constructor() {
        super();
        console.log(super); // 报错
    }
}
/*
上面代码中，console.log(super)当中的 super，无法看出是作为函数使用，还是作为对象使用，
所以 JavaScript 引擎解析代码的时候就会报错。这时，如果能清晰地表明 super的数据类型，就不会报错。
 */

class A {}
class B extends A {
  constructor() {
    super();
    console.log(super.valueOf() instanceof B); // true
  }
}

let b = new B();
/*
上面代码中，super.valueOf()表明 super是一个对象，因此就不会报错。
同时，由于 super使得 this指向 B，所以 super.valueOf()返回的是一个 B的实例。
 */

