/*
__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前，所有浏览器（包括 IE11）都部署了这个属性。
 */
// es6 写法
const obj = {
    method: function(){
        // ......
    }
};
obj.__proto__ = someOtherObj;

// es5 写法
var obj = Object.create(someOtherObj);
obj.method = function(){
    // ......
}