/*
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
它与 done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
 */
// 下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
server.listen(0)
    .then(function(){
        // run test
    })
    .finally(server.stop);
/*
它的实现也很简单。
 */
Promise.prototype.finally = function(callback){
    let p = this.constructor;
    return this.then(
        value => p.resolve(callback()).then(() => value),
        reason => p.reject(callback()).then(() => throw reason)
    )
}
/*
上面代码中，不管前面的 Promise 是 fulfilled还是 rejected，都会执行回调函数 callback。
 */








