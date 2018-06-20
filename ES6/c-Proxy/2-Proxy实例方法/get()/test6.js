/*
下面是一个get方法的第三个参数的例子。
 */
const proxy = new Proxy({}, {
    get: function(target, property, receiver){
        return receiver;
    }
});
proxy.getReceiver === proxy;    // true
/*
上面代码中，get方法的第三个参数receiver，总是为当前的 Proxy 实例。
 */