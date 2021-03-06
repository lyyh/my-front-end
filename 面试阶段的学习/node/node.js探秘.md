## 处理异步非阻塞I/O
使用Callback Hell处理异步回调
## 什么是Callback Hell
Node.js需要按顺序执行异步逻辑时一般采用后续传递风格，也就是将后续逻辑封装在回调函数中作为起始函数的参数，逐层嵌套。这种风格虽然可以提高CPU利用率，降低等待时间，但当后续逻辑步骤较多时会影响代码的可读性，结果代码的修改维护变得很困难。根据这种代码的样子，一般称其为"callback hell"或"pyramid of doom"，本文称之为回调大坑，嵌套越多，大坑越深。  
## node结构
1.node标准库，由javascript编写，在使用过程中能直接调用API  
2.Node bindings.这一层是 Javascript 与底层 C/C++ 能够沟通的关键，前者通过 bindings 调用后者，相互交换数据。实现在 node.cc  
3.V8、libuv、C-ares、(http_parser、openSSL、zlib、etc）
V8：它为 Javascript 提供了在非浏览器端运行的环境，它的高效是 Node.js 之所以高效的原因之一。  
Libuv：它为 Node.js 提供了跨平台，线程池，事件池，异步 I/O 等能力，是 Node.js 如此强大的关键。  
C-ares：提供了异步处理 DNS 相关的能力。  
http_parser、OpenSSL、zlib 等：提供包括 http 解析、SSL、数据压缩等其他的能力。  

### libuv
Libuv 是 Node.js 关键的一个组成部分，它为上层的 Node.js 提供了统一的 API 调用，使其不用考虑平台差距，隐藏了底层实现。  

### 与操作系统的交互
当我们调用 fs.open 时，Node.js 通过 process.binding 调用 C/C++ 层面的 Open 函数，然后通过它调用 Libuv 中的具体方法 uv_fs_open  

，我们在 Javascript 中调用的方法，最终都会通过 process.binding 传递到 C/C++ 层面，最终由他们来执行真正的操作  

通过这个过程，我们可以发现，实际上，Node.js 虽然说是用的 Javascript，但只是在开发时使用 Javascript 的语法来编写程序。真正的执行过程还是由 V8 将 Javascript 解释，然后由 C/C++ 来执行真正的系统调用，所以并不需要过分担心 Javascript 执行效率的问题。可以看出，Node.js 并不是一门语言，而是一个 平台，这点一定要分清楚。  

### 异步、非阻塞IO
真正执行系统调用的是Libuv,之前我们提到，Libuv 本身就是异步和事件驱动的，所以，当我们将 I/O 操作的请求传达给 Libuv 之后，Libuv 开启线程来执行这次 I/O 调用，并在执行完成后，传回给 Javascript 进行后续处理。  

### 一个异步I/O的大致流程
发起I/O调用    
1.用户通过 Javascript 代码调用 Node 核心模块，将参数和回调函数传入到核心模块；  
2.Node 核心模块会将传入的参数和回调函数封装成一个请求对象；  
3.将这个请求对象推入到 I/O 线程池等待执行；  
4.Javascript 发起的异步调用结束，Javascript 线程继续执行后续操作  

执行回调  
1.I/O 操作完成后，会将结果储存到请求对象的 result 属性上，并发出操作完成的通知；
2.每次事件循环时会检查是否有完成的 I/O 操作，如果有就将请求对象加入到 I/O 观察者队列中，之后当做事件处理；
3.处理 I/O 观察者事件时，会取出之前封装在请求对象中的回调函数，执行这个回调函数，并将 result 当参数，以完成 Javascript 回调的目的。  

它的单线程指的是自身 Javascript 运行环境的单线程，Node.js 并没有给 Javascript 执行时创建新线程的能力，最终的实际操作，还是通过 Libuv 以及它的事件循环来执行的。这也就是为什么 Javascript 一个单线程的语言，能在 Node.js 里面实现异步操作的原因，两者并不冲突。  

### 事件驱动
 Libuv 本身的一个设计理念，事件循环（Event Loop），它是一个类似于 while true 的无限循环，其核心函数是 uv_run，  
 在 uv_run 执行过程中，它会不断的检查这些队列中是或有 pending 状态的事件，有则触发，而且它在这里只会执行一个回调，避免在多个回调调用时发生竞争关系，因为 Javascript 是单线程的，无法处理这种情况。  

 上面的图中，对 I/O 操作的事件驱动，表达的比较清楚。除了我们常提到的 I/O 操作，图中还表述了一种情况，timer（定时器）。它与其他两者不同之处在于，它没有单独开立新的线程，而是在事件循环中直接完成的。

### 同步方法
，目前大部分的异步操作函数，都存在其对应的同步版本，只需要在其名称后面加上 Sync 即可，不用传入回调。
```
var file = fs.readFileSync('/test.txt', {"encoding": "utf-8});
```

不过，体验不太好的一点就是这种调用的错误收集，它不会像回调函数那样，在第一参数中传入错误信息，它会将错误直接抛出，你需要使用 try...catch 来获取，如下：

### 可能的一些性能瓶颈
首先，文件的 I/O 方面，用户代码的运行，事件循环的通知等，是通过 Libuv 维护的线程池来进行操作的，它会运行全部的文件系统操作。既然这样，我们抛开硬盘的影响，对于严谨的 C/C++ 来说，这个线程池w一定是有大小限制的。官方默认给出的大小是 4。当然是可以改变的。在启动时，通过设置 UV_THREADPOOL_SIZE 来改变这个值即可。不过，最大也只能是 128，因为这个是涉及到内存占用的。

### node.js不适合做什么
CPU密集型应用。
前文提到，Libuv 通过事件循环来处理异步的事件，这是存在于 Node.js 主线程的机制。通过这个机制，所有的 I/O 操作，底层API的调用都变成了异步的。但用户的 Javascript 代码是运行在主线程中的，如果这部分代码运行耗时很长，就会导致事件循环被阻塞。因为，它对于事件的处理，都是按照队列顺序的，所以如果其中的任何一个事务/事件本身没有完成，那么其他的回调、监听器、超时、nextTick() 都得不到运行的机会，被阻塞的事件循环没有机会去处理它们。这样下去，轻则效率降低，重则运行停滞。  

比如我们常见的模板渲染，压缩，解压缩，加/解密等操作，都是 Node.js 的软肋，所以使用的时候要考虑到这方面。  

### 总结
Node.js 通过 libuv 来处理与操作系统的交互，并且因此具备了异步、非阻塞、事件驱动的能力。
Node.js 实际上是 Javascript 执行线程的单线程，真正的的 I/O 操作，底层 API 调用都是通过多线程执行的。
CPU 密集型的任务是 Node.js 的软肋。
### 参考资料
[node.js探秘](http://taobaofed.org/blog/2015/10/29/deep-into-node-1/)