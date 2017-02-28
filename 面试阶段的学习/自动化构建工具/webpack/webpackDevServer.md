## webpack dev server
webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。

wepack-dev-server辅助开发，使得开发者在开发前端代码的过程中无需频繁手动刷新页面，使用HMR甚至不用等待页面刷新，确实可以给开发者带来很好的体验。  

热模块替换的好处是只替换更新的部分,而不是页面重载.  

--hot 会在文件变化后重新载入，不需要手动刷新  
--watch 动态监听文件的改变并实时打包  
webpack-dev-server主要是watch你的代码改动，然后reload页面。  
### webpack-dev-server
支持2种自动刷新方式  
Iframe mode inline mode  
这2种模式配置的方式和访问的路径稍微有点区别，最主要的区别还是Iframe mode是在网页中嵌入了一个iframe，将我们自己的应用注入到这个iframe当中去，因此每次你修改的文件后，都是这个iframe进行了reload。  


而Inline-mode，是webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,

    module.exports = {
        entry: {
            app: [
                'webpack-dev-server/client?http://localhost:8080/',
                './src/js/index.js'
            ]
        },
        output: {
            path: './dist/js',
            filename: 'bundle.js'
        }
    }
这样就完成了将inlinedJS打包进bundle.js里的功能，同时inlinedJS里面也包含了socket.io的client代码，可以和webpack-dev-server进行websocket通讯。


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
[参考资料1](http://www.jianshu.com/p/941bfaf13be1)  