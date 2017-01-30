let obj = {
	*[Symbol.iterator](){
		yield 'hello';
		yield 'world';
	}
}

for(var value of obj){
	console.log(value)
}