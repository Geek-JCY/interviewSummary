/*
协程（coroutine）是一种程序运行的方式，可以理解成 “协作的线程” 或 “协作的函数”。
协程既可以用单线程实现，也可以用多线程实现。前者是一种特殊的子例程，后者是一种特殊的线程。
 */
/*
（1）协程与子例程的差异
传统的 “子例程”（subroutine）采用堆栈式 “后进先出” 的执行方式，只有当调用的子函数完全执行完毕，才会结束执行父函数。
协程与其不同，多个线程（单线程情况下，即多个函数）可以并行执行，
但是只有一个线程（或函数）处于正在运行的状态，其他线程（或函数）都处于暂停态（suspended），
线程（或函数）之间可以交换执行权。
也就是说，一个线程（或函数）执行到一半，可以暂停执行，将执行权交给另一个线程（或函数），
等到稍后收回执行权的时候，再恢复执行。
这种可以并行执行、交换执行权的线程（或函数），就称为协程。

从实现上看，在内存中，子例程只使用一个栈（stack），而协程是同时存在多个栈，但只有一个栈是在运行状态，
也就是说，协程是以多占用内存为代价，实现多任务的并行。
*/

/*
（2）协程与普通线程的差异
不难看出，协程适合用于多任务运行的环境。在这个意义上，它与普通的线程很相似，都有自己的执行上下文、可以分享全局变量。
它们的不同之处在于，同一时间可以有多个线程处于运行状态，但是运行的协程只能有一个，其他协程都处于暂停状态。
此外，普通的线程是抢先式的，到底哪个线程优先得到资源，必须由运行环境决定，但是协程是合作式的，执行权由协程自己分配。

由于 JavaScript 是单线程语言，只能保持一个调用栈。引入协程以后，每个任务可以保持自己的调用栈。
这样做的最大好处，就是抛出错误的时候，可以找到原始的调用栈。
不至于像异步操作的回调函数那样，一旦出错，原始的调用栈早就结束。

Generator 函数是 ES6 对协程的实现，但属于不完全实现。
Generator 函数被称为 “半协程”（semi-coroutine），
意思是只有 Generator 函数的调用者，才能将程序的执行权还给 Generator 函数。
如果是完全执行的协程，任何函数都可以让暂停的协程继续执行。

如果将 Generator 函数当作协程，完全可以将多个需要互相协作的任务写成 Generator 函数，
它们之间使用 yield表示式交换控制权。
 */
