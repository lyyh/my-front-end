### bind
IE9+  
bind其实是做了三件事:  
1.改变方法的上下文  
2.为方法传入实参  
3.返回了一个改变上下文并且调用的时候传入指定实参的方法  

bind函数会创建一个新的函数(绑定函数)，绑定函数和被绑定的函数有相同的函数体。但目标函数被调用的时候，this的值被进行了绑定，this的指向不能被重写。bind也接收了预设的参数传递给了生成的绑定函数，也不能被重写，同时原函数未被绑定的其他参数可以在之后被绑定。    
同时一个绑定函数也可以使用new操作符来创建对象，这种行为就相当于把原函数当成了构造器，同时调用bind传入的参数被提供给了绑定函数(构造器)   
### 实现思路
1.bind方法不会立即执行函数，需要返回一个待执行函数return function  
2.作用域绑定，使用apply call  
3.参数传递，由于参数数量不确定，需要使用arguments传递数组  

### 绑定作用域、绑定传参
```
Function.prototype.testBind = function(that){
    var _this = this,
        /*
        *由于参数的不确定性，统一用arguments来处理，这里的arguments只是一个类数组对象，有length属性
        *可以用数组的slice方法转化成标准格式数组，除了作用域对象that以外，
        *后面的所有参数都需要作为数组参数传递
        *Array.prototype.slice.apply(arguments,[1])/Array.prototype.slice.call(arguments,1)
        */
        slice = Array.prototype.slice,
        args = slice.apply(arguments,[1]);
    //返回函数    
    return function(){
        //apply绑定作用域，进行参数传递
        return _this.apply(that,args)
    }    
}
```
以上实现方式不能再对绑定函数进行传参,即在绑定的函数的时候就确认了参数  

#### 动态参数  
```
return function(){
        return _this.apply(that,
            args.concat(Array.prototype.slice.apply(arguments,[0]))
        )
    }    
```
在原来的基础上进行改造,可以对绑定函数传入参数。可以体现出bind的高优先级。  
从 args.concat(Array.prototype.slice.apply(arguments,[0])) 也可以看出来，bind的参数在数组前面。  

#### 原型链  
对绑定过后的函数new实例化之后，需要继承原函数的原型链方法，且绑定过程中提供的this忽略，但是参数还是会继续使用。  
使用中转函数继承原型链。  



#### 参考资料
[javascript原生一步一步实现bind分析](https://segmentfault.com/a/1190000007342882)  




 
