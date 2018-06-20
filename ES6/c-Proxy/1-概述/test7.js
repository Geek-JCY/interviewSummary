//下面是 Proxy 支持的拦截操作一览，一共 13 种。

// 拦截对象属性的读取，比如proxy.foo和 proxy['foo']。
get(target, propKey, receiver)

// 拦截对象属性的设置，比如proxy.foo = v或 proxy['foo'] = v，返回一个布尔值。
set(target, propKey, value, receiver)

// 拦截propKey in proxy的操作，返回一个布尔值。
has(target, propKey)

// 拦截delete proxy[propKey]的操作，返回一个布尔值。
deleteProperty(target, propKey)

// 拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。
// 该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
ownKeys(target)

// 拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
getOwnPropertyDescriptor(target, propKey)

// 拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
defineProperty(target, propKey, propDesc)

// 拦截 Object.preventExtensions(proxy)，返回一个布尔值。
preventExtensions(target)

// 拦截 Object.getPrototypeOf(proxy)，返回一个对象。
getPrototypeOf(target)

// 拦截 Object.isExtensible(proxy)，返回一个布尔值。
isExtensible(target)

// 拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
setPrototypeOf(target, proto)

// 拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
apply(target, object, args)

// 拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)。
construct(target, args)