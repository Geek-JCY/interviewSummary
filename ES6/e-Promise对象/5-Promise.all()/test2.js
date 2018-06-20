/*
下面是另一个例子。
 */
const databasePromise = connectDatabase();

const booksPromise = databasePromise
  .then(findAllBooks);

const userPromise = databasePromise
  .then(getCurrentUser);

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommentations(books, user));

/*
上面代码中，booksPromise和 userPromise是两个异步操作，
只有等到它们的结果都返回了，才会触发 pickTopRecommentations这个回调函数。
 */

