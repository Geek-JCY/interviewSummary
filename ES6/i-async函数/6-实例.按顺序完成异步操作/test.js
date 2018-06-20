/*
实例：按顺序完成异步操作

实际开发中，经常遇到一组异步操作，需要按照顺序完成。比如，依次远程读取一组 URL，然后按照读取的顺序输出结果。
 */
/*
Promise 的写法如下：
 */
function logInOrder(urls){
    // 远程读取所有 URL
    const textPromises = urls.map(url => {
        return fetch(url).then(response => response.text());
    });

    // 按次序输出
    textPromises.reduce((chain, textPromises) => {
        return chain.then(() => textPromise)
            .then(text => console.log(text));
    }, Promise.resolve());
}
/*
上面代码使用 fetch方法，同时远程读取一组 URL。
每个 fetch操作都返回一个 Promise 对象，放入 textPromises数组。
然后，reduce方法依次处理每个 Promise 对象，然后使用 then，将所有 Promise 对象连起来，因此就可以依次输出结果。
 */





