/*
setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
Promise.resolve()在本轮“事件循环”结束时执行，
console.log(’one‘)则是立即执行
 */

setTimeout(function(){
    console.log(1);
},0);

Promise.resolve().then(function(){
    console.log(2);
});

console.log(3);

// 3
// 2
// 1


