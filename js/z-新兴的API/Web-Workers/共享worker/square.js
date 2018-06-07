var squareNumber = document.querySelector('#number3');

var result2 = document.querySelector('.result2');

if( !!window.SharedWorker ){
    // 创建一个 SharedWorker
    var myWorker = new SharedWorker('worker.js');

    // 监听 squareNumber 变化
    squareNumber.onchange = function(e){
        myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
        console.log('Message post to worker');
    }

    // 监听 worker 反馈的信息
    myWorker.port.onmessage = function(e){
        result2.textContent = e.data;
        console.log('Message received from worker');
        console.log(result2.textContent);
        console.log(e.lastEventId);
    }
}

