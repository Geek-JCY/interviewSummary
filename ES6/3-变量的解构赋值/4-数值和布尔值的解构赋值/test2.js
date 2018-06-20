/*
    由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
 */
let { prop: x } = undefined;    // TypeError
let { prop: y } = null; // TypeError