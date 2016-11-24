## web sql database 
HTML5 的 Web SQL Database 用本地和会话存储实现简单的对象持久化。对于 HTML5，也许最有用的就是它新推出的“Web Storage” API。对于简单的键值对（比如应用程序设置）或简单对象（如应用程序状态）进行存储，使用本地和会话存储能够很好地完成，但是对繁琐的关系数据进行处理的时候，它就力所不及了，而这正是 HTML5 的“Web SQL Database” API 借口的应用所在。  
H5并不同于传统的标记语言，加入了很多新特性，拥有让人期待的API接口。  
web sql databse API 使用本地和会话存储实现简单的对象持久化  
对于 HTML5，也许很有用的就是它新推出的“Web Storage”（Web 存储）API，它包括 localStorage 和 sessionStorage，对简单的键值对（比如应用程序设置）或简单对象（如应用程序状态）进行存储，使用本地和会话存储能够很好地完成，对于存储少量的数据非常有用，但是对大量的结构化数据进行处理时，它就力所不及了，而这正是 HTML5 的“Web SQL Database” API 接口的应用所在。
Web SQL Database API 实际上并不包含在 HTML5 规范之中。它是一个独立的规范，它引入了一套使用 SQL 操作客户端数据库的 API。最新版本的 Chrome，Safari 和 Opera 浏览器都支持 Web SQL Database。  
### sqlite
Web SQL Database 引入了一套使用 SQL 来操纵客户端数据库（client-side database）的 API，这些 API 是异步的（asynchronous），所以作者在使用这套 API 时会发现匿名函数非常有用。  
其中 SQLite 是一款轻型的数据库，是遵循 ACID 的关系型数据库管理系统。它的设计目标是嵌入式的，它占用资源非常低，只需要几百 K 字节的内存就可以了。它能够支持 Windows/Linux/Unix 等主流操作系统，同时能够跟很多程序语言相结合，如 C#，PHP，Java，JavaScript 等，还有 ODBC 接口，比起 Mysql，PostgreSQL 这两款开源的数据库管理系统来说，它的处理速度更快。  


### websql 中的核心方法
1. openDatabase：这个方法使用现有数据库或新建数据库来创建数据库对象
2. transaction：这个方法允许我们根据情况控制事务提交或回滚
3. executeSql：这个方法用于执行真实的 SQL 查询

### 声明周期
关闭浏览器窗口就关闭数据库

参看文档(https://www.ibm.com/developerworks/cn/web/1108_zhaifeng_websqldb/)[参看文档]
