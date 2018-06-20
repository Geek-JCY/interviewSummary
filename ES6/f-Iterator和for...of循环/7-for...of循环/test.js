/*
ES6 借鉴 C++、Java、C# 和 Python 语言，引入了 for...of 循环，作为遍历所有数据结构的统一的方法。

一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用 for...of 循环遍历它的成员。
也就是说，for...of 循环内部调用的是数据结构的 Symbol.iterator方法。

for...of 循环可以使用的范围包括 数组、Set 和 Map 结构、
某些类似数组的对象（比如 arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
 */