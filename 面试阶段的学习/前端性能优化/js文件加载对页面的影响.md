## js的加载会阻塞其他资源的加载。
 有人会建议 要求 将script标签放到body底端，的确 这样不会影响dom树的构建，不会影响渲染树的生成，不会阻塞其他资源的下载，但是一定要这样么，script元素有async属性，可以使得script的加载为异步（向服务器端发起请求都是异步的），不会阻塞其他资源的下载，

## prefetch
Prefetch，虽然浏览器进行预加载，但是并不会执行下载后的内容，而是把这个留给真正该加载的时候 ，也就是 延时的js执行之后。