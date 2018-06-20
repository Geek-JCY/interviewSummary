/*
由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
这就解决了同名属性碰撞（clash）的问题，
我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），
则只要两个值严格相等，Map 将其视为一个键，
比如
    0和-0就是一个键，
    布尔值true 和 字符串true 则是两个不同的键。
另外，
    undefined 和 null 也是两个不同的键。
虽然
    NaN 不严格相等于自身，但 Map 将其视为同一个键。
 */
let map = new Map();

map.set(-0, 123);
map.get(+0);    // 123
console.log(map.get(+0));

map.set(true, 1);
map.set('true', 2);
map.get(true);  // 1
console.log(map.get(true));

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined); // 3
console.log(map.get(undefined));

map.set(NaN, 123);
map.get(NaN); // 123
console.log(map.get(NaN));



