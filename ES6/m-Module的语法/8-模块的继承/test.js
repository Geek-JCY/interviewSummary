/*
8. 模块的继承

模块之间也可以继承。

假设有一个 circleplus模块，继承了 circle模块。
 */
// circleplus.js
export * from 'circle';
export var e =  2.71828182846;
export default function(x){
    return Math.exp(x);
}
/*
上面代码中的 export *，表示再输出 circle模块的所有属性和方法。
注意，export *命令会忽略 circle模块的 default方法。然后，上面代码又输出了自定义的 e变量和默认方法。
 */

/*
这时，也可以将circle的属性或方法，改名后再输出。
 */
// circleplus.js
export {area as circleArea} from 'circle';
/*
上面代码表示，只输出 circle模块的 area方法，且将其改名为 circleArea。
 */

/*
加载上面模块的写法如下。
 */
// main.js
import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));
/*
上面代码中的import exp表示，将circleplus模块的默认方法加载为exp方法。
 */

