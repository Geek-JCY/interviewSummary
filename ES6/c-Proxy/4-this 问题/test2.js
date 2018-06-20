/*
下面是一个例子，由于this指向的变化，导致 Proxy 无法代理目标对象。
 */
const _name = new WeakMap();

class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}

const jane = new Person('Jane');
jane.name // 'Jane'

const proxy = new Proxy(jane, {});
proxy.name // undefined
/*
上面代码中，目标对象jane的name属性，实际保存在外部WeakMap对象_name上面，通过this键区分。
由于通过proxy.name访问时，this指向proxy，导致无法取到值，所以返回undefined。
 */