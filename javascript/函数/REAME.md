## js 函数
函数在javascript中：
1. 被赋给一个变量
2. 被赋值成对象的属性
3. 作为参数被传入别的函数
4. 作为函数的结果返回
5. 用对象字面量来创建


### javascript Function有两种类型：
1.函数声明
```
// 函数声明
function funDeclaration(type){
    return type==="Declaration";
}
```
2.函数表达式
```
// 函数表达式
var funExpression = function(type){
    return type==="Expression";
}
```

### 函数提升
用函数声明创建的函数funDeclaration可以在funDeclaration定义之前就进行调用；而用函数表达式创建的funExpression函数不能在funExpression被赋值之前进行调用。
为什么会这样呢？！这就要理解Javascript Function两种类型的区别：用函数声明创建的函数可以在函数解析后调用（解析时进行等逻辑处理）；而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用。


#### 总结
Javascript 中函数声明和函数表达式是存在区别的，函数声明在JS解析(JS解析的时候进行逻辑处理)时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式进行了变量提升，但是函数并没有提升。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。这个微小的区别，可能会导致JS代码出现意想不到的bug,让你陷入莫名的陷阱中。