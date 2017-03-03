## 驱动核心
node.js事件由libuv驱动，浏览器事件由webkit驱动    

windows平台IOCP、Node平台libeio+libev。他们内部都是线程池原理
### node
事件驱动=主程序+事件触发  
完成整个异步IO操作的有事件循环、观察者、请求对象    

node异步IO模型的基本要素:事件循环、观察者、请求对象、IO线程池  

事件循环+观察者:  
每次事件循环Tick都会去询问一次观察者队列（IO观察者队列、定时器观察者队列）有没有要执行的事件。    
IO异步操作请求对象:    
从Javascript发起调用到内核执行完IO操作的过度过程中，存在一种中间产物。  
在异步调用开始时封装请求对象，设置参数和回调函数，放入线程池中等待执行。线程池中执行请求对象中的IO操作，将结果存入请求对象的result中，通知IOCP完成，送入IO观察者队列。事件循环，创建主循环，从IO观察者中取到可用的请求对象，取出回调函数和结果调用执行。  

定时器:  
调用setTimeOut或者setInterval创建的定时器会被插入到定时器观察者内部的一个红黑树中。每次Tick执行时，会从该红黑树中迭代取出定时器对象，检查是否超过定时时间，如果超过就形成一个事件，它的回调函数将立即执行。  

process.nextTick():  
对于定时器setInterval和setTimeOut，需要动用红黑树，创建定时器对象和迭代等操作。而setTimeOut(fn,0)较为浪费性能，process.nextTick()方法的操作相对较为轻量。  
每次调用process.nextTick()，直接将回调函数放入队列中，在下一次Tick时直接取出执行。不需要经过异步操作。  

setImmediate:
与process.nextTick()有细微的差别。process.nextTick()中的回调函数执行的优先级要高于setImmediate()。node事件循环对观察者的检查是有优先级的。  
process.nextTick > IO观察者 > setImmediate  


