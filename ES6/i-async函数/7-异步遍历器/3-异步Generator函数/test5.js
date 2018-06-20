/*
注意，普通的 async 函数返回的是一个 Promise 对象，而异步 Generator 函数返回的是一个异步 Iterator 对象。
可以这样理解，async 函数和异步 Generator 函数，是封装异步操作的两种方法，都用来达到同一种目的。
区别在于，前者自带执行器，后者通过 for await...of执行，或者自己编写执行器。
下面就是一个异步 Generator 函数的执行器。
 */
async function takeAsync(asyncIterable, count = Infinity) {
  const result = [];
  const iterator = asyncIterable[Symbol.asyncIterator]();
  while (result.length < count) {
    const {value, done} = await iterator.next();
    if (done) break;
    result.push(value);
  }
  return result;
}
/*
上面代码中，异步 Generator 函数产生的异步遍历器，会通过 while循环自动执行，
每当 await iterator.next()完成，就会进入下一轮循环。
一旦 done属性变为 true，就会跳出循环，异步遍历器执行结束。
 */
/*
下面是这个自动执行器的一个使用实例。
 */
async function f() {
    async function* gen(){
        yield 'a';
        yield 'b';
        yield 'c';
    }

    return await takeAsync(gen()); // ['a', 'b', 'c']
}


