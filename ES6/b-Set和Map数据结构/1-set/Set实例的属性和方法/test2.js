/*
下面是一个对比，看看在判断是否包括一个键上面，Object 结构和 Set 结构的写法不同。
 */
// 对象写法
const properties = {
  'width': 1,
  'height': 1
};
if (properties[someName]) {
  // do something
} 

// Set的写法
const properties = new Set();
properties.add('width');
properties.add('height');
if(properties.has(someName)){
    // do something
}