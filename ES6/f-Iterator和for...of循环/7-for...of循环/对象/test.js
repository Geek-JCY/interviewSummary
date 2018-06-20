/*
对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。
但是，这样情况下，for...in循环依然可以用来遍历键名。
 */
let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for(let e in es6){
    console.log(e);
}
// edition
// committee
// standard

for (let e of es6) {
  console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function
/*
上面代码表示，对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。
 */







