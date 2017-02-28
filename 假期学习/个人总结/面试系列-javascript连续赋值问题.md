## 题目
```
var foo = {n: 1};
var bar = foo; //回查
foo.x = foo = {n: 2};
console.log(foo.x);  // undefined
console.log(bar); //  Object {n: 1, x: {n:2}}
```

### 为什么会出现这种情况呢？
按照从右往左赋值顺序foo.x应该是{n:2}才对，但是事实却不是这样。   
我们可以看到bar.x为{n:2}，也就是说foo.x曾经赋值过。  

因为对于 类似 A=B 的表达式，首先计算A表达式，得到 lref，然后计算计算表达式 B， 
得到 B 的值 rval，将 rval 赋给 lref 指向的变量，返回 rval。JS的赋值表达式是右结合的，所以 foo.x = foo = {n:2} 等价于 foo.x = ( foo = { n : 2} )  。

所以执行顺序是这样的:
1.计算出括号内的值，然后赋给 foo.x。  
2.得到 foo.x = { n : 2 }，同时 bar.x = { n : 2 } ，左边第一个等号的计算结束。  
3.然后计算括号内的表达式，即 foo = { n : 2 }。  
foo 被赋予新的对象，不再是原来对象的引用，指向了 { n : 2 }，所以foo.x 
得到的是 undefined， 但是 bar 依旧指向原来的对象，所以bar值没有改变。  

```
var foo = {n: 1};
var bar = foo;
var foo1 = {n: 2};
foo.x = foo1;
foo = foo1;
console.log(foo.x,bar);
```

### 我们再来看看什么是右结合性
```
exp1 = exp2 = exp3 = ... = expN;
```
其中的exp是一个表达式，并且除最后一个expN外，其他表达式都必须可以作为左值。  

你能告诉我它是怎样运算吗？  

是这样的，首先根据赋值运算的右结合性，可以改写成：  
```
exp1 = (exp2 = (exp3 = (... = expN)...);
```

然后按照下面步骤进行运算：  
1.解析exp1；  
2.解析exp2；  
3.解析exp3；...    
4.N. 解析expN；   

以上步骤完成后，上面表达式变成了：  
```
ref1 = (ref2 = (ref3 = (... = value)...);
```

其中value是表达式expN的值。接下来的步骤是：  

1.将value赋给引用refN-1；  
2.将value赋给引用refN-2；...  
3.N-1.将value赋给引用ref1；  

结束。

现在你应该可以理解为什么

a.x = a = {n: 2};
是怎么回事了。关键在这里：

a.x是对a这个对象下的x这个名称的引用。
a可以看成envRec.a，是对envRec这个对象下的a这个名称的引用。
envRec是什么呢？是当前执行上下文中的环境记录项，可以认为保存局部变量的那个内部对象。