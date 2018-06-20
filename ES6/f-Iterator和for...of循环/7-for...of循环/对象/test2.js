/*
对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。

一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
 */
for(var key of Object.keys(someObject)){
    console.log(key + ": " + someObject[key]);
}

/*
另一个方法是使用 Generator 函数将对象重新包装一下。
 */
function* entries(obj){
    for(let key of Object.keys(obj)){
        yield [key, obj[key]];
    }
}

for( let [key, value] of entries(obj) ){
    console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3




