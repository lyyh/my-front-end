var foo = () => {
	console.log(arguments)
	// console.log(Array.prototype.slice.call(arguments));
}

foo(1,2,3,5);