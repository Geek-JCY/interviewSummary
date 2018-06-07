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

console.log(new Object() instanceof Object);	// true
console.log(new Array() instanceof Array);		// true
console.log(new Number() instanceof Number);	// true
console.log(3 instanceof Number);				// false
console.log(new Function() instanceof Object);	// true
console.log(new Boolean() instanceof Object);	// true
console.log(new String() instanceof Object);	// true
console.log(undefined instanceof Object); 		// false
console.log(null instanceof Object);			// false
console.log(NaN instanceof Object); 			// false


console.log('-------------typeof----------------');

console.log(typeof 100); 					// 'number'
console.log(typeof '100'); 					// 'string'
console.log(typeof true);					// 'boolean'
console.log(typeof function A(){}); 		// 'function'
console.log(typeof undefined); 				// 'undefined'
console.log(typeof new Object()); 			// 'object'
console.log(typeof [1,2]); 					// 'object'
console.log(typeof null); 					// 'object'
console.log(typeof NaN); 					// 'number'
console.log(NaN === NaN); 					// 'number'
console.log(typeof Infinity); 				// 'number'
console.log(Infinity === Infinity); 		// 'true'
console.log(true === 1); 					// 'false'


console.log('-----------------------------');
/*
所以有了下边的 到底如何判断 一个变量 到底是什么数据类型

方法 总结：
 */
var a = NaN; // a 为变量 可以是任意类型的变量

if(typeof a === 'string' ){ console.log('这是一个 字符串') }

if(typeof a === 'number' && a !== a) { console.log('这是 NaN') }

if(typeof a === 'number' && a === a) { console.log('这是一个 数值') }

if(typeof a === 'boolean'){ console.log('这是一个 boolean 值') }

if(typeof a === 'function'){ console.log('这是一个 function') }

if(typeof a === 'undefined'){ console.log('这是 undefined') }

if(typeof a === 'object' && a instanceof Array ){ console.log('这是一个 数组') }

if(typeof a === 'object' && a instanceof Object && a instanceof Array === false){ console.log('这是一个 对象') }

if(typeof a === 'object' && a instanceof Object === false){ console.log('这是 null') }









