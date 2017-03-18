## Promise解释
所谓Promise，字面上可以理解为“承诺”，就是说A调用B，B返回一个“承诺”给A，然后A就可以在写计划的时候这么写：当B返回结果给我的时候，A执行方案S1，反之如果B因为什么原因没有给到A想要的结果，那么A执行应急方案S2，这样一来，所有的潜在风险都在A的可控范围之内了。  


### Promise/A+规范
1.一个Promise可能有三种规范:等待(pending)、已完成(fulfilled)、已拒绝(rejected)
2.等待->已完成，等待->已拒绝，状态不能相互转换，不可逆  
3.必须要有个then方法，返回一个promise对象，并且同一个promise的then方法可以被调用多次，并且回调的执行顺序和他们定义时的顺序一致。   
4.then方法接受两个参数，第一个参数成功时回调，第二个参数是失败时回调。同时，then方法可以接收另一个promise传入，也接受一个'类then'的对象和方法，即thenable对象  

### Promise.resolve
不带参数时，直接返回一个resolved状态的Promise对象。
同时Promise.resolve是在本轮事件结束时执行。  
setTimeOut(fn,0) 是在下轮事件循环开始时执行。  

### 思路
构造函数Promise接受一个函数参数resolver，异步任务,resolver接收两个参数，一个是成功时的回调，另一个是失败时的回调。这两个参数与then传入的参数是对等的。  
