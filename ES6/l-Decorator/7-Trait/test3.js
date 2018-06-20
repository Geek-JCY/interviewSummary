/*
方法同名的解决办法：

一种解决方法是排除 TBar的 foo方法。
 */
import { traits, excludes } from 'traits-decorator';

class TFoo {
  foo() { console.log('foo') }
}

const TBar = {
  bar() { console.log('bar') },
  foo() { console.log('foo') }
};

@traits(TFoo, TBar::excludes('foo'))
class MyClass {}

let obj = new MyClass();
obj.foo();
/*
上面代码使用绑定运算符（::）在 TBar上排除 foo方法，混入时就不会报错了。
 */

/*
另一种方法是为 TBar的 foo方法起一个别名。
 */
import { traits, alias } from 'traits-decorator';

class TFoo {
  foo() { console.log('foo') }
}

const TBar = {
  bar() { console.log('bar') },
  foo() { console.log('foo') }
};

@traits(TFoo, TBar::alias({foo: 'aliasFoo'}))
class MyClass {}

let obj = new MyClass();
obj.foo(); // foo
obj.aliasFoo(); // foo
obj.bar(); // bar
/*
上面代码为 TBar的 foo方法起了别名 aliasFoo，于是 MyClass也可以混入 TBar的 foo方法了。
 */

 /*
 alias 和 excludes方法，可以结合起来使用。
  */
 @traits( TExample::excludes('foo', 'bar')::alias({baz: 'exampleBaz'}) )
 class MyClass {}
/*
上面代码排除了 TExample的 foo方法和 bar方法，为 baz方法起了别名 exampleBaz。
 */

/*
as方法则为上面的代码提供了另一种写法。
 */
@traits( TExample::as(excludes:['foo','bar'], alias: {baz:'exampleBaz'}) )




