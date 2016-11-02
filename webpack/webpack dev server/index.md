## webpack dev server 
### 什么是webpack dev server
webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。  

#### 简单来说
webpack-dev-server就是一个小型的静态文件服务器。使用它，可以为webpack打包生成的资源文件提供Web服务

### 两种模式
webpack-dev-server有两种模式支持自动刷新——iframe模式和inline模式  
。在iframe模式下：页面是嵌套在一个iframe下的，在代码发生改动的时候，这个iframe会重新加载；在inline模式下：一个小型的webpack-dev-server客户端会作为入口文件打包，这个客户端会在后端代码改变的时候刷新页面。

###使用inline模式有两种方式：命令行方式和Node.js API。
1. 命令行方式比较简单，只需加入--line选项即可。例如：
webpack-dev-server --inline
使用--inline选项会自动把webpack-dev-server客户端加到webpack的入口文件配置中。
注意：使用webpack-dev-server命令行的时候，会自动查找名为webpack.config.js的配置文件。如果你的配置文件名称不是webpack.config.js，需要在命令行中指明配置文件。例如，我的配置文件是webpack.config.dev.js：webpack-dev-server --inline --config webpack.config.dev.js。

2. Node.js API方式需要手动把webpack-dev-server/client?http://localhost:8080加到配置文件的入口文件配置处，因为webpack-dev-server没有inline:true这个配置项。


### webpac-dev-server支持Hot Module Replacement，即模块热替换，在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。使用HMR功能也有两种方式：命令行方式和Node.js API。

命令行方式同样比较简单，只需加入--line --hot选项。--hot这个选项干了一件事情，它把webpack/hot/dev-server入口点加入到了webpack配置文件中。这时访问浏览器，你会看见控制台的log信息：

[HMR] Waiting for update signal from WDS...
[WDS] Hot Module Replacement enabled.
HMR前缀的信息由webpack/hot/dev-server模块产生，WDS前缀的信息由webpack-dev-server客户端产生。

Node.js API方式需要做三个配置：
1) 把webpack/hot/dev-server加入到webpack配置文件的entry项；
2) 把new webpack.HotModuleReplacementPlugin()加入到webpack配置文件的plugins项；
3) 把hot:true加入到webpack-dev-server的配置项里面。

#### 注意：要使HMR功能生效，还需要做一件事情，就是要在应用热替换的模块或者根模块里面加入允许热替换的代码。否则，热替换不会生效，还是会重刷整个页面。下面是摘自webpack在github上docs的原话：

### 前后端联调
但是，问题又来了。我要进行前后端联调的时候怎么办呢？毕竟webpack-dev-server只是一个静态文件服务器，不具备动态处理的能力。这个时候就需要将后端服务器与webpack-dev-server结合使用了。webpack-dev-server只用来为webpack打包生成的资源文件提供服务，比如js文件、图片文件、css文件等；后端服务器除提供API接口外，还提供入口HTML。

要将webpack-dev-server与后端服务器结合使用，需要做三件事情。
第一 首页HTML文件是从后端服务器发出的，这时页面的根地址变成了后端服务器地址，怎么使得webpack产生的资源文件在请求资源的时候是向web-dev-server请求而不是后端服务器请求？只需在webpack配置文件中的output.publicPath配置项写上绝对URL地址，例如output.publicPath = "http://localhost:8080/assets/"。这时，webpack打包产生的资源文件里面的url地址都会是绝对地址，而不是相对地址。
第二 后端服务器产生的入口HTML文件要向webpack-dev-server请求资源文件，这个简单，只需在HTML文件中加入资源文件的绝对地址，例如：<script src="http://localhost:8080/assets/bundle.js">
第三 要使webpack-dev-server和它的运行时程序连接起来。这个简单，只需要使用iline模式即可。
