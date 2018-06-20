/*
如果第一个参数不是对象，Reflect.get方法会报错。
 */
Reflect.get(1, 'foo') // 报错
Reflect.get(false, 'foo') // 报错