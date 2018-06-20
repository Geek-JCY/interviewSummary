/*
与 ES5 一样，在“类”的内部可以使用 get和 set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
 */
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value){
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
/*
上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。
 */


