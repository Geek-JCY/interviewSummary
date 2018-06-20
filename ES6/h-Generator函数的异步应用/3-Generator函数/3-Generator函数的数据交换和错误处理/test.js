/*
Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。
除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换 和 错误处理机制。

next返回值的 value 属性，是 Generator 函数向外输出数据；
next方法还可以接受参数，向 Generator 函数体内输入数据。
 */
function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }
/*
上面代码中，第一 next方法的 value属性，返回表达式 x + 2的值 3。
第二个 next方法带有参数 2，这个参数可以传入 Generator函数，作为上个阶段异步任务的返回结果，被函数体内的变量 y接收。
因此，这一步的 value属性，返回的就是 2（变量y的值）。
 */




