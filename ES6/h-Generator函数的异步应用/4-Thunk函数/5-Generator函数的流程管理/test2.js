/*
但是，test.js代码 不适合异步操作。如果必须保证前一步执行完，才能执行后一步，上面的自动执行就不可行。
这时，Thunk 函数就能派上用处。以读取文件为例。
下面的 Generator 函数封装了两个异步操作。
 */
var fs = require();
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
    var r1 = yield readFileThunk('/etc/fstab');
    console.log(r1.toString());
    var r2 = yield readFileThunk('/etc/shells');
    console.log(r2.toString());
}
/*
上面代码中，yield命令用于将程序的执行权移出 Generator 函数，那么就需要一种方法，将执行权再交还给 Generator 函数。

这种方法就是 Thunk 函数，因为它可以在回调函数里，将执行权交还给 Generator 函数。
为了便于理解，我们先看如何手动执行上面这个 Generator 函数。
 */
var g = gen();

var r1 = g.next();
r1.value(function(err, data){
    if(err) throw err;
    var r2 = g.next(data);
    r2.value(function(err, data){
        if(err) throw err;
        g.next(data);
    });
});
/*
上面代码中，变量 g是 Generator 函数的内部指针，表示目前执行到哪一步。
next方法负责将指针移动到下一步，并返回该步的信息（value属性和 done属性）。

仔细查看上面的代码，可以发现 Generator 函数的执行过程，其实是将同一个回调函数，反复传入 next方法的 value属性。
这使得我们可以用递归来自动完成这个过程。
 */



