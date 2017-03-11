### NodeList与HTMLCollection
NodeList与HTMLCollection:  
NodeList返回的是动态结点，每一次调用list都会对文档进行查询，导致无线循环的问题。    
HTMLCollection返回的是集合的快照，对文档的任何操作都不会对其造成影响。  

### DOM操作返回
querySelectorAll 返回的是NodeList，getElementsBy 返回的是HTMLCollection  
querySelector与getElementBy 返回的是Element
node.childNodes与querySelectorAll返回的是NodeList，node.children和node.getElementsBy系列返回的是HTMLCollection  


### 区别
1.HTMLCollection 是元素集合而 NodeList 是节点集合(即可以包含元素，文本节点，以及注释等等)。
2.node.childNodes，querySelectorAll(虽然是静态的) 返回的是 NodeList，而 node.children 和 node.getElementsByXXX 返回 HTMLCollection。

