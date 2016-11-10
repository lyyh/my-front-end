## http-equiv
http-equiv 属性 -- HTTP协议的响应头报文  
1.此属性出现在meta标签中  
2.此属性用于代替name，HTTP服务器通过此属性收集HTTP协议的响应头报文  
3.此属性的HTTP协议的响应头报文的值应使用content属性描述  

###例子
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

告诉浏览器等设备，文件为html文件，且使用了utf8编码
 
<meta http-equiv="content-language" content="zh-CN" />
告诉浏览器等设备，语言使用了中文


### 常用的http-equiv类型
charset -- charset 定义编码信息  
refresh -- refresh 刷新与跳转网页  
no-cache -- HTML meta no-cache 定义页面缓存  
expires -- HTML meta expires 定义网页缓存过期时间  