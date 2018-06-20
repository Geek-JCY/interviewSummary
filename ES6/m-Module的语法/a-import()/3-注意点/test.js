/*
注意点

import()加载模块成功以后，这个模块会作为一个对象，当作 then方法的参数。
因此，可以使用对象解构赋值的语法，获取输出接口。
 */
import('./myModule.js')
.then(({export1, export2}) => {
    // ...
});
/*
上面代码中，export1 和 export2 都是 myModule.js的输出接口，可以解构获得。
 */

/*
如果模块有 default输出接口，可以用参数直接获得。
 */
import('./myModule.js')
.then(myModule => {
    console.log(myModule.default);
});
/*
上面的代码也可以使用具名输入的形式。
 */
import('./myModule.js')
.then(({default: theDefault}) => {
    console.log(theDefault);
})


