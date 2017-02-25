## 对象
### 对象使用和属性
JavaScript 中所有变量都可以当作对象使用，除了两个例外 null 和 undefined。  
对于数字字面量不能当做对象使用。这是因为 JavaScript 解析器的一个错误， 它试图将点操作符解析为浮点数字面值的一部分。    
```
2.toString(); // 出错：SyntaxError
```

有很多变通方法可以让数字的字面值看起来像对象。  
```
2..toString(); // 第二个点号可以正常解析
2 .toString(); // 注意点号前面的空格
(2).toString(); // 2先被计算
```

### 对象作为数据类型
javascript的对象相当于'无序键值对集合'，主要用来保存命名的键与值的对应关系。  
删除属性的唯一方法是使用 delete 操作符；设置属性为 undefined 或者 null 并不能真正的删除属性， 而仅仅是移除了属性和值的关联。  

### 原型
原型查找：
当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止。  
到查找到达原型链的顶部 - 也就是 Object.prototype - 但是仍然没有找到指定的属性，就会返回 undefined。  

当原型属性用来创建原型链时，可以把任何类型的值赋给它（prototype）。 然而将原子类型赋给 prototype 的操作将会被忽略。  
```
function Foo() {}
Foo.prototype = 1; // 无效
```

### hasOwnProperty函数
为了判断一个对象是否包含自定义属性而不是原型链上的属性， 我们需要使用继承自 Object.prototype 的 hasOwnProperty 方法。  

hasOwnProperty 是 JavaScript 中唯一一个处理属性但是不查找原型链的函数。    

当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。 同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法， 这将会避免原型对象扩展带来的干扰。  

### for in 
当使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问。  
通过 Object.prototype 原型上的 hasOwnProperty 函数来过滤非自身的属性  

### 函数
函数声明
```
function foo() {}
```
函数赋值表达式
```
var foo = function() {};
```
对于var定义的变量，对变量 foo 的解析是在代码运行之前，因此 foo 变量在代码运行时已经被定义过了。  
命名函数的赋值表达式
```
var foo = function bar() {
    bar(); // 正常运行
}
bar(); // 出错：ReferenceError
```
bar 函数声明外是不可见的，这是因为我们已经把函数赋值给了 foo； 然而在 bar 内部依然可见。这是由于 JavaScript 的 命名处理 所致， 函数名在函数内总是可见的。

### this的工作原理
当使用 Function.prototype 上的 call 或者 apply 方法时，函数内的 this 将会被 显式设置为函数调用的第一个参数。  

### 闭包和引用
闭包是 JavaScript 一个非常重要的特性，这意味着当前作用域总是能够访问外部作用域中的变量。 因为 函数 是 JavaScript 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数。  

为什么不可以在外部访问私有变量？  
因为 JavaScript 中不可以对作用域进行引用或赋值，因此没有办法在外部访问 count 变量。 唯一的途径就是通过那两个闭包。  

```
var foo = new Counter(4);
foo.hack = function() {
    count = 1337;
};
```
上面的代码不会改变定义在 Counter 作用域中的 count 变量的值，因为 foo.hack 没有 定义在那个作用域内。它将会创建或者覆盖全局变量 count。  

