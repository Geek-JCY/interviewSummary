/*
2. 基本用法

ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
 */
// 下面代码创造了一个Promise实例。
const promise = new Promise(function(resolve, reject){
    // ... some code
    if(/* 异步操作成功 */){
        resolve(value)
    } else {
        reject(error)
    }
});
/*
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve和 reject。
它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

resolve函数的作用是，将 Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

reject函数的作用是，将 Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 */

/*
Promise实例生成以后，可以用 then方法分别指定 resolved状态和 rejected状态的回调函数。
 */
promise.then(function(value){
    // success
},function(error){
    // failure
});
/*
then方法可以接受两个回调函数作为参数。
第一个回调函数是 Promise对象的状态变为 resolved时调用，
第二个回调函数是 Promise对象的状态变为 rejected时调用。
其中，第二个函数是可选的，不一定要提供。这两个函数都接受 Promise对象传出的值作为参数。
 */







