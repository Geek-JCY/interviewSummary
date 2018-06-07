/*
解决 test2.js 中的 第二个问题，有什么让它 间隔1秒 以次输出 1 2 3 4 5 吗？

答案是肯定的，既然我们再说闭包，那我们用闭包来解决这个问题：
 */
// 第一种闭包的方式，
function closure(arg){
    var i = arg;
    setTimeout( function timer() {
        console.log(i);
    }, i*1000 );
}
/*
closure()内添加一个 存储全变量i的局部变量i，

而且for循环中每次执行 closure(i) 时，都会都在栈中开辟新空间存储新变量值；

这样 timer()在执行的时候，会在它自己的作用域链上找到此次执行的所需的对应局部变量i值；

此时 callback 的作用域链：AO(callback)-->AO(setTimeout)-->AO(closure)-->VO(global)

其实此时全局变量的i还是 6, 只是在作用域链上查找的时候，先找到的AO(closure)的变量对象，也就 不再往上级查找了；
 */


// 第二种闭包方式
function closure2(i){
    setTimeout( function timer() {
        console.log(i);
    }, i*1000 );
}
/*
其实这种方式和 第一种是差不多的原理，只不过 
方式1: 变量对象 VO{i:arguments.arg, {arguments:{arg:i(for里的i)} }}
方式2: 变量对象 VO{{arguments:{arg:i(for里的i)} }}
在作用域链上 寻找 变量时，是先从 VO{}里找，找不到再在VO.arguments{}中去找，再找不到 就去上层变量对象中去找 直到找到为止，
找不到 就报错；
 */

for (var i=1; i<=5; i++) {
    // closure(i);
    closure2(i);
}

/*
有人 可能会说这与 test1.js中定义的基本形式不同啊，没有return, 没有变量存储，没有调用；

其实不然，setTimout() 的callback函数 才是我们最后要执行的函数，只不过它没有用 return 返回函数 -> 然后再执行 这个函数；

它是通过异步的方式，定时时间之后，再执行的 其实原理是一样的；

要理解闭包的概念：

当A()函数中的 B()函数执行时，应用了A()函数的变量，就会形成闭包；
其实，完全可以扩展一下，
只要A()函数中的B()函数[不一定是子作用域、也可以孙作用域...哦] 执行时，应用了父作用域或爷作用域等第的上层作用域中的变量的话，
就会形成闭包；
 */



