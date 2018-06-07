self.onmessage = function(e) {
	// 1.worker 自己关闭自己
	if(e.data === 'close'){
		console.log('to close');
		self.close();
		return;
	}

	// 2.抛出错误
	// throw new Error('故意抛出错误');	

	// 3. 主线程 与 worker线程 之间信息传递
	if(e.data.type === 'first change' || e.data.type === 'second change' ){
		console.log('Message received from main script');
	    var workerResult = 'Result: ' + (e.data.dt[0] * e.data.dt[1]);
	    console.log('Posting message back to main script');
	    self.postMessage(workerResult);
	}
	

    // 4.引入 脚本库
    if(e.data === 'importJsLib'){
    	importJsLib();
    }

    function importJsLib(){
    	importScripts();                        /* 什么都不引入 */

    	importScripts('jsLib/a.js');					/* 可以引入 1个 */

    	importScripts('jsLib/a.js','jsLib/b.js');			/* 可以引入 多个 */
    }
    /*
     脚本的下载顺序不固定，但执行时会按照传入 importScripts() 中的文件名顺序进行。这个过程是同步完成的；

     直到所有脚本都下载并运行完毕， importScripts() 才会返回。
     */
}