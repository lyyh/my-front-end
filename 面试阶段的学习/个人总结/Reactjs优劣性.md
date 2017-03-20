### React与Jquery比较
React的算法本质是重刷视图，设置innerHTML，设置处于内存中的虚拟DOM。对于操作单个DOM而言，React好无性能可言，在更新DOM之前还要加一层diff算法。  

React厉害的地方并不是说它比DOM快，而是说不管数据怎么变化，都可以以最小的代价来更新DOM。方法就是在内存之中新建一个DOM树，然后和旧的DOM树进行比较，找出差异，更新DOM树。  

### 框架意义
框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。没有任何一个框架可以比纯手动的优化更快。  

对比一下innerHTML与Virtual DOM的重绘性能消耗:  
innerHTML:render html string + 重新创建所有DOM元素  
Virtual DOM:render Virtual DOM+diff+必要的DOM更新    

Virtual DOM
