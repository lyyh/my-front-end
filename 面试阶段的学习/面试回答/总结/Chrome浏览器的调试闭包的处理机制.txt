### 补充：Chrome浏览器的调试闭包的处理机制
* Closure是指闭包中引用的外部的相关变量组成的变量对象
* 闭包所处的外层作用域不包括全局作用域(即在嵌套函数内部访问全局变量的函数不是闭包)
* 闭包是在函数在生成新的执行上下文的创建阶段确定的
* 假设一条作用域链为A->B->C->D
    * 当D引用A中变量对象的值形成闭包，在函数B或C【A-C之间的作用域】调用的时候，在【Scope】上会显示C引用的Closure(A)
    * 当D引用A中变量对象的值和B中变量对象的值形成闭包
        * 在函数B调用的时候，在【Scope】上会显示D引用的Closure(A)
        * 在函数C调用的时候，在【Scope】上会显示D引用的Closure(A)和Closure(B)
    * 在闭包被调用的时候，在【Scope】上会显示闭包所引用的所有Closure
```
// 调试代码
function aa() {
    var a = 100;

    return function bb() {
        var b = 1000;
        // console.log(a); 
        
      return function cc() {
          var c = 10000;
          
          return function dd() {
               console.log(a, b);
          }
      };
    };
}

var bb = aa();
var cc = bb();
var dd = cc();
dd();
```