/*
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 */
// const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'));
p.then(null, function(s){
    console.log(s);
});
// 出错了
/*
上面代码生成一个 Promise 对象的实例 p，状态为 rejected，回调函数会立即执行。
 */
/*
注意，Promise.reject()方法的参数，会原封不动地作为 reject的理由，变成后续方法的参数。
这一点与 Promise.resolve方法不一致。
 */
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};

Promise.reject(thenable)
.catch(e => {
    console.log(e === thenable);
})
// true

/*
上面代码中，Promise.reject方法的参数是一个 thenable对象，
执行以后，后面 catch方法的参数不是 reject抛出的“出错了”这个字符串，而是 thenable对象。
 */




