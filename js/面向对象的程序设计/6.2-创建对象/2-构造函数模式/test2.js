function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = sayName; // sayName 是一个指针
}

function sayName(){
    console.log(this.name);
}

var person1 = new Person('张三', '22', '男');
var person2 = new Person('李四', '23', '女');

person1.sayName();
person2.sayName();

console.log(person1.sayName == person2.sayName); // true

/*
这样的写法 虽然，减少了创建实例的个数，解决了两个函数做同一件事情的问题，

但是，1.这是在全局作用域中定义的函数，实际上只能被某个对象调用，这让全局作用域有点名不副实；
      2.如果这个对象要定义很多个方法，那么定义的全局函数会很多，这就没有封装的意义啦；

为解决这样的问题，我们可以利用 “原型模式”
 */

