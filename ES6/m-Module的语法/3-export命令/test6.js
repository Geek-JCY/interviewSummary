/*
最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
如果处于块级作用域内，就会报错，下一节的 import命令也是如此。
这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
 */
function foo(){
    export default 'bar'; // SyntaxError 
}
foo();
/*
上面代码中，export语句放在函数之中，结果报错。
 */



