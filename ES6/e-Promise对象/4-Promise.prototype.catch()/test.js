/*
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 */
getJSON('/posts.json')
.then(function(posts){
    // ...
})
.catch(function(error){
    // 处理 getJSON 和 前一个回调函数 运行时发生的错误
    console.log('发生错误！', error);
});
/*
上面代码中，getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用 then方法指定的回调函数；
如果异步操作抛出错误，状态就会变为 rejected，就会调用 catch方法指定的回调函数，处理这个错误。
另外，then方法指定的回调函数，如果运行中抛出错误，也会被 catch方法捕获。
 */
p.then((val) => console.log('fulfilled: ', val))
    .catch((err) => console.log('rejected: ', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
    .then(null, (err) => console.log("rejected:", err));