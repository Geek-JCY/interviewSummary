/*
ES6 允许继承原生构造函数定义子类，
因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。

下面是一个继承Array的例子。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0]; // undefined
/*
上面代码定义了一个 MyArray类，继承了 Array构造函数，因此就可以从 MyArray生成数组的实例。
这意味着，ES6 可以自定义原生数据结构（比如Array、String等）的子类，这是 ES5 无法做到的。
 */

/*
上面这个例子也说明，extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数。
因此可以在原生数据结构的基础上，定义自己的数据结构。

下面就是定义了一个带版本功能的数组。
 */
class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]);
  }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
x // [1, 2]
x.history // [[]]

x.commit();
x.history // [[], [1, 2]]

x.push(3);
x // [1, 2, 3]
x.history // [[], [1, 2]]

x.revert();
x // [1, 2]
/*
上面代码中，VersionedArray会通过 commit方法，将自己的当前状态生成一个版本快照，存入 history属性。
revert方法用来将数组重置为最新一次保存的版本。
除此之外，VersionedArray依然是一个普通数组，所有原生的数组方法都可以在它上面调用。
 */

