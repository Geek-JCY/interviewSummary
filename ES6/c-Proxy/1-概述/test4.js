/*
如果handler没有设置任何拦截，那就等同于直接通向原对象
 */
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log(target.a);
// 上面代码中，handler是一个空对象，没有任何拦截效果，访问proxy就等同于访问target。

 
