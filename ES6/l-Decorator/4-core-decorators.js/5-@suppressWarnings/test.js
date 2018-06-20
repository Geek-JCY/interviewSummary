/*
（5）@suppressWarnings

suppressWarnings修饰器抑制 deprecated修饰器导致的 console.warn()调用。但是，异步代码发出的调用除外。
 */
import { suppressWarnings } from 'core-decorators';

class Person {
  @deprecated
  facepalm() {}

  @suppressWarnings
  facepalmWithoutWarning() {
    this.facepalm();
  }
}

let person = new Person();

person.facepalmWithoutWarning();
// no warning is logged


