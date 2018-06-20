/*
7. export 与 import 的复合写法

如果在一个模块之中，先输入后输出同一个模块，import语句可以与 export语句写在一起。
 */
export {foo, bar} from 'my_module';

// 可以简单理解为
import {foo, bar} from 'my_module';
export {foo, bar};
/*
上面代码中，export和 import语句可以结合在一起，写成一行。
但需要注意的是，写成一行以后，foo和 bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，
导致当前模块不能直接使用 foo和 bar。
 */




