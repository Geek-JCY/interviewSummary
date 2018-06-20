/*
setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。
 */
// 例子
var handler = {
  setPrototypeOf (target, proto) {
    throw new Error('Changing the prototype is forbidden');
  }
};
var proto = {};
var target = function () {};
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// Error: Changing the prototype is forbidden
/*
上面代码中，只要修改target的原型对象，就会报错。
*/
/*
注意，该方法只能返回布尔值，否则会被自动转为布尔值。
另外，如果目标对象不可扩展（extensible），setPrototypeOf方法不得改变目标对象的原型。
 */
