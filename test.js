var str = 'aaabbbccaa';
var arrStr = str.match(/[a-z]/g);
var arrRet = arrStr.filter(function(el,index,self){
    return self.indexOf(el) == index;
})
console.log(arrRet);
arrRet.forEach(function(el){
    console.log(new RegExp(el+'/g'));
    console.log(str.match(new RegExp(el+'/g')));
})