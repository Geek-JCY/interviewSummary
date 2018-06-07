/*
这是一个经典的面试 题：

结果是：按1秒的间隔以次输出 6 6 6 6 6  这应该很容易就的出来；

问题是，

1.结果为什么会是着这样？

2.有什么方法，可以让它按1秒的间隔以次输出 1 2 3 4 5 ？
 */

for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log(i);
    }, i*1000 );
}

/*
先解释一下为什么会这样，

上式可简化为：

for (var i=1; i<=5; i++) {
    setTimeout( callback, i*1000 );
}

分析：
全局执行上下文，创建阶段：
创建全局变量对象 和 作用域链
{
    VO(global):{i:undefined} // 此时 VO在全局作用域内，所以它是全局变量对象
    ScopeChain:[VO]
}

setTimeout() 函数
{
    VO(setTimeout): {arguments:{timer: i*1000}}
    ScopeChain:[VO(setTimeout),  VO(global)]
}

执行阶段：
for循环 给全局变量 i赋值，VO(global)中i的变化 ->1->2->3->4->5->6

而每次循环，都会调用 setTimeout(callback, i*1000)函数，所谓调用 就是将这个函数 放入调用栈执行，执行之后才会进入下一轮循环

所以也就是，依次执行：
setTimeout(callback, 1000)
setTimeout(callback, 2000)
setTimeout(callback, 3000)
setTimeout(callback, 4000)
setTimeout(callback, 5000)

而这个setTimeout(callback, 1000)函数 是个异步执行函数，要经历 
->将callback挂起
->1000ms后触发
->把callback放入事件队列(event queue)
->等到call stack空了之后，event loop 找到 这个callback
->将callback入栈执行
（
重点来了：这个callback此前是没有被执行过的，也就是说 它内部对全局变量i的引用是没有被赋值过的，
此时执行，会在它的作用域链中寻找 i值，有必要说一下 callback的作用域链：VO(callback)->VO(setTimeout)->VO(global)
这样呢，一直找到了 VO(global) 找到了 i变量，而此时呢 变量 i 已经执行完循环，最后 i=6,也就是 VO(global)中i=6,
）
->执行中，根据作用域链 寻找需要的变量
->输出结果
->出栈
->垃圾回收
->下一轮 event loop 开始

所以最后，也就是 间隔1秒以次输出 6 6 6 6 6 了

简单概括：
    说的好像有点复杂了，可以简单概括为，callback中引用的变量是全局变量对象中变量，它的i值随全局变量对象的变化而变化；

 */

