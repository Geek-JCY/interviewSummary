/*
Promise 新建后就会立即执行。
 */
let promise = new Promise(function(resolve, reject){
    console.log('Promise');
    resolve();
});

promise.then(function(){
    console.log('resolved');
});

console.log('Hi!');
// Promise
// Hi!
// resolved
/*
上面代码中，Promise 新建后立即执行，所以首先输出的是 Promise。
然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以 resolved最后输出。
 */