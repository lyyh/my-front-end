## webpack dev server
--hot 会在文件变化后重新载入，不需要手动刷新  
--watch 动态监听文件的改变并实时打包  
webpack-dev-server主要是watch你的代码改动，然后reload页面。  
### webpack-dev-server
支持2种自动刷新方式  
Iframe mode inline mode  
这2种模式配置的方式和访问的路径稍微有点区别，最主要的区别还是Iframe mode是在网页中嵌入了一个iframe，将我们自己的应用注入到这个iframe当中去，因此每次你修改的文件后，都是这个iframe进行了reload。  
### webpack克服了动态监听和实时刷新
webpack-dev-server主要是启动了一个使用express的Http服务器。它的作用主要是用来伺服资源文件。此外这个Http服务器和client使用了websocket通讯协议，原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹，而是保存在内存之中，即上面配置的:
```
 output: {
        path: './dist/js',
        filename: 'bundle.js'
    }
```
### 启动webpack dev server 的两种方式
1.通过cmd line  

2.通过Node.js API  


### 其他
[参考资料](https://segmentfault.com/a/1190000006670084)