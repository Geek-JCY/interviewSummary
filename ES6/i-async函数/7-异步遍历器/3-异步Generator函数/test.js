/*
异步 Generator 函数

就像 Generator 函数返回一个同步遍历器对象一样，异步 Generator 函数的作用，是返回一个异步遍历器对象。

在语法上，异步 Generator 函数就是async函数与 Generator 函数的结合。
 */
async function* gen() {
    yield 'hello';
}

const genObj = gen();
genObj.next().then(x => console.log(x));
// {value: 'hello', done: false}
/*
上面代码中，gen是一个异步 Generator 函数，执行后返回一个异步 Iterator 对象。
对该对象调用 next方法，返回一个 Promise 对象。
 */

/*
异步遍历器的设计目的之一，就是 Generator 函数处理同步操作和异步操作时，能够使用同一套接口。
 */
// 同步 Generator 函数
function* map(iterable, func) {
  const iter = iterable[Symbol.iterator]();
  while (true) {
    const {value, done} = iter.next();
    if (done) break;
    yield func(value);
  }
}

// 异步 Generator 函数
async function* map(iterable, func){
    const iter = iterable[Symbol.asyncIterator]();
    while (true) {
        const {value, done} = await iter.next();
        if(done) break;
        yield func(value);
    }
}
/*
上面代码中，可以看到有了异步遍历器以后，同步 Generator 函数和异步 Generator 函数的写法基本上是一致的。
 */


