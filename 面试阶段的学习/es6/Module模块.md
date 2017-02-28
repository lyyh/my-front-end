## Module模块
es6中每个文件都是一个模块，不需要使用module来定义一个模块。  
在模块中，除export之外的代码无异于普通代码，你可以访问类似Object和Array这样的全局对象。如果你在web浏览器中运行模块，你甚至可以使用document对象和XMLHttpRequest对象。  
### exports
如果想公开在模块中声明的内容，并让其模块加以复用
### 重命名import和export
恰恰有时候，导出的名称会与你需要使用的其它名称产生冲突，ES6为你提供了重命名的方法解决这个问题，当你在导入名称时可以这样做：
```
// suburbia.js
    // 这两个模块都会导出以`flip`命名的东西。
    // 要同时导入两者，我们至少要将其中一个的名称改掉。
    import {flip as flipOmelet} from "eggs.js";
    import {flip as flipHouse} from "real-estate.js";
    ...
```


