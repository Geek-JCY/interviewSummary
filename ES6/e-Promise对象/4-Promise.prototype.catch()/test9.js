/*
catch方法之中，还能再抛出错误。
 */
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为 y 没有声明
  y + 2;
}).then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]

/*
上面代码中，catch方法抛出一个错误，因为后面没有别的catch方法了，导致这个错误不会被捕获，也不会传递到外层。
如果改写一下，结果就不一样了。
 */
someAsyncThing()
    .then(function() {
      return someOtherAsyncThing();
    })
    .catch(function(error) {
      console.log('oh no', error);
      // 下面一行会报错，因为y没有声明
      y + 2;
    })
    .catch(function(error) {
      console.log('carry on', error);
    });
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]

/*
上面代码中，第二个 catch方法用来捕获，前一个 catch方法抛出的错误。
 */