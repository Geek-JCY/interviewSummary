/*
一般来说，不要在 then方法里面定义 Reject 状态的回调函数（即 then的第二个参数），总是使用 catch方法。
 */
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
/*
上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面 then方法执行中的错误，
也更接近同步的写法（try/catch）。因此，建议总是使用 catch方法，而不使用 then方法的第二个参数。
 */






