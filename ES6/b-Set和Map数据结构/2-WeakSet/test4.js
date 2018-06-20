/*
WeakSet 没有size属性，没有办法遍历它的成员。
 */
const ws = new WeakSet();
ws.size // undefined
ws.forEach // undefined

ws.forEach(function(item){ console.log('WeakSet has ' + item) });
// TypeError: undefined is not a function

/*
上面代码试图获取size和forEach属性，结果都不能成功。
 */

/*
WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，
遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
 */