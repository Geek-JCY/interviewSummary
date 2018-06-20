/*
get 方法可以继承
 */
let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});
let obj = Object.create(proto);
obj.foo // "GET foo"
/*
上面代码中，拦截操作定义在Prototype对象上面，所以如果读取obj对象继承的属性时，拦截会生效。
 */

/*
下面的例子使用get拦截，实现数组读取负数的索引。
 */