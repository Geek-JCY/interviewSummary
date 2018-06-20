/*
下面是异步加载图片的例子。
 */
function loadImageAsync(url) {
    return new Promise(function(resolve, reject){
        const image = new Image();

        image.onload = function(){
            resolve(image)
        }

        image.onerror = function(){
            reject(new Error('Could not load image at' + url));
        }

        image.src = url;
    });
}
/*
上面代码中，使用 Promise包装了一个图片加载的异步操作。
如果加载成功，就调用 resolve方法，否则就调用 reject方法。
 */