/*
鉴于这是一个很常见的需求，所以现在有一个提案，提供 Promise.try方法替代上面的写法。
 */
const f = () => console.log('now');
Promise.try(f);
console.log('next');

/*
事实上，Promise.try存在已久，Promise 库Bluebird、Q和when，早就提供了这个方法。
 */

/*
由于 Promise.try为所有操作提供了统一的处理机制，所以如果想用 then方法管理流程，最好都用 Promise.try包装一下。
这样有许多好处，其中一点就是可以更好地管理异常。
 */
function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}

/*
上面代码中，database.users.get()返回一个 Promise 对象，如果抛出异步错误，可以用 catch方法捕获，就像下面这样写。
 */
database.users.get({id: userId})
.then(...)
.catch(...)

/*
但是 database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），
这时你就不得不用 try...catch去捕获。
 */
try {
    database.users.get({id: userId})
    .then(...)
    .catch(...)
} catch (e) {
    // ...
}

/*
上面这样的写法就很笨拙了，这时就可以统一用 promise.catch()捕获所有同步和异步的错误。
 */
Promise.try(database.users.get({id: userId}))
    .then(....)
    .catch(...)
/*
事实上，Promise.try就是模拟 try代码块，就像 promise.catch模拟的是 catch代码块。
 */




