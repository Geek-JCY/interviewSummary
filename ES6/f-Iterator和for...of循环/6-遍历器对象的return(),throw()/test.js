/*
遍历器对象除了具有 next方法，还可以具有 return方法和 throw方法。
如果你自己写遍历器对象生成函数，那么 next方法是必须部署的，return方法和 throw方法是否部署是可选的。
 */
/*
return方法的使用场合是，如果 for...of 循环提前退出（通常是因为出错，或者有 break语句或 continue语句），
就会调用 return方法。
如果一个对象在完成遍历前，需要清理或释放资源，就可以部署 return方法。
 */
function readLinesSync(file) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false };
        },
        return() {
          file.close();
          return { done: true };
        }
      };
    },
  };
}
/*
上面代码中，函数 readLinesSync 接受一个文件对象作为参数，返回一个遍历器对象，
其中除了 next 方法，还部署了 return 方法。

下面的三种情况，都会触发执行 return方法。
 */
// 情况一
for(let line of readLinesSync(fileName)){
    console.log(line);
    break;
}

// 情况二
for(let line of readLinesSync(fileName)){
    console.log(line);
    continue;
}

// 情况三
for(let line of readLinesSync(fileName)){
    console.log(line);
    throw new Error();
}
/*
上面代码中，
情况一输出文件的第一行以后，就会执行 return方法，关闭这个文件；
情况二输出所有行以后，执行 return方法，关闭该文件；
情况三会在执行 return方法关闭文件之后，再抛出错误。

注意，return方法必须返回一个对象，这是 Generator 规格决定的。

throw方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法。请参阅《Generator 函数》一章。
 */









