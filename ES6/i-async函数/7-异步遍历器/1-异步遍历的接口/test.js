/*
异步遍历器的最大的语法特点，就是调用遍历器的 next方法，返回的是一个 Promise 对象。
 */
asyncIterator
  .next()
  .then(
    ({ value, done }) => /* ... */
  );
/*
上面代码中，asyncIterator是一个异步遍历器，调用 next方法以后，返回一个 Promise 对象。
因此，可以使用 then方法指定，这个 Promise对象的状态变为 resolve以后的回调函数。
回调函数的参数，则是一个具有 value和 done两个属性的对象，这个跟同步遍历器是一样的。
 */
/*
我们知道，一个对象的同步遍历器的接口，部署在 Symbol.iterator属性上面。
同样地，对象的异步遍历器接口，部署在 Symbol.asyncIterator属性上面。
不管是什么样的对象，只要它的 Symbol.asyncIterator属性有值，就表示应该对它进行异步遍历。
 */
/*
下面是一个异步遍历器的例子。
 */
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();

asyncIterator
.next()
.then(iterResult1 => {
  console.log(iterResult1); // { value: 'a', done: false }
  return asyncIterator.next();
})
.then(iterResult2 => {
  console.log(iterResult2); // { value: 'b', done: false }
  return asyncIterator.next();
})
.then(iterResult3 => {
  console.log(iterResult3); // { value: undefined, done: true }
});
/*
上面代码中，异步遍历器其实返回了两次值。
第一次调用的时候，返回一个 Promise 对象；等到 Promise 对象 resolve了，再返回一个表示当前数据成员信息的对象。
这就是说，异步遍历器与同步遍历器最终行为是一致的，只是会先返回 Promise 对象，作为中介。
 */

/*
由于异步遍历器的 next方法，返回的是一个 Promise 对象。因此，可以把它放在 await命令后面。
 */
async function f() {
  const asyncIterable = createAsyncIterable(['a', 'b']);
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  console.log(await asyncIterator.next());
  // { value: 'a', done: false }
  console.log(await asyncIterator.next());
  // { value: 'b', done: false }
  console.log(await asyncIterator.next());
  // { value: undefined, done: true }
}
/*
上面代码中，next方法用await处理以后，就不必使用then方法了。整个流程已经很接近同步处理了。
 */


