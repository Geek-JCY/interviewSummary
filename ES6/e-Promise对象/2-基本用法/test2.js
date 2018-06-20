/*
下面是一个 Promise对象的简单例子。
 */
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});
/*
上面代码中，timeout方法返回一个 Promise实例，表示一段时间以后才会发生的结果。
过了指定的时间（ms参数）以后，Promise实例的状态变为 resolved，就会触发 then方法绑定的回调函数。
 */