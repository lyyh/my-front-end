## window.name 
window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个 window.name 的，每个页面对 window.name 都有读写的权限，window.name 是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。
比如有一个www.qiutc.me/a.html页面，需要通过a.html页面里的js来获取另一个位于不同域上的页面www.qiutc.com/data.html里的数据。
data.html页面里的代码很简单，就是给当前的window.name设置一个a.html页面想要得到的数据值。data.html里的代码：  
```
<script>
window.name = '我是被期望得到的数据';
</script>
```


那么在 a.html 页面中，我们怎么把 data.html 页面载入进来呢？显然我们不能直接在 a.html 页面中通过改变 window.location 来载入data.html页面（这简直扯蛋）因为我们想要即使 a.html页面不跳转也能得到 data.html 里的数据。
答案就是在 a.html 页面中使用一个隐藏的 iframe 来充当一个中间人角色，由 iframe 去获取 data.html 的数据，然后 a.html 再去得到 iframe 获取到的数据。
充当中间人的 iframe 想要获取到data.html的通过window.name设置的数据，只需要把这个iframe的src设为www.qiutc.com/data.html就行了。然后a.html想要得到iframe所获取到的数据，也就是想要得到iframe的window.name的值，还必须把这个iframe的src设成跟a.html页面同一个域才行，不然根据前面讲的同源策略，a.html是不能访问到iframe里的window.name属性的。这就是整个跨域过程。  

```
// a.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script>
    function getData() {
        var iframe =document.getElementById('iframe');
        iframe.onload = function() {
            var data = iframe.contentWindow.name; // 得到
        }
        iframe.src = 'b.html';  // 这里b和a同源
    }
  </script>
</head>
<body>
  <iframe src="https://www.qiutc.com/data.html" style="display:none" onload="getData()"</iframe>
</body>
</html>
```

