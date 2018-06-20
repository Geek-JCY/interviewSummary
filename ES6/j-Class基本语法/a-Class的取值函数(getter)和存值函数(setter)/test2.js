/*
存值函数和取值函数是设置在属性的 Descriptor 对象上的。
 */
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);

"get" in descriptor // true
"set" in descriptor // true
/*
上面代码中，存值函数和取值函数是定义在 html属性的描述对象上面，这与 ES5 完全一致。
 */


