// var readline = require('readline');
// var path = require('path');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal:false
// });

// var n;
// rl.on('line', function(line){ // javascript每行数据的回调接口
//    n = line.trim();
//    var ret = path.normalize(n);
//    console.log(ret);
// });
var path = '/c/./b/../../d/d';
var pathArr = path.split('/');
var paths = [];
pathArr.forEach(function(el){
    if(el != '' && el != '.'){
          if(el == '..'){
              paths.pop();
          }else{
              paths.push(el);
          }
    }
})
var ret = paths.join('/');
console.log(ret.toString());