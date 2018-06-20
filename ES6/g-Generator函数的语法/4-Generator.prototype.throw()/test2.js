/*
throw方法可以接受一个参数，该参数会被 catch语句接收，建议抛出 Error对象的实例。
 */
var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
}

var i = g();
i.next();

i.throw(new Error('出错了！'));
// Error: 出错了！
/*
注意，不要混淆遍历器对象的 throw方法和全局的 throw命令。
上面代码的错误，是用遍历器对象的 throw方法抛出的，而不是用 throw命令抛出的。
后者只能被函数体外的 catch语句捕获。
 */





