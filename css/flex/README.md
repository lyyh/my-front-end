## flex
flex布局发生在父容器和子容器之间。父容器需要有flex的环境(display:flex;)，子容器才能根据自身的属性来布局，简单的说，就是瓜分父容器的空间。相反就是说如果父容器没有flex的环境，那么子容器就无法使用flex的规则来划分父容器的空间。  
### 兼容性 ie10+兼容  
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
flex-grow的意思已经很明显了，就是索取父容器的剩余空间，默认值是0，就是三个子容器都不索取剩余空间。但是当B1设置为1的时候，剩余空间就会被分成一份，然后都给了B1。 如果此时B2设置了flex-grow:2，那么说明B2也参与到瓜分剩余空间中来，并且他是占据了剩余空间中的2份，那么此时父容器就会把剩余空间分为3份，然后1份给到B1，2份给到B2，  
### flex-basis
如果同时设置flex-basis和width，那么width属性会被覆盖，也就是说flex-basis的优先级比width高。有一点需要注意，如果flex-basis和width其中有一个是auto，那么另外一个非auto的属性优先级会更高。  
### flex-shrink
flex-shrink定义了项目的缩小之后的比例，默认为1，如果空间不足，该项目将缩小。 
### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。  

## 总结
1、剩余空间＝父容器空间－子容器1.flex-basis/width - 子容器2.flex-basis/width - …  
2、如果父容器空间不够，就走压缩flex-shrink，否则走扩张flex-grow；  
3、如果你不希望某个容器在任何时候都不被压缩，那设置flex-shrink:0；  
4、如果子容器的的flex-basis设置为0(width也可以，不过flex-basis更符合语义)，那么计算剩余空间的时候将不会为子容器预留空间。  
5、如果子容器的的flex-basis设置为auto(width也可以，不过flex-basis更符合语义)，那么计算剩余空间的时候将会根据子容器内容的多少来预留空间。  

## 参考资料
http://zhoon.github.io/css3/2014/08/23/flex.html