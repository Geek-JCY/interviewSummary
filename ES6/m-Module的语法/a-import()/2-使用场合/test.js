/*
适用场合

下面是 import()的一些适用场合。
 */
/*
（1）按需加载
import() 可以在需要的时候，再加载某个模块。
 */
button.addEventListener('click', event => {
    import('./dialogBox.js')
    .then(dialogBox => {
        dialogBox.open();
    })
    .catch(error => {
        /* Error handling */
    })
});
/*
上面代码中，import()方法放在 click事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。
 */

/*
（2）条件加载
import()可以放在if代码块，根据不同的情况，加载不同的模块。
 */
if(condition){
    import('moduleA').then(...);
} else {
    import('moduleB').then(...);
}
/*
上面代码中，如果满足条件，就加载模块 A，否则加载模块 B。
 */

/*
（3）.动态的模块路径
import()允许模块路径动态生成。
 */
import(f())
.then(...);

