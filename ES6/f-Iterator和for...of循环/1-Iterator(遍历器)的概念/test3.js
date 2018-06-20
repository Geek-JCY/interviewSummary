/*
如果使用 TypeScript 的写法，遍历器接口（Iterable）、指针对象（Iterator）和 next方法返回值的规格可以描述如下。
 */
interface iterable {
    [Symbol.iterable]() : iterator
}

interface Iterator {
    next(value?: any) : iterationResult,
}

interface iterationResult {
    value: any,
    done: boolean
}



