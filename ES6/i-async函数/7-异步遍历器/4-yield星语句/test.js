/*
yield* 语句

yield*语句也可以跟一个异步遍历器。
 */
async function* gen1() {
    yield 'a';
    yield 'b';
    return 2;
}

async function* gen2(){
    // result 最终等于 2
    const result = yield* gen1();
}
/*
上面代码中，gen2 函数里面的 result变量，最后的值是 2。
 */
/*
与同步 Generator 函数一样，for await...of循环会展开 yield*。
 */
(async function(){
    for await (const x of gen2){
        console.log(x);
    }
})();
// a
// b


