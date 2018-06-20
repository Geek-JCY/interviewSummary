/*
另外，throw命令与 g.throw方法是无关的，两者互不影响。
 */
var gen = function* gen(){
  yield console.log('hello');
  yield console.log('world');
}

var g = gen();
g.next();

try {
    throw new Error();
} catch (e) {
    g.next();
}
// hello
// world
/*
上面代码中，throw命令抛出的错误不会影响到遍历器的状态，所以两次执行 next方法，都进行了正确的操作。
 
这种函数体内捕获错误的机制，大大方便了对错误的处理。
多个 yield表达式，可以只用一个 try...catch代码块来捕获错误。
如果使用回调函数的写法，想要捕获多个错误，就不得不为每个函数内部写一个错误处理语句，
现在只在 Generator 函数内部写一次 catch语句就可以了。
 */



