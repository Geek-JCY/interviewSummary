/*
    与解构赋值默认值结合使用
 */
function foo( {x, y = 5}) {
    console.log(x, y);
}

foo({}) // undefined
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
