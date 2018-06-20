/*
Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
 */
const p = new Promise([p1, p2, p3]);

/*
上面代码中，只要 p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
那个率先改变的 Promise 实例的返回值，就传递给 p的回调函数。
 */

/*
Promise.race方法的参数与 Promise.all方法一样，
如果不是 Promise 实例，就会先调用下面讲到的 Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
 */

/*
下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为 reject，否则变为 resolve。
 */
const p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function(resolve, reject){
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);
p.then(resonse => console.log(response))
p.catch(error => console.log(error))

/*
上面代码中，如果 5 秒之内 fetch方法无法返回结果，变量 p的状态就会变为 rejected，从而触发 catch方法指定的回调函数。
 */



