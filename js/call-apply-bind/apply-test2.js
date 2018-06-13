/*
	apply方法的使用

	DEMO 2:
 */
function sayName(arg1, arg2){
	console.log(this.name);
	console.log(arg1);
	console.log(arg2);
}

var obj = {
	name: 'jcy'
}

sayName.apply(obj, [1, 2]);

// jcy
// 1
// 2