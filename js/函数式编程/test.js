/*
简单介绍：需要具体学习 及 实践 以掌握

函数式变成要求：

	1.只是用表达式，不使用语句

	2.要有输入 和 输出

	3.是纯函数

简单介绍一下概念：
	- 表达式：单纯的运算过程，总是又返回值；

	- 语句：执行某种操作，没有返回值；

	- 相同的输入总会得到相同的输出，并且不会产生“副作用”的函数；

	- “副作用” 指函数内部和外部互动，典型的就是 在函数内部修改了外部变量，那么再次应用此函数的时候，就是应用改变后的外部变量了；

	  可以看一下 下边的例子就是副作用的表现：

 */

function getLast(arr) {
    return arr[arr.length-1];
}

function getLast_(arr) {
	// pop() 方法用于删除数组的最后一个元素并返回删除的元素,
	// 数组是引用类型数据，这样会影响到外部变量的值	
    return arr.pop();
}

var source = [1, 2, 3, 4];

console.log( getLast(source) ); // 4
console.log( getLast_(source) ); // 4
console.log( getLast(source) ); // 3 getLast_()方法影响了 外部变量