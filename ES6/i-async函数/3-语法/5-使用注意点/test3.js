/*
第三点，await命令只能用在 async函数之中，如果用在普通函数，就会报错。
 */
async function dbFuc(db) {
    let docs = [{}, {}, {}];

    // 报错
    docs.forEach(function(doc){
        await db.post(doc)
    });
}

/*
上面代码会报错，因为 await用在普通函数之中了。但是，如果将 forEach方法的参数改成 async函数，也有问题。
 */
function dbFuc(db) { //这里不需要 async
  let docs = [{}, {}, {}];

  // 可能得到错误结果
  docs.forEach(async function (doc) {
    await db.post(doc);
  });
}

/*
上面代码可能不会正常工作，原因是这时三个 db.post操作将是并发执行，也就是同时执行，而不是继发执行。
正确的写法是采用 for循环。
 */
async function dbFuc(db) {
  let docs = [{}, {}, {}];

  for (let doc of docs) {
    await db.post(doc);
  }
}


