var g = function* () {
  while (true) {
    try {
      yield;
    } catch (e) {
      if (e != 'a') throw e;
      console.log('内部捕获', e);
    }
  }
};

var i = g();
i.next();

try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log('外部捕获', e);
}
// 外部捕获 [Error: a]
/*
上面代码之所以只捕获了 a，是因为函数体外的 catch语句块，
捕获了抛出的 a错误以后，就不会再继续 try代码块里面剩余的语句了。
 */



