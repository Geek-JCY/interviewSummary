/*
Set 结构的实例有以下属性。

    - Set.prototype.constructor：构造函数，默认就是Set函数。
    - Set.prototype.size：返回Set实例的成员总数。
    - Set 实例的方法分为两大类：操作方法（用于操作数据）和 遍历方法（用于遍历成员）。
*/
/*
    操作方法：
    下面先介绍四个 操作方法。
    - add(value)：添加某个值，返回 Set 结构本身。
    - delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    - has(value)：返回一个布尔值，表示该值是否为Set的成员。
    - clear()：清除所有成员，没有返回值。
 */
// 上面这些属性和方法的实例如下。
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false