/*
下面是另一个例子，指定多少毫秒后输出一个值。
 */
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);
/*
上面代码指定 50 毫秒以后，输出 hello world。
 */





