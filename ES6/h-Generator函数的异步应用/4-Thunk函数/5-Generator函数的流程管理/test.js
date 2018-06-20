/*
你可能会问， Thunk 函数有什么用？
回答是以前确实没什么用，但是 ES6 有了 Generator 函数，Thunk 函数现在可以用于 Generator 函数的自动流程管理。

Generator 函数可以自动执行。
 */
function* gen() {
  // ...
}

var g = gen();
var res = g.next();

while(!res.done){
  console.log(res.value);
  res = g.next();
}
/*
上面代码中，Generator 函数 gen会自动执行完所有步骤。
 */





