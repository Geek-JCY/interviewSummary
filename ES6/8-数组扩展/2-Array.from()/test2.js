/*
    实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，
    以及函数内部的arguments对象。
    Array.from都可以将它们转为真正的数组。
 */
// eg:
// NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
  console.log(p);
});

// arguments对象
function foo() {
  var args = Array.from(arguments);
  // ...
}