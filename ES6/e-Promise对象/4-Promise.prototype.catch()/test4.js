/*
Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 catch语句捕获。
 */
getJOSN('/post/1.json')
    .then(function(post){
        return getJSON(post.commentURL);
    })
    .then(function(comments){
        // some code
    })
    .catch(function(error){
        // 处理前面三个 Promise 产生的错误
    });
/*
上面代码中，一共有三个 Promise 对象：一个由 getJSON产生，两个由 then产生。
它们之中任何一个抛出的错误，都会被最后一个 catch捕获。
 */