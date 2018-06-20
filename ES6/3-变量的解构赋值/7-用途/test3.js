/*
    3.函数参数的定义
 */
// 1.参数是一组有次序的值
function f1([x, y, z]) {
    console.log( [x, y, z] );
}
f1([1, 2, 3]);

// 2.参数是一组无次序的值
function f2( {x, y, z} ){
    console.log( {x, y, z} );
}
f2( {z:6, y:5, x:4} );