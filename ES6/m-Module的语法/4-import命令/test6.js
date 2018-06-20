/*
最后，import语句会执行所加载的模块，因此可以有下面的写法。
 */
import 'lodash';
/*
上面代码仅仅执行 lodash模块，但是不输入任何值。
*/

/*
如果多次重复执行同一句 import语句，那么只会执行一次，而不会执行多次。
 */
import 'lodash';
import 'lodash';
/*
上面代码加载了两次lodash，但是只会执行一次。
 */


import { foo } from 'my_module';
import { bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';
/*
上面代码中，虽然 foo和 bar在两个语句中加载，但是它们对应的是同一个 my_module实例。
也就是说，import语句是 Singleton 模式。
 */
