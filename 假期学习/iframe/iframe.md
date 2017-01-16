## 缺点
1.*iframe会阻塞主页面的Onload事件；   
2.*搜索引擎的检索程序无法解读这种页面，不利于SEO;  
3.*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载（iframe和主页面会并行加载）。  
4.使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript  
动态给iframe添加src属性值，这样可以绕开以上两个问题。


## iframe四种加载方式
### 普通加载iframe方式  
```
<iframe src="" frameborder="0" width="728" height="90" scrolling="auto"></iframe>
```
frame会在主页面的onload之前加载  
iframe会在所有iframe的内容都加载完毕之后触发iframe的onload  
主页面的onload会在iframes的onload触发之后触发，所以iframe会阻塞主页面的加载  
当iframe在加载的过程中，浏览器的会标识正在加载东西，处于忙碌状态。  
iframe会阻塞主页面的onload事件  
### 在onload之后加载iframe
```
<script>
 function createIframe() {
         var i = document.createElement("iframe");
         i.src = "path/to/file";
         i.scrolling = "auto";
         i.frameborder = "0";
         i.width = "200px";
         i.height = "100px";
         document.getElementById("div-that-holds-the-iframe").appendChild(i);
     };

     if (window.addEventListener) window.addEventListener("load", createIframe, false);
     else if (window.attachEvent) window.attachEvent("onload", createIframe);
     else window.onload = createIframe;
 </script>
```
动态改变iframe的src  
iframe会在主页面onload之后开始加载  
主页面的onload事件触发与iframe无关，所以iframe不会阻塞加载  
当iframe加载的时候，浏览器会标识正在加载  
这种方式比普通加载方式的好处有两点：  
（1）其他页面等待主页面onload事件的代码可以尽早执行 （2）Google Toolbar计算页面加载的时间会大大减少  
这种方式比普通加载方式的不好之处有两点：  
（1）iframe还在加载的时候，浏览器还是处于忙碌状态，相对于普通加载方法，用户看到忙碌状态的时间更长 （2）用户还没等到页面完全加载完就离开了。比如广告  

### setTimeOut()加载iframe
```
<iframe id="iframe1" src="" width="200" height="100" border="2"></iframe>
 
<script>

function setIframeSrc() {
    var s = "path/to/file";
    var iframe1 = document.getElementById('iframe1');
    if ( - 1 == navigator.userAgent.indexOf("MSIE")) {
        //iframe1.src = s;
    } else {
       // iframe1.location = s;
    }
}
setTimeout(setIframeSrc, 5);
</script>
```
此种方法在除了ie8之外的在其他浏览器的表现：  
（1）iframe会在主页面onload之前开始加载  
（2）iframe的onload事件会在iframe的内容都加载完之后触发  
（3）iframe不会阻塞主页面的onlaod事件（IE8除外），为什么不会阻塞，因为是使用setTimeout（）  
（4）当iframe加载的时候，浏览器会显示忙碌状态  

### 异步加载iframe
```
<script>
(function(d) {
    var iframe = d.body.appendChild(d.createElement('iframe')),
    doc = iframe.contentWindow.document;
 
    // style the iframe with some CSS
    iframe.style.cssText = "position:absolute;width:200px;height:100px;left:0px;";
 
    doc.open().write('<body onload="' + 'var d = document;d.getElementsByTagName(\'head\')[0].' + 'appendChild(d.createElement(\'script\')).src' + '=\'\/path\/to\/file\'">');
 
    doc.close(); //iframe onload event happens
})(document);
</script>
```

这种方式的好处：  
（1）iframe会在主页面onload之前开始加载  
（2）iframe的onload会立即触发，因为iframe的内容一开始为空  
（3）主页面的onload不会被阻塞    
（4）为什么这个iframe不会阻塞主页面的onload，因为使用了body onload  
（5）如果不在iframe使用onlaod监听，那么iframe的加载就会阻塞主页面的onload  
（6）当iframe加载的时候，浏览器终于不显示忙碌状态了

## 友好型iframe加载
这是用来加载广告的。虽然这不是一种iframe的加载技术，但是是用iframe来盛放广告的。他的亮点不在于iframe如何加载，而是主页面、iframe、广告如何协同工作的。如下：
先创建一个iframe。设置他的src为一个相同域名下的静态html文件
在这个iframe里面，设置js变量inDapIF=true来告诉广告它已经加载在这个iframe里面了
在这个iframe里面，创建一个script元素加上广告的url作为src，然后像普通广告代码一样加载
当广告加载完成，重置iframe大小来适应广告
这种方法也没有浏览器的兼容性问题。  

## 防止页面被其他页面嵌套
```
if(window.parent!=window) window.parent.location="http://hqlong.com";//or if(window.top!=window) window.top.location="http://hqlong.com";
```

## iframe加载状态
在Firefox/Opera/Safari中，可以直接使用iframe onload事件；而在IE中，可以通过定时器测定子页面的document.readyState，或者使用iframe onreadystatechange事件计算该事件的响应。
