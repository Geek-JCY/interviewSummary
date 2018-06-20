/*
注意，如果 Proxy 对象和 Reflect 对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，
那么Reflect.set会触发Proxy.defineProperty拦截。
 */
let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);

obj.a = 'A';
// set
// defineProperty

/*
上面代码中，Proxy.set拦截里面使用了 Reflect.set，而且传入了receiver，导致触发 Proxy.defineProperty拦截。
这是因为 Proxy.set的 receiver参数总是指向当前的 Proxy 实例（即上例的obj），
而 Reflect.set一旦传入receiver，就会将属性赋值到 receiver上面（即obj），导致触发 defineProperty拦截。
如果Reflect.set没有传入receiver，那么就不会触发defineProperty拦截。
 */
// 例子
let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value) // 注意这里没有 传入 receiver
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set