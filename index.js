// var a = new Array(1,2,3,4);
// var bin = a.slice(1);
// console.log(a)
// 
var fs = require('fs');
var path = require('path');

function travel(dir,callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname = path.join(dir,file);
		if(fs.statSync(pathname).isDirectory()){
			travel(pathname,callback);
		}else{
			callback(file);
		}
	})
}
travel('js事件机制',function(filename){
	console.log(filename)
})