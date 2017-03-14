### Object模式
```
var o1 = {};//字面量的表现形式
var o2 = new Object;
var o3 = new Object();
var o4 = new Object(null);
var o5 = new Object(undefined);
var o6 = Object.create(Object.prototype);//等价于 var o = {};//即以 Object.prototype 对象为一个原型模板,新建一个以这个原型模板为原型的对象
//区别
var o7 = Object.create(null);//创建一个原型为 null 的对象
```
无法同时创建多个实例

### 工厂模式
使用一个工厂函数来创建对象，通过传参来设置属性。可以创建多个对象版本，属性完全一样。可以将函数放到工厂函数之外，使生成的每个函数都共享同一个方法。在工厂模式内部中创建对象。    

### 构造器模式
使用构造函数，没有在函数中内创建对象，使用this关键字，new运算符构造函数，使用new运算符来生成对象，this关键字来访问这个对象。为了达到函数重用，使用this关键字指向这个函数。  

### Function对象实现创建对象
每声明一个函数实际是创建了一个function实例。  

### 原型模式
类通过 prototype 属性添加的属性与方法都是绑定在这个类的 prototype 域(实际为一个 Prototype 对象)中，绑定到这个域中的属性和方法只有一个版本，只会创建一次。  
类的实例对象可以直接像调用自己的属性一样调用该类的 prototype 域中的属性与方法，类可以通过调用 prototype 属性来间接调用prototype 域内的属性与方法.   

### 构造器方式与原型方式
常用的创建对象的方法，所有函数只会创建一次，而每个对象都有自己的对象属性实例。  

