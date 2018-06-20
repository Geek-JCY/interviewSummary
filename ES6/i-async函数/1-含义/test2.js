/*
async函数对 Generator 函数的改进，体现在以下四点。

（1）内置执行器。

    Generator 函数的执行必须靠执行器，所以才有了co模块，而 async函数自带执行器。
    也就是说，async函数的执行，与普通函数一模一样，只要一行。
    
    asyncReadFile();

    上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。
    这完全不像 Generator 函数，需要调用 next方法，或者用 co模块，才能真正执行，得到最后结果。

（2）更好的语义。

    async和 await，比起星号和 yield，语义更清楚了。
    async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。

    co模块约定，yield命令后面只能是 Thunk函数或 Promise对象，
    而 async函数的 await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

（4）返回值是 Promise。

    async函数的返回值是 Promise对象，这比 Generator函数的返回值是 Iterator对象方便多了。
    你可以用 then方法指定下一步的操作。

进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而 await命令就是内部 then命令的语法糖。
 */