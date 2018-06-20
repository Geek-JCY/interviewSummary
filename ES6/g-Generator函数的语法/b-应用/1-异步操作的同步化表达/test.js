/*
Generator 可以暂停函数执行，返回任意表达式的值。这种特点使得 Generator 有多种应用场景。
 */
/*
（1）异步操作的同步化表达
Generator 函数的暂停执行的效果，意味着可以把异步操作写在 yield表达式里面，等到调用 next方法时再往后执行。
这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在 yield表达式下面，反正要等到调用 next方法时再执行。
所以，Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数。
 */
function* loadUI(){
    showLoadingScreen();
    yield loadUIDataAsynchronously();
    hideLoadingScreen();
}

var loader = loadUI();
// 加载 UI
loader.next();

// 卸载 UI
loader.next();
/*
上面代码中，第一次调用 loadUI函数时，该函数不会执行，仅返回一个遍历器。
下一次对该遍历器调用 next方法，
则会显示 Loading界面（showLoadingScreen），并且异步加载数据（loadUIDataAsynchronously）。
等到数据加载完成，再一次使用 next方法，则会隐藏 Loading界面。
可以看到，这种写法的好处是所有 Loading界面的逻辑，都被封装在一个函数，按部就班非常清晰。
 */ 

