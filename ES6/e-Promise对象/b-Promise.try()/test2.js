/*
那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？
回答是可以的，并且还有两种写法。
 */
/*
## 第一种写法是用 async函数来写。
 */
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next

/*
上面代码中，第二行是一个立即执行的匿名函数，会立即执行里面的async函数，因此如果 f是同步的，就会得到同步的结果；
如果 f是异步的，就可以用 then指定下一步，就像下面的写法。
 */
(async () => f())()
.then(...)

/*
需要注意的是，async () => f()会吃掉 f()抛出的错误。所以，如果想捕获错误，要使用 promise.catch方法。
 */
(async () => f())()
.then(...)
.catch(...)









