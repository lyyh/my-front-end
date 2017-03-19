### valueOf 
1.可返回Boolean、Number、String类型对象的原始值。  
2.对于Date类型对象，返回date 的毫秒表示。返回值和方法 Date.getTime 返回的值相等。  
3.对于自定义Object对象，Array、Function对象，返回自身  

### 为什么会这样呢？
Boolean、Number、String有自己的原型valueOf方法。  


### 参考资料
[valueOf方法](http://www.cnblogs.com/chyingp/archive/2013/02/22/valueOf.html)  
