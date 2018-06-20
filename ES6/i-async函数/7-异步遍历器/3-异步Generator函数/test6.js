/*
异步 Generator 函数出现以后，JavaScript 就有了四种函数形式：
普通函数、async 函数、Generator 函数和 异步 Generator 函数。
请注意区分每种函数的不同之处。
基本上，如果是一系列按照顺序执行的异步操作（比如读取文件，然后写入新内容，再存入硬盘），可以使用 async 函数；
如果是一系列产生相同数据结构的异步操作（比如一行一行读取文件），可以使用异步 Generator 函数。
 */
/*
异步 Generator 函数也可以通过 next方法的参数，接收外部传入的数据。
 */
const writer = openFile('someFile.txt');
writer.next('hello'); // 立即执行
writer.next('world'); // 立即执行
await writer.return(); // 等待写入结束
/*
上面代码中，openFile是一个异步 Generator 函数。
next方法的参数，向该函数内部的操作传入数据。
每次 next方法都是同步执行的，最后的 await命令用于等待整个写入操作结束。
 */

/*
最后，同步的数据结构，也可以使用异步 Generator 函数。
 */
async function* createAsyncIterable(syncIterable){
    for(const elem of syncIterable){
        yield elem;
    }
}
/*
上面代码中，由于没有异步操作，所以也就没有使用 await关键字。
 */




