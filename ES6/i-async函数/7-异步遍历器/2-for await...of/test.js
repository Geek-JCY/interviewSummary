/*
for await...of

前面介绍过，for...of循环用于遍历同步的 Iterator 接口。
新引入的 for await...of循环，则是用于遍历异步的 Iterator 接口。
 */
async function f() {
  for await (const x of createAsyncIterable(['a', 'b'])){
    console.log(x);
  }
}
// a
// b
/*
上面代码中，createAsyncIterable()返回一个异步遍历器，for...of 循环自动调用这个遍历器的 next方法，
会得到一个 Promise 对象。
await用来处理这个 Promise 对象，一旦 resolve，就把得到的值（x）传入for...of的循环体。
 */

/*
for await...of 循环的一个用途，是部署了 asyncIterable 操作的异步接口，可以直接放入这个循环。
 */
let body = '';

async function f() {
  for await(const data of req) body += data;
  const parsed = JSON.parse(body);
  console.log('got', parsed);
}
/*
上面代码中，req是一个 asyncIterable 对象，用来异步读取数据。可以看到，使用 for await...of循环以后，代码会非常简洁。
 */

/*
如果 next方法返回的 Promise 对象被 reject，for await...of就会报错，要用 try...catch捕捉。
 */
async function () {
  try {
    for await (const x of createRejectingIterable()) {
      console.log(x);
    }
  } catch (e) {
    console.error(e);
  }
}

/*
注意，for await...of循环也可以用于同步遍历器。
 */
(async function () {
  for await (const x of ['a', 'b']) {
    console.log(x);
  }
})();
// a
// 




