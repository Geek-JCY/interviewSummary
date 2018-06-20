/*
如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
 */
function dec(id){
    console.log('evaluted', id);
    return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
/*
上面代码中，外层修饰器 @dec(1)先进入，但是内层修饰器 @dec(2)先执行。

除了注释，修饰器还能用来类型检查。所以，对于类来说，这项功能相当有用。
从长期来看，它将是 JavaScript 代码静态分析的重要工具。
 */

