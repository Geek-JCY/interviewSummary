/*
    __proto__ 本质是一个内部属性，不是正式对外API，只是被浏览器广泛支持，才加入 ES6。

    标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。

    因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的
        Object.setPrototypeOf()（写操作）、
        Object.getPrototypeOf()（读操作）、
        Object.create()（生成操作）
    代替。
 */
