console.log('---------------consturctor--------------');
console.log(new Object().constructor);
console.log(new Array().constructor);
console.log(new Number().constructor);
console.log(new Function().constructor);
console.log(new Boolean().constructor);
console.log(new String().constructor);
// console.log(undefined.constructor); 	// Cannot read property 'constructor'
// console.log(null.constructor); // 	// Cannot read property 'constructor'
console.log(NaN.constructor); 			// Number

console.log('---------------instanceof--------------');

console.log(new Object() instanceof Object);
console.log(new Array() instanceof Object);
console.log(new Number() instanceof Object);
console.log(new Function() instanceof Object);
console.log(new Boolean() instanceof Object);
console.log(new String() instanceof Object);
console.log(undefined instanceof Object); 		// false
console.log(null instanceof Object);			// false
console.log(NaN instanceof Object); 			// false


console.log('-------------typeof----------------');

console.log(typeof 100); 					// 'number'
console.log(typeof true);					// 'boolean'
console.log(typeof function A(){}); 		// 'function'
console.log(typeof undefined); 				// 'undefined'
console.log(typeof new Object()); 			// 'object'
console.log(typeof [1,2]); 					// 'object'
console.log(typeof null); 					// 'object'
console.log(typeof NaN); 					// 'number'


console.log('-----------------------------');
/*
所以有了下边的 到底如何判断 一个变量 到底是不是数组 的方法
 */

// var ar = [1,2,3,4];
// var ar = {a:1};
var ar = null;
if(typeof ar === 'object'){
	if(ar instanceof Array){
		console.log('ar 是个 数组');
	}
	else if(ar instanceof Object === false){
		console.log('ar 是 null');
	}
	else {
		console.log('ar 是一个 对象');
	}
}