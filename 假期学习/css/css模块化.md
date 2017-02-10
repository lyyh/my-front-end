## CSS模块化
CSS预编译器，将浏览器不能解析的语言，编译成浏览器能够理解的语言。  
### 好处
CCS模块将作用域限制于组件中，从而避免了全局作用域的问题。我们再也不用操心为组件寻找一个好的命名了，因为编译过程已经帮你完成了这个任务。  
### 如何工作
当你在一个JavaScript模块中导入一个CSS文件时（例如，在一个 React 组件中），CSS模块将会定义一个对象，将文件中类的名字动态的映射为JavaScript作用域中可以使用的字符串。举个具体的例子：  
### 避免发生全局样式冲突
但这是因为模块将CSS样式和组件相绑定，从而不会发生全局样式的冲突  
CSS统一的名空间使得它既强大又脆弱。而CSS模块化或者未来延续这个思想的其他工具可以在支持样式复用的同时，避免命名冲突，这是一个双赢的选择。
### webpack
将CSS文件做为CSS模块来处理
```
{
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules'
}
```
样式注入到页面中的元素中。这可能不是我们想要的，使用extract text plugin for webpack，我们可以很方便的抽取出样式表：  
```
{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules')
}
```
