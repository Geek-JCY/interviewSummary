console.log('同步开始');

let promise = new Promise(function(resolve, reject){
	console.log('111');
	setTimeout(function(){
		console.log(222);
	}, 0);
	resolve(333);
	console.log(444);
});

console.log(555);

setTimeout(function(){
	console.log(666);
},0);

promise.then(function(arg){
	console.log(777);
	console.log(arg);
});

console.log(888);

// 同步开始
// 111 // Promise 新建后立即执行，所以首先输出的是 Promise。
// 444
// 555
// 888
// 777
// 333
// 222
// 666