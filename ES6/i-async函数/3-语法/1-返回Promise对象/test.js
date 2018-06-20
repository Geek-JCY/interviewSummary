/*
语法：

async函数的语法规则总体上比较简单，难点是错误处理机制。
 */
/*
返回 Promise 对象

    async函数返回一个 Promise 对象。

    async函数内部 return语句返回的值，会成为 then方法回调函数的参数。
 */
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
/*
上面代码中，函数 f内部 return命令返回的值，会被 then方法回调函数接收到。

async函数内部抛出错误，会导致返回的 Promise 对象变为 reject状态。抛出的错误对象会被 catch方法回调函数接收到。
 */
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: 出错了





