## webpack
比如webpack+react、webpack+vue等，都可以近乎完美的解决各种资源的依赖加载、打包的问题。甚至css都是打包在js里去动态添加到dom文档中去。

## 为什么要使用webpack
与react一类模块化开发的框架搭配着用比较好。  
属于配置型的构建工具，比较用容易上手，160行代码可大致实现gulp400行才能实现的功能。  
webpack使用内存来对构建内容进行缓存，构建过程中会比较快。  

### webpack的核心原理
1.一切皆模块
正如js文件可以是一个“模块（module）”一样，其他的（如css、image或html）文件也可视作模 块。因此，你可以require('myJSfile.js')亦可以require('myCSSfile.css')。这意味着我们可以将事物（业务）分割成更小的易于管理的片段，从而达到重复利用等的目的。
2.按需加载
传统的模块打包工具（module bundlers）最终将所有的模块编译生成一个庞大的bundle.js文件。但是在真实的app里边，“bundle.js”文件可能有10M到15M之大可能会导致应用一直处于加载中状态。因此Webpack使用许多特性来分割代码然后生成多个“bundle”文件，而且异步加载部分代码以实现按需加载。   


### webpack-dev-server
热更新“Live Reload”以及热替换“Hot Module Replacement”（即HMR）  即尝试重新加载组件改变的部分（而不是重新加载整个页面)当资源改变时，webpack-dev-server将会先尝试HRM（即热替换），如果失败则重新加载整个入口页面。
