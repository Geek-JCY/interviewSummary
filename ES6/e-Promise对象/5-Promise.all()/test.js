/*
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 */
const p = Promise.all([p1, p2, p3]);

/*
上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，
如果不是，就会先调用下面讲到的 Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
 */

/*
p的状态由 p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成 fulfilled，
    此时 p1、p2、p3的返回值组成一个数组，传递给 p的回调函数。

（2）只要 p1、p2、p3之中有一个被 rejected，p的状态就变成 rejected，
    此时第一个被 reject的实例的返回值，会传递给 p的回调函数
 */

/*
下面是一个具体的例子。
 */
// 生成一个 Promise 对象的数组
const promise = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/' + id + ".json");
});

Promise.all(promise)
    .then(function (posts) {
        // ...
    })
    .catch(function(reason){
        // ...
    });

/*
上面代码中，promises是包含 6 个 Promise 实例的数组，
只有这 6 个实例的状态都变成 fulfilled，或者其中有一个变为 rejected，才会调用 Promise.all方法后面的回调函数。
 */

