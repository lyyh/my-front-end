### NodeList 死循环
使用getElementsBy... 系列得到的是 live node list(动态节点集合)，每次调用的时候都会重新查询文档中的节点，如果使用for循环动态增加节点，那么会出现死循环。这是可以将NodeList转化成数组或者使用querySelector来选择节点，或者创建一个临时变量来存储NodeList的长度