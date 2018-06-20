/*
如果想同时加载多个模块，可以采用下面的写法。
 */
Promise.all([
    import('./module1.js'),
    import('./module2.js'),
    import('./module3.js'),
])
.then(([module1, module2, module3]) => {
    // ...
});


/*
import()也可以用在 async 函数之中。
 */
async function main(){
    const myModule = await import('./myModule.js');
    const {export1, export2} = await import('./myModule.js');
    const [module1, module2, module3] =
    await Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
main();


