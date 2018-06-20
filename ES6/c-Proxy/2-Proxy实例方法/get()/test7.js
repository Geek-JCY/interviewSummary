/*
如果一个属性不可配置（configurable）和不可写（writable），
则该属性不能被代理，通过 Proxy 对象访问该属性会报错。
 */
const target = Object.defineProperties({}, {
    foo: {
        var: 123,
        writable: false,
        configurable: false
    }
});

const handler = {
    get(target, propKey) {
        return 'abc';
    }
};

const proxy = new Proxy(target, handler);

proxy.foo // TypeError: Invariant check failed
