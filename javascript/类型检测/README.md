# js类型检测
如果你要判断的是基本数据类型或JavaScript内置对象，使用toString； 如果要判断的时自定义类型，请使用instanceof。

## typeof
typeof返回的是类型字符串，返回值有6种。 
``` 
typeof 3 // "number"
typeof "abc" // "string"
typeof {} // "object"
typeof true // "boolean"
typeof undefined // "undefined"
typeof function(){} // "function"
```


typeof 还有一个bug,null是基本数据类型，它的类型显然是Null。其实这也反映了null的语义， 它是一个空指针表示对象为空，而undefined才表示什么都没有。 总之，typeof只能用于基本数据类型检测，对于null还有Bug。

## instanceOf
instanceof操作符用于检查某个对象的原型链是否包含某个构造函数的prototype属性。例如：
```
obj instanceof Widget
```
obj的原型链上有很多对象（成为隐式原型），比如：obj.__proto__, obj.__proto__.__proto__, …
如果这些对象里存在一个p === Widget.prototype，那么instanceof结果为true，否则为false。  
#### instanceof是通过原型链来检查类型的，所以适用于任何”object”的类型检查。
```
// 比如直接原型关系
function Animal(){ }
(new Animal) instanceof Animal     // true

// 原型链上的间接原型
function Cat(){}
Cat.prototype = new Animal
(new Cat) instanceof Animal         // true
```

#### instanceof也可以用来检测内置兑现，比如Array, RegExp, Object, Function：
```
[1, 2, 3] instanceof Array // true
/abc/ instanceof RegExp // true
({}) instanceof Object // true
(function(){}) instanceof Function // true
```
#### instanceof对基本数据类型不起作用，因为基本数据类型没有原型链。
```
3 instanceof Number // false
true instanceof Boolean // false
'abc' instanceof String // false
null instanceof XXX  // always false
undefined instanceof XXX  // always false
```

