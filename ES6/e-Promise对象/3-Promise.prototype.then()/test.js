/*
3. Promise.prototype.then()

Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
它的作用是为 Promise 实例添加状态改变时的回调函数。
前面说过，then方法的第一个参数是 resolved状态的回调函数，第二个参数（可选）是 rejected状态的回调函数。

then方法返回的是一个新的 Promise实例（注意，不是原来那个 Promise实例）。
因此可以采用链式写法，即 then方法后面再调用另一个 then方法。
 */
getJson('/post.json')
.then(function(json){
    return json.post;
})
.then(function(post){
    // ....
})
/*
上面的代码使用 then方法，依次指定了两个回调函数。
第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
 */