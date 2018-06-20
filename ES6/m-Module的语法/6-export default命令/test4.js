/*
本质上，export default就是输出一个叫做 default的变量或方法，然后系统允许你为它取任意名字。
所以，下面的写法是有效的。
 */
// modules.js
function add(x, y) {
    return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import {default as foo} from 'modules';
// 等同于
// import foo from 'modules';





