/*
test2.js 代码中，也展示了一种去除数组重复成员的方法。
 */
// 去除数组重复成员
[...new Set(array)]

/*
向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
Set 内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），
主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身
 */
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // [NaN]
// 上面代码向 Set 实例添加了两个NaN，但是只能加入一个。这表明，在 Set 内部，两个NaN是相等


/*
另外，两个对象总是不相等的。
 */
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
// 上面代码表示，由于两个空对象不相等，所以它们被视为两个值。