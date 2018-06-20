/*
前面说过，Object.getOwnPropertyDescriptor方法会返回某个对象属性的描述对象（descriptor）。
ES2017 引入了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象
 */
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj);
console.log( Object.getOwnPropertyDescriptors(obj) );

// { 
//  foo:
//    { 
//      value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true 
//      },
//   bar:
//    { 
//      get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true 
//      } 
// }

// 上面代码中，Object.getOwnPropertyDescriptors方法返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性的描述对象。