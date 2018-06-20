/*
core-decorators.js是一个第三方模块，提供了几个常见的修饰器，通过它可以更好地理解修饰器。

（1）. @autobind
autobind 修饰器使得方法中的 this对象，绑定原始对象。
 */
import { autobind } from 'core-decorators';

class Person {
    @autobind
    getPerson(){
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person; // true


