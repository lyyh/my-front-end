### 什么是css hack
由于不同厂商的浏览器或某浏览器的不同版本（IE6~IE11，Firefox/Safari/Opera/Chrome等），对css的支持、解析不一样。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同的版本写特定的css样式，把这个针对不同浏览器/不同版本写相应的css code的过程叫做css hack.  
css属性前缀发、选择器前缀法、IE条件注释法  
### IE条件注释法
gt：greater than，选择条件版本以上版本，不包含条件版本。  
lt： less than ，选择条件版本以下版本，不包含条件版本。  
gte：greater than or equal ，选择条件版本以上版本，包含条件版本。  
lte：less than or equal ，选择条件版本以下版本，包含条件版本。  
！：选择条件版本以外所有版本，无论高低。  
条件注释法（适用于IE10以下，IE10以后不再支持条件注释）  

### 类内属性前缀法

