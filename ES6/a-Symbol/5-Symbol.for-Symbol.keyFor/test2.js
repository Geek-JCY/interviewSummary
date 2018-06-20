/*
Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，
但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
 */
Symbol.for("bar") === Symbol.for("bar");    // true
Symbol("bar") === Symbol("bar");    // false
// 上面代码中，由于 Symbol() 写法没有登记机制，所以每次调用都会返回一个不同的值。
