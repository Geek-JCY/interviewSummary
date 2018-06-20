/*
yield*后面的 Generator 函数（没有 return语句时），等同于在 Generator 函数内部，部署一个 for...of循环。
 */
function* concat(iter1, iter2){
    yield* iter1;
    yield* iter2;
}

// 等同于
function* concat(iter1, iter2){
    for(let value of iter1){
        yield value;
    }
    for(let value of iter2){
        yield value;
    }
}

/*
上面代码说明，yield*后面的 Generator 函数（没有 return语句时），
不过是 for...of的一种简写形式，完全可以用后者替代前者。
反之，在有 return语句时，则需要用 var value = yield* iterator 的形式获取 return语句的值。
 */

