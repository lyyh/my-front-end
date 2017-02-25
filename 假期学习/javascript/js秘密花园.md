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

### 循环中的闭包 
```
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);  
    }, 1000);
}
```
为了得到想要的结果，需要在每次循环中创建变量 i 的拷贝。  

```
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}
```
外部的匿名函数会立即执行，并把 i 作为它的参数，此时函数内 e 变量就拥有了 i 的一个拷贝。当传递给 setTimeout 的匿名函数执行时，它就拥有了对 e 的引用，而这个值是不会被循环改变的。  
有另一个方法完成同样的工作，那就是从匿名包装器中返回一个函数。这和上面的代码效果一样。  
```
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}
```

### arguments对象
JavaScript 中每个函数内都能访问一个特别变量 arguments。这个变量维护着所有传递到这个函数中的参数列表。  

转化数组:
```
Array.prototype.slice.call(arguments);
```
这个转化比较慢，在性能不好的代码中不推荐这种做法。  

自动更新：  
arguments 对象为其内部属性以及函数形式参数创建 getter 和 setter 方法。因此，改变形参的值会影响到 arguments 对象的值，反之亦然。  
```
function foo(a, b, c) {
    arguments[0] = 2;
    a; // 2                                                           

    b = 4;
    arguments[1]; // 4

    var d = c;
    d = 9;
    c; // 3
}
foo(1, 2, 3);
```

```
// 阐述在 ES5 的严格模式下 `arguments` 的特性
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```
getters和setters在严格模式下不会被创建  

### 构造函数
在构造函数内部 - 也就是被调用的函数内 - this 指向新创建的对象 Object。 这个新创建的对象的 prototype 被指向到构造函数的 prototype。  

显式的 return 表达式将会影响返回结果，但仅限于返回的是一个对象。  
```
function Foo(){return 1}
var a = new Foo():
a // {}
```


### 工厂模式
```
function Foo() {
    var obj = {};
    obj.value = 'blub';

    var private = 2;
    obj.someMethod = function(value) {
        this.value = value;
    }

    obj.getPrivate = function() {
        return private;
    }
    return obj;
}
```
缺点:
1.会占用更多的内存，因为新创建的对象不能共享原型上的方法。  
2.为了实现继承，工厂方法需要从另外一个对象拷贝所有属性，或者把一个对象作为新创建对象的原型。  
3.放弃原型链仅仅是因为防止遗漏 new 带来的问题，这似乎和语言本身的思想相违背。   

### 作用域与命名空间
如果 return 对象的左括号和 return 不在一行上就会出错。因为自动插入分号的原因    
```
// 译者注：下面输出 undefined
function add(a, b) {
    return 
        a + b;
}
console.log(add(1, 2));
```

每次引用一个变量，JavaScript 会向上遍历整个作用域直到找到这个变量为止。 如果到达全局作用域但是这个变量仍未找到，则会抛出 ReferenceError 异常。  

### 局部变量
JavaScript 中局部变量只可能通过两种方式声明，一个是作为函数参数，另一个是通过 var 关键字声明。  

### 变量声明提升(hoisting)
JavaScript 会提升变量声明。这意味着 var 表达式和 function声明都将会被提升到当前作用域的顶部。   
### 名称解析顺序
JavaScript 中的所有作用域，包括全局作用域，都有一个特别的名称 this 指向当前对象。函数作用域内也有默认的变量 arguments，其中包含了传递到函数中的参数。  

比如，当访问函数内的 foo 变量时，JavaScript 会按照下面顺序查找：  
1.当前作用域内是否有 var foo 的定义。  
2.函数形式参数是否有使用 foo 名称的。  
3.函数自身是否叫做 foo。  
4.回溯到上一级作用域，然后从 #1 重新开始。  

### 命名空间
只有一个全局作用域导致的常见错误是命名冲突。在 JavaScript中，这可以通过 匿名包装器 轻松解决。  

```
(function() {
    // 函数创建一个命名空间

    window.foo = function() {
        // 对外公开的函数，创建了闭包
    };

})(); // 立即执行此匿名函数
```

匿名函数被认为是 表达式；因此为了可调用性，它们首先会被执行。  

```
// 另外两种方式
+function(){}();
(function(){}());
```

### 数组遍历与属性
由于 for in 循环会枚举原型链上的所有属性，唯一过滤这些属性的方式是使用 hasOwnProperty 函数， 因此会比普通的 for 循环慢上好多倍。  

length属性:
length 属性的 getter 方式会简单的返回数组的长度，而 setter 方式会截断数组。  
```
var foo = [1, 2, 3, 4, 5, 6];
foo.length = 3;
foo; // [1, 2, 3]

foo.length = 6;
foo; // [1, 2, 3,undefined,undefined,undefined]
```

为了更好的性能，推荐使用普通的 for 循环并缓存数组的 length 属性。 使用 for in 遍历数组被认为是不好的代码习惯并倾向于产生错误和导致性能问题。  

### Array构造函数
```
[1, 2, 3]; // 结果: [1, 2, 3]
new Array(1, 2, 3); // 结果: [1, 2, 3]

[3]; // 结果: [3]
new Array(3); // 结果: [] 
new Array('3') // 结果: ['3']

// 译者注：因此下面的代码将会使人很迷惑
new Array(3, 4, 5); // 结果: [3, 4, 5] 
new Array(3) // 结果: []，此数组长度为 3
```

由于只有一个参数传递到构造函数中（译者注：指的是 new Array(3); 这种调用方式），并且这个参数是数字，构造函数会返回一个 length 属性被设置为此参数的空数组。 需要特别注意的是，此时只有 length 属性被设置，真正的数组并没有生成。  

```
var arr = new Array(3);
arr[1]; // undefined
1 in arr; // false, 数组还没有生成
```
这种优先于设置数组长度属性的做法只在少数几种情况下有用，比如需要循环字符串，可以避免 for 循环的麻烦。    

应该尽量避免使用数组构造函数创建新数组。推荐使用数组的字面语法。它们更加短小和简洁，因此增加了代码的可读性。  
 



