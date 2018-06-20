/*
    与 ES5 一样，类的所有实例共享一个原型对象。
 */
var pA = new Point(2,3);
var pB = new Point(3,2);

pA.__proto__ === pB.__proto__
//true
/*
上面代码中，p1和 p2都是 Point的实例，它们的原型都是 Point.prototype，所以__proto__属性是相等的。
 */

/*
这也意味着，可以通过实例的__proto__属性为“类”添加方法。

__proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，
虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。
生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。
 */
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function(){ return 'Oops' };

p1.printName(); // 'Oops'
p2.printName(); // 'Oops'

var p3 = new Point(4,2);
p3.printName(); // 'Oops'

/*
上面代码在 p1的原型上添加了一个 printName方法，由于 p1的原型就是 p2的原型，因此 p2也可以调用这个方法。
而且，此后新建的实例 p3也可以调用这个方法。
这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
 */



