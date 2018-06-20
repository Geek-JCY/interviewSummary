/*
子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。
 */
var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');
p2.__proto__ === p1.__proto__; // false
p2.__proto__.__proto__ === p1.__proto__; // true
/*
上面代码中，ColorPoint继承了Point，导致前者原型的原型是后者的原型。
 */

/*
因此，通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为。
 */
p2.__proto__.__proto__.printName = function(){
    console.log('Ha');
}

p1.printName(); // "Ha"
/*
上面代码在 ColorPoint的实例 p2上向 Point类添加方法，结果影响到了 Point的实例 p1。
 */



