/*
另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
 */
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
/*
上面代码输出变量 foo，值为 bar，500 毫秒之后变成 baz。
 */

/*
这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新，详见下文《Module 的加载实现》一节。
 */

