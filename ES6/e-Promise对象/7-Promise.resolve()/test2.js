/*
Promise.resolve方法的参数分成四种情况。
 */
/*
（1）参数是一个 Promise 实例
如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
 */

/*
（2）参数是一个thenable对象
thenable对象指的是具有 then方法的对象，比如下面这个对象。
 */
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
/*
Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行 thenable对象的 then方法。
 */
let pA = Promise.resolve(thenable);
pA.then(function(value){
    console.log(value); // 42
});
/*
上面代码中，thenable对象的 then方法执行后，对象 p1的状态就变为 resolved，
从而立即执行最后那个 then方法指定的回调函数，输出 42。
 */

/*
（3）参数不是具有 then方法的对象，或根本就不是对象

如果参数是一个原始值,或者是一个不具有 then方法的对象，则 Promise.resolve方法返回一个新的 Promise 对象，状态为 resolved。
 */
const p1 = Promise.resolve('hello');
p1.then(function(s){
    console.log(s);
});
// 'Hello'
/*
上面代码生成一个新的 Promise 对象的实例 p。
由于字符串 Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，
所以回调函数会立即执行。
Promise.resolve方法的参数，会同时传给回调函数。
 */

/*
（4）不带有任何参数
Promise.resolve方法允许调用时不带参数，直接返回一个 resolved状态的 Promise 对象。
所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用 Promise.resolve方法。
 */
const p2 = Promise.resolve();
p2.then(function(){
    // do something...
    console.log('test resolve() no params');
});
/*
上面代码的变量p就是一个 Promise 对象。
 */
/*
需要注意的是,立即 resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
 */
setTimeout(() => {console.log('three'), 0});

Promise.resolve().then(() => {console.log('two')});

console.log('one');

/* 事件的执行顺序 如下： */
// one    
// hello
// test resolve() no params
// two
// 42
// three

/*
可以看出 事件的执行顺序
本轮事件 > promise.resolve().then() > promise.resolve(thenable).then() > setTimeout()
 */

/*
上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
Promise.resolve()在本轮“事件循环”结束时执行，
console.log('one')则是立即执行，因此最先输出。
 */






