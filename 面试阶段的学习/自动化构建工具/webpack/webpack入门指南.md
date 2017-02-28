### 什么是webpack？
webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。  

我们使用require形式来引入的模块，可能需要更多的编译，可以使用webpack有着各种健全的加载器（loader）在默默处理这些事情  

webpack 是模块打包系统, 代码分割, 加载器, 聪明的解析, 以及插件系统是它的特色  

### webpack优势
1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。  
2. 能被模块化的不仅仅是 JS 了。
3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。
4. 扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。  

最终模块都会被webpack打包在一起。

### 加载器
url-loader 来说，它会将样式中引用到的图片转为模块来处理  

### webpack优势
模块化css,可以在js中引入css  
提取公共部分commonjs  

