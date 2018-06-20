/*
如果 Generator 函数内部有 try...finally代码块，那么 return方法会推迟到 finally代码块执行完再执行。
 */
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}

var g = numbers();
g.next();   // {value: 1, done: false}
g.next();   // {value: 2, done: false}
g.return(7); // {value: 4, done: false}
g.next();   // {value: 5, done: false}
g.next();   // {value: 7, done: true}
/*
上面代码中，调用 return方法后，就开始执行 finally代码块，然后等到 finally代码块执行完，再执行 return方法。
 */
