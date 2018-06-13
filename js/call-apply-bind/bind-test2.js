/*
	bind 方法的使用

	DEMO 2:
 */
function sayName(arg1, arg2, arg3){
	console.log(this.name);
	console.log(arg1);
	console.log(arg2);
	console.log(arg3);
}

var obj = {
	name: 'jcy'
}

var func = sayName.bind(obj, 1, 2);
func(3);