```
function getClass(className){
    // 浏览器支持时
    if (document.getElementsByClassName){
        return document.getElementsByClassName(className);
    }
    // 浏览器不支持
    var arr = [];
    var dom = document.getElementsByTagName("*"); // 遍历所有元素，找到类名符合的元素
    for (var i = 0; i < dom.length; i++){
        var txt = dom[i].className.split(" "); //分割类名
        for (var j = 0; j < txt.length; j++) {
            if (txt[j] == className) {
                arr.push(dom[i]);
            }
        }
    }
    // alert(arr.length);
    return arr;
}
```

```
var getClassName = function(classStr,elemName){
            if(document.getElementsByClassName){
                return document.getElementsByClassName(classStr);
            }

            var collection = document.getElementsByTagName(elemName);
            return Array.prototype.slice.call(collection).filter(function(element) {
                return hasClass(element,classStr);
            });
        }

        var hasClass = function(element,classStr){
            var elemClass = element.className.split(/\s+/);
            for(var classname of elemClass){
                if(classname == classStr){
                    return true;
                }
            }

            return false;
        }

        var nodelist = getClassName('list','ul');
        console.log(nodelist);
```