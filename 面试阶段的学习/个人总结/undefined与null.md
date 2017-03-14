### undefined与null
null是对象字面量、关键字，用来表示无法识别的对象值。  
undefined表示了不存在的值。都是完全不可变的，没有属性和方法，也不能给其属性赋值。  

两者都表示空值。但是在javascript中undefined是一个值为undefined的类型。也就是我们常说的
```
typeof undefined //undefined
```
undefined是一个类型，同时它也是一个全局变量。这个全局变量的值为undefined，不是一个常量也不是一个关键字，所以它的值可以被轻易覆盖。  

下列情况会返回undefined：  
1.访问未修改的全局变量 undefined。  
2.由于没有定义 return 表达式的函数隐式返回。  
3.return 表达式没有显式的返回任何内容。  
4.访问不存在的属性。   
5.函数参数没有被显式的传递值。  
6.任何被设置为 undefined 值的变量。  

处理undefined值的改变    
由于全局变量 undefined 只是保存了 undefined 类型实际值的副本， 因此对它赋新值不会改变类型 undefined 的值。  


### 理解Undefined与Null
没有值代表的布尔值是false，这意味着他们在条件上下文中会被被计算为false，如if语句。使用相等操作符( == )比较这两个值和其他false值,他们并不等于除了自己:  
```
null == 0; // false
undefined == ""; // false
null == false; // false
undefined == false; // false
null == undefined; // true
```

null通常座位一个空引用或者空对象的预期，就想一个占位符。   
null通常

### 参考
[javascript密码花园](https://bonsaiden.github.io/JavaScript-Garden/zh/#core.undefined)  
[理解Undefined与Null](http://yanhaijing.com/javascript/2014/01/05/exploring-the-abyss-of-null-and-undefined-in-javascript/)  