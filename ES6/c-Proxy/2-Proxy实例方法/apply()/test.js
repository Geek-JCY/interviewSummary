/*
apply 方法拦截函数的调用、call和 apply 操作。
apply 方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
 */
var handlerX = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments);
    }
};
// 下面是一个例子
var target = function () { return 'I am the target' };
var handler = {
    apply: function() {
        return 'I am the proxy';
    }
};
var p = new Proxy(target, handler);
p();
console.log( p() ); // 'I am the proxy'
/*
上面代码中，变量p是 Proxy 的实例，当它作为函数调用时（p()），就会被apply方法拦截，返回一个字符串。
 */
