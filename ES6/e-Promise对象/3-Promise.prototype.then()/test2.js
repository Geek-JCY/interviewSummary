/*
采用链式的 then，可以指定一组按照次序调用的回调函数。
这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
这时后一个回调函数，就会等待该 Promise对象的状态发生变化，才会被调用。
 */
getJSON('/post/1.json')
.then(function(post){
    return getJSON(post.commentURL)
})
.then(function funcA(comments){
    console.log("resolved: ", comments);
}, function funcB(err){
    console.log("rejected: ", err);
});
/*
上面代码中，第一个 then方法指定的回调函数，返回的是另一个Promise对象。
这时，第二个 then方法指定的回调函数，就会等待这个新的 Promise对象状态发生变化。
如果变为 resolved，就调用 funcA，如果状态变为 rejected，就调用 funcB。
 */

/*
如果采用箭头函数，上面的代码可以写得更简洁。
 */
getJSON('/post/1.json')
.then(post => getJSON(post.commentURL))
.then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
);