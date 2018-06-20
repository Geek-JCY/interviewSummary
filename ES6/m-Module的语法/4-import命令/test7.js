/*
目前阶段，通过 Babel 转码，CommonJS 模块的 require命令和 ES6 模块的 import命令，可以写在同一个模块里面，
但是最好不要这样做。
因为 import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。
 */
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';
