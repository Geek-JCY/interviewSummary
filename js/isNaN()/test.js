console.log(isNaN('1'))						// false

console.log(isNaN(''))						// false

console.log(isNaN(' '))						// false

console.log(isNaN('35,37')) 				// true

console.log(isNaN('123ABC')) 				// true

console.log(isNaN('abcde')) 				// true

console.log(isNaN(true))					// false

console.log(isNaN(1))						// false

console.log(isNaN(Infinity))				// false

console.log(new Date().toString())			// Wed Apr 04 2018 00:49:06 GMT+0800 (中国标准时间)

console.log(isNaN(new Date()))				// false

console.log(isNaN(new Date().toString()))	// true

console.log(isNaN(NaN))						// true

console.log(isNaN(0/0))						// true

console.log(isNaN(0/3))						// false

console.log(isNaN(null)) 					// false

console.log('---------------------------------------------------');

console.log('35,37' === '35,37');			// true
console.log('123ABC' === '123ABC');			// true
console.log('abcde' === 'abcde');			// true
console.log(new Date().toString() === new Date().toString());			// true
console.log(0/3 === 0/3);					// true
console.log(3/0 === 3/0);					// true

console.log(0 === 0);						// true
console.log('' === '');						// true
console.log(Infinity === Infinity);			// true
console.log(true === true);					// true
console.log(null === null);					// true
console.log(1 === 1);						// true
console.log(10 === 10);						// true

console.log('---------------------重点来了------------------------------');

console.log(0/0 === 0/0);					// false
console.log(typeof(0/0));					// 'number'
console.log(typeof 0/0);					// NaN
console.log(typeof(NaN));					// 'number'
console.log(typeof NaN);					// 'number'

console.log(NaN === NaN);					// false

console.log('---------------------区别 0/0 和 NaN------------------------------');

console.log(typeof 0/0);	// NaN
console.log(typeof NaN);	// 'number'
console.log(typeof va);		// 'number'

console.log('---------------------方法总结------------------------------');
/*
综上 判断一个变量 到底是不是 NaN, 最好的办法就是 利用 NaN不能用相等操作符(== 和 ===) 来判断， NaN === NaN 会返回 false,

虽然, 0/0 === 0/0 也会返回 false，但是 0/0 它也只是个表达式而已，算出来的结果还是 NaN, 一般也没有需要这样写的情况，

所以 我们还是可以用 NaN === NaN 会返回 false 这样的特性，来进行 NaN 的判断
 */

var va = NaN;

if(va !== va){
	console.log('这个变量 是 ---->' + va);
}
