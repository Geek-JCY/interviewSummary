/*
对象的 Symbol.isConcatSpreadable 属性等于一个布尔值，表示该 对象 用于 Array.prototype.concat() 时，是否可以展开。
 */
// eg:
let arr1 = ['c', 'd'];
console.log(  ['a', 'b'].concat(arr1, 'e')  );  // [ 'a', 'b', 'c', 'd', 'e' ]
console.log( arr1[Symbol.isConcatSpreadable] );     // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log( ['a', 'b'].concat(arr2, 'e') );   // [ 'a', 'b', [ 'c', 'd' ], 'e' ]
/*
上面代码说明，数组的默认行为是可以展开，
Symbol.isConcatSpreadable默认等于undefined。该属性等于true时，也有展开的效果
 */

/*
类似数组的对象正好相反，默认不展开。
它的Symbol.isConcatSpreadable属性设为true，才可以展开。
 */
let obj = {length:2, 0:'c', 1:'d'};
console.log( ['a', 'b'].concat(obj, 'e') ); // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;  // 设置 Symbol.isConcatSpreadable
console.log( ['a', 'b'].concat(obj, 'e') ); // [ 'a', 'b', 'c', 'd', 'e' ]

