## AMD
### require
异步加载模块，与commonjs的require不同的是，它要求有两个参数。
```
require([module],callback);
```

### define
模块通过define函数定义在闭包中。
```
define(id?: String, dependencies?: String[], factory: Function|Object);
```

id:  
可选参数，模块的名字    

dependencies:    
指定了所要依赖的模块列表，它是一个数组，也是可选的参数，每个依赖的模块的输出将作为参数一次传入 ？factory 中。如果没有指定 dependencies，那么它的默认值是 ["require", "exports", "module"]  
```
define(function(require, exports, module) {}）
```

factory:  
是最后一个参数，它包裹了模块的具体实现，它是一个函数或者对象。如果是函数，那么它的返回值就是模块的输出接口或值。  


### AMD运行策略
好处:
1.尽早执行依赖可以尽早发现错误。如果依赖的模块发生异常，那么在进入factory函数之前一定会收到错误。如果是按需执行依赖，在factory执行到一半的时候就会发生错误。  
2.加载执行过程中只停顿一次，比按需执行依赖效率更高。  
问题:
1.尽早依赖执行可以带来更好的用户体验，也容易产生浪费。例如模块 a 依赖了另外一个需要异步加载数据的模块 b，尽早执行 b 可以让等待时间更短，同时如果 b 最后没被用到，带宽和内存开销就浪费了；这种场景下，按需执行依赖可以避免浪费，但是带来更长的等待时间。  
2.CommonjsWrapper中就近书写的依赖，非常容易让人认为 main.js 执行到对应 require 语句时才执行 mod1 或 mod2，但这是错误的，因为 CommonJS Wrapper 并不会改变 AMD「尽早执行」依赖的本质！  
3.默认情况下，定义 AMD 模块时通过参数传入依赖列表，简单可依赖。而用了 CommonJS Wrapper 之后，RequireJS 需要通过正则从 factory.toString() 中提取依赖，复杂并容易出错。如 RequireJS 下这段代码会出错：  
```
define(function(require, exports, module) {
    '/*';
    var mod1 = require('mod1'),
        mod2 = require('mod2');
    '*/';

    mod1.hello();
});

//Uncaught Error: Module name "mod1" has not been loaded yet for context: _
```



### 参考资料
[AMD规范中的CommonJsWrapper](https://imququ.com/post/amd-simplified-commonjs-wrapping.html)


