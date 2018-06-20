/*
Map 结构的实例有以下属性和操作方法。
 */
// （1）size 属性
// size属性返回 Map 结构的成员总数。
const map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size // 2
console.log(map.size);

//（2）set(key, value)
// set方法设置键名key对应的键值为value，然后返回整个 Map 结构。
// 如果key已经有值，则键值会被更新，否则就新生成该键。
const m = new Map();
m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
console.log(m.get('edition'));
console.log(m.get(262));
console.log(m.get(undefined));
// set方法返回的是当前的Map对象，因此可以采用链式写法。
let m2 = new Map()
.set(1, 'a')
.set(2, 'b')
.set(3, 'c');
console.log(m2.get(1));
console.log(m2.get(2));
console.log(m2.get(3));

//（3）get(key)
// get方法读取key对应的键值，如果找不到key，返回undefined。
const m3 = new Map();
const hello = function() {console.log('hello');};
m3.set(hello, 'Hello ES6!') // 键是函数
m3.get(hello)  // Hello ES6!
console.log(m3.get(hello));

//（4）has(key)
// has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
const m4 = new Map();
m4.set('edition', 6);
m4.set(262, 'standard');
m4.set(undefined, 'nah');

m4.has('edition')     // true
m4.has('years')       // false
m4.has(262)           // true
m4.has(undefined)     // true
console.log(m4.has('edition'));
console.log(m4.has('years'));
console.log(m4.has(262));
console.log(m4.has(undefined));

//（5）delete(key)
// delete方法删除某个键，返回true。如果删除失败，返回false。
const m5 = new Map();
m5.set(undefined, 'nah');
m5.has(undefined);  // true
console.log(m5.has(undefined));
m5.delete(undefined);
m5.has(undefined);  // false
console.log(m5.has(undefined));

//（6）clear()
// clear方法清除所有成员，没有返回值。
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0




