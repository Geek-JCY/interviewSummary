(function() {
    // 私有变量
    var age = 20;
    var name = 'Tom';


    // 共有方法
    function getAge(){
    	return age;
    }

    // 将引用保存在外部执行环境的变量中，形成闭包，防止该执行环境被垃圾回收
    global.getAge = getAge;
})();



// 调用共有方法
console.log(global.getAge()); // 20



