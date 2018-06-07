/*
函数表达式 经常的应用场景：
 */
// scene 1:
// 在构造函数中添加方法
function Person(name) {
    this.name = name;
    this.age = age;
    // 在构造函数内部中添加方法
    this.getAge = function() {
        return this.age;
    }
    this.
}

// scene 2:
// 给原型添加方法
Person.prototype.getName = function() {
    return this.name;
}

// scene 3:
// 在对象中添加方法
var a = {
    m: 20,
    getM: function() {
        return this.m;
    }
}
