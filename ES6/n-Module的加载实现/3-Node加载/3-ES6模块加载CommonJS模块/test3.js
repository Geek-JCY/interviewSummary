/*
CommonJS 模块的输出缓存机制，在 ES6 加载方式下依然有效。
 */
// foo.js
module.exports = 123;
setTimeout(_ => module.exports = null);
/*
上面代码中，对于加载foo.js的脚本，module.exports将一直是123，而不会变成null。
 */

/*
由于 ES6 模块是编译时确定输出接口，CommonJS 模块是运行时确定输出接口，
所以采用 import命令加载 CommonJS 模块时，不允许采用下面的写法。
 */
// 不正确
import { readfile } from 'fs';
/*
上面的写法不正确，因为fs是 CommonJS 格式，只有在运行时才能确定readfile接口，
而import命令要求编译时就确定这个接口。解决方法就是改为整体输入。
 */
// 正确的写法一
import * as express from 'express';
const app = express.default();

// 正确的写法二
import express from 'express';
const app = express();
