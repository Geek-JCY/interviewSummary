/*
上面的例子展示了如何向 Map 添加成员。
作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
 */
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
map.size    // 2
map.has('name')    // true
map.get('name') // '张三'
map.has('title') // true
map.get('title') // "Author"
/*
上面代码在新建 Map 实例时，就指定了两个键name和title。
 */
