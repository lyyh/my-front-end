## webpack
webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理，基于commonjs规范，使用require加载模块。并且与React和Redux完美结合，主要用于单页面开发。

### 为什么要用webpack
1.与react一类模块化开发的框架搭配着用比较好。  
2.属于配置型的构建工具，比较用容易上手，160行代码可大致实现gulp400行才能实现的功能。  
3.webpack使用内存来对构建内容进行缓存，构建过程中会比较快。 
4.将资源分割成更小的易于管理的模块，达到复用的目的。   

### 核心原理
1.一切皆模块  
正如js文件可以是一个“模块（module）”一样，其他的（如css、image或html）文件也可视作模 块。因此，你可以require('myJSfile.js')亦可以require('myCSSfile.css')。这意味着我们可以将事物（业务）分割成更小的易于管理的片段，从而达到重复利用等的目的。    
2.按需加载  
传统的模块打包工具（module bundlers）最终将所有的模块编译生成一个庞大的bundle.js文件。但是在真实的app里边，“bundle.js”文件可能有10M到15M之大可能会导致应用一直处于加载中状态。因此Webpack使用许多特性来分割代码然后生成多个“bundle”文件，而且异步加载部分代码以实现按需加载。  

### 特色
1.分块打包。可以提取公共模块，增加复用性。  
2.将css打包在js里动态去添加到dom文档中去，将外部样式转化成内嵌样式，减少请求次数。同时也可使用
3.webpack根据入口文件处理内部的依赖，最终打包到output目录里面去  

### 与gulp的区别
虽然gulp也用到了流(pipe)这样的内存处理方式，但感觉webpack更进一步。gulp是每一个任务(task)用一个流，而webpack是共享一个流。同时webpack加载器在按顺序处理文件的步骤上进行了简化。

### 模块化处理
使用Commonjs规范require模块，模块化的不仅仅是js，也可以是css、图片  
将css转化成内联样式，减少请求次数.甚至css都是打包在js里去动态添加到dom文档中去。

### 加载器
使用加载器对特定的文件进行处理    

加载器符合链式调用规范。多个loader可以用在同一个文件上并且被链式调用。链式调用时从右到左执行且loader之间用“!”来分割。   

### 常用加载器
style-loader:接受JSON值然后添加一个style标签并将其内嵌到html文件里  
url-loader:将图片在规定的大小范围内使用data-url替换(图片转base64)  
babel-loader:将es6语法转化成es5语法，避免presets配置过多，可将配置放到.babelrc文件中  

### 插件
uglifyJSPlugin:获取bundle.js然后压缩和混淆内容以减小文件体积。  
extract-text-webpack-plugin:内部使用css-loader和style-loader来收集所有的css到一个地方最终将结果提取结果到一个独立的”styles.css“文件，并且在html里边引用style.css文件。分割css资源。
commonschunkplugin:分割公有。对代码进行分割，使首次加载尽可能快速。  
html-webpack-plugin:生成html文件。
html-loader:解决了webpack不能编译html上引用的图片  
HotModuleReplacementPlugin: 代码热替换
ProvidePlugin:调用模块别名，例如想在js中用$，如果通过webpack加载，需要将$与jQuery对应起来


### webpack-dev-server
webpack服务器，提供文件监听并实时打包.  
热更新“Live Reload”以及热替换“Hot Module Replacement”（即HMR)即尝试重新加载组件改变的部分（而不是重新加载整个页面)当资源改变时，webpack-dev-server将会先尝试HRM（即热替换），如果失败则重新加载整个入口页面。  

webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。  

webpack-dev-server教程:  

[教程1](https://segmentfault.com/a/1190000006670084)   
[教程2](https://github.com/chemdemo/chemdemo.github.io/issues/13)   

### 个人遇到的问题
尝试对html上引入的图片进行base64转换，使用了html-loader加载器和html-webpack-plugin插件，发现只能将html模板打包成html文件才能成功转换。因为webpack要有打包入口文件，并且要有一个html引入这个入口文件。  
### 参考资料
[webpack入门教程](http://www.cnblogs.com/vajoy/p/4650467.html)  
[webpack解决方案](https://github.com/chemdemo/chemdemo.github.io/issues/13)   
[html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)  
[基于webpack的前端工程化开发之多页站点](https://segmentfault.com/a/1190000004511992)  
[webpack按需加载](https://github.com/eyasliu/blog/issues/8)    
