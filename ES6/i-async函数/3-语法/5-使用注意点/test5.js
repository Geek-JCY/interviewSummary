/*
目前，@std/esm模块加载器支持顶层 await，即 await命令可以不放在 async 函数里面，直接使用。
 */
// async 函数的写法
const start = async () => {
  const res = await fetch('google.com');
  return res.text();
};

start().then(console.log);

// 顶层 await 的写法
const res = await fetch('google.com');
console.log(await res.text());
/*
上面代码中，第二种写法的脚本必须使用 @std/esm加载器，才会生效。
 */

