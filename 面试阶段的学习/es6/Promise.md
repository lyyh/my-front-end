## Promise
所谓Promise，简单的来说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

### 特征
1.一旦状态改变，就不会发送改变，任何时候都可以得到这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
2.Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。  

### Resolve Reject
resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。  

### Promise新建后会立即执行
Promise新建后立即执行，所以首先输出的是“Promise”。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“Resolved”最后输出。  

### Promise的异步操作结果为另一个Promise
resolve函数的参数除了正常的值以外，还可能是另一个Promise实例，表示异步操作的结果有可能是一个值，也有可能是另一个异步操作，比如像下面这样。  

### then
为Promise实例添加状态改变时的回调函数  
then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。  

### catch
用于指定发送错误时的回调函数，
### Promise.all
Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。  
```
var p = Promise.all([p1, p2, p3]);
```
Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例  
### Promise.race
```
var p = Promise.race([p1, p2, p3]);
```
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数  
### Promise.resolve
1. 参数是一个Promise对象，如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。  
2. 参数是一个thenable对象，thenable指的是具有then方法的对象，Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。  
3.参数不是具有then方法的对象，或根本就不是对象，如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。  
### done
Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。  
### finally
finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。  
