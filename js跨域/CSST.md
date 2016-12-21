## CSST
一种用css跨域传输文本的方案。相比JSONP更加安全，不需要执行跨站脚本。  
### 与JSONP的安全性比较
<script src='jsonp'> 注入攻击脚本，盗取cookies,伪造对话框，跳转钓鱼网站。  
<link href='cssz'> [注入攻击脚本]破坏界面

### 问题
没有JSONP适配广，CSST依赖支持CSS3的浏览器   
