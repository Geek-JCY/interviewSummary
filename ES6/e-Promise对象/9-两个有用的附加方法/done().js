/*
ES6 的 Promise API 提供的方法不是很多，有些有用的方法可以自己部署。下面介绍如何部署两个不在 ES6 之中、但很有用的方法。
 */
/*
done()
Promise 对象的回调链，不管以 then方法或 catch方法结尾，
要是最后一个方法抛出错误，都有可能无法捕捉到（因为 Promise 内部的错误不会冒泡到全局）。
因此，我们可以提供一个 done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
 */
asyncFunc()
    .then(f1)
    .catch(r1)
    .then(f2)
    .done();
/*
它的实现代码相当简单。
 */    
Promise.prototype.done = function(onFulfilled, onRejected){
    this.then(onFulfilled, onRejected)
        .catch(function(reason){
            // 抛出一个全局错误
            setTimeout(() => {throw reason}, 0);
        })
}

/*
从上面代码可见，done方法的使用，可以像 then方法那样用，提供 fulfilled和 rejected状态的回调函数，也可以不提供任何参数。
但不管怎样，done都会捕捉到任何可能出现的错误，并向全局抛出。
 */





