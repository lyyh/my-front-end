## 生命周期
生命周期分为三个状态:  
Mounting：已插入真实 DOM  
Updating：正在被重新渲染  
Unmounting：已移出真实 DOM  

### 生命周期顺序
第一次渲染真实DOM：componentWillMount、componentDidMount
重新渲染真实DOM:shouldComponentUpdate、componentWillUpdate、componentDidUpdate  