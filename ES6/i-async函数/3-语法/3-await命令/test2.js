/*
只要一个 await语句后面的 Promise 变为 reject，那么整个 async函数都会中断执行。
 */
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
/*
上面代码中，第二个 await语句是不会执行的，因为第一个 await语句状态变成了 reject。
 */

/*
有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
这时可以将第一个 await放在 try...catch结构里面，这样不管这个异步操作是否成功，第二个 await都会执行。
 */
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// hello world

/*
另一种方法是 await后面的 Promise 对象再跟一个 catch方法，处理前面可能出现的错误。
 */
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// 出错了
// hello world





