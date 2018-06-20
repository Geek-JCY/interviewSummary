/*
正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即 resolve的 Promise 对象。
 */
async function f() {
  return await 123;
}

f().then(v => console.log(v))
// 123
/*
上面代码中，await命令的参数是数值123，它被转成 Promise 对象，并立即 resolve。
 */

/*
await命令后面的 Promise 对象如果变为 reject状态，则 reject的参数会被 catch方法的回调函数接收到。
 */
async function f() {
  await Promise.reject('出错了');
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// 出错了
/*
注意，上面代码中，await语句前面没有 return，但是 reject方法的参数依然传入了 catch方法的回调函数。
这里如果在 await前面加上 return，效果是一样的。
 */






