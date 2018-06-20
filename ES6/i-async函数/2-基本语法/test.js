/*
async函数返回一个 Promise 对象，可以使用 then方法添加回调函数。
当函数执行的时候，一旦遇到 await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

下面是一个例子。
 */
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
/*
上面代码是一个获取股票报价的函数，函数前面的 async关键字，表明该函数内部有异步操作。
调用该函数时，会立即返回一个 Promise对象。
 */


