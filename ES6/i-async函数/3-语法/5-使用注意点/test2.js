/*
第二点，多个 await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
 */
let foo = await getFoo();
let bar = await getBar();
/*
上面代码中，getFoo 和 getBar是两个独立的异步操作（即互不依赖），被写成继发关系。
这样比较耗时，因为只有 getFoo完成以后，才会执行 getBar，完全可以让它们同时触发。
 */
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
/*
上面两种写法，getFoo和 getBar都是同时触发，这样就会缩短程序的执行时间。
 */


