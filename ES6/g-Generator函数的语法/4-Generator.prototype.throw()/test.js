/*
Generator 函数返回的遍历器对象，都有一个 throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
 */
var g = function* (){
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
}

var i = g();
i.next();

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
/*
上面代码中，遍历器对象 i连续抛出两个错误。
第一个错误被 Generator 函数体内的 catch语句捕获。
i第二次抛出错误，由于 Generator 函数内部的 catch语句已经执行过了，不会再捕捉到这个错误了，
所以这个错误就被抛出了 Generator 函数体，被函数体外的 catch语句捕获。
 */






