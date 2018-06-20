/*
如果读取一个未知的键，则返回undefined。
 */
new Map().get('xdfdfdsdf'); // undefined

/*
注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
 */
const map = new Map();
map.set(['a'], 5555);
map.get(['a']); // undefined
/*
上面代码的set和get方法，表面是针对同一个键，
但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。
 */

/*
同理，同样的值的两个实例，在 Map 结构中被视为两个键。
 */
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1);    // 111
map.get(k2);    // 222
/*
上面代码中，变量k1和k2的值是一样的，但是它们在 Map 结构中被视为两个键。
 */



