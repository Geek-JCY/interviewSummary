/*
其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。

WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，
但是这会形成对于这个对象的引用。请看下面的例子。
 */
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
    [e1, 'foo 元素'],
    [e2, 'bar 元素']
];
//上面代码中，e1和e2是两个对象，我们通过arr数组对这两个对象添加一些文字说明。
//这就形成了arr对e1和e2的引用。

//一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放e1和e2占用的内存。
// 不需要 e1 和 e2 的时候 // 必须手动删除引用
arr[0] = null;
arr[1] = null;

// 上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。
/*
 WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
 因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
 也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
 */
/*
基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。
一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。
当该 DOM 元素被清除，其所对应的 WeakMap记录就会自动被移除。
 */
const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element);    // 'some information'


/*
上面代码中，先新建一个 Weakmap 实例。
然后，将一个 DOM 节点作为键名存入该实例，并将一些附加信息作为键值，一起存放在 WeakMap 里面。
这时，WeakMap 里面对element的引用就是弱引用，不会被计入垃圾回收机制。

也就是说，上面的 DOM 节点对象的引用计数是1，而不是2。
这时，一旦消除对该节点的引用，它占用的内存就会被垃圾回收机制释放。
Weakmap 保存的这个键值对，也会自动消失。

总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。
 */
// 注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
const wm1 = new WeakMap();
let key = {};
let obj = {foo: 1};

wm1.set(key, obj);
obj = null;
wm1.get(key);
console.log(wm1.get(key));  // Object {foo: 1}
// 上面代码中，键值obj是正常引用。所以，即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。
