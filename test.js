function makeOdd(str){  
    var len = str.length;  
    if(len % 2 === 1){  
        return str;  
    }  
    var newStr = '#';  
    for(i = 0;i<len;i++){  
        newStr += str[i]+'#';  
    }  
    return newStr;  
}  
function judge(str){  
    (str.length%2 === 0) && (str = makeOdd(str));  
    var len = str.length,  
        half = Math.floor(len/2),  
        last = len-half;  
    var i = 0;  
    while(i<=last){  
        if(str[half-i] !== str[half+i]){  
            return false;  
        }  
        i++;  
    }  
    return true;  
}  
function getAllSubs(str){  
    var len = str.length,  
        res = [];  
    for(var i = 0;i<len;i++){  
        for(var j = i;j<len;j++){  
            var sub = str.substring(i,j+1);  
            console.error(sub);  
            if(sub && judge(sub)){  
                res[res.length] = sub;  
            }  
        }  
    }  
    return res;  
}  
console.log(getAllSubs('abaac'));  