/*
对象（Object）之所以没有默认部署 Iterator 接口，
是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。
不过，严格地说，对象部署遍历器接口并不是很必要，
因为这时对象实际上被当作 Map 结构使用，ES5 没有 Map 结构，而 ES6 原生提供了。
 */
/*
一个对象如果要具备可被 for...of循环调用的 Iterator 接口，
就必须在 Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）
 */
class RangeIterator {
    constructor(start, stop){
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() { return this; }

    next() {
        var value = this.value;
        if(value < this.stop){
            this.value++;
            return {done: false, value: value};
        }
        return {done: true, value: undefined};
    }
}

function range(start, stop){
    return new RangeIterator(start, stop);
}

for(var value of range(0, 3)){
    console.log(value); // 0 1 2
}

/*
上面代码是一个类部署 Iterator 接口的写法。Symbol.iterator属性对应一个函数，执行后返回当前对象的遍历器对象。
 */


