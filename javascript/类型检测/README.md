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

## constructor
#### constructor属性返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身。
#### constructor不适合用来判断变量类型。首先因为它是一个属性，所以非常容易被伪造：
```
var a = new Animal
a.constructor === Array
a.constructor === Animal    // false
```
#### 另外constructor指向的是最初创建当前对象的函数，是原型链最上层的那个方法：
```
function Cat(){}
Cat.prototype = new Animal

function BadCat(){}
BadCat.prototype = new Cat

(new BadCat).constructor === Animal   // true
Animal.constructor === Function       // true
```
#### 与instanceof类似，constructor只能用于检测对象，对基本数据类型无能为力。而且因为constructor是对象属性，在基本数据类型上调用会抛出TypeError异常：
```
null.constructor         // TypeError!
undefined.constructor    // TypeError!

```  


#### 与instanceof不同的是，在访问基本数据类型的属性时，JavaScript会自动调用其构造函数来生成一个对象。例如：
```
(3).constructor === Number // true
true.constructor === Boolean // true
'abc'.constructor === String // true
// 相当于
(new Number(3)).constructor === Number
(new Boolean(true)).constructor === Boolean
(new String('abc')).constructor === String
```

## 跨窗口问题
我们知道Javascript是运行在宿主环境下的，而每个宿主环境会提供一套ECMA标准的内置对象，以及宿主对象（如window, document），一个新的窗口即是一个新的宿主环境。 不同窗口下的内置对象是不同的实例，拥有不同的内存地址。

而instanceof和constructor都是通过比较两个Function是否相等来进行类型判断的。 此时显然会出问题，例如：
```
var iframe = document.createElement('iframe');
var iWindow = iframe.contentWindow;
document.body.appendChild(iframe);
```
iWindow.Array === Array         // false
// 相当于
iWindow.Array === window.Array  // false
```
因此iWindow中的数组arr原型链上是没有window.Array的。请看：
```
iWindow.document.write('<script> var arr = [1, 2]</script>');
iWindow.arr instanceof Array            // false
iWindow.arr instanceof iWindow.Array    // true
```

## toString
toString方法是最为可靠的类型检测手段，它会将当前对象转换为字符串并输出。 toString属性定义在Object.prototype上，因而所有对象都拥有toString方法。 但Array, Date等对象会重写从Object.prototype继承来的toString， 所以最好用Object.prototype.toString来检测类型。
```
toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]
toString.call(3);           // [object Number]
toString.call([]);          // [object Array]
toString.call({});          // [object Object]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
```

#### toString也不是完美的，它无法检测用户自定义类型。 因为Object.prototype是不知道用户会创造什么类型的， 它只能检测ECMA标准中的那些内置类型。
```
toString.call(new Animal)   // [object Object]
```

因为返回值是字符串，也避免了跨窗口问题。当然IE弹窗中还是有Bug，不必管它了。 现在多少人还在用IE？多少人还在用弹窗？
和Object.prototype.toString类似地，Function.prototype.toString也有类似功能， 不过它的this只能是Function，其他类型（例如基本数据类型）都会抛出异常。

## 总结
1. typeof只能检测基本数据类型，对于null还有Bug；  
2. instanceof适用于检测对象，它是基于原型链运作的；  
3. constructor指向的是最初创建者，而且容易伪造，不适合做类型判断；  
4. toString适用于ECMA内置JavaScript类型（包括基本数据类型和内置对象）的类型判断；  
5. 基于引用判等的类型检查都有跨窗口问题，比如instanceof和constructor。  

总之，如果你要判断的是基本数据类型或JavaScript内置对象，使用toString； 如果要判断的时自定义类型，请使用instanceof。



