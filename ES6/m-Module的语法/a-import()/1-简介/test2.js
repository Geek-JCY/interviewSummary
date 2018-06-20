/*
因此，有一个提案，建议引入 import()函数，完成动态加载
 */
import(specifier)
/*
上面代码中，import函数的参数 specifier，指定所要加载的模块的位置。
import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。
 */

/*
import()返回一个 Promise 对象。下面是一个例子。
 */
const main = document.querySelector('main');
import(`./section-modules/${someVariable}.js`)
    .then(module => {
        module.loadPageInto(main);
    })
    .catch(err => {
        main.textContent = err.message;
    });
/*
import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。
它是运行时执行，也就是说，什么时候运行到这一句，也会加载指定的模块。
另外，import()函数与所加载的模块没有静态连接关系，这点也是与 import语句不相同。

import()类似于 Node 的 require方法，区别主要是前者是异步加载，后者是同步加载。
 */


