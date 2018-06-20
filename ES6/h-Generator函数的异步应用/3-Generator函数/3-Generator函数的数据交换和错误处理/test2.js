/*
Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
 */
function* gen(x){
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e);
    }
    return y;
}

var g = gen(1);
g.next(); // { value: 3, done: false }
// console.log( g.next() ); // { value: 3, done: false }
g.throw('出错了');
// 出错

/*
上面代码的最后一行，Generator 函数体外，使用指针对象的 throw方法抛出的错误，可以被函数体内的 try...catch代码块捕获。
这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。
 */




