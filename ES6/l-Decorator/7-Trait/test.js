/*
7.Trait

Trait 也是一种修饰器，效果与 Mixin 类似，但是提供更多功能，
比如防止同名方法的冲突、排除混入某些方法、为混入的方法起别名等等。

下面采用 traits-decorator这个第三方模块作为例子。
这个模块提供的 traits修饰器，不仅可以接受对象，还可以接受 ES6 类作为参数。
 */
import { traits } from 'traits-decorator';
// ES6 类
class TFoo {
    foo() { console.log('foo') };
}
// 对象
const TBar = {
    bar() { console.log('bar') };
} 

@traits(TFoo, TBar)
class MyClass {};

let obj = new MyClass();
obj.foo(); // foo
obj.bar(); // bar
/*
上面代码中，通过 traits修饰器，在 MyClass类上面“混入”了 TFoo类的 foo方法和 TBar对象的 bar方法。
 */




