/*
下面是一个例子。
 */
const promise = new Promise(function(resolved, reject){
    throw new Error('test');
});
promise.catch((err) => console.log(err));   // Error: test
/*
上面代码中，promise抛出一个错误，就被catch方法指定的回调函数捕获。

注意，上面的写法与下面两种写法是等价的。
 */
// 写法一：
const promise = new Promise(function(resolve, reject){
    try {
        throw new Error('test')
    } catch(e) {
        reject(e)
    }
});
promise.catch(function(error){
    console.log(error); // Error: test
});

// 写法二：
const promise = new Promise(function(resolve, reject){
    reject(new Error('test'))
});
promise.catch(function(error){
    console.log(error);
});
/*
比较上面两种写法，可以发现 reject方法的作用，等同于抛出错误。
 */








