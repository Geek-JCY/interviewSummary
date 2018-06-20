/*
有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
 */
const promise = Promise.resolve($.ajax('/whatever.json'));
/*
上面代码将 jQuery 生成的 deferred对象，转为一个新的 Promise 对象。
 */

/*
Promise.resolve等价于下面的写法。
 */
Promise.resolve('foo');
// 等价于
new Promise(resolve => resolve('foo'));





