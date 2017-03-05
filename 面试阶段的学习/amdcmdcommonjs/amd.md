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





