/*
    使用注意点:

    箭头函数有几个使用注意点。

    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

    （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

    （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

    （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 */

/*
    1. 箭头函数可以让 this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。
 */
// eg:
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);   // s1: 3
setTimeout(() => console.log('s2: ', timer.s2), 3100);  // s2: 0


/*
    this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
    实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
    正是因为它没有this，所以也就不能用作构造函数。
 */
// eg2:
var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};
/*
    上面代码的init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。
    否则，回调函数运行时，this.doSomething这一行会报错，因为此时this指向document对象。
 */