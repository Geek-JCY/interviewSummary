function Person(name, age, sex){
    this.name = name;
    this.age = 66;
    this.sex = sex;
    this.sayName = function(){
     console.log(this.name);
    }
}

Person(11,22,33); // 函数在执行时 确定this 的指向
console.log(global.age);

console.log(Person.name);  // Person --> 这是这个构造函数名字
console.log(Person.age);   // undefined
console.log(Person.sex);   // undefined
console.log(Person.prototype); // Person {} --> 原型对象


var person1 = new Person(9,8,7);
console.log(person1.name);  // 9
console.log(person1.age);   // 66
console.log(person1.sex);   // 7   
/*
上述表明，
// 1.Person() 当做构造函数使用时：
Person函数 里边声明的 this.name/this.age/this.sex/..., 并不是给 Person对象 定义属性；

而是 为了给 Person对象 的实例 定义属性；

// 2.Person() 当做普通函数 使用时：
Person() 中的 this指向 Person()函数执行时所在的作用域 所归属的对象（如上 global/浏览器中是window）； 
 */