/*
	call方法的使用

	DEMO 1:
 */

var obj = {
	name: 'jack',
	sayName: function(arg1, arg2){
		console.log(this.name);
		console.log(arg1);
		console.log(arg2);
	}
};

obj.sayName();

var obj2 = {
	name: 'jcy'
};
obj.sayName.call(obj2, '666', '999');
