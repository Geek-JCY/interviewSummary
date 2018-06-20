/*
    除了属性简写，方法也可以简写
 */
const o = {
    method() {
        return "Hello!";
    }
};

// 等同于
const o = {
    method: function() {
        return 'Hello!';
    }
};


// eg:
let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};





