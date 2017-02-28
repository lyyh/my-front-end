/**
 * 并行执行多个函数，每个函数的值将按函数声明的先后顺序汇成一个数组，传给最终callback。
 */
var async = require('async');
var i = 0;
var job = function(cb){
	setTimeout(function(){
		cb(null,++i);
	},200)
}
var task = [job,job,job];
async.parallel(task,function(err,results){
	console.log(results)
})