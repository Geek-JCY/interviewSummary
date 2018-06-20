/*
Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield语句注明。
Generator 函数的执行方法如下。
 */
function* gen(x){
    var y = yield x + 2;
    return y;
}

var g = gen(1);

g.next(); // {value: 3, done: false}
g.next(); // {value: undefined, done: true }
/*
上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器）g。
这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。
调用指针 g 的 nex方法，会移动内部指针（即执行异步任务的第一段）,指向第一个遇到的 yield语句，上例是执行到 x + 2为止。

换言之，next方法的作用是分阶段执行 Generator函数。
每次调用 next方法，会返回一个对象，表示当前阶段的信息（value属性和 done属性）。
value属性是 yield语句后面表达式的值，表示当前阶段的值；
done属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。
 */



