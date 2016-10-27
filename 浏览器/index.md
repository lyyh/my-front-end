## 浏览器兼容性问题
## js兼容性问题
### addEventListener attachEvent
attachEvent方法: IE 10及之前版本 绑定事件名称含 on，IE11后取消该方法
addEventListener 方法 绑定事件名称不含on 

addEventListener 支持冒泡和捕获事件机制
attachEvent 只支持冒泡机制

都支持onfocus onclick 等开头的事件
如
document.getElementById("btn").onclick


事件处理函数中，我们通常使用this来获取当前被操作的对象。这无疑是很方便的一个特性， 但对于不同的事件绑定方式，this可能不一定是当前被操作的对象。 本文便来分析不同的方式绑定事件处理函数时，函数中this的区别。常见的事件绑定方式不外乎4种：

attachEvent：IE10以下（不包括IE10）的MSIE中。
addEventListener：支持DOM Level 2 Event的浏览器中。
el.onclick=function(){}：这是古老的事件绑定方式。
<a onclick='handle()'>：这是最古老的事件绑定方式。
jQuery：jQuery也提供了很多方法来方便地绑定事件。

this不同。我们知道this总之指向当前函数的调用者，对于事件处理函数这一点较为复杂，这是本文的重点所在。

1. attachEvent的this总是Window  
2. 在javascript中设置DOM对象的onclick属性，this总是指向被设置的DOM元素。  
3. 在HTML中设置onclick属性相当于让Window来调用该处理函数，于是this总是Window  


### 事件处理函数的区别
举例: document.getElementById("btn").onclick = method1; 
document.getElementById("btn").onclick = method2; 
document.getElementById("btn").onclick = method3;如果这样写,那么将会只有medhot3被执行 

btn1Obj.addEventListener("click",method1,false); 
btn1Obj.addEventListener("click",method2,false); 
btn1Obj.addEventListener("click",method3,false);执行顺序为method1->method2->method3 

 
#### querySelectorAll document.getElement 兼容性
querySelectorAll 已被 IE 8+、FF 3.5+、Safari 3.1+、Chrome 和 Opera 10+ 良好支持 。
getElementsBy 系列，以最迟添加到规范中的 getElementsByClassName 为例，IE 9+、FF 3 +、Safari 3.1+、Chrome 和 Opera 9+ 都已经支持该方法了。  

1. querySelectorAll 得到的是静态的NodeList  
2. document.getElementsBy 得到的是动态的NodeList，每次调用都会对文档进行重新查询  
3. 所以在现代浏览器中，querySelectorAll 的返回值是一个静态的 NodeList 对象，而 getElementsBy 系列的返回值实际上是一个 HTMLCollection 对象 。  
4. 不存在“动态对象”这样的概念。实际上 getElementsBy 返回的是一套“规则”，这套“规则”每次被访问都会重新返回 HTMLCollection 对象。而 getElementById 返回的是 Element 对象，直接指向对象的内存地址，不会再有多余的 DOM 查询。  
5. getElementsBy*和querySelectorAll返回的都是一个节点集合，类似于数组，两种方法的区别就在于这个集合会不会自动更新。  
