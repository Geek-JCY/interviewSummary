var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');

console.log('multiply.js 程序');
// 判断浏览器是否支持 共享worker
if (!!window.SharedWorker) {
    console.log('浏览器支持 SharedWorker');
    // 创建一个 ShareWorker
    var myWorker = new SharedWorker('worker.js');

    // 监听 first 变化
    first.onchange = function(){
        myWorker.port.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }

    // 监听 second 变化
    second.onchange = function(){
        myWorker.port.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }

    // 监听 worker 反馈的信息
    myWorker.port.onmessage = function(e){
        result1.textContent = e.data;
        console.log('Message received from worker');
        console.log(result1.textContent);
        console.log(e.lastEventId);
    }

}


