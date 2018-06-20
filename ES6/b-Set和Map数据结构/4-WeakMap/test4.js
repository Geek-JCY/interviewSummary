/*
WeakMap 示例：
WeakMap 的例子很难演示，因为无法观察它里面的引用会自动消失。
此时，其他引用都解除了，已经没有引用指向 WeakMap 的键名了，导致无法证实那个键名是不是存在。
 */
// 贺师俊老师提示，如果引用所指向的值占用特别多的内存，就可以通过 Node 的process.memoryUsage方法看出来。
// 根据这个思路，网友vtxf补充了下面的例子。

//首先，打开 Node 命令行。

$ node --expose-gc
// 上面代码中，--expose-gc参数表示允许手动执行垃圾回收机制。

//然后，执行下面的代码。

// 手动执行一次垃圾回收，保证获取的内存使用状态准确
> global.gc();
undefined

// 查看内存占用的初始状态，heapUsed 为 4M 左右
> process.memoryUsage();
{ rss: 21106688,
  heapTotal: 7376896,
  heapUsed: 4153936,
  external: 9059 }

> let wm = new WeakMap();
undefined

// 新建一个变量 key，指向一个 5*1024*1024 的数组
> let key = new Array(5 * 1024 * 1024);
undefined

// 设置 WeakMap 实例的键名，也指向 key 数组
// 这时，key 数组实际被引用了两次，
// 变量 key 引用一次，WeakMap 的键名引用了第二次
// 但是，WeakMap 是弱引用，对于引擎来说，引用计数还是1
> wm.set(key, 1);
WeakMap {}

> global.gc();
undefined

// 这时内存占用 heapUsed 增加到 45M 了
> process.memoryUsage();
{ rss: 67538944,
  heapTotal: 7376896,
  heapUsed: 45782816,
  external: 8945 }

// 清除变量 key 对数组的引用，
// 但没有手动清除 WeakMap 实例的键名对数组的引用
> key = null;
null

// 再次执行垃圾回收
> global.gc();
undefined

// 内存占用 heapUsed 变回 4M 左右，
// 可以看到 WeakMap 的键名引用没有阻止 gc 对内存的回收
> process.memoryUsage();
{ rss: 20639744,
  heapTotal: 8425472,
  heapUsed: 3979792,
  external: 8956 }
//上面代码中，只要外部的引用消失，WeakMap 内部的引用，就会自动被垃圾回收清除。
//由此可见，有了 WeakMap 的帮助，解决内存泄漏就会简单很多。