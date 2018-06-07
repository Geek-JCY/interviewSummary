// 函数作用域  和 变量声明提升

var str = 5;
function a() {
	console.log(str);
	var str = 10;
	console.log(str);
}
a()

// undefined
// 10