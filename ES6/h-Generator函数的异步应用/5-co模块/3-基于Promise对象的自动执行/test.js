/*
基于 Promise 对象的自动执行 

上一节已经介绍了基于 Thunk 函数的自动执行器。下面来看，基于 Promise 对象的自动执行器。
这是理解 co 模块必须的。

还是沿用上面的例子。首先，把fs模块的readFile方法包装成一个 Promise 对象。
 */
var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) return reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
/*
然后，手动执行上面的 Generator 函数。
 */
var g = gen();

g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data);
    });
});
/*
手动执行其实就是用 then方法，层层添加回调函数。理解了这一点，就可以写出一个自动执行器。
 */
function run(gen){
    var g = gen();

    function next(data) {
        var result = g.next();
        if(result.done) return result.value;
        result.value.then(function(data){
            next(data);
        })
    }

    next();
}

run(gen);
/*
上面代码中，只要 Generator 函数还没执行到最后一步，next 函数就调用自身，以此实现自动执行。
 */








