/*
process.nextTick():

callback <Function>
...args <any> 调用 callback时传递给它的额外参数

process.nextTick()方法将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。

这种方式不是setTimeout(fn, 0)的别名。它更加有效率。事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。

---------------------------------------------------------------------------------------------------------------------
promise

---------------------------------------------------------------------------------------------------------------------
setImmediate(callback[, ...args])

callback <Function> 在 Node.js 事件循环的当前回合结束时要调用的函数。
...args <any> 当调用 callback 时要传入的可选参数。

预定立即执行的 callback，它是在 I/O 事件的回调之后被触发。 返回一个用于 clearImmediate() 的 Immediate。

当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行。 每次事件循环迭代都会处理整个回调队列。 
如果一个立即定时器是被一个正在执行的回调排入队列的，则该定时器直到下一次事件循环迭代才会被触发。

如果 callback 不是一个函数，则抛出 TypeError。

注意：
setImmediate(handler) 并不像 setTimeout(handler, 0) 由event loop检测系统时间是否到点然后向事件队列插入一个事件，
然后调用事件的回调方法handler。而是监控UI线程的调用栈，一旦调用栈为空则将handler压栈。

所以说要判断 setImmediate 和 setTimeout 执行先后的话，主要是看 setTimeout 的 delay 时间，如果主线程的调用栈已经空了，
而 delay 时间还没到，那么 setImmediate 一定会先于 setTimeout 执行的；
一般情况下，会拿 setTimeout(callback, 0) 与 setImmediate 对比，对比的结果 node下，setTimeout(callback, 0) 会先于 setImmediate；

---------------------------------------------------------------------------------------------------------------------
setTimeout(callback, delay[, ...args])

callback <Function> 当定时器到点时要调用的函数。
delay <number> 调用 callback 之前要等待的毫秒数。
...args <any> 当调用 callback 时要传入的可选参数。
预定在 delay 毫秒之后执行的单次 callback。 返回一个用于 clearTimeout() 的 Timeout。

callback 可能不会精确地在 delay 毫秒被调用。 Node.js 不能保证回调被触发的确切时间，也不能保证它们的顺序。 
回调会在尽可能接近所指定的时间上调用。

注意：当 delay 大于 2147483647 或小于 1 时，delay 会被设为 1。

如果 callback 不是一个函数，则抛出 TypeError。

--------------------------------------------------------------------------------------------------------------------


 */