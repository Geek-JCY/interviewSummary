/*
对于类似数组的对象（存在数值键名和 length属性），部署 Iterator 接口，有一个简便方法，
就是 Symbol.iterator方法直接引用数组的 Iterator 接口。
 */
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// 或者
NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];

[...document.querySelectorAll('div')]   // 可以执行了

/*
NodeList 对象是类似数组的对象，本来就具有遍历接口，可以直接遍历。
上面代码中，我们将它的遍历接口改成数组的 Symbol.iterator属性，可以看到没有任何影响。
 */
