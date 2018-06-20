/*
    (5). 实现了 Iterator 接口的对象
    任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。
 */
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

// 对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];
// 上面代码中，arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口，扩展运算符就会报错。
// 这时，可以改为使用Array.from方法将arrayLike转为真正的数组。