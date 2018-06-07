function fn(num){
	return new Promise(function(resolve, reject){
		if(typeof num === 'number'){
			resolve()
		}
		else {
			reject()
		}
	})
	.then(function(){
		console.log('参数是一个 number 值');
	},function(){
		console.log('参数不是一个 number 值');
	})
}

fn(122);

fn('abc');
