## iframe跨域通信
1. 片段识别符（fragment identifier）  
2. window.name  
3. 跨文档通信API（Cross-document messaging)window.postMessage  
4. document.domain  

## iframe的限制
1.可以访问同域资源, 可读写;  
2.访问跨域页面时, 只读。不能获取DOM节点  

### winown.name
window 对象的name属性是一个很特别的属性，当该window的location变化，然后重新加载，它的name属性可以依然保持不变。那么我们可以在页面 A中用iframe加载其他域的页面B，而页面B中用JavaScript把需要传递的数据赋值给window.name，iframe加载完成之后（iframe.onload），页面A修改iframe的地址，将其变成同域的一个地址，然后就可以读出iframe的window.name的值了（因为A中的window.name和iframe中的window.name互相独立的，所以不能直接在A中获取window.name，而要通过iframe获取其window.name）。这个方式非常适合单向的数据请求，而且协议简单、安全。不会像JSONP那样不做限制地执行外部脚本。   
如果要实现双向通行，需要时刻监听window.name的变化，增加性能消耗  

### document.domain  
通过修改document的domain属性，我们可以在域和子域或者不同的子域之间通信(即它们必须在同一个一级域名下)。同域策略认为域和子域隶属于不同的域，比如a.com和 script.a.com是不同的域，这时，我们无法在a.com下的页面中调用script.a.com中定义的JavaScript方法。但是当我们把它们document的domain属性都修改为a.com，浏览器就会认为它们处于同一个域下，那么我们就可以互相获取对方数据或者操作对方DOM了。  

### location.hash
因为父窗口可以对iframe进行URL读写，iframe也可以读写父窗口的URL，URL有一部分被称为hash，就是#号及其后面的字符，它一般用于浏览器锚点定位，Server端并不关心这部分，应该说HTTP请求过程中不会携带hash，所以这部分的修改不会产生HTTP请求，但是会产生浏览器历史记录。此方法的原理就是改变URL的hash部分来进行双向通信。每个window通过改变其他 window的location来发送消息（由于两个页面不在同一个域下IE、Chrome不允许修改parent.location.hash的值，所以要借助于父窗口域名下的一个代理iframe），并通过监听自己的URL的变化来接收消息。这个方式的通信会造成一些不必要的浏览器历史记录，而且有些浏览器不支持onhashchange事件，需要轮询来获知URL的改变，最后，这样做也存在缺点，诸如数据直接暴露在了url中，数据容量和类型都有限等。

### postMessage
ES5新增的 postMessage() 方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递.

### websocket
在WebSocket出现之前, 很多网站为了实现实时推送技术, 通常采用的方案是轮询(Polling)和Comet技术, Comet又可细分为两种实现方式, 一种是长轮询机制, 一种称为流技术, 这两种方式实际上是对轮询技术的改进, 这些方案带来很明显的缺点, 需要由浏览器对服务器发出HTTP request, 大量消耗服务器带宽和资源. 面对这种状况, HTML5定义了WebSocket协议, 能更好的节省服务器资源和带宽并实现真正意义上的实时推送.
WebSocket 本质上是一个基于TCP的协议, 它的目标是在一个单独的持久链接上提供全双工(full-duplex), 双向通信, 以基于事件的方式, 赋予浏览器实时通信能力. 既然是双向通信, 就意味着服务器端和客户端可以同时发送并响应请求, 而不再像HTTP的请求和响应. (同源策略对 web sockets 不适用)
原理: 为了建立一个WebSocket连接，客户端浏览器首先要向服务器发起一个HTTP请求, 这个请求和通常的HTTP请求不同, 包含了一些附加头信息, 其中附加头信息”Upgrade: WebSocket”表明这是一个申请协议升级的HTTP请求, 服务器端解析这些附加的头信息然后产生应答信息返回给客户端, 客户端和服务器端的WebSocket连接就建立起来了, 双方就可以通过这个连接通道自由的传递信息, 并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接.