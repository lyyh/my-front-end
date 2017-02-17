## 代理页面
获取博客园账号密码加密格式,发起'/getLoginData'请求获取账号密码，加密后发送请求到'/doVote'对文章进行推荐  
## 文章推荐
传递response。首先获取使用superagent发起代理请求，请求登录页面，获取凭证ververification_token,配置请求头，发送加密后的账号和密码，获取登录结果。开始对文章进行推荐。

使用async.series 串行执行(一个函数数组中的每个函数，每一个函数执行完成之后才能执行下一个函数)发送异步请求，获取每页的文章Url，包装推荐数据。 

使用async.mapLimit 控制并发数量 
```
async.mapLimit(总数，并发数,function(callback){
    调用callback(null,data)
},function(error,result){
    result有data数据组成的数组
})
```

使用eventproxy实现计数器的作用，它来帮你管理到底这些异步操作是否完成，完成之后，它会自动调用你提供的处理函数，并将抓取到的数据当参数传过来。
eventproxy.after 重复监听某个数据次数

eventproxy 提供了不少其他场景所需的 API，但最最常用的用法就是以上的这种，即：
先 var ep = new eventproxy(); 得到一个 eventproxy 实例。
告诉它你要监听哪些事件，并给它一个回调函数。ep.all('event1', 'event2', function (result1, result2) {})。
在适当的时候 ep.emit('event_name', eventData)。  
## 取消推荐
同理，取消推荐也是一样。