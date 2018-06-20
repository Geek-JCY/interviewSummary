/*
异步 Generator 函数可以与for await...of循环结合起来使用。
 */
async function* prefixLines(asyncIterable){
    for await (const line of asyncIterable){
        yield '> ' + line;
    }
}
/*
异步 Generator 函数的返回值是一个异步 Iterator，即每次调用它的 next方法，会返回一个 Promise 对象，
也就是说，跟在 yield命令后面的，应该是一个 Promise 对象。
 */
async function* asyncGenerator() {
  console.log('Start');
  const result = await doSomethingAsync(); // (A)
  yield 'Result: '+ result; // (B)
  console.log('Done');
}

const ag = asyncGenerator();
ag.next().then({value, done} => {
  // ...
})
/*
上面代码中，ag是 asyncGenerator函数返回的异步 Iterator 对象。
调用 ag.next()以后，asyncGenerator函数内部的执行顺序如下。

    1.打印出Start。

    2.await命令返回一个 Promise 对象，但是程序不会停在这里，继续往下执行。

    3.程序在B处暂停执行，yield命令立刻返回一个 Promise 对象，该对象就是 ag.next()的返回值。

    4.A处 await命令后面的那个 Promise 对象 resolved，产生的值放入 result变量。

    5.B处的 Promise 对象 resolved，then方法指定的回调函数开始执行，该函数的参数是一个对象，
    value的值是表达式'Result： ' + result的值，done属性的值是false。
 */
/*
A 和 B 两行的作用类似于下面的代码。
 */
return new Promise((resolve, reject) => {
  doSomethingAsync()
  .then(result => {
     resolve({
       value: 'Result: '+result,
       done: false,
     });
  });
});


