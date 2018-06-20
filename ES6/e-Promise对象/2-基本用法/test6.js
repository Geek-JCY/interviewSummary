/*
如果调用 resolve函数和 reject函数时带有参数，那么它们的参数会被传递给回调函数。
reject函数的参数通常是 Error对象的实例，表示抛出的错误；
resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例，
比如像下面这样。
 */
const pA = new Promise(function (resolve, reject) {
  // ...
});

const pB = new Promise(function (resolve, reject) {
  // ...
  resolve(pA);
});
/*
上面代码中，p1和 p2都是 Promise 的实例，但是 p2的 resolve方法将 p1作为参数，
即一个异步操作的结果是返回另一个异步操作。

注意，这时 p1的状态就会传递给 p2，也就是说，p1的状态决定了p2的状态。
如果 p1的状态是 pending，那么 p2的回调函数就会等待 p1的状态改变；
如果 p1的状态已经是 resolved或者 rejected，那么 p2的回调函数将会立刻执行。
 */
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
// Error: fail
/*
上面代码中，p1是一个 Promise，3 秒之后变为 rejected。
p2的状态在 1 秒之后改变，resolve方法返回的是 p1。
由于 p2返回的是另一个 Promise，导致 p2自己的状态无效了，由 p1的状态决定 p2的状态。
所以，后面的 then语句都变成针对后者（p1）。
又过了 2 秒，p1变为 rejected，导致触发 catch方法指定的回调函数。
 */
