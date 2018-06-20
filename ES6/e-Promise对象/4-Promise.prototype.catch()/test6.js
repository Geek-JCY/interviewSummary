/*
跟传统的 try/catch代码块不同的是，如果没有使用 catch方法指定错误处理的回调函数，
Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
 */
const someAsyncThing = function(){
    return new Promise(function(resolve, reject){
        // 下面一行会报错，因为 x 没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function(){
    console.log('everything is great.');
});

setTimeout(() => { console.log(123) }, 2000 );
// Uncaught (in promise) ReferenceError: x is not defined
// 123
// 
/*
上面代码中，someAsyncThing 函数产生的 Promise 对象，内部有语法错误。
浏览器运行到这一行，会打印出错误提示 ReferenceError: x is not defined，
但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。
这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是 “Promise 会吃掉错误”。
 
 这个脚本放在服务器执行，退出码就是 0（即表示执行成功）。
 不过，Node 有一个 unhandledRejection事件，专门监听未捕获的 reject错误，上面的脚本会触发这个事件的监听函数，
 可以在监听函数里面抛出错误。
 */
process.on('unhandledRejection', function(err, p){
    throw err;
});
/*
上面代码中，unhandledRejection事件的监听函数有两个参数，第一个是错误对象，第二个是报错的 Promise 实例，
它可以用来了解发生错误的环境信息。

注意，Node 有计划在未来废除 unhandledRejection 事件。
如果 Promise 内部有未捕获的错误，会直接终止进程，并且进程的退出码不为 0。
 */