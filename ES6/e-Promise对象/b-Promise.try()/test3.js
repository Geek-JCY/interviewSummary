/*
## 第二种写法是使用 new Promise()。
 */
const f = () => console.log('now');
(
    () => new Promise( resolve => resolve( f() ) )
)();
console.log('next');
// now
// next

/*
上面代码也是使用立即执行的匿名函数，执行 new Promise()。这种情况下，同步函数也是同步执行的。
 */






