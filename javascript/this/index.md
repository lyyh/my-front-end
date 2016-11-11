## this
this 是javascript的一个关键字  
它代表函数运行时，自动生成一个内部对象，只能在函数内部时候。  
this指的是调用那个函数的对象  


### 情况
#### 纯粹的函数调用
this指向的是window对象。这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。  
#### 作为对象的方法调用
函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
```
　　function test(){
　　　　alert(this.x);
　　}
　　var o = {};
　　o.x = 1;
　　o.m = test;
　　o.m(); // 1
```
### 作为构造函数调用的时候
所谓构造函数，就是通过一个函数生成另一个对象(Object)。这时this就指向的是这个对象。
```
　　function test(){
　　　　this.x = 1;
　　}
　　var o = new test();
　　alert(o.x); // 1
```
### 使用apply或者call调用的时候
apply、call是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。
apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。



