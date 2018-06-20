/*
有一些场合会默认调用 Iterator 接口（即 Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合。
*/
// (1).解构赋值
// 对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。
let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
// first='a'; rest=['b','c'];

//（2）扩展运算符
// 扩展运算符（...）也会调用默认的 Iterator 接口。
// 例一：
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']

// 上面代码的扩展运算符内部就调用 Iterator 接口。
/*
实际上，这提供了一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。
也就是说，只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。
 */
let arr = [...iterable];


