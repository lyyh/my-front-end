## React
### jsx
React 使用 JSX 来替代常规的 JavaScript。  
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。  
### 我们不需要一定使用 JSX，但它有以下优点：
1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
2. 它是类型安全的，在编译过程中就能发现错误。
3. 使用 JSX 编写模板更加简单快速。

### state(状态)
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
