## 微信小程序
### 微信小程序的理解
微信小程序其实是需要下载的。bs架构之所以在云上，是因为界面都是浏览器请求过来的。但是微信这个其实是打包编译的，打包编译，把包上传给微信服务器。然后微信 当用户点了加载小程序之后，由微信下载这个包。小程序是bs版的

### 声明周期
App Launch-->App Show-->onLoad-->onShow-->onReady
以上过程在该页面显示过程中只出现一次
### 路由
wx.navigateTo(OBJECT)：保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。  
wx.redirectTo(OBJECT)：关闭当前页面，跳转到应用内的某个页面。  
wx.navigateBack()：关闭当前页面，回退前一页面。  

### 其他
任何外部插件和框架基本上都很难使用,因为微信应用号的架构不专注于操作数据而不在于操作dom

### 创建页面组件

#### 每个页面组件也分为四个文件组成：

page-name.js  

页面逻辑文件，用于处理页面生命周期控制和数据处理  
未完待续...  
page-name.json  

设置当前页面工作时的一些配置  
此处可以覆盖app.json中的window设置  
也就是说只可以设置window中设置的熟悉  
未完待续...  
page-name.wxml  

wxml指的是Wei Xin Markup Language  
用于定义页面中元素结构的  
语法遵循XML语法，注意是XML语法，不是HTML语法，不是HTML语法，不是HTML语法  
未完待续...  
page-name.wxss  

wxml指的是Wei Xin Style Sheet  
用于定义页面样式的  
语法遵循CSS语法，扩展了CSS基本用法和长度单位（主要就是rpx响应式像素）  
未完待续...  
