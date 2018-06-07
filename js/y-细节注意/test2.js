/*
IE9 之前的浏览器对 DOM 和 BOM 对象使用不同的垃圾收集例程；

它们是使用 C++ 以 COM(Component Object Model，组建对象模型)对象的形式实现的，而 COM对象的垃圾收集机制是采用的垃圾收集机制 是 引用计数策略 ，

而引用计数策略有个问题就是循环引用的问题，会造成被引用对象始终存在，造成垃圾难以回收的问题；

因此，闭包在 IE 的这些版中会导致一些特殊的问题，如：如果闭包作用域中保存这一个 HTML元素，

那么意味着该元素将无法被销毁；

如下：
 */
function assignHandler(){
	var element = document.getElementById('someElement');
	element.onclick = function(){
		alert(element.id);
	}
}
/*
以上代码创建了一个作为 element元素事件处理程序的闭包，而这个闭包又创建了一个循环引用。

由于匿名函数保存饿了一个对 assignHandler()的活动对象的引用，因此就会导致无法减少 element的引用次数；

只要匿名函数存在，element 的引用数至少也是1，因此他所占用的内存就永远不会被回收。

解决方案：
 */
function assignHandler(){
	var element = document.getElementById('someElement');
	var id = element.id;
	element.onclick = function(){
		alert(id);
	}
	element = null;
}