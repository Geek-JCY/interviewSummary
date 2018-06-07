console.log('main.js');
var result = new Object();

if(window.Worker){
	console.log('window.Worker');
	// 生成一个专用worker
	var myWorker = new Worker('worker.js');

	// 处理 接收到信息
	myWorker.onmessage = function(e) {
	  result.textContent = e.data;
	  console.log(result);
	  console.log('Message received from worker');
	}

	// 处理 错误, 错误信息中包括 filename、lineno、message 三个信息
	myWorker.onerror = function(e){
		console.log('ERROR: ' + e.filename + '{' + e.lineno + '} :' + e.message);
	}

	var first = document.getElementById('ipt1')
	var second = document.getElementById('ipt2')
	first.onchange = function() {
	  // 向 worker线程 发送信息
	  myWorker.postMessage({type:"first change", dt:[first.value,second.value]});
	  console.log('Message posted to worker');
	}
	second.onchange = function() {
	  // 向 worker线程 发送信息		
	  myWorker.postMessage({type:"second change", dt:[first.value,second.value]});
	  console.log('Message posted to worker');
	}

}


function terminateWorker(){
	// 主线程中 终止worker 方法
	myWorker.terminate();
	console.log('myWorker 在主线程中 被终止');
}

function workerClose(){
	myWorker.postMessage('close');
	console.log('myWorker 在worker线程中关闭了自己');
}

function importJsLib(){
	myWorker.postMessage('importJsLib');
	console.log('用myWorker线程引入脚本库');
}