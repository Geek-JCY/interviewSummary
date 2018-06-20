/*
由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
 */
// 报错
import {'f' + 'oo'} from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
/*
上面三种写法都会报错，因为它们用到了表达式、变量 和 if结构。在静态分析阶段，这些语法都是没法得到值的。
 */


