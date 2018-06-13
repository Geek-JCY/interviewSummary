/*
	apply方法的使用

	DEMO 1:
 */
var obj1 = {
	name: 'jack',
	sayName: function(arg1, arg2){
		console.log(this.name);
		console.log(arg1);
		console.log(arg2);
	}
}

obj2 = {
	name: 'jcy'
};

obj1.sayName.apply(obj2, [1,2]);

// jcy
// 1
// 2


