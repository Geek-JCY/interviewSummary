/*
如果第一个参数不是对象，Reflect.set会报错。
 */
Reflect.set(1, 'foo', {})   // 报错
Reflect.set(false, 'foo', {}) // 报错