/*
注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。
 */
foo();

import {foo} from 'my_module';
/*
上面的代码不会报错，因为 import的执行早于 foo的调用。
这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。
 */



