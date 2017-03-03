## Promise
承诺型解释:  
所谓Promise，字面上可以理解为“承诺”，就是说A调用B，B返回一个“承诺”给A，然后A就可以在写计划的时候这么写：当B返回结果给我的时候，A执行方案S1，反之如果B因为什么原因没有给到A想要的结果，那么A执行应急方案S2，这样一来，所有的潜在风险都在A的可控范围之内了。  
容器型解释:  
Promise是一个容器，保存着未来才会结束的事件。它提供统一的API，为异步操作的结果提供统一的处理机制。  

### 作用
有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数  

### 状态转化
Promise构造函数接收一个函数作为参数，该函数的两个参数分别是resolve、rejected。resolve函数的将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved）。reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected）。将异步操作的结果作为参数传递出去。  
使用then方法分别指定resolve与rejected状态的回调函数。  

### Promise.prototype.then
它的作用是为Promise实例添加状态改变时的回调函数。  
前面说过，then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。  

### Promise.prototype.catch
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。   

如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。  

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。  

一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。  

跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。   

### Promise.all
Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。  
```
var p = Promise.all([p1, p2, p3]);
```
上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是Promise对象的实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。）  

p的状态由p1、p2、p3决定，分成两种情况。  
（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。  
（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数  

### Promise.race
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。  
```
var p = Promise.race([p1, p2, p3]);
```

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。  

如果指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve。

### Promise.resolve
有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。  



### Promise/A+规范
1.一个promise可能有三种状态：等待（pending）、已完成（fulfilled）、已拒绝（rejected）  
2.一个promise的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换    
3.promise必须实现then方法（可以说，then就是promise的核心），而且then必须返回一个promise，同一个promise的then可以调用多次，并且回调的执行顺序跟它们被定义时的顺序一致  

### 缺点
1.首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。  
2.其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。  
3.第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）  