/*
下面比较一下默认输出和正常输出。
 */
// 第一组
export default function crc32() {};  // 输出

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32(){};   // 输出

import {crc32} from 'crc32';

/*
上面代码的两组写法，
第一组是使用 export default时，对应的 import语句 不需要使用大括号；
第二组是不使用 export default时，对应的 import语句 需要使用大括号。
 */

/*
export default命令用于指定模块的默认输出。
显然，一个模块只能有一个默认输出，因此 export default命令只能使用一次。
所以，import命令后面才不用加大括号，因为只可能唯一对应 export default命令。
 */

