## IE
对于IE浏览器有UserData,大小是64KB,只有IE支持  
## H5的web存储
目标：  
1. 解决4k的大小问题(cookie)  
2. 解决请求头常带存储信息的问题  
3. 解决关系型存储的问题   

### 本地存储loaclStorage
以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。  
大小：每个域名是5M  
常用的API：  
1.getItem //取记录  
2.setIten//设置记录  
3.removeItem//移除记录  
4.key//取key所对应的值  
5.clear//清除记录  
#### 存储的内容：
数组，图片，json，样式，脚本。。。（只要是能序列化成字符串的内容都可以存储）

### 本地存储sessionstorage
HTML5 的本地存储 API 中的 localStorage 与 sessionStorage 在使用方法上是相同的，区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存。  

### 离线存储(application cache)
本地缓存应用所需的文件  
Application Cache的三个优势：
1. 离线浏览  
2. 提升页面载入速度  
3. 降低服务器压力  

### Web SQL
1.关系数据库，通过SQL语句访问Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。  
### IndexedDB
索引数据库 (IndexedDB) API（作为 HTML5 的一部分）对创建具有丰富本地存储数据的数据密集型的离线 HTML5 Web 应用程序很有用。同时它还有助于本地缓存数据，使传统在线 Web 应用程序（比如移动 Web 应用程序）能够更快地运行和响应。   
#### 数据存储：
indexedDB中没有表的概念，而是objectStore，一个数据库中可以包含多个objectStore，objectStore是一个灵活的数据结构，可以存放多种类型数据。也就是说一个objectStore相当于一张表，里面存储的每条数据和一个键相关联。  

参考地址：
http://www.admin10000.com/document/9261.html





