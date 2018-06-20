/*
   1. ES6 允许使用“箭头”（=>）定义函数。
 */
var f = v => v;
// 上面的箭头函数等同于：
var f = function(v) {
  return v;
};


/*
    2. 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
 */
var f = () => 5;
// 等同于
function f(){
    return 5;
}

var sum =(num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};


/*
    3. 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
 */
var sum = (num1, num2) => { return num1 + num2; }


/*
    4.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
 */
// 报错
var getTempItem = id => {id: id, name: name};
// 不报错
var getTempItem = id => ( {id: id, name: name} );


/*
    5. 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
 */
let fn = () => void doesNotReturn();


/*
    6.箭头函数可以与变量解构结合使用。
 */
const full = ({first, last}) => first + " " + last;
// 等同于
function full(person) {
    return person.first + " " + person.last;
}

/*
    7. rest 参数与箭头函数结合的例子。
 */
// eg1:
const numbers = (...nums) => nums;
numbers(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// eg2:
const headerAndTrail = (head, ...tail) => [head, tail]; 
headerAndTrail(1, 2, 3, 4, 5);  // [1, [2, 3, 4, 5]]




