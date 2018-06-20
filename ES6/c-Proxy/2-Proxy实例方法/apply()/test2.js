/*
下面是另外一个例子。
 */
var twice = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2
    }
};
function sum (left, right) {
    return left + right;
}
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30
/*
上面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。
 */

/*
另外，直接调用 Reflect.apply 方法，也会被拦截
 */
Reflect.apply(proxy, null, [9, 10]);