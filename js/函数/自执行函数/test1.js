(function() {
    // 私有变量
    var age = 20;
    var name = 'Tom';

    // 私有方法
    function getName() {
        return `your name is ` + name;
    }
})();

// 访问不到 私有变量
console.log(age); // ReferenceError: age is not defined

// 访问不到 模块内的私有方法
getName(); // ReferenceError: getName is not defined

