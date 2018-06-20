/*
加载图片
我们可以将图片的加载写成一个 Promise，一旦加载完成，Promise的状态就发生变化。
 */
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};