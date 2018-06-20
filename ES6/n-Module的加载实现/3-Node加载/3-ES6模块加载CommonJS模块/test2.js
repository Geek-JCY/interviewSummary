/*
下面是一些例子：
 */
// b.js
module.exports = null;
// es.js
import foo from './b';
// foo = null;

import * as bar from './b';
// bar = {default: null};
/*
上面代码中，es.js采用第二种写法时，要通过bar.default这样的写法，才能拿到module.exports。
 */

// c.js
module.exports = function two(){
    return 2;
}
// es.js
import foo from './c';
foo(); // 2

import * as bar from './c'; 
bar.default(); // 2
bar(); // throws, bar is not a function
/*
上面代码中，bar本身是一个对象，不能当作函数调用，只能通过bar.default调用。
 */



