## 各类方法的弊端
1.工厂方法。为同样的类型创建多个不同的实例。

### 构造函数法
用构造函数模拟'类',在内部使用this关键字指代实例对象。  
类的属性和方法，还可以定义在构造函数的prototype的对象之上。  

### Object.create()
这种方法比"构造函数法"简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面。  

### 极简主义法
首先，它也是用一个对象模拟"类"。在这个类里面，定义一个构造函数createNew()，用来生成实例。
```
　var Cat = {
　　　　createNew: function(){
　　　　　　// some code here
　　　　}
　　};
```

在createNew()里面，定义一个实例对象，把这个实例对象作为返回值。
```
　var Cat = {
　　　　createNew: function(){
　　　　　　var cat = {};
　　　　　　cat.name = "大毛";
　　　　　　cat.makeSound = function(){ alert("喵喵喵"); };
　　　　　　return cat;
　　　　}
　　};
```

这种方法的好处是，容易理解，结构清晰优雅，符合传统的"面向对象编程"的构造，因此可以方便地部署下面的特性。
```
　var cat1 = Cat.createNew();
　　cat1.makeSound(); // 喵喵喵
```