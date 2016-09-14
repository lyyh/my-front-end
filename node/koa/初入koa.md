## Context
koa的Context将node的request和response封装进一个单独的对象，每个请求都会创建自己的context实例，通过this引用
```
this.request 引用的是请求的request
this.response 引用的是响应的response
```