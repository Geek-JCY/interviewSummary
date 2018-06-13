/*
	apply方法的使用

	DEMO 3:
 */

var a = [1, 2, 3];
var b = [4, 5, 6];

Array.prototype.push.apply(a, b); 
console.log(a);
