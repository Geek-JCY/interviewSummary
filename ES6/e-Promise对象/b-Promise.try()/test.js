/*
实际开发中，经常遇到一种情况：不知道或者不想区分，函数 f是同步函数还是异步操作，但是想用 Promise 来处理它。
因为这样就可以不管 f是否包含异步操作，都用 then方法指定下一步流程，用 catch方法处理f抛出的错误。
一般就会采用下面的写法。
 */
Promise.resolve().then(f)

/*
上面的写法有一个缺点，就是如果 f是同步函数，那么它会在本轮事件循环的末尾执行。
 */
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now
/*
上面代码中，函数f是同步的，但是用 Promise 包装了以后，就变成异步执行了。
 */







