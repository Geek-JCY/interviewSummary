/*
模块的接口改名和整体输出，也可以采用这种写法。
 */
// 接口改名
export {foo as myFoo} from 'my_module';

// 整体输出
export * from 'my_module';

/*
默认接口的写法如下。
 */
export {default} from 'foo';

/*
具名接口改为默认接口的写法如下。
 */
export {es6 as default} from './someModule';
// 等同于
import {es6} from './someModule';
export default es6;

/*
同样地，默认接口也可以改名为具名接口。
 */
export {default as es6} from './my_module';

/*
下面三种 import语句，没有对应的复合写法。
 */
import * as someIdentifier from "someModule";
import someIdentifier from "someModule";
import someIdentifier, { namedIdentifier } from "someModule";
/*
为了做到形式的对称，现在有提案，提出补上这三种复合写法。
*/
export * as someIdentifier from "someModule";
export someIdentifier from "someModule";
export someIdentifier, { namedIdentifier } from "someModule";

