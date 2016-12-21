## doucment.domain
原理：相同主域名不同子域名下的页面，可是设置document.domain让它们同域  
限制：同域document提供的是页面间的互操作，需要载入iframe页面  

```
// 当前页面域名 https://blog.qiutc.me/a.html
<script>
function onLoad() {
    var iframe =document.getElementById('iframe');
    var iframeWindow = iframe.contentWindow; // 这里可以获取 iframe 里面 window 对象，但是几乎没用
    var doc = iframeWindow.document; // 获取不到
}
</script>
<iframe src="https://www.qiutc.me/b.html" onload="onLoad()"</iframe>
```

这个时候，document.domain 就可以派上用场了，我们只要把 https://blog.qiutc.me/a.html 和 https://www.qiutc.me/b.html 这两个页面的 document.domain 都设成相同的域名就可以了。
前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致。
但要注意的是，document.domain 的设置是有限制的，我们只能把 document.domain 设置成自身或更高一级的父域，且主域必须相同。例如：a.b.example.com 中某个文档的 document.domain 可以设成a.b.example.com、b.example.com、example.com中的任意一个，但是不可以设成 c.a.b.example.com,因为这是当前域的子域，也不可以设成baidu.com,因为主域已经不相同了。
这样我们就可以通过js访问到iframe中的各种属性和对象了。  

```
// 主页面：https://blog.qiutc.me/a.html
<script>
document.domain = 'qiutc.me';
function onLoad() {
    var iframe =document.getElementById('iframe');
    var iframeWindow = iframe.contentWindow; // 这里可以获取 iframe 里面 window 对象并且能得到方法和属性
    var doc = iframeWindow.document; // 获取到
}
</script>
<iframe src="https://www.qiutc.me/b.html" onload="onLoad()"</iframe>
```

```
// iframe 里面的页面
<script>
document.domain = 'qiutc.me';
</script>
```