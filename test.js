

let work = function(callback,param1,param2){
	return callback(param1,param2);
}


console.log(work(fn,1,2));

let fn = function(param1,param2){
	return param1 + param2;
}