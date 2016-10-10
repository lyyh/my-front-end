## 原型链
在 javaScript 中，每个对象都有一个指向它的原型（prototype）对象的内部链接_proto_。这个原型对象又有自己的原型，直到某个对象的原型为 null 为止（也就是不再有原型指向），组成这条链的最后一环。这种一级一级的链结构就称为原型链（prototype chain）。


### 继承属性
JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依此层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

### 对象
#### 普通对象
1. 最普通的对象: 有_proto_属性，没有prototype属性
2. 原型对象(函数对象的_proto_指向它的原型对象)

#### 函数对象
凡是通过new Function() 创建的都是函数对象

### 原型对象
每创建一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象（通过该构造函数创建实例对象的原型对象）。原型对象是包括特定类型的所有实例共享的属性和方法。  
其实原型对象就是构造函数的一个实例对象。person.prototype就是person的一个实例对象。相当于在person创建的时候，自动创建了一个它的实例，并且把这个实例赋值给了prototype。  

#### 原型对象、构造函数、实例对象之间的关系  
对象实例中的_proto_内部指针指向它的原型对象，原型对象的contructor指针指向构造函数

#### 原型对象的好处  
原型对象的好处就是可以让所有实例对象共享它所包含的属性和方法  
让所有实例对象共享它的属性和方法

#### prototype属性与__proto__属性
prototype属性与_proto_属性指向的是同一块地址
```
function Dog = (){}
var dog1 = new Dog();

//图中的一些关系  
dog1.__proto__ === Dog.prototype  
  
Dog.prototype.__proto__ === Object.prototype //继承Object 下面原型链说  
  
dog1.__proto__.__proto__ === Object.prototype  
  
Dog.prototype.constructor === Dog   
  
Dog.prototype.isPrototypeOf(dog1)  
  
//获取对象的原型  
dog1.__proto__  //不推荐  
Object.getPrototypeOf(dog1) === Dog.prototype   //推荐  
```

### 原型链
原型链是实现继承的主要方式：
1. 接口继承 只继承方法签名
2. 实现继承 继承实际的方法
由于函数没有签名，js主要依靠原型链来实现

原型链基本思路：  
利用原型让一个引用类型继承另一个引用类型的属性和方法。  

每个构造函数都有一个原型对象，原型对象包含一个指向构造函数的指针(constructor),而实例对象包含一个指向原型对象的内部指针(__proto__),若让原型对象等于另一个类型的实例，原型对象就包含一个指向另一个原型对象的指针(__proto__),且另一个原型也包含着另一个构造函数的指针(constructor),加入另一个原型又是另一个类型的实例，这就构成了实例与原型的链条

