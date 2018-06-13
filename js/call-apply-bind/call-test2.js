/*
	call方法的使用

	DEMO 2:
 */
function sayName(){
	console.log(this.name);
}

function B(){
	this.name = 'jcy';
}

sayName.call(new B())