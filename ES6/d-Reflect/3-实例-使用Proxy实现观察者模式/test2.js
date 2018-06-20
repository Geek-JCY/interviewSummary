/*
下面，使用 Proxy 写一个观察者模式的最简单实现，即实现 observable和 observe这两个函数。
思路是observable函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。
 */
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver){
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
}
/*
上面代码中，先定义了一个 Set集合，所有观察者函数都放进这个集合。
然后，observable 函数返回原始对象的代理，拦截赋值操作。拦截函数 set之中，会自动执行所有观察者。
 */

// 上面的方法的应用 例子:
const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20

