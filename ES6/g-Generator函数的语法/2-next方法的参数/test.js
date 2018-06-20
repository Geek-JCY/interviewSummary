/*
yield表达式本身没有返回值，或者说总是返回 undefined。
next方法可以带一个参数，该参数就会被当作上一个 yield表达式的返回值。
 */
function* f() {
    for(var i=0; true; i++){
        var reset = yield i;
        if(reset){ i = -1 }
    }
}

var g = f();

g.next(); // {value: 0, done: false}
g.next(); // {value: 1, done: false}
g.next(true); // {value: 0, done: false}
/*
上面代码先定义了一个可以无限运行的 Generator 函数 f，
如果 next方法没有参数，每次运行到 yield表达式，变量 reset的值总是 undefined。
当 next方法带一个参数 true时，变量 reset就被重置为这个参数（即 true），
因此 i会等于-1，下一轮循环就会从-1开始递增。

这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。
通过 next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
 */ 




