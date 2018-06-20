/*
Generator 函数与 Promise 的结合
使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个 Promise对象。
 */
function getFoo(){
    return new Promise(function(resolve, reject){
        resolve('foo');
    })
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
    const it = generator();

    function go(result){
        if (result.done) return result.value;

        return result.value.then(function (value) {
          return go(it.next(value));
        }, function (error) {
          return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);

/*
上面代码的 Generator 函数 g之中，有一个异步操作 getFoo，它返回的就是一个 Promise对象。
函数 run用来处理这个Promise对象，并调用下一个 next方法。
 */






