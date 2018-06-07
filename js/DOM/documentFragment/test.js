/*
documentFragment 介绍

DocumentFragment 节点不属于文档树，继承的 parentNode 属性总是 null。

不过它有一种特殊的行为，该行为使得它非常有用，即当请求把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。

这使得 DocumentFragment 成了有用的占位符，暂时存放那些一次插入文档的节点。它还有利于实现文档的剪切、复制和粘贴操作。

同时我们了解到当需要对页面DOM进行操作的时候必然会导致多次 重绘、回流（什么是重绘，回流？）。这样会加大页面的负担。影响页面性能。

因此我们可以创建这样一个临时占位符。
 */