/*
WeakSet 结构有以下三个方法。

    - WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    - WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    - WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
 */
// 例子：
const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(obj);    // false

ws.delete(window); 
ws.has(window); // false