/*
含义和基本用法：
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），
但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
 */
 const data = {};
 const element = document.getElementById('myDiv');

 data[element] = 'metadata';
 data['[object HTMLDivElement]']    // 'metadata'
 /*
 上面代码原意是将一个 DOM 节点作为对象data的键，
 但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。
  */
 
 /*
 为了解决这个问题，ES6 提供了 Map 数据结构。
 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 如果你需要“键值对”的数据结构，Map 比 Object 更合适
  */
 const m = new Map();
 const o = {p: 'Hello World'};

 m.set(o, 'content');
 m.get(o);  // 'content'

 m.has(o);  // true
 m.delete(o);   // true
 m.has(o);  // false
 /*
 上面代码使用 Map 结构的set方法，将对象o当作m的一个键，
 然后又使用get方法读取这个键，接着使用delete方法删除了这个键。
  */