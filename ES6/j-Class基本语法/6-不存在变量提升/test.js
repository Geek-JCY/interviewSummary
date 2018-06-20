/*
类不存在变量提升（hoist），这一点与 ES5 完全不同。
 */
new Foo(); // ReferenceError
class Foo {}

/*
上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。
这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。
 */
{
    let Foo = class {};
    class Bar extends Foo {}
}
/*
上面的代码不会报错，因为 Bar继承 Foo的时候，Foo已经有定义了。
但是，如果存在 class的提升，上面代码就会报错，因为 class会被提升到代码头部，
而 let命令是不提升的，所以导致 Bar继承 Foo的时候，Foo还没有定义。
 */

