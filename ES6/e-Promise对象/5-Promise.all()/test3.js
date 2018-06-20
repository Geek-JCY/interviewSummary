/*
注意，如果作为参数的 Promise 实例，自己定义了 catch方法，
那么它一旦被 rejected，并不会触发 Promise.all()的 catch方法。
 */
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]

/*
上面代码中，p1会 resolved，p2首先会 rejected，
但是 p2有自己的 catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。
该实例执行完 catch方法后，也会变成 resolved，
导致 Promise.all()方法参数里面的两个实例都会 resolved，
因此会调用 then方法指定的回调函数，而不会调用 catch方法指定的回调函数。
 */

/*
如果 p2没有自己的 catch方法，就会调用 Promise.all()的 catch方法。
 */ 
const p1 = new Promise((resolve, reject) => { resolve('hello') })
    .then(result => result);

const p2 = new Promise((resolve, reject) => { throw new Error('报错了') })
    .then(result => result);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e))
// Error: 报错了
