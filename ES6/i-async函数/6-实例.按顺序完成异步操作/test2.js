/*
test.js 这种写法不太直观，可读性比较差。下面是 async 函数实现。
 */
async function logInOrder(urls) {
    for(const url of urls){
        const response = await fetch(url);
        console.log(await response.text());
    }
}
/*
上面代码确实大大简化，问题是所有远程操作都是继发。
只有前一个 URL 返回结果，才会去读取下一个 URL，这样做效率很差，非常浪费时间。我们需要的是并发发出远程请求。
 */
async function logInOrder(urls) {
    // 并发读取远程 url
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    // 按次序输出
    for(const textPromise of textPromises){
        console.log(await textPromise);
    }
}
/*
上面代码中，虽然 map方法的参数是 async函数，但它是并发执行的，因为只有 async函数内部是继发执行，外部不受影响。
后面的 for..of循环内部使用了 await，因此实现了按顺序输出。
 */

