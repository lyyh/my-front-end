## webpack
### plugin插件
 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。  
### entry
entry 是页面入口文件配置，output 是对应输出项配置（即入口文件最终要生成什么名字的文件、存放到哪里），其语法大致为：  
```
{
    entry: {
        page1: "./page1",j
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        page2: ["./entry1", "./entry2"]
    },
    output: {
        path: "dist/js/page",
        filename: "[name].bundle.js"
    }
}
```
### module.loaders
module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理：

### 其他
⑴ 推荐使用 npm install react 的形式来安装并引用 React 模块，而不是直接使用编译后的 react.js，这样最终编译出来的 React 部分的脚本会减少 10-20 kb左右的大小。  

⑵ react-hot-loader 是一款非常好用的 React 热插拔的加载插件，通过它可以实现修改-运行同步的效果，配合 webpack-dev-server 使用更佳！  
