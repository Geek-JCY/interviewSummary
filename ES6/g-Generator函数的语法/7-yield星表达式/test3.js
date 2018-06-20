/*
再来看一个对比的例子。
 */
function* inner() {
    yield console.log('hello!');
}

function* outer1() {
    yield console.log('open');
    yield inner();
    yield console.log('close');
}

var gen1 = outer1()
gen1.next().value; // 'open'
gen1.next().value; // 返回一个遍历器对象
gen1.next().value; // 'close'

function* outer2(){
    yield console.log('open');
    yield* inner();
    yield console.log('close');
}

var gen2 = outer2()
gen2.next().value // "open"
gen2.next().value // "hello!"
gen2.next().value // "close

/*
上面例子中，outer2使用了 yield*，outer1没使用。结果就是，outer1返回一个遍历器对象，outer2返回该遍历器对象的内部值。
 */



