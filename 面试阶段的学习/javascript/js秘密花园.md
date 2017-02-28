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
 
### 等于操作符
等于操作符由两个等号组成：==  
JavaScript 是弱类型语言，这就意味着，等于操作符会为了比较两个值而进行强制类型转换。  
```
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true
```

此外，强制类型转换也会带来性能消耗，比如一个字符串为了和一个数字进行比较，必须事先被强制转换为数字。  

### 严格等于操作符
不像普通的等于操作符，严格等于操作符不会进行强制类型转换。  
```
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false
```

### 比较对象
虽然 == 和 === 操作符都是等于操作符，但是当其中有一个操作数为对象时，行为就不同了。  
```
{} === {};                   // false
new String('foo') === 'foo'; // false
new Number(10) === 10;       // false
var foo = {};
foo === foo;                 // true
```
这里等于操作符比较的不是值是否相等，而是是否属于同一个身份；也就是说，只有对象的同一个实例才被认为是相等的。  

强烈推荐使用严格等于操作符。如果类型需要转换，应该在比较之前显式的转换， 而不是使用语言本身复杂的强制转换规则。  

### typeof操作符
JavaScript类型表格
```
Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object
```
Class 一列表示对象的内部属性 [[Class]] 的值。为了获取对象的 [[Class]]，我们需要使用定义在 Object.prototype 上的方法 toString。    
```
Object.prototype.toString.call(new Array(1,2,3)) //[object Array]
```

JavaScript 标准文档只给出了一种获取 [[Class]] 值的方法，那就是使用 Object.prototype.toString。  
```
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}

is('String', 'test'); // true
is('String', new String('test')); // true

Object.prototype.toString.call(undefined).slice(8, -1); //'Undefined'
Object.prototype.toString.call(Null).slice(8, -1); //'Null'
```


Object.prototype.toString 返回一种标准格式字符串，所以上例可以通过 slice 截取指定位置的字符串，如下所示：  
```
Object.prototype.toString.call([])    // "[object Array]"
Object.prototype.toString.call({})    // "[object Object]"
Object.prototype.toString.call(2)    // "[object Number]"
```

### 测试为定义变量
```
typeof foo !== 'undefined'
```
上面代码会检测 foo 是否已经定义；如果没有定义而直接使用会导致 ReferenceError 的异常。 这是 typeof 唯一有用的地方,typeof有一种安全机制  

为了检测一个对象的类型，强烈推荐使用 Object.prototype.toString 方法； 因为这是唯一一个可依赖的方式。正如上面表格所示，typeof 的一些返回值在标准文档中并未定义， 因此不同的引擎实现可能不同。

除非为了检测一个变量是否已经定义，我们应尽量避免使用 typeof 操作符。

### instanceOf
比较自定义对象
```
function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// 如果仅仅设置 Bar.prototype 为函数 Foo 本身，而不是 Foo 构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; // false
```
instanceof 比较内置类型
```
new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false
```

instanceof 用来比较属于不同JavaScript上下文的对象（比如，浏览器中不同的文档结构）时将会出错， 因为它们的构造函数不会是同一个对象。  

有一点需要注意，instanceof 用来比较属于不同 JavaScript 上下文的对象（比如，浏览器中不同的文档结构，不用的iframe）时将会出错， 因为它们的构造函数不会是同一个对象。instanceof 操作符应该仅仅用来比较来自同一个 JavaScript 上下文的自定义对象。  

### 类型转换
JavaScript 是弱类型语言，所以会在任何可能的情况下应用强制类型转换。
```
// 下面的比较结果是：true
new Number(10) == 10; // Number.valueOf() 返回的字符串被再次转换为数字

10 == '10';           // 字符串被转换为数字
10 == '+10 ';         // 同上
10 == '010';          // 同上 
isNaN(null) == false; // null 被转换为数字 0
                      // 0 当然不是一个 NaN（译者注：否定之否定）

// 下面的比较结果是：false
10 == 010;
10 == '-10';
ES5 提示: 以 0 开头的数字字面值会被作为八进制数字解析。 而在 ECMAScript 5 严格模式下，这个特性被移除了。
```

转换成字符串，将一个值加上空字符串可以轻松转换为字符串类型。
```
'' + 10 === '10'; // true
```
转换成数字，使用一元的加号操作符，可以把字符串转换为数字。
```
+'10' === 10; // true
```

字符串转数字的常用方法
```
+'010' === 10
Number('010') === 10
parseInt('010', 10) === 10  // 用来转换为整数

+'010.2' === 10.2
Number('010.2') === 10.2
parseInt('010.2', 10) === 10
```

转换成布尔型，通过使用 否 操作符两次，可以把一个值转换为布尔型。  
```!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true
```

### 为什么不要使用eval
eval 函数会在当前作用域中执行一段 JavaScript 代码字符串。
```
var foo = 1;
function test() {
    var foo = 2;
    eval('foo = 3');
    return foo;
}
test(); // 3
foo; // 1
```

但是 eval 只在被直接调用并且调用函数就是 eval 本身时，才在当前作用域中执行。
```
var foo = 1;
function test() {
    var foo = 2;
    var bar = eval;
    bar('foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```
上面的代码等价于在全局作用域中调用 eval，和下面两种写法效果一样：  
```
// 写法一：直接调用全局作用域下的 foo 变量
var foo = 1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3

// 写法二：使用 call 函数修改 eval 执行的上下文为全局作用域
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```

安全问题:eval 也存在安全问题，因为它会执行任意传给它的代码， 在代码字符串未知或者是来自一个不信任的源时，绝对不要使用 eval 函数。   

### undefined
undefined 是一个值为 undefined 的类型。这个语言也定义了一个全局变量，它的值是 undefined，这个变量也被称为undefined。但是这个变量不是一个常量，也不是一个关键字。这意味着它的值可以轻易被覆盖。  

由于全局变量 undefined 只是保存了 undefined 类型实际值的副本， 因此对它赋新值不会改变类型 undefined 的值。然而，为了方便其它变量和 undefined 做比较，我们需要事先获取类型 undefined 的值。  

下面的情况会返回 undefined 值：  

1.访问未修改的全局变量 undefined。  
2.由于没有定义 return 表达式的函数隐式返回。  
3.return 表达式没有显式的返回任何内容。  
4.访问不存在的属性。  
5.函数参数没有被显式的传递值。  
6.任何被设置为 undefined 值的变量。  


为了避免可能对 undefined 值的改变，一个常用的技巧是使用一个传递到匿名包装器的额外参数。 在调用时，这个参数不会获取任何值    
```
var undefined = 123;
(function(something, foo, undefined) {
    // 局部作用域里的 undefined 变量重新获得了 `undefined` 值

})('Hello World', 42);
```
另外一种达到相同目的方法是在函数内使用变量声明。
```
var undefined = 123;
(function(something, foo) {
    var undefined;
    ...

})('Hello World', 42);
```
这里唯一的区别是，在压缩后并且函数内没有其它需要使用 var 声明变量的情况下，这个版本的代码会多出 4 个字节的代码。  

### 自动分号插入
JavaScript 不是一个没有分号的语言，恰恰相反上它需要分号来就解析源代码。 因此 JavaScript 解析器在遇到由于缺少分号导致的解析错误时，会自动在源代码中插入分号。  

自动插入分号的一个副作用就是js引擎不能正确处理return表达式紧跟换行符的情况。  

### setTimeout和setInterval
setTimeout:  
基于 JavaScript引擎的计时策略，以及本质上的单线程运行方式，所以其它代码的运行可能会阻塞此线程。 因此没法确保函数会在 setTimeout 指定的时刻被调用。  

setInterval的堆调用:
当回调函数的执行被阻塞时，setInterval 仍然会发布更多的回调指令。在很小的定时间隔情况下，这会导致回调函数被堆积起来。  
```
function foo(){
    // 阻塞执行 1 秒
}
setInterval(foo, 100);
```
在 foo 被阻塞的时候，setInterval 仍然在组织将来对回调函数的调用。 因此，当第一次 foo 函数调用结束时，已经有 10 次函数调用在等待执行。  

处理可能的阻塞调用:
最简单也是最容易控制的方案，是在回调函数内部使用 setTimeout 函数。  
```
function foo(){
    // 阻塞执行 1 秒
    setTimeout(foo, 100);
}
foo();
```
这样不仅封装了 setTimeout 回调函数，而且阻止了调用指令的堆积，可以有更多的控制。 foo 函数现在可以控制是否继续执行还是终止执行。  

### 隐藏使用eval
setTimeout 和 setInterval 也接受第一个参数为字符串的情况。 这个特性绝对不要使用，因为它在内部使用了 eval。  

```
function foo() {
    // 将会被调用
}

function bar() {
    function foo() {
        // 不会被调用
    }
    setTimeout('foo()', 1000);
}
bar();
```
由于 eval 在这种情况下不是被直接调用，因此传递到 setTimeout 的字符串会自全局作用域中执行； 因此，上面的回调函数使用的不是定义在 bar 作用域中的局部变量 foo。    

绝对不要使用字符串作为 setTimeout 或者 setInterval 的第一个参数， 这么写的代码明显质量很差。当需要向回调函数传递参数时，可以创建一个匿名函数，在函数内执行真实的回调函数。另外，应该避免使用 setInterval，因为它的定时执行不会被 JavaScript 阻塞。 

### 参考资料
[javascript秘密花园](https://bonsaiden.github.io/JavaScript-Garden/zh/#other.timeouts)