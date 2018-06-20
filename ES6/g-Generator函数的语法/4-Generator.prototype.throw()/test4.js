/*
如果 Generator 函数内部没有部署 try...catch代码块，那么throw方法抛出的错误，将被外部 try...catch代码块捕获。
 */
var g = function* () {
  while (true) {
    yield;
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 外部捕获 a
/*
上面代码中，Generator 函数 g内部没有部署 try...catch代码块，所以抛出的错误直接被外部 catch代码块捕获。
 */



