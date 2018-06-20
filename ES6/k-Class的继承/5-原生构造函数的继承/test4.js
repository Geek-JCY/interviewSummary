/*
下面是一个自定义 Error子类的例子，可以用来定制报错时的行为。
 */
class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}

class MyError extends ExtendableError {
  constructor(m) {
    super(m);
  }
}

var myerror = new MyError('ll');
myerror.message // 11
myerror instanceof Error // true
myerror.name // MyError
myerror.stack
// Error
//     at MyError.ExtendableError
//     ...

/*
注意，继承Object的子类，有一个行为差异。
 */
class NewObj extends Object{
  constructor(){
    super(...arguments);
  }
}
var o = new NewObj({attr: true});
o.attr === true; // false
/*
上面代码中，NewObj继承了Object，但是无法通过 super方法向父类 Object传参。
这是因为 ES6 改变了 Object构造函数的行为，
一旦发现 Object方法不是通过 new Object()这种形式调用，ES6 规定Object构造函数会忽略参数。
 */



