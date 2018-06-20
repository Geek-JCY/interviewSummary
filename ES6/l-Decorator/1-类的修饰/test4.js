/*
下面是另外一个例子。
 */
// mixins.js
export function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

// main.js
import { mixins } from './mixins'

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // 'foo'

/*
上面代码通过修饰器 mixins，把 Foo类的方法添加到了 MyClass的实例上面。可以用 Object.assign()模拟这个功能。
 */
const Foo = {
  foo() { console.log('foo') }
};

class MyClass {}

Object.assign(MyClass.prototype, Foo);

let obj = new MyClass();
obj.foo() // 'foo'


/*实际开发中，React 与 Redux 库结合使用时，常常需要写成下面这样。*/
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

/*有了装饰器，就可以改写上面的代码。*/
@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}

/*相对来说，后一种写法看上去更容易理解。*/
