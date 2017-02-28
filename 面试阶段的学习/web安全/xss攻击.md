## xss攻击
XSS (Cross-Site Script) 攻击又叫跨站脚本攻击, 本质是一种注入攻击. 其原理, 简单的说就是利用各种手段把恶意代码添加到网页中, 并让受害者执行这段脚本. XSS能做用户使用浏览器能做的一切事情. 伟大的同源策略也无法保证不受XSS攻击，因为此时攻击者就在同源之内.  
### 攻击方式
反射性、存储性、文档型  
1.client(客户端型)  
2.server(服务端型)  
当一端xss代码是在服务端被插入的, 那么这就是服务端型xss, 同理, 如果代码在客户端插入, 就是客户端型xss.  


1)反射型XSS: 就如上面的例子，也就是黑客需要诱使用户点击链接。也叫作"非持久型XSS“(Non-persistent XSS)  
2)存储型XSS:把用户输入的数据”存储“在服务器端。这种XSS具有很强的稳定性。  
比较常见的一个场景是，黑客写下一篇包含恶意Javascript代码的博客文章，文章发表后，所有访问该博客文章的用户，都会在他们的浏览器中执行这段恶意的Javascript代码。黑客把恶意的脚本保存在服务器端，所以中XSS攻击就叫做"存储型XSS"。  
3)DOM based   XSS:也是一种反射型XSS，由于历史原因被单独列出来了。通过修改页面的DOM节点形成的XSS，称之为DOM Based   
### 攻击方法
img src='#' onerror = ''  
iframe data url及object data url  
input autofocus onfocus  
DOM based XSS  使用注释符//注释掉引号 <!-- -->  
伪造请求提交  
钓鱼 伪造登录框  
css history hack 用户访问过的链接  
XSS Worm  使用css 的background url请求外部资源  
base标签 资源访问根路径  
获取hash值 使用eval执行  
### 防止XSS攻击
#### 转义
使用JSON.parse 而不是eval, request 的content-type要指定是Content-Type: application/json;  
如果链接的URL中部分是动态生成的, 一定要做转义.    
