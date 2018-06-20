/*
防止出错的方法，也是将其放在 try...catch代码块之中。
 */
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch(e) {
  }
  return await('hello world');
}

/*
如果有多个 await命令，可以统一放在 try...catch结构中。
 */
async function main() {
  try {
    const val1 = await firstStep();
    const val2 = await secondStep(val1);
    const val3 = await thirdStep(val1, val2);

    console.log('Final: ', val3);
  }
  catch (err) {
    console.error(err);
  }
}

/*
下面的例子使用 try...catch结构，实现多次重复尝试。
 */
const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}

test();
/*
上面代码中，如果 await操作成功，就会使用 break语句退出循环；
如果失败，会被 catch语句捕捉，然后进入下一轮循环。
 */




