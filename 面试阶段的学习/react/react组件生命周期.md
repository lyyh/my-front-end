## 生命周期
生命周期分为三个状态:  
Mounting：已插入真实 DOM  
Updating：正在被重新渲染  
Unmounting：已移出真实 DOM  

### 生命周期顺序
第一次渲染真实DOM：componentWillMount、componentDidMount
重新渲染真实DOM:shouldComponentUpdate、componentWillUpdate、componentDidUpdate  

### getInitialState
初始化 this.state 的值，只在组件装载之前调用一次。如果是使用 ES6 的语法，你也可以在构造函数中初始化状态

### getDefaultProps
只在组件创建时调用一次并缓存返回的对象（即在 React.createClass 之后就会调用）。+
因为这个方法在实例初始化之前调用，所以在这个方法里面不能依赖 this 获取到这个组件的实例。
在组件装载之后，这个方法缓存的结果会用来保证访问 this.props 的属性时，当这个属性没有在父组件中传入（在这个组件的 JSX 属性里设置），也总是有值的。
### render
必须
组装生成这个组件的 HTML 结构（使用原生 HTML 标签或者子组件），也可以返回 null 或者 false，这时候 ReactDOM.findDOMNode(this) 会返回 null。

### 生命周期函数
装载组件触发:  
componentWillMount  
只会在装载之前调用一次，在 render 之前调用，你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render    
componentDidMount  
只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。  

更新组件触发
这些方法不会在首次 render 组件的周期调用  
componentWillReceiveProps  
shouldComponentUpdate  
componentWillUpdate  
componentDidUpdate  

卸载组件触发
componentWillUnmount  
