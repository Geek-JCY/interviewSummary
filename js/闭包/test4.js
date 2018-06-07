/*
解决 test2.js 中的 第二个问题，有什么让它 间隔1秒 以次输出 1 2 3 4 5 吗？

已经介绍完了 闭包的形式，我们说说其它的方式：

原 执行代码：
for(var i=1; i<=5; i++){
	setTimeout(function timer(){
		console.log(i);
	}, i*1000);
}
 */

// 方式 1：
/*
setTimeout() 定时器，传递第三个参数的方式

很多人应用setTimeout的时候，一般都不记得 setTimeout 还可以给回调函数添加参数，我也是浏览别人文章的时候偶尔发现的，然后仔细查了一下，MDN才知道的：

MDN地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout

setTimeout(code, delay, param1, param2, ......) 在delay传递的多个参数是可以在一旦定时器到期开始执行，作为参数传递给 code函数的

其实这也可以用作用域链的原理来解释的，只是第三个参数 i, 是传递给setTimeout() 函数，而在 timer()到期执行时，调用了setTimeout(i) 中的参数 i,
也可以理解为 是闭包的极简版；
 */
// for(var i=1; i<=5; i++){
// 	setTimeout(function timer(i){
// 		console.log(i);
// 	}, i*1000, i);
// }

// 方式 2：
/*
bind() 添加 变量的方式
 */
// for(var i=1; i<=5; i++){
// 	setTimeout(function timer(i){
// 		console.log(i);
// 	}.bind(null, i), i*1000);
// }

/*
1. bind的作用 是改变this指向，
2.第一个参数 是要在那个环境下执行，
3.后续的参数 是list形式的， 是执行时传递给函数的参数，
4.bind() 会创建一个新函数，调用时执行
（注意 bind(null, i)， bind()的第一个参数设置为 null/undefined/不写，this指向是全局对象 window(浏览器环境)/global(node环境)）

能够实现的原理就是，通过 bind(null,i) 创建一个新函数，并且给它预定义了一个参数 i,在定时器到期之后，开始执行这个新函数，
作用域链原理解释，同上；
 */

// 方式 3：
/*
即执行函数的方式 
 */
for(var i=1; i<=5; i++){
	(function(b){
		setTimeout(function timer(){
			console.log(b);
		}, b*1000)
	})(i)
}
/*
其实这种即执行函数的方式 应该也算是 闭包方式的方式实现吧，原理都是 扩展作用域链，

在 VO(global) 和 VO(setTimeout) 作用域链之间再加一个 变量对象VO(即执行函数){arguments:{b:i}}

在timer到期执行的时候，在作用域链上找到VO(global)之前，先找到 VO(即执行函数)，然后结束查找；
 */ 
}





