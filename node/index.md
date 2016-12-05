### 服务器端javascript
浏览器提供了一个上下文环境(宿主环境)来解释执行javascript,nodeJs是另一种上下文，运行脱离浏览器在后端执行。Node.js的原理正是如此，它使用了Google的V8虚拟机（Google的Chrome浏览器使用的JavaScript执行环境），来解释和执行JavaScript代码。

### 路由
对于不同的URL请求，根据页面请求的URL，服务器需要给予不同的响应。我们需要一个路由，用于把请求对应到请求处理程序(request handler)  

