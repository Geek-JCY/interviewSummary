/*
Reflect.defineProperty(target, propertyKey, attributes)
Reflect.defineProperty方法基本等同于 Object.defineProperty，用来为对象定义属性。
未来，后者会被逐渐废除，请从现在开始就使用Reflect.defineProperty代替它。
 */
function MyDate() {
  /*…*/
}
// 旧写法
Object.defineProperty(MyDate, 'now', {
    value: () => Date.now()
})
// 新写法
Reflect.defineProperty(MyDate, 'now', {
    value: () => Date.now()
});

/*
如果 Reflect.defineProperty的第一个参数不是对象，就会抛出错误，比如 Reflect.defineProperty(1, 'foo')。
 */





