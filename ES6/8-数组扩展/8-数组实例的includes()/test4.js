/*
    下面代码用来检查当前环境是否支持该方法，如果不支持，部署一个简易的替代版本。
*/
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
/*
另外，Map 和 Set 数据结构有一个has方法，需要注意与includes区分。

    Map 结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
    Set 结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。
 */