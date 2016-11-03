## 一切皆对象
JavaScript的世界中的对象，追根溯源来自于一个 null  
在JavaScript中，null也是作为一个对象存在，基于它继承的子子孙孙，当属对象。  
乍一看，null像是上帝,而Object和Function犹如JavaScript世界中的亚当与夏娃。 

### 原型指针__proto__
每个对象都有一个指向原型对象的内部链接(__proto__),通过__proto__可以访问到他所继承的原型对象。


