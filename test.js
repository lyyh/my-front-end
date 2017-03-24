var A = function(param1,param2){
	this.a = param1;
	this.b = param2;
}
var fn = function(cxt){
	return this.apply(cxt,Array.prototype.slice.call(arguments,1));
}
var obj = new fn({value:1});
console.log(obj)