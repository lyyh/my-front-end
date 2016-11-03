## 查看原型对象
es6推出之后，使用Object.getPrototypeOf()获取对象的原型
```
function A(){
    this.name='lala';
}
var a=new A();
console.log(a.__proto__)  
//输出：Object {}

//推荐使用这种方式获取对象的原型
console.log(Object.getPrototypeOf(a))  
//输出：Object {}
```

无论对象是如何创建的，默认原型都是Object，在这里需要提及的比较特殊的一点就是，通过构造函数来创建对象，函数A本身也是一个对象，而A有两个指向表示原型的属性，分别是proto和prototype，而且两个属性并不相同

```
function A(){
    this.name='lala';
}
var a=new A();
console.log(A.prototype)  
//输出：Object {}

console.log(A.__proto__)  
//输出：function () {}
console.log(Object.getPrototypeOf(A))
//输出：function () {}
```

函数的的prototype属性只有在当作构造函数创建的时候，把自身的prototype属性值赋给对象的原型。而实际上，作为函数本身，它的原型应该是function对象，然后function对象的原型才是Object。

prototype是构造函数的属性,__proto__是对象的属性
### Function
Function.prototype == function(){}  
Function.__proto__ == function(){}  

### Object
Object.prototype == Object {}
Object.__proto__ == function(){}

### Array 
Array.prototype == []
Array.__proto__ == function(){}

### Date
Date.prototype == Object {}
Date.__proto__ == function(){}
