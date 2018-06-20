/*
注意，异步遍历器的 next方法是可以连续调用的，不必等到上一步产生的 Promise 对象 resolve以后再调用。
这种情况下，next方法会累积起来，自动按照每一步的顺序运行下去。
下面是一个例子，把所有的 next方法放在 Promise.all方法里面。
 */
const asyncGenObj = createAsyncIterable(['a', 'b']);
const [{value: v1}, {value: v2}] = await Promise.all([
  asyncGenObj.next(), asyncGenObj.next()
]);

console.log(v1, v2); // a b

/*
另一种用法是一次性调用所有的 next方法，然后 await最后一步操作。
 */
const writer = openFile('someFile.txt');
writer.next('hello');
writer.next('world');
await writer.return();

