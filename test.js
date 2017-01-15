// var add = function(datas,multiplier) {
// 	return datas.map(function(item){
// 		return item * multiplier;
// 	})
// 	.reduce(function(x, y) {
// 		return x + y;
// 	})
// }
// console.log(add([1,2,3,4,5],10))

//柯里化实现
var currying = function(fn){
	var _args = [];
	return function(){
		if(arguments.length == 0){
			console.log(_args)
			return fn.apply(this,_args)
		}

		Array.prototype.push.apply(_args,Array.prototype.slice.call(arguments));
		return arguments.callee;
	}
}

var multiplier = function(){
	var list = Array.prototype.slice.call(arguments);

	return list.map(function(item){
		return item * 10;
	}).reduce(function(x,y){
		return x + y;
	})
}


var sum = currying(multiplier);
sum(1,2,3)(4);
sum(5);
console.log(sum());
// adder(1,2,3)(4);
// adder(5);
// adder()