/*
正是因为 export default命令其实只是输出一个叫做 default的变量，所以它后面不能跟变量声明语句。
 */
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
/*
上面代码中，export default a的含义是将变量 a的值赋给变量 default。所以，最后一种写法会报错。
 */

/*
同样地，因为 export default命令的本质是将后面的值，赋给 default变量，
所以可以直接将一个值写在 export default之后。
 */
// 正确
export default 42;

// 报错
export 42;
/*
上面代码中，后一句报错是因为没有指定对外的接口，而前一句指定外对接口为 default。
 */



