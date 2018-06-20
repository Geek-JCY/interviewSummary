/*
WeakMap与Map的区别有两点。
 */
/*
首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
 */
const map = new WeakMap();
map.set(1, 2);
// TypeError: 1 is not an object!
map.set(Symbol(), 2);
// TypeError: Invalid value used as weak map key
map.set(null, 2);
// TypeError: Invalid value used as weak map key
// 上面代码中，如果将数值1和Symbol值作为 WeakMap 的键名，都会报错。
