/*
现有方法

私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。
 */
/*
一种做法是在命名上加以区别。
 */
class Widget {
    // 共有方法
    foo(baz){
        this._bar(baz);
    }

    // 私有方法
    _bar(baz) {
        return this.snaf = baz;
    }
}
/*
上面代码中，_bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。
但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。
 */

/*
另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
 */
class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz){
    return this.snaf = baz;
}
/*
上面代码中，foo是公有方法，内部调用了 bar.call(this, baz)。这使得 bar实际上成为了当前模块的私有方法。
 */

/*
还有一种方法是利用 Symbol值的唯一性，将私有方法的名字命名为一个 Symbol值。
 */
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass {
    // 公有方法
    foo(baz){
        this[bar](baz);
    }

    // 私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
}
/*
上面代码中，bar和 snaf都是 Symbol值，导致第三方无法获取到它们，因此达到了 私有方法 和 私有属性 的效果。
 */



