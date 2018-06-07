/*
判断一个变量 是数组类型吗
 */
var ar = [1,2,3,4];
// var ar = {a:1};
// var ar = null;
if(typeof ar === 'object'){
	if(ar instanceof Array){
		console.log('ar 是个 数组');
	}
	else if(ar === null){
		console.log('ar 是 null');
	}
	else {
		console.log('ar 是一个 对象');
	}
}