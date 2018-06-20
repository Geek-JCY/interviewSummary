/*
语法：
WeakSet 是一个构造函数，可以使用 new 命令，创建 WeakSet 数据结构。
 */
const ws = new WeakSet();
/*
作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。
（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）
该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
 */
const a = [[1,2],[3,4]];
const ws = new WeakSet(a);  // WeakSet {[1,2],[3,4]}
/*
上面代码中，a是一个数组，它有两个成员，也都是数组。
将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。
 */
/*
注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。
 */
const b = [3,4];
const ws = new WeakSet(b);  // Uncaught TypeError: Invalid value used in weak set(…)
/*
上面代码中，数组b的成员不是对象，加入 WeaKSet 就会报错。
 */




