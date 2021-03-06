/*
以数组为例，JavaScript 提供多种遍历语法。最原始的写法就是 for循环。
 */
for(var index = 0; index < myArray.length; index++){
    console.log( myArray[index] );
}

/*
这种写法比较麻烦，因此数组提供内置的 forEach方法。
 */
myArray.forEach(function(value){
    console.log(value);
});
/*
这种写法的问题在于，无法中途跳出 forEach 循环，break命令或 return命令都不能奏效。
 */

/*
for...in循环可以遍历数组的键名。
 */
for (var index in myArray) {
    console.log( myArray[index] );
}
/*
for...in循环有几个缺点。

    - 数组的键名是数字，但是 for...in 循环是以字符串作为键名“0”、“1”、“2”等等。
    - for...in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
    - 某些情况下，for...in 循环会以任意顺序遍历键名。

总之，for...in 循环主要是为遍历对象而设计的，不适用于遍历数组。
 */

/*
for...of 循环相比上面几种做法，有一些显著的优点。
 */
for(let value of myArray){
    console.log(value);
}
/*
    - 有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点。
    - 不同于 forEach 方法，它可以与 break、continue 和 return 配合使用。
    - 提供了遍历所有数据结构的统一操作接口
 */
/*
下面是一个使用 break 语句，跳出for...of循环的例子。
 */
for(var n of fibonacci){
    if(n > 1000){
        break;
        console.log(n);
    }
}
/*
上面的例子，会输出斐波纳契数列小于等于 1000 的项。如果当前项大于 1000，就会使用 break语句跳出 for...of循环。
 */







