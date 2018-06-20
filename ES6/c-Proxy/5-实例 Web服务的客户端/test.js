/*
Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。
 */
const service = createWebService('http://example.com/data');

service.employees().then(json => {
    const employees = JSON.parse(json);
    // ...
});
/*
上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。
Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。
 */
function createWebService(baseUrl) {
    return new Proxy({}, {
        get(target, propKey, receiver) {
            return () => httpGet(baseUrl+'/' + propKey);
        }
    });
}
/*
同理，Proxy 也可以用来实现数据库的 ORM 层。
 */