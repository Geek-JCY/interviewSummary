/*
含义：
WeakMap结构与 Map 结构类似，也是用于生成键值对的集合。
 */
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key);
console.log( wm1.get(key) );   // 2

// WeakMap 也可以接受一个数组，作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2);
console.log( wm2.get(k2) ); // 'bar'

