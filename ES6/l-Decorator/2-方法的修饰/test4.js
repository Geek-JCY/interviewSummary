/*
修饰器有注释的作用。
 */
@testable
class Person {
  @readonly
  @nonenumerable
  name() { return `${this.first} ${this.last}` }
}
/*
从上面代码中，我们一眼就能看出，Person类是可测试的，而name方法是只读和不可枚举的。
 */

/*
下面是使用 Decorator 写法的组件，看上去一目了然。
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss'
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;
  @State() isVisible: boolean = true;

  render() {
    return (
      <p>Hello, my name is {this.first} {this.last}</p>
    );
  }
}



