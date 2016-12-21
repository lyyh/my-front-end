## window_postMessage
原理：HTML5允许窗口之间发送消息
限制：浏览器需要支持HTML5，获取窗口句柄后才能相互通信
这是一个安全的跨域通信方法，postMessage(message,targetOrigin)也是HTML5引入的特性。 可以给任何一个window发送消息，不论是否同源。第二个参数可以是*但如果你设置了一个URL但不相符，那么该事件不会被分发。看一个普通的使用方式吧：

window.postMessage(message, targetOrigin) 方法是html5新引进的特性，可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源    
调用postMessage方法的window对象是指要接收消息的那一个window对象，该方法的第一个参数message为要发送的消息，类型只能为字符串；第二个参数targetOrigin用来限定接收消息的那个window对象所在的域，如果不想限定域，可以使用通配符 * 。
需要接收消息的window对象，可是通过监听自身的message事件来获取传过来的消息，消息内容储存在该事件对象的data属性中。  
上面所说的向其他window对象发送消息，其实就是指一个页面有几个框架的那种情况，因为每一个框架都有一个window对象。在讨论第种方法的时候，我们说过，不同域的框架间是可以获取到对方的window对象的，虽然没什么用，但是有一个方法是可用的－window.postMessage。下面看一个简单的示例，有两个页面：  
```
// 主页面  blog.qiutc.com
<script>
function onLoad() {
    var iframe =document.getElementById('iframe');
    var iframeWindow = iframe.contentWindow;
    iframeWindow.postMessage("I'm message from main page.");
}
</script>
<iframe src="https://www.qiutc.me/b.html" onload="onLoad()"</iframe>
```
   
```
// b 页面
<script>
window.onmessage = function(e) {
    e = e || event;
    console.log(e.data);
}
</script>
```

