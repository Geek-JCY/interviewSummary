/*
    1. Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
 */
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]

/*
    2. 返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。
 */
const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj)
// ["b", "c", "a"]

/*
    3. Object.values只返回对象自身的可遍历属性。
 */
const obj = Object.create({}, {p: {value: 42}});
Object.values(obj) // []

/*
    4. Object.values会过滤属性名为 Symbol 值的属性。
 */
Object.values({ [Symbol()]: 123, foo: 'abc' });
// ['abc']

/*
    5. 如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。
 */
Object.values('foo')
// ['f', 'o', 'o']

/*
    6. 如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。
    所以，Object.values会返回空数组。
 */
Object.values(42) // []
Object.values(true) // []




