// 期望输出 0，然后每隔 1s 一次输出 1 2 3 4
for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
/*
会发现 一次输出 5 5 5 5 5
 */



Promise的任务会在当前事件循环末尾中执行，而setTimeout中的任务是在下一次事件循环执行



