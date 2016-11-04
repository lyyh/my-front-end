var foo = function(x){
	// console.log(x)
	console.log(arguments.length);
}
var foo = function(x,y){
	console.log(x)
	console.log(y)
	// console.log(arguments.length);
}

foo(1,2)
foo(1)