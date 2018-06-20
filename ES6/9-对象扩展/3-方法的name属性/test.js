/*
    函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
 */
const person = {
    sayName(){
        console.log('hello!!!');
    }
};
console.log(person.sayName.name);