/*
一般总是建议，Promise 对象后面要跟 catch方法，这样可以处理 Promise 内部发生的错误。
catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用 then方法。
 */
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
// carry on

/*
上面代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。
如果没有报错，则会跳过 catch方法。
 */


Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// carry on

/*
上面的代码因为没有报错，跳过了catch方法，直接执行后面的 then方法。
此时，要是then方法里面报错，就与前面的 catch无关了。
 */


