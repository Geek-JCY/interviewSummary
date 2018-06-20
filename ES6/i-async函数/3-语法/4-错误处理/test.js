/*
错误处理

如果 await后面的异步操作出错，那么等同于 async函数返回的 Promise 对象被 reject。
 */
async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了');
  });
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// Error：出错了
/*
上面代码中，async函数 f执行后，await后面的 Promise 对象会抛出一个错误对象，
导致 catch方法的回调函数被调用，它的参数就是抛出的错误对象。
具体的执行机制，可以参考后文的“async 函数的实现原理”。
 */







