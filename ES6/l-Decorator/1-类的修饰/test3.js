/*
前面的例子是为类添加一个静态属性，如果想添加实例属性，可以通过目标类的 prototype对象操作。
 */
function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
obj.isTestable // true
/*
上面代码中，修饰器函数 testable是在目标类的 prototype对象上添加属性，因此就可以在实例上调用。
 */


