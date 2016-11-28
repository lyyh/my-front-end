## valueOf
### Object.prototype.valueOf
obj类型　　 Object.prototype.valueOf.call(obj)返回结果  
Undefined   抛出TypeError异常  
Null    抛出TypeError异常  
Number  Number类型的对象，值等于obj  
String  String类型的对象，值等于obj  
Boolean Boolean类型的对象，值等于obj  
Object  obj对象本身  


### Array Function Object
实际上，上面没有提到Array、Function对象，根据下面代码可以猜想，当Object.prototype.valueOf调用时，参数为Array、Function类型的对象时，返回的结果也为对象自身：   
### Number Boolean String 自带原型方法
原来Number有属于自身的原型valueOf方法，不是直接从Object.prototype上继承下来，类似的，Boolean、String也有自己的原型valueOf方法，归纳如下：    
类型　　　　  是否有属于自己的原型valueOf方法  
Undefined   无  
Null    无  
Number  有，Number.prototype.valueOf  
String  有，String.prototype.valueOf  
Boolean 有，Boolean.prototype.valueOf  
Object  -   


W3C上说明Number、Boolean、String类型是返回对象的原始值  

参考资料:http://www.cnblogs.com/chyingp/archive/2013/02/22/valueOf.html