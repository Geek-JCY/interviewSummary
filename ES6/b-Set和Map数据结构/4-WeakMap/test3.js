/*
WeakMap 语法：
WeakMap 与 Map 在 API 上的区别主要是两个，
一是没有遍历操作（即没有key()、values()和entries()方法），也没有size属性。
    因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
    这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，
    为了防止出现不确定性，就统一规定不能取到键名。
二是无法清空，即不支持clear方法。

因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */
const wm = new WeakMap();

// size、forEach、clear 方法都不存在
wm.size // undefined
wm.forEach // undefined
wm.clear // undefined
console.log(wm.size);
console.log(wm.forEach);
console.log(wm.clear);
