## js函数调用的四种模式
方法调用、正常函数调用、构造器函数调用、apply/call 调用同时，无论哪种函数调用除了你声明时定义的形参外，还会自动添加 2 个形参，分别是 this 和 arguments。  

### 方法调用
```
var a = {    
    v : 0,    
    f : function(xx) {                
        this.v = xx;    
    }
}
a.f(5);
```
this绑定的就是这个a对象，所以this.v可以取到a.v

### 正常函数调用
```
function f(xx) {        
    this.x = xx;
}
f(5);
```

this绑定的是全局对象,，如果是在浏览器运行的解释器中，一般来说是 window 对象。所以这里 this.x 访问的其实是 window.x ，当然，如果 window 没有 x 属性，那么你这么一写，按照 js 的坑爹语法，就是给 window 对象添加了一个 x 属性，同时赋值。  

### 构造器调用
```
function a(xx) {        
    this.m = xx;
}
var b = new a(5);
```
this绑定的是创建的新对象b

### apply/call调用
每个函数都有一个公共的 prototype —— Function，而这个原型自带有好几个属性和方法，其中就有这里困惑的 bind、call、apply 方法。 
#### apply   
先说 apply 方法，它让我们构造一个参数数组传递给函数，同时可以自己来设置 this 的值，这就是它最强大的地方，apply可以帮你传递一个参数数组的同时，也可以手动帮你绑定this的值，apply() 函数会在调用函数时自动帮你把数组展开。
```
function a(xx) {        
    this.b = xx;
}
var o = {};
a.apply(o, [5]);
alert(a.b);    // undefined
alert(o.b);    // 5
```
函数 a 居然可以给 o 加属性值。当然，如果你 apply 的第一个参数传递 null，那么在函数 a 里面 this 指针依然会绑定全局对象。

### call
与apply类似，不过区别就是它的第一个参数也是绑定给 this 的值，但是后面接受的是不定参数，而不再是一个数组，也就是说你可以像平时给函数传参那样把这些参数一个一个传递

### bind
无论是 call() 也好， apply() 也好，都是立马就调用了对应的函数，而 bind() 不会， bind() 会生成一个新的函数，bind() 函数的参数跟 call() 一致，第一个参数也是绑定 this 的值，后面接受传递给函数的不定参数。   


#### 总结
apply,call第一个参数都是绑定this的值，apply后面的是参数数组，call可以是一个一个的不定参数。并且apply,call会立即调用函数，而bind只用于绑定this，只能返回一个新的函数，不能立即调用。