/*
（3） 让 Object操作都变成函数行为。某些Object操作是命令式，
    比如name in obj和delete obj[name]，
    而 Reflect.has(obj, name) 和 Reflect.deleteProperty(obj, name)让它们变成了函数行为。
 */
// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true



