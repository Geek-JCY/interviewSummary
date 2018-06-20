/*
一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。
如果此后还调用 next方法，将返回一个 value属性等于 undefined、done属性等于 true的对象，
即 JavaScript 引擎认为这个 Generator 已经运行结束了。
 */
function* g() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
}

function log(generator){
    var v;
    console.log('starting generator');
    try {
        v = generator.next();
        console.log('第一次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第二次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
    v = generator.next();
        console.log('第三次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    console.log('caller done');
}

log(g());

// starting generator

// 第一次运行next方法 { value: 1, done: false }

// throwing an exception
// 捕捉错误 { value: 1, done: false }

// 第三次运行 next方法 { value: undefined, done: true }

// caller done

