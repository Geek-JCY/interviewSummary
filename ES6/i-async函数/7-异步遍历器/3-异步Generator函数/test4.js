/*
如果异步 Generator 函数抛出错误，会被 Promise 对象 reject，然后抛出的错误被 catch方法捕获。
 */
async function* asyncGenerator(){
    throw new Error('Problem!');
}

asyncGenerator()
.next()
.catch(err => console.log(err));    // Error: Problem


