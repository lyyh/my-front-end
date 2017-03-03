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

### Promise/A+规范
1.一个promise可能有三种状态：等待（pending）、已完成（fulfilled）、已拒绝（rejected）  
2.一个promise的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换    
3.promise必须实现then方法（可以说，then就是promise的核心），而且then必须返回一个promise，同一个promise的then可以调用多次，并且回调的执行顺序跟它们被定义时的顺序一致  

### 缺点
1.首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。  
2.其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。  
3.第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）  