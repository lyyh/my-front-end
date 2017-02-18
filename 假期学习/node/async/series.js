/**
 * 全部函数都正常执行。每个函数产生的值将按顺序合并为一个数组，传给最终的callback。
 */
var async = require('async');
var i = 0;
var job = function(cb){
	setTimeout(function(){
		cb(null,++i);
	},200)
}
var task = [job,job,job];
async.series(task,function(err,results){
	console.log(results)
})