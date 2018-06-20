/*
虽然 Proxy 可以代理针对目标对象的访问，
但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
 */
const target = {
  m: function () {
    console.log(this === proxy);
  }
};

const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
/*
上面代码中，一旦proxy代理target.m，后者内部的this就是指向proxy，而不是target。
 */