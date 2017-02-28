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
*color：IE5.5、6、7
+color : IE5.5、6、7
＃color : IE5.5、6、7
-color：IE5.5、6
＿color: IE5.5、6
这几个当中，我喜欢用＊与 ＿
color\0 : IE8、9、10、11（12以上没测）（此处有些地方说欧朋也识别，可是我测试啦，不管用，不知道啊）
color\9 : IE6、7、8、9、10（11不支持）
color\9\0:IE8、9、10（其他不支持）
\9\0取了共集
color:red!important;提高该设置的优先级

### 选择器前缀法
@media screen\9{……}（只对IE6、7生效）
@media \0screen{……}（只对IE8生效）
@media \0screen\,screen\9{……}（对IE6,7,8生效）
@media screen\0{……}（只对IE8、9、10生效）
@media screen and (min-width:0\0){……}（只对IE9，10有效）
@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){……}（对IE10,11有效，以上没测）


### 参考资料
[csshack](http://blog.csdn.net/freshlover/article/details/12132801)