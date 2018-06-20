/*
下面是 WeakSet 的另一个例子。
*/
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
/*
上面代码保证了Foo的实例方法，只能在Foo的实例上调用。
这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，
所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。
 */