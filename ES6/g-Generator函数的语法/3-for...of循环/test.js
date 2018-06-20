/*
for...of 循环可以自动遍历 Generator 函数时生成的 Iterator对象，且此时不再需要调用 next方法。
 */
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for(let v of foo()){
    console.log(v);
}
// 1 2 3 4 5 
/*
上面代码使用 for...of循环，依次显示 5 个 yield表达式的值。
这里需要注意，一旦 next方法的返回对象的 done属性为 true，for...of循环就会中止，
且不包含该返回对象，所以上面代码的 return语句返回的 6，不包括在 for...of 循环之中。
 */

/*
下面是一个利用 Generator 函数和 for...of循环，实现斐波那契数列的例子。
 */
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for(let n of fibonacci()){
    if(n > 1000) break;
    console.log(n);
}
/*
从上面代码可见，使用 for...of 语句时不需要使用next方法。
 */









