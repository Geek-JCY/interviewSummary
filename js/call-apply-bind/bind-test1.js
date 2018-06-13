/*
	bind 方法的使用

	DEMO 1:
 */
var obj1 = {
	name: 'jack',
	sayName: function(arg1, arg2, arg3){
		console.log(this.name);
		console.log(arg1);
		console.log(arg2);
		console.log(arg3);
	}
}

obj2 = {
	name: 'jcy'
};

var func = obj1.sayName.bind(obj2, 1, 2);
func(3);


