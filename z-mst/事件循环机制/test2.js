// demo02
console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
}, 0)

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})

process.nextTick(function() {
    console.log('glob1_nextTick');
})

new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})

setTimeout(function() {
    console.log('timeout2');
    process.nextTick(function() {
        console.log('timeout2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })
}, 0)

process.nextTick(function() {
    console.log('glob2_nextTick');
})

new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})

setImmediate(function() {
    console.log('immediate2');
    process.nextTick(function() {
        console.log('immediate2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function() {
        console.log('immediate2_then')
    })
})

/*
    第一次分析, 如下：

    -> 第一轮事件循环 
    golb1
    glob1_promise
    glob2_promise
    glob1_nextTick
    glob2_nextTick
    glob1_then
    glob2_then

    -> 第二轮事件循环
    timeout1
    timeout1_promise
    timeout1_nextTick
    timeout1_then

    -> 第三轮事件循环
    timeout2
    timeout2_promise
    timeout2_nextTick
    timeout2_then

    -> 第四轮事件循环
    immediate1
    immediate1_promise
    immediate1_nextTick
    immediate1_then

    -> 第五轮事件循环
    immediate2
    immediate2_promise
    immediate2_nextTick
    immediate2_then
 */

/*
    第二次分析：
    因为，Node 环境下：
        setTimeout1() 和 setTimeout2() 的定时时间是相同的时候，两个回调函数会合并为一个回调函数 进行执行；
        setImmediate1() 和 setImmediate2() 的执行时间点是相同的，两个回调函数会合并为一个回调函数 进行执行；
        这与在浏览器环境下，有些不同，分析一 是按照在浏览器环境下进行的分析，
        浏览器环境下：
            setTimeout1() 和 setTimeout2() ，首先，按照 定时时间确定执行顺序；如果定时时间相同，按执行上下文的先后顺序执行；
            例子 -> 参见 test3.html
    所以，分析结果，如下：

    -> 第一次事件循环
    golb1
    glob1_promise
    glob2_promise
    glob1_nextTick
    glob2_nextTick
    glob1_then
    glob2_then

    -> 第二次事件循环
    timeout1
    timeout1_promise
    timeout2
    timeout2_promise
    timeout1_nextTick
    timeout2_nextTick
    timeout1_then
    timeout2_then
    
    // 第三次事件循环
    immediate1
    immediate1_promise
    immediate2
    immediate2_promise
    immediate1_nextTick
    immediate2_nextTick
    immediate1_then
    immediate2_then
 */
