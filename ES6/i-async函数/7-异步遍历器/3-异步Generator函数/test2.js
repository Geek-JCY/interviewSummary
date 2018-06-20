/*
下面是另一个异步 Generator 函数的例子。
 */
async function* readLines(path){
    let file = await fileOpen(path);

    try {
        while(!file.EOF){
            yield await file.readLine();
        }
    } finally {
        await file.close();
    }
}
/*
上面代码中，异步操作前面使用 await关键字标明，即 await后面的操作，应该返回 Promise 对象。
凡是使用 yield关键字的地方，就是 next方法的停下来的地方，它后面的表达式的值（即 await file.readLine()的值），
会作为 next()返回对象的 value属性，这一点是与同步 Generator 函数一致的。
 */

/*
异步 Generator 函数内部，能够同时使用 await和 yield命令。
可以这样理解，await命令用于将外部操作产生的值输入函数内部，yield命令用于将函数内部的值输出。
 */

/*
上面代码定义的异步 Generator 函数的用法如下。
 */
(async function(){
    for await (const line of readLines(filePath)) {
        console.log(line);
    }
})();






