/*
    6. 遍历 Map 结构

    任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。
    Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
 */

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map ) {
    console.log(key + " is " + value);
}

// 只获取键名
for (let [key] of map) {
    console.log("key is " + key);
}

// 只获取键值
for (let [, value] of map) {
    console.log("value is " + value);
}
