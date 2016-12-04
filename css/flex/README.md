## flex
ie10+兼容  
### 容器上的属性
1. flex-direction  
2. flex-wrap  
3. flex-flow  
4. justify-content  
5. align-items  
6. align-content  

### align-content
定义了多根轴线的对齐方式，如果项目只有一根轴线，则不起作用。
### flex-grow
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
### flex-shrink
flex-shrink定义了项目的缩小之后的比例，默认为1，如果空间不足，该项目将缩小。 
### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。  
   